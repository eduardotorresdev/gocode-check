<script>
  import { sessions } from '../state/sessions.svelte.js';

  function selectSession(id) {
    sessions.setActive(id);
  }

  function closeSession(e, id) {
    e.stopPropagation();
    e.preventDefault();
    sessions.remove(id);
  }
</script>

<div class="tab-bar">
  {#each sessions.list as session}
    <div
      class="tab"
      class:active={session.id === sessions.activeId}
      class:passed={!session.running && session.allPassed === true}
      class:failed={!session.running && session.allPassed === false}
      onclick={() => selectSession(session.id)}
      role="tab"
      tabindex="0"
      onkeydown={(e) => e.key === 'Enter' && selectSession(session.id)}
    >
      <span class="tab-status">
        {#if session.running}
          <span class="dot running"></span>
        {:else if session.allPassed}
          ✓
        {:else}
          ✗
        {/if}
      </span>
      <span class="tab-name">{session.testName}</span>
      <span 
        class="tab-close" 
        onclick={(e) => closeSession(e, session.id)}
        role="button"
        tabindex="0"
        onkeydown={(e) => e.key === 'Enter' && closeSession(e, session.id)}
      >×</span>
    </div>
  {/each}
</div>

<style>
  .tab-bar {
    display: flex;
    background: var(--bg-tertiary);
    border-bottom: 1px solid var(--border-color);
    overflow-x: auto;
    min-height: 36px;
  }

  .tab {
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
    max-width: 200px;
    cursor: pointer;
  }

  .tab:hover {
    background: var(--bg-hover);
    color: var(--text-primary);
  }

  .tab.active {
    background: var(--bg-secondary);
    color: var(--text-primary);
    border-bottom: 2px solid var(--accent-cyan);
  }

  .tab.passed .tab-status {
    color: var(--accent-green);
  }

  .tab.failed .tab-status {
    color: var(--accent-red);
  }

  .tab-status {
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

  .tab-name {
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .tab-close {
    width: 16px;
    height: 16px;
    font-size: 14px;
    line-height: 1;
    color: var(--text-muted);
    border-radius: 2px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .tab-close:hover {
    background: var(--accent-red);
    color: white;
  }
</style>
