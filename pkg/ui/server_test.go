package ui

import (
	"context"
	"encoding/json"
	"net/http"
	"testing"
	"time"

	"github.com/gorilla/websocket"
)

func TestServerStartStop(t *testing.T) {
	logger := NewLogger(false)
	server := NewServer(0, logger) // Port 0 = random available port

	ctx, cancel := context.WithCancel(context.Background())
	defer cancel()

	url, err := server.Start(ctx)
	if err != nil {
		t.Fatalf("failed to start server: %v", err)
	}

	if url == "" {
		t.Error("expected non-empty URL")
	}

	// Verify server is responding
	resp, err := http.Get(url + "/api/health")
	if err != nil {
		t.Fatalf("failed to connect to server: %v", err)
	}
	defer resp.Body.Close()

	if resp.StatusCode != http.StatusOK {
		t.Errorf("expected status 200, got %d", resp.StatusCode)
	}

	var health map[string]interface{}
	if err := json.NewDecoder(resp.Body).Decode(&health); err != nil {
		t.Fatalf("failed to decode health response: %v", err)
	}

	if health["status"] != "ok" {
		t.Errorf("expected status 'ok', got %v", health["status"])
	}
}

func TestServerWebSocket(t *testing.T) {
	logger := NewLogger(false)
	server := NewServer(0, logger)

	ctx, cancel := context.WithCancel(context.Background())
	defer cancel()

	url, err := server.Start(ctx)
	if err != nil {
		t.Fatalf("failed to start server: %v", err)
	}

	// Connect via WebSocket
	wsURL := "ws" + url[4:] + "/ws"
	ws, _, err := websocket.DefaultDialer.Dial(wsURL, nil)
	if err != nil {
		t.Fatalf("failed to connect WebSocket: %v", err)
	}
	defer ws.Close()

	// Should receive welcome message
	_ = ws.SetReadDeadline(time.Now().Add(2 * time.Second))
	_, message, err := ws.ReadMessage()
	if err != nil {
		t.Fatalf("failed to read welcome message: %v", err)
	}

	var msg Message
	if err := json.Unmarshal(message, &msg); err != nil {
		t.Fatalf("failed to parse message: %v", err)
	}

	if msg.Type != "connected" {
		t.Errorf("expected 'connected' message, got '%s'", msg.Type)
	}

	// Verify client count
	if server.ClientCount() != 1 {
		t.Errorf("expected 1 client, got %d", server.ClientCount())
	}
}

func TestServerBroadcast(t *testing.T) {
	logger := NewLogger(false)
	server := NewServer(0, logger)

	ctx, cancel := context.WithCancel(context.Background())
	defer cancel()

	url, err := server.Start(ctx)
	if err != nil {
		t.Fatalf("failed to start server: %v", err)
	}

	// Connect client
	wsURL := "ws" + url[4:] + "/ws"
	ws, _, err := websocket.DefaultDialer.Dial(wsURL, nil)
	if err != nil {
		t.Fatalf("failed to connect WebSocket: %v", err)
	}
	defer ws.Close()

	// Read and discard welcome message
	_ = ws.SetReadDeadline(time.Now().Add(2 * time.Second))
	_, _, _ = ws.ReadMessage()

	// Broadcast a message
	server.Broadcast(Message{
		Type: "test",
		Data: map[string]string{"hello": "world"},
	})

	// Read broadcasted message
	_ = ws.SetReadDeadline(time.Now().Add(2 * time.Second))
	_, message, err := ws.ReadMessage()
	if err != nil {
		t.Fatalf("failed to read broadcast: %v", err)
	}

	var msg Message
	if err := json.Unmarshal(message, &msg); err != nil {
		t.Fatalf("failed to unmarshal broadcast message: %v", err)
	}

	if msg.Type != "test" {
		t.Errorf("expected 'test' message type, got '%s'", msg.Type)
	}
}

func TestServerWaitForConnection(t *testing.T) {
	logger := NewLogger(false)
	server := NewServer(0, logger)

	ctx, cancel := context.WithCancel(context.Background())
	defer cancel()

	url, err := server.Start(ctx)
	if err != nil {
		t.Fatalf("failed to start server: %v", err)
	}

	// WaitForConnection should timeout without client
	done := make(chan bool)
	go func() {
		result := server.WaitForConnection(100 * time.Millisecond)
		done <- result
	}()

	select {
	case result := <-done:
		if result {
			t.Error("expected WaitForConnection to return false (timeout)")
		}
	case <-time.After(1 * time.Second):
		t.Error("WaitForConnection did not return in time")
	}

	// Now connect a client
	wsURL := "ws" + url[4:] + "/ws"
	ws, _, err := websocket.DefaultDialer.Dial(wsURL, nil)
	if err != nil {
		t.Fatalf("failed to connect WebSocket: %v", err)
	}
	defer ws.Close()

	// Next wait should return immediately (already connected)
	go func() {
		result := server.WaitForConnection(100 * time.Millisecond)
		done <- result
	}()

	select {
	case result := <-done:
		if !result {
			t.Error("expected WaitForConnection to return true after connection")
		}
	case <-time.After(1 * time.Second):
		t.Error("WaitForConnection did not return in time")
	}
}
