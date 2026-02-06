// Global reactive state using Svelte 5 Runes
// .svelte.js files allow using runes outside components

let connectionState = $state({
  connected: false,
  error: null,
  reconnecting: false,
});

// Export getters and setters
export const connection = {
  get connected() { return connectionState.connected; },
  get error() { return connectionState.error; },
  get reconnecting() { return connectionState.reconnecting; },
  
  setConnected(value) {
    connectionState.connected = value;
    connectionState.error = null;
    connectionState.reconnecting = false;
  },
  
  setError(error) {
    connectionState.error = error;
    connectionState.connected = false;
  },
  
  setReconnecting(value) {
    connectionState.reconnecting = value;
  },
};

// WebSocket management
let ws = null;
let reconnectTimeout = null;
let messageHandler = null;
let reconnectAttempts = 0;
const MAX_RECONNECT_ATTEMPTS = 10;
const BASE_RECONNECT_DELAY = 1000; // 1 second
const MAX_RECONNECT_DELAY = 30000; // 30 seconds

export function connect(onMessage) {
  messageHandler = onMessage;
  
  const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
  const wsUrl = `${protocol}//${window.location.host}/ws`;
  
  function createConnection() {
    if (ws && ws.readyState === WebSocket.OPEN) {
      return;
    }

    ws = new WebSocket(wsUrl);
    
    ws.onopen = () => {
      console.log('[WS] Connected');
      connection.setConnected(true);
      reconnectAttempts = 0; // Reset on successful connection
    };
    
    ws.onclose = (event) => {
      console.log('[WS] Disconnected', event.code, event.reason);
      connection.setConnected(false);
      
      // Always try to reconnect (tests ending is a normal close)
      // Use exponential backoff with jitter
      if (reconnectAttempts < MAX_RECONNECT_ATTEMPTS) {
        connection.setReconnecting(true);
        const delay = Math.min(
          BASE_RECONNECT_DELAY * Math.pow(2, reconnectAttempts) + Math.random() * 1000,
          MAX_RECONNECT_DELAY
        );
        reconnectAttempts++;
        console.log(`[WS] Reconnecting in ${Math.round(delay)}ms (attempt ${reconnectAttempts}/${MAX_RECONNECT_ATTEMPTS})...`);
        reconnectTimeout = setTimeout(() => {
          createConnection();
        }, delay);
      } else {
        console.log('[WS] Max reconnection attempts reached. Click to reconnect.');
        connection.setError('Connection lost. Server may have stopped.');
        connection.setReconnecting(false);
      }
    };
    
    ws.onerror = (error) => {
      console.error('[WS] Error:', error);
      // Don't set error state here - let onclose handle it
      // This prevents double error messages
    };
    
    ws.onmessage = (event) => {
      try {
        const msg = JSON.parse(event.data);
        console.log('[WS] Received:', msg.type);
        messageHandler?.(msg);
      } catch (err) {
        console.error('[WS] Parse error:', err);
      }
    };
  }
  
  createConnection();
  
  return () => {
    if (reconnectTimeout) clearTimeout(reconnectTimeout);
    if (ws) ws.close(1000, 'Cleanup');
  };
}

export function send(message) {
  if (ws?.readyState === WebSocket.OPEN) {
    ws.send(JSON.stringify(message));
    console.log('[WS] Sent:', message.type);
  }
}

// Allow manual reconnection
export function reconnect() {
  reconnectAttempts = 0;
  if (reconnectTimeout) clearTimeout(reconnectTimeout);
  connection.setReconnecting(true);
  // Small delay before reconnecting
  reconnectTimeout = setTimeout(() => {
    const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
    const wsUrl = `${protocol}//${window.location.host}/ws`;
    
    if (ws) {
      ws.close();
    }
    
    ws = new WebSocket(wsUrl);
    
    ws.onopen = () => {
      console.log('[WS] Reconnected');
      connection.setConnected(true);
      reconnectAttempts = 0;
    };
    
    ws.onclose = (event) => {
      console.log('[WS] Disconnected', event.code);
      connection.setConnected(false);
      connection.setReconnecting(false);
    };
    
    ws.onerror = () => {
      connection.setError('Failed to reconnect');
      connection.setReconnecting(false);
    };
    
    ws.onmessage = (event) => {
      try {
        const msg = JSON.parse(event.data);
        messageHandler?.(msg);
      } catch (err) {
        console.error('[WS] Parse error:', err);
      }
    };
  }, 500);
}
