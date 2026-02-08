package ui

import (
	"context"
	"embed"
	"encoding/json"
	"fmt"
	"io/fs"
	"net"
	"net/http"
	"sync"
	"time"

	"github.com/gorilla/websocket"
)

//go:embed static/*
var staticFiles embed.FS

// Message is the WebSocket message structure.
type Message struct {
	Type string      `json:"type"`
	Data interface{} `json:"data"`
}

// client represents a connected WebSocket client with its own write channel.
type client struct {
	conn    *websocket.Conn
	send    chan []byte
	writeMu sync.Mutex // Protects writes to conn
}

// Server handles HTTP and WebSocket connections for the UI.
type Server struct {
	port        int
	logger      *Logger
	upgrader    websocket.Upgrader
	clients     map[*client]bool
	clientsMu   sync.RWMutex
	producers   map[*client]bool
	producersMu sync.RWMutex
	broadcast   chan Message
	httpServer  *http.Server
	url         string
	flow        *FlowController
	speedMu     sync.RWMutex
	speed       SpeedPreset

	// Connection synchronization
	connected           chan struct{}
	connectedOnce       sync.Once
	allDisconnected     chan struct{}
	allDisconnectedOnce sync.Once

	// Shutdown callback - called when last client disconnects
	onAllClientsDisconnected func()

	// Speed callback for external throttling
	onSpeedChange func(SpeedPreset)
}

// NewServer creates a new UI server.
func NewServer(port int, logger *Logger, flow *FlowController) *Server {
	return &Server{
		port:            port,
		logger:          logger,
		flow:            flow,
		clients:         make(map[*client]bool),
		producers:       make(map[*client]bool),
		broadcast:       make(chan Message, 1024),
		connected:       make(chan struct{}),
		allDisconnected: make(chan struct{}),
		speed:           SpeedNormal,
		upgrader: websocket.Upgrader{
			CheckOrigin: func(r *http.Request) bool {
				return true // Allow all origins in development
			},
			ReadBufferSize:  1024,
			WriteBufferSize: 1024,
		},
	}
}

// Start starts the HTTP server and returns the URL.
func (s *Server) Start(ctx context.Context) (string, error) {
	mux := http.NewServeMux()

	// Serve static files (embedded frontend)
	staticFS, err := fs.Sub(staticFiles, "static")
	if err != nil {
		// If static files don't exist yet, serve a placeholder
		mux.HandleFunc("/", s.handlePlaceholder)
	} else {
		mux.Handle("/", http.FileServer(http.FS(staticFS)))
	}

	// WebSocket endpoint
	mux.HandleFunc("/ws", s.handleWebSocket)

	// Health check endpoint
	mux.HandleFunc("/api/health", s.handleHealth)

	// Find available port
	listener, err := net.Listen("tcp", fmt.Sprintf(":%d", s.port))
	if err != nil {
		return "", fmt.Errorf("failed to start listener: %w", err)
	}

	actualPort := listener.Addr().(*net.TCPAddr).Port
	s.url = fmt.Sprintf("http://localhost:%d", actualPort)

	s.httpServer = &http.Server{
		Handler:      mux,
		ReadTimeout:  15 * time.Second,
		WriteTimeout: 15 * time.Second,
		IdleTimeout:  60 * time.Second,
	}

	// Start broadcast goroutine
	go s.runBroadcast(ctx)

	// Start HTTP server
	go func() {
		if err := s.httpServer.Serve(listener); err != http.ErrServerClosed {
			s.logger.Error("Server error: %v", err)
		}
	}()

	// Handle graceful shutdown
	go func() {
		<-ctx.Done()
		shutdownCtx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
		defer cancel()
		_ = s.httpServer.Shutdown(shutdownCtx)
	}()

	return s.url, nil
}

// URL returns the server URL.
func (s *Server) URL() string {
	return s.url
}

// WaitForConnection blocks until at least one client connects or timeout.
func (s *Server) WaitForConnection(timeout time.Duration) bool {
	select {
	case <-s.connected:
		return true
	case <-time.After(timeout):
		return false
	}
}

// WaitForAllClientsDisconnected blocks until all clients disconnect.
func (s *Server) WaitForAllClientsDisconnected() {
	if s.ClientCount() == 0 {
		return
	}
	<-s.allDisconnected
}

// ClientCount returns the number of connected clients.
func (s *Server) ClientCount() int {
	s.clientsMu.RLock()
	defer s.clientsMu.RUnlock()
	return len(s.clients)
}

// Broadcast sends a message to all connected clients.
func (s *Server) Broadcast(msg Message) {
	if msg.Type == "step" {
		// Block on step to apply throttling without dropping events
		s.broadcast <- msg
		return
	}
	select {
	case s.broadcast <- msg:
	default:
		// Channel full, log warning
		s.logger.Debug("Broadcast channel full, dropping message")
	}
}

// SetSpeed updates the current playback speed used for throttling.
func (s *Server) SetSpeed(speed SpeedPreset) {
	s.speedMu.Lock()
	defer s.speedMu.Unlock()
	s.speed = speed
}

// GetSpeed returns the current playback speed.
func (s *Server) GetSpeed() SpeedPreset {
	s.speedMu.RLock()
	defer s.speedMu.RUnlock()
	return s.speed
}

func (s *Server) runBroadcast(ctx context.Context) {
	for {
		select {
		case <-ctx.Done():
			return
		case msg := <-s.broadcast:
			s.broadcastToClients(msg)
		}
	}
}

func (s *Server) broadcastToClients(msg Message) {
	s.clientsMu.RLock()
	defer s.clientsMu.RUnlock()

	data, err := json.Marshal(msg)
	if err != nil {
		s.logger.Error("Failed to marshal message: %v", err)
		return
	}

	for c := range s.clients {
		// Use mutex to ensure thread-safe writes
		c.writeMu.Lock()
		err := c.conn.WriteMessage(websocket.TextMessage, data)
		c.writeMu.Unlock()
		if err != nil {
			s.logger.Debug("Failed to send to client: %v", err)
		}
	}
}

func (s *Server) broadcastToProducers(msg Message) {
	s.producersMu.RLock()
	defer s.producersMu.RUnlock()

	data, err := json.Marshal(msg)
	if err != nil {
		s.logger.Error("Failed to marshal producer message: %v", err)
		return
	}

	for c := range s.producers {
		c.writeMu.Lock()
		err := c.conn.WriteMessage(websocket.TextMessage, data)
		c.writeMu.Unlock()
		if err != nil {
			s.logger.Debug("Failed to send to producer: %v", err)
		}
	}
}

func (s *Server) handleWebSocket(w http.ResponseWriter, r *http.Request) {
	conn, err := s.upgrader.Upgrade(w, r, nil)
	if err != nil {
		s.logger.Error("WebSocket upgrade failed: %v", err)
		return
	}

	role := r.URL.Query().Get("role")
	isProducer := role == "producer"

	// Create client wrapper
	c := &client{
		conn: conn,
		send: make(chan []byte, 256),
	}

	// Register client (only for browser/consumer connections)
	clientCount := 0
	if isProducer {
		s.producersMu.Lock()
		s.producers[c] = true
		s.producersMu.Unlock()

		// Send current speed to new producer so it starts with correct delay
		currentSpeed := s.GetSpeed()
		c.writeMu.Lock()
		_ = conn.WriteJSON(Message{Type: "set_speed", Data: string(currentSpeed)})
		c.writeMu.Unlock()
	}

	if !isProducer {
		s.clientsMu.Lock()
		s.clients[c] = true
		clientCount = len(s.clients)
		s.clientsMu.Unlock()

		// Signal first connection
		s.connectedOnce.Do(func() {
			close(s.connected)
		})

		s.logger.ConnectionStatus(true, clientCount)
	}

	// Send welcome message (using mutex for thread-safe write)
	welcomeMsg := Message{
		Type: "connected",
		Data: map[string]interface{}{
			"message":   "Connected to gocode-check UI server",
			"timestamp": time.Now().UnixMilli(),
		},
	}
	c.writeMu.Lock()
	_ = conn.WriteJSON(welcomeMsg)
	c.writeMu.Unlock()

	// Handle client messages
	go s.readFromClient(c, isProducer)
}

func (s *Server) readFromClient(c *client, isProducer bool) {
	defer func() {
		clientCount := 0
		if !isProducer {
			s.clientsMu.Lock()
			delete(s.clients, c)
			clientCount = len(s.clients)
			s.clientsMu.Unlock()

			if clientCount == 0 {
				s.allDisconnectedOnce.Do(func() {
					close(s.allDisconnected)
				})
			}

			s.logger.ConnectionStatus(false, clientCount)
		}
		c.conn.Close()

		// If all clients have disconnected and we have a shutdown callback, call it
		if !isProducer && clientCount == 0 && s.onAllClientsDisconnected != nil {
			s.logger.Info("All browsers disconnected. Shutting down server...")
			go s.onAllClientsDisconnected()
		}
		if isProducer {
			s.producersMu.Lock()
			delete(s.producers, c)
			s.producersMu.Unlock()
		}
	}()

	for {
		_, message, err := c.conn.ReadMessage()
		if err != nil {
			if websocket.IsUnexpectedCloseError(err, websocket.CloseGoingAway, websocket.CloseAbnormalClosure) {
				s.logger.Debug("WebSocket read error: %v", err)
			}
			break
		}

		// Parse and handle client commands
		var cmd Message
		if err := json.Unmarshal(message, &cmd); err != nil {
			continue
		}

		if s.isControlCommand(cmd.Type, cmd.Data) {
			s.handleClientCommand(cmd)
			continue
		}

		// Treat as external event payload and broadcast to all clients
		s.Broadcast(cmd)
	}
}

func (s *Server) isControlCommand(cmdType string, data interface{}) bool {
	switch cmdType {
	case "set_speed", "pause", "resume", "jump_to", "tab_switch":
		return true
	case "step":
		// If it looks like a StepMessage payload, treat as event
		if payload, ok := data.(map[string]interface{}); ok {
			if _, hasIndex := payload["index"]; hasIndex {
				return false
			}
			if _, hasEvent := payload["event"]; hasEvent {
				return false
			}
		}
		return true
	default:
		return false
	}
}

func (s *Server) handleClientCommand(cmd Message) {
	switch cmd.Type {
	case "set_speed":
		s.logger.Debug("Speed change requested: %v", cmd.Data)
		if value, ok := cmd.Data.(string); ok {
			s.SetSpeed(SpeedPreset(value))
			if s.onSpeedChange != nil {
				s.onSpeedChange(SpeedPreset(value))
			}
			s.broadcastToProducers(Message{Type: "set_speed", Data: value})
		}
	case "pause":
		s.logger.Debug("Pause requested")
		if s.flow != nil {
			s.flow.Pause()
			s.Broadcast(Message{
				Type: "flow_state",
				Data: map[string]interface{}{
					"state": "paused",
				},
			})
		}
	case "resume":
		s.logger.Debug("Resume requested")
		if s.flow != nil {
			s.flow.Resume()
			s.Broadcast(Message{
				Type: "flow_state",
				Data: map[string]interface{}{
					"state": "playing",
				},
			})
		}
	case "step":
		s.logger.Debug("Step requested")
		if s.flow != nil {
			s.flow.Step()
			s.Broadcast(Message{
				Type: "flow_state",
				Data: map[string]interface{}{
					"state": "stepping",
				},
			})
		}
	case "jump_to":
		if data, ok := cmd.Data.(map[string]interface{}); ok {
			if index, ok := data["index"].(float64); ok {
				s.logger.Debug("Jump to index requested: %d", int(index))
				if s.flow != nil {
					s.flow.JumpTo(int(index))
				}
			}
		}
	case "tab_switch":
		// Tab switching should pause the flow
		s.logger.Debug("Tab switch requested")
		if s.flow != nil && s.flow.State() == FlowPlaying {
			s.flow.Pause()
			s.Broadcast(Message{
				Type: "flow_state",
				Data: map[string]interface{}{
					"state": "paused",
				},
			})
		}
	}
}

func (s *Server) handleHealth(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	_ = json.NewEncoder(w).Encode(map[string]interface{}{
		"status":  "ok",
		"clients": s.ClientCount(),
	})
}

func (s *Server) handlePlaceholder(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "text/html")
	_, _ = fmt.Fprint(w, `<!DOCTYPE html>
<html>
<head>
    <title>gocode-check UI</title>
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, sans-serif;
            background: #0a0a0f;
            color: #e8e8ed;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
        }
        .container {
            text-align: center;
            padding: 2rem;
        }
        h1 { color: #00ff88; }
        p { color: #a0a0b0; }
        code {
            background: #1a1a24;
            padding: 0.2rem 0.5rem;
            border-radius: 4px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>⚙️ gocode-check UI</h1>
        <p>Frontend not built yet.</p>
        <p>Run <code>make ui-build</code> to build the frontend.</p>
        <p>WebSocket endpoint ready at <code>/ws</code></p>
    </div>
</body>
</html>`)
}
