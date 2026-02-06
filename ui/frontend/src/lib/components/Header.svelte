<script>
  import { connection } from '../state/connection.svelte.js';
  import { expectations } from '../state/expectations.svelte.js';
</script>

<header class="header">
  <div class="logo">
    <span class="logo-icon">⚙️</span>
    <span class="logo-text">gocode-check</span>
    <span class="logo-badge">UI</span>
  </div>
  
  <div class="test-info">
    {#if expectations.test.name}
      <span class="test-name">🧪 {expectations.test.name}</span>
      {#if expectations.test.running}
        <span class="test-status running">Running...</span>
      {:else if expectations.test.allPassed === true}
        <span class="test-status passed">✓ Passed</span>
      {:else if expectations.test.allPassed === false}
        <span class="test-status failed">✗ Failed</span>
      {/if}
    {/if}
  </div>
  
  <div class="connection-status">
    {#if connection.connected}
      <span class="status connected">
        <span class="dot"></span>
        Connected
      </span>
    {:else if connection.reconnecting}
      <span class="status reconnecting">
        <span class="dot"></span>
        Reconnecting...
      </span>
    {:else}
      <span class="status disconnected">
        <span class="dot"></span>
        Disconnected
      </span>
    {/if}
  </div>
</header>

<style>
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: var(--spacing-sm) var(--spacing-md);
    background: var(--bg-secondary);
    border-bottom: 1px solid var(--border-color);
    height: 48px;
  }
  
  .logo {
    display: flex;
    align-items: center;
    gap: var(--spacing-sm);
  }
  
  .logo-icon {
    font-size: 20px;
  }
  
  .logo-text {
    font-weight: 600;
    font-size: 14px;
  }
  
  .logo-badge {
    font-size: 10px;
    padding: 2px 6px;
    background: var(--accent-cyan);
    color: var(--bg-primary);
    border-radius: var(--radius-sm);
    font-weight: 600;
  }
  
  .test-info {
    display: flex;
    align-items: center;
    gap: var(--spacing-md);
  }
  
  .test-name {
    font-family: var(--font-mono);
    font-size: 13px;
    color: var(--text-secondary);
  }
  
  .test-status {
    font-size: 12px;
    padding: 2px 8px;
    border-radius: var(--radius-sm);
    font-weight: 500;
  }
  
  .test-status.running {
    background: var(--accent-yellow);
    color: var(--bg-primary);
  }
  
  .test-status.passed {
    background: var(--accent-green);
    color: var(--bg-primary);
  }
  
  .test-status.failed {
    background: var(--accent-red);
    color: white;
  }
  
  .connection-status {
    display: flex;
    align-items: center;
  }
  
  .status {
    display: flex;
    align-items: center;
    gap: var(--spacing-xs);
    font-size: 12px;
    padding: 4px 8px;
    border-radius: var(--radius-sm);
    background: var(--bg-tertiary);
  }
  
  .dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
  }
  
  .connected .dot {
    background: var(--accent-green);
    box-shadow: 0 0 6px var(--accent-green);
  }
  
  .disconnected .dot {
    background: var(--accent-red);
  }
  
  .reconnecting .dot {
    background: var(--accent-yellow);
    animation: pulse 1s infinite;
  }
  
  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
  }
</style>
