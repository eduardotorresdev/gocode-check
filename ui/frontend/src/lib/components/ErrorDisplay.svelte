<script>
  let { error = null, onDismiss = () => {} } = $props();
</script>

{#if error}
  <div class="error-display">
    <div class="error-icon">⚠️</div>
    <div class="error-content">
      <div class="error-title">Interpretation Error</div>
      <div class="error-message">{error}</div>
    </div>
    <button class="dismiss-btn" onclick={onDismiss}>×</button>
  </div>
{/if}

<style>
  .error-display {
    position: fixed;
    bottom: var(--spacing-xl);
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    align-items: flex-start;
    gap: var(--spacing-md);
    padding: var(--spacing-md);
    background: var(--bg-secondary);
    border: 1px solid var(--accent-red);
    border-radius: var(--radius-md);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
    max-width: 600px;
    z-index: 100;
    animation: slideUp 0.3s ease;
  }
  
  @keyframes slideUp {
    from {
      transform: translateX(-50%) translateY(20px);
      opacity: 0;
    }
    to {
      transform: translateX(-50%) translateY(0);
      opacity: 1;
    }
  }
  
  .error-icon {
    font-size: 24px;
  }
  
  .error-content {
    flex: 1;
  }
  
  .error-title {
    font-weight: 600;
    font-size: 14px;
    color: var(--accent-red);
    margin-bottom: var(--spacing-xs);
  }
  
  .error-message {
    font-size: 13px;
    color: var(--text-secondary);
    font-family: var(--font-mono);
    word-break: break-word;
  }
  
  .dismiss-btn {
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--bg-tertiary);
    border-radius: var(--radius-sm);
    color: var(--text-secondary);
    font-size: 18px;
    transition: var(--transition-fast);
  }
  
  .dismiss-btn:hover {
    background: var(--bg-hover);
    color: var(--text-primary);
  }
</style>
