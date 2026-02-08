package ui

import (
	"encoding/json"
	"strings"
	"sync"
	"time"

	"github.com/gorilla/websocket"
)

// WSClient sends UI events to an external UI server.
type WSClient struct {
	serverURL     string
	wsURL         string
	logger        *Logger
	onSpeedChange func(SpeedPreset)

	mu        sync.Mutex
	conn      *websocket.Conn
	connected bool
}

// NewWSClient creates a new client for the given server URL.
func NewWSClient(serverURL string, logger *Logger) *WSClient {
	return &WSClient{
		serverURL: serverURL,
		wsURL:     toWebSocketURL(serverURL),
		logger:    logger,
	}
}

// OnSpeedChange sets a callback for speed updates.
func (c *WSClient) OnSpeedChange(fn func(SpeedPreset)) {
	c.onSpeedChange = fn
}

// ConnectOnce tries to connect once and returns true on success.
func (c *WSClient) ConnectOnce() bool {
	return c.connect() == nil
}

// WaitForConnection tries to connect until timeout.
func (c *WSClient) WaitForConnection(timeout time.Duration) bool {
	deadline := time.Now().Add(timeout)
	for {
		if c.ensureConnected() {
			return true
		}
		if time.Now().After(deadline) {
			return false
		}
		time.Sleep(200 * time.Millisecond)
	}
}

// Broadcast sends a message to the external UI server.
func (c *WSClient) Broadcast(msg Message) {
	if !c.ensureConnected() {
		return
	}
	payload, err := json.Marshal(msg)
	if err != nil {
		if c.logger != nil {
			c.logger.Debug("Failed to marshal UI message: %v", err)
		}
		return
	}

	c.mu.Lock()
	defer c.mu.Unlock()
	if c.conn == nil {
		return
	}
	if err := c.conn.WriteMessage(websocket.TextMessage, payload); err != nil {
		c.connected = false
		_ = c.conn.Close()
		c.conn = nil
	}
}

// Close closes the client connection.
func (c *WSClient) Close() {
	c.mu.Lock()
	defer c.mu.Unlock()
	if c.conn != nil {
		_ = c.conn.Close()
		c.conn = nil
	}
	c.connected = false
}

func (c *WSClient) ensureConnected() bool {
	c.mu.Lock()
	connected := c.connected && c.conn != nil
	c.mu.Unlock()
	if connected {
		return true
	}
	return c.connect() == nil
}

func (c *WSClient) connect() error {
	c.mu.Lock()
	if c.connected && c.conn != nil {
		c.mu.Unlock()
		return nil
	}
	c.mu.Unlock()

	dialer := websocket.Dialer{HandshakeTimeout: 5 * time.Second}
	conn, _, err := dialer.Dial(c.wsURL, nil)
	if err != nil {
		return err
	}

	c.mu.Lock()
	c.conn = conn
	c.connected = true
	c.mu.Unlock()

	go c.readLoop(conn)
	return nil
}

func (c *WSClient) readLoop(conn *websocket.Conn) {
	for {
		_, data, err := conn.ReadMessage()
		if err != nil {
			return
		}
		var msg Message
		if err := json.Unmarshal(data, &msg); err != nil {
			continue
		}
		if msg.Type == "set_speed" {
			if value, ok := msg.Data.(string); ok {
				if c.onSpeedChange != nil {
					c.onSpeedChange(SpeedPreset(value))
				}
			}
		}
	}
}

func toWebSocketURL(serverURL string) string {
	if strings.HasSuffix(serverURL, "/ws") {
		return appendRole(serverURL)
	}
	if strings.HasPrefix(serverURL, "ws://") || strings.HasPrefix(serverURL, "wss://") {
		return appendRole(serverURL + "/ws")
	}
	if strings.HasPrefix(serverURL, "https://") {
		return appendRole("wss://" + strings.TrimPrefix(serverURL, "https://") + "/ws")
	}
	return appendRole("ws://" + strings.TrimPrefix(serverURL, "http://") + "/ws")
}

func appendRole(wsURL string) string {
	if strings.Contains(wsURL, "role=producer") {
		return wsURL
	}
	separator := "?"
	if strings.Contains(wsURL, "?") {
		separator = "&"
	}
	return wsURL + separator + "role=producer"
}
