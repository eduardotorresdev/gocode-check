<script>
  import { sessions } from '../state/sessions.svelte.js';

  let { onSuiteSwitch = () => {} } = $props();

  function selectSuite(name) {
    onSuiteSwitch(name);
  }
</script>

<div class="suite-bar">
  {#each sessions.suites as suite}
    <div
      class="suite-tab"
  class:active={suite.id === sessions.activeSuiteId}
      class:passed={!suite.running && suite.allPassed}
      class:failed={!suite.running && !suite.allPassed}
  onclick={() => selectSuite(suite.id)}
      role="tab"
      tabindex="0"
  onkeydown={(e) => e.key === 'Enter' && selectSuite(suite.id)}
    >
      <span class="suite-status">
        {#if suite.running}
          <span class="dot running"></span>
        {:else if suite.allPassed}
          ✓
        {:else}
          ✗
        {/if}
      </span>
  <span class="suite-name">{suite.name}</span>
    </div>
  {/each}
</div>

<style>
  .suite-bar {
    display: flex;
    background: var(--bg-primary);
    border-bottom: 1px solid var(--border-color);
    overflow-x: auto;
    min-height: 34px;
  }

  .suite-tab {
    display: flex;
    align-items: center;
    gap: var(--spacing-xs);
    padding: var(--spacing-xs) var(--spacing-md);
    font-size: 12px;
    color: var(--text-secondary);
    background: transparent;
    border-right: 1px solid var(--border-color);
    white-space: nowrap;
    transition: var(--transition-fast);
    min-width: 120px;
    max-width: 220px;
    cursor: pointer;
  }

  .suite-tab:hover {
    background: var(--bg-hover);
    color: var(--text-primary);
  }

  .suite-tab.active {
    background: var(--bg-secondary);
    color: var(--text-primary);
    border-bottom: 2px solid var(--accent-cyan);
  }

  .suite-tab.passed .suite-status {
    color: var(--accent-green);
  }

  .suite-tab.failed .suite-status {
    color: var(--accent-red);
  }

  .suite-status {
    font-size: 10px;
    width: 14px;
    text-align: center;
  }

  .dot {
    display: inline-block;
    width: 6px;
    height: 6px;
    border-radius: 50%;
  }

  .dot.running {
    background: var(--accent-yellow);
    animation: pulse 1s infinite;
  }

  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
  }

  .suite-name {
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
  }
</style>
