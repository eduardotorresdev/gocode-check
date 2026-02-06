// Estado reativo global usando Svelte 5 Runes
// Arquivo .svelte.js permite usar runes fora de componentes

let connectionState = $state({
  connected: false,
  error: null,
  reconnecting: false,
});

// Exportar getters e setters
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
    };
    
    ws.onclose = (event) => {
      console.log('[WS] Disconnected', event.code);
      connection.setConnected(false);
      
      if (!event.wasClean) {
        connection.setReconnecting(true);
        reconnectTimeout = setTimeout(() => {
          console.log('[WS] Reconnecting...');
          createConnection();
        }, 2000);
      }
    };
    
    ws.onerror = (error) => {
      console.error('[WS] Error:', error);
      connection.setError('Connection error');
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
