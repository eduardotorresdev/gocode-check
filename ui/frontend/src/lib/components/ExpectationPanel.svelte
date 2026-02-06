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

  // Format expectation in a more human-friendly way
  function formatExpectation(exp) {
    // Try to parse the description for better formatting
    let formatted = exp.description;
    
    // If we have expected/actual values, format them nicely
    if (exp.expected !== undefined && exp.actual !== undefined && !exp.passed) {
      const expectedStr = formatValue(exp.expected);
      const actualStr = formatValue(exp.actual);
      return {
        message: formatted,
        details: `Expected: ${expectedStr}, Got: ${actualStr}`,
        status: '✗ Failed'
      };
    } else if (exp.passed) {
      return {
        message: formatted,
        details: null,
        status: '✓ Passed'
      };
    } else if (exp.errorMessage) {
      return {
        message: formatted,
        details: exp.errorMessage,
        status: '✗ Failed'
      };
    }
    
    return {
      message: formatted,
      details: null,
      status: exp.passed ? '✓ Passed' : '✗ Failed'
    };
  }

  function formatValue(val) {
    if (val === null || val === undefined) return 'none';
    if (typeof val === 'object') {
      // Try to format objects nicely
      if (Array.isArray(val)) return `${val.length} items`;
      return JSON.stringify(val);
    }
    return String(val);
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
      {@const formatted = formatExpectation(exp)}
      <div class="expectation-item" class:passed={exp.passed} class:failed={!exp.passed}>
        <div class="expectation-header">
          <span class="icon">{exp.passed ? '✓' : '✗'}</span>
          <span class="status">{formatted.status}</span>
        </div>
        <div class="content">
          <div class="description">{formatted.message}</div>
          {#if formatted.details}
            <div class="details">{formatted.details}</div>
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
    flex-direction: column;
    gap: var(--spacing-xs);
    padding: var(--spacing-md);
    border-radius: var(--radius-sm);
    margin-bottom: var(--spacing-sm);
    background: var(--bg-tertiary);
    border: 2px solid transparent;
  }
  
  .expectation-item.passed {
    border-color: var(--accent-green);
    background: rgba(0, 255, 136, 0.05);
  }
  
  .expectation-item.failed {
    border-color: var(--accent-red);
    background: rgba(255, 50, 50, 0.05);
  }
  
  .expectation-header {
    display: flex;
    align-items: center;
    gap: var(--spacing-sm);
  }
  
  .icon {
    font-size: 16px;
    width: 20px;
    text-align: center;
    font-weight: bold;
  }
  
  .expectation-item.passed .icon {
    color: var(--accent-green);
  }
  
  .expectation-item.failed .icon {
    color: var(--accent-red);
  }

  .status {
    font-size: 11px;
    font-weight: 600;
    padding: 2px 8px;
    border-radius: var(--radius-sm);
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .expectation-item.passed .status {
    background: var(--accent-green);
    color: var(--bg-primary);
  }

  .expectation-item.failed .status {
    background: var(--accent-red);
    color: white;
  }
  
  .content {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: var(--spacing-xs);
    padding-left: 28px;
  }
  
  .description {
    font-size: 13px;
    color: var(--text-primary);
    font-weight: 500;
    line-height: 1.4;
  }
  
  .details {
    font-size: 11px;
    color: var(--text-secondary);
    font-family: var(--font-mono);
    background: var(--bg-primary);
    padding: var(--spacing-xs);
    border-radius: var(--radius-sm);
    line-height: 1.3;
  }
  
  .expectation-item.failed .details {
    color: var(--accent-red-dim, #ff8888);
  }
  
  .empty {
    text-align: center;
    padding: var(--spacing-lg);
    color: var(--text-muted);
    font-size: 12px;
  }
</style>
