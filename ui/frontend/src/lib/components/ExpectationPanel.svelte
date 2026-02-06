<script>
  import { sessions } from '../state/sessions.svelte.js';
  
  // Computed stats from session expectations
  function getStats() {
    const list = sessions.expectations;
    return {
      passed: list.filter(e => e.passed).length,
      failed: list.filter(e => !e.passed).length,
    };
  }
</script>

<div class="expectation-panel">
  <div class="panel-header">
    <h3>Expectations</h3>
    <div class="stats">
      <span class="passed">{getStats().passed} ✓</span>
      <span class="failed">{getStats().failed} ✗</span>
    </div>
  </div>
  
  <div class="expectation-list">
    {#each sessions.expectations as exp, i}
      <div class="expectation-item" class:passed={exp.passed} class:failed={!exp.passed}>
        <span class="icon">{exp.passed ? '✓' : '✗'}</span>
        <div class="content">
          <span class="description">{exp.description}</span>
          {#if !exp.passed && exp.errorMessage}
            <span class="error">{exp.errorMessage}</span>
          {:else if !exp.passed}
            <span class="error">Expected: {JSON.stringify(exp.expected)}, Got: {JSON.stringify(exp.actual)}</span>
          {/if}
        </div>
      </div>
    {:else}
      <div class="empty">
        {#if sessions.count === 0}
          Waiting for test session...
        {:else}
          No expectations yet
        {/if}
      </div>
    {/each}
  </div>
</div>

<style>
  .expectation-panel {
    display: flex;
    flex-direction: column;
    background: var(--bg-secondary);
    border-left: 1px solid var(--border-color);
    height: 100%;
    overflow: hidden;
  }
  
  .panel-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: var(--spacing-sm) var(--spacing-md);
    border-bottom: 1px solid var(--border-color);
  }
  
  .panel-header h3 {
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    color: var(--text-secondary);
  }
  
  .stats {
    display: flex;
    gap: var(--spacing-md);
    font-size: 12px;
    font-family: var(--font-mono);
  }
  
  .stats .passed {
    color: var(--accent-green);
  }
  
  .stats .failed {
    color: var(--accent-red);
  }
  
  .expectation-list {
    flex: 1;
    overflow-y: auto;
    padding: var(--spacing-sm);
  }
  
  .expectation-item {
    display: flex;
    gap: var(--spacing-sm);
    padding: var(--spacing-sm);
    border-radius: var(--radius-sm);
    margin-bottom: var(--spacing-xs);
    background: var(--bg-tertiary);
  }
  
  .expectation-item.passed .icon {
    color: var(--accent-green);
  }
  
  .expectation-item.failed {
    border-left: 2px solid var(--accent-red);
  }
  
  .expectation-item.failed .icon {
    color: var(--accent-red);
  }
  
  .icon {
    font-size: 14px;
    width: 16px;
    text-align: center;
  }
  
  .content {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 2px;
  }
  
  .description {
    font-size: 12px;
    color: var(--text-primary);
  }
  
  .error {
    font-size: 11px;
    color: var(--accent-red-dim);
    font-family: var(--font-mono);
  }
  
  .empty {
    text-align: center;
    padding: var(--spacing-lg);
    color: var(--text-muted);
    font-size: 12px;
  }
</style>
