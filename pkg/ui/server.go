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

// Server handles HTTP and WebSocket connections for the UI.
type Server struct {
	port       int
	logger     *Logger
	upgrader   websocket.Upgrader
	clients    map[*websocket.Conn]bool
	clientsMu  sync.RWMutex
	broadcast  chan Message
	httpServer *http.Server
	url        string

	// Connection synchronization
	connected     chan struct{}
	connectedOnce sync.Once
}

// NewServer creates a new UI server.
func NewServer(port int, logger *Logger) *Server {
	return &Server{
		port:      port,
		logger:    logger,
		clients:   make(map[*websocket.Conn]bool),
		broadcast: make(chan Message, 256),
		connected: make(chan struct{}),
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

// ClientCount returns the number of connected clients.
func (s *Server) ClientCount() int {
	s.clientsMu.RLock()
	defer s.clientsMu.RUnlock()
	return len(s.clients)
}

// Broadcast sends a message to all connected clients.
func (s *Server) Broadcast(msg Message) {
	select {
	case s.broadcast <- msg:
	default:
		// Channel full, log warning
		s.logger.Debug("Broadcast channel full, dropping message")
	}
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

	for client := range s.clients {
		err := client.WriteMessage(websocket.TextMessage, data)
		if err != nil {
			s.logger.Debug("Failed to send to client: %v", err)
		}
	}
}

func (s *Server) handleWebSocket(w http.ResponseWriter, r *http.Request) {
	conn, err := s.upgrader.Upgrade(w, r, nil)
	if err != nil {
		s.logger.Error("WebSocket upgrade failed: %v", err)
		return
	}

	// Register client
	s.clientsMu.Lock()
	s.clients[conn] = true
	clientCount := len(s.clients)
	s.clientsMu.Unlock()

	// Signal first connection
	s.connectedOnce.Do(func() {
		close(s.connected)
	})

	s.logger.ConnectionStatus(true, clientCount)

	// Send welcome message
	welcomeMsg := Message{
		Type: "connected",
		Data: map[string]interface{}{
			"message":   "Connected to gocode-check UI server",
			"timestamp": time.Now().UnixMilli(),
		},
	}
	_ = conn.WriteJSON(welcomeMsg)

	// Handle client messages
	go s.readFromClient(conn)
}

func (s *Server) readFromClient(conn *websocket.Conn) {
	defer func() {
		s.clientsMu.Lock()
		delete(s.clients, conn)
		clientCount := len(s.clients)
		s.clientsMu.Unlock()

		s.logger.ConnectionStatus(false, clientCount)
		conn.Close()
	}()

	for {
		_, message, err := conn.ReadMessage()
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

		s.handleClientCommand(cmd)
	}
}

func (s *Server) handleClientCommand(cmd Message) {
	switch cmd.Type {
	case "set_speed":
		s.logger.Debug("Speed change requested: %v", cmd.Data)
	case "pause":
		s.logger.Debug("Pause requested")
	case "resume":
		s.logger.Debug("Resume requested")
	case "step":
		s.logger.Debug("Step requested")
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
