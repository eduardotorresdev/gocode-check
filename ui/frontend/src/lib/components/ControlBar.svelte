<script>
  import { send } from '../state/connection.svelte.js';
  import { flow } from '../state/flow.svelte.js';
  
  function setSpeed(newSpeed) {
    flow.setSpeed(newSpeed);
    send({ type: 'set_speed', data: newSpeed });
  }
  
  function togglePause() {
    if (flow.isPaused) {
      flow.resume();
      send({ type: 'resume' });
    } else {
      flow.pause();
      send({ type: 'pause' });
    }
  }
  
  function step() {
    flow.step();
    send({ type: 'step' });
  }
</script>

<div class="control-bar">
  <div class="speed-controls">
    <span class="label">Speed:</span>
    <button 
      class="speed-btn"
      class:active={flow.speed === 'fast'}
      onclick={() => setSpeed('fast')}
    >
      Fast
    </button>
    <button 
      class="speed-btn"
      class:active={flow.speed === 'normal'}
      onclick={() => setSpeed('normal')}
    >
      Normal
    </button>
    <button 
      class="speed-btn"
      class:active={flow.speed === 'slow'}
      onclick={() => setSpeed('slow')}
    >
      Slow
    </button>
  </div>
  
  <div class="flow-status">
    {#if flow.isPaused}
      <span class="status paused">⏸ Paused</span>
    {:else if flow.isStepping}
      <span class="status stepping">⏭ Stepping</span>
    {:else}
      <span class="status playing">▶ Playing</span>
    {/if}
  </div>
  
  <div class="playback-controls">
    <button class="control-btn" onclick={togglePause}>
      {#if flow.isPaused}
        <span class="icon">▶</span> Resume
      {:else}
        <span class="icon">⏸</span> Pause
      {/if}
    </button>
    <button class="control-btn" onclick={step}>
      <span class="icon">⏭</span> Step
    </button>
  </div>
</div>

<style>
  .control-bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: var(--spacing-sm) var(--spacing-md);
    background: var(--bg-secondary);
    border-top: 1px solid var(--border-color);
    height: 48px;
  }
  
  .speed-controls, .playback-controls {
    display: flex;
    align-items: center;
    gap: var(--spacing-sm);
  }
  
  .label {
    font-size: 12px;
    color: var(--text-secondary);
    margin-right: var(--spacing-xs);
  }
  
  .speed-btn {
    padding: var(--spacing-xs) var(--spacing-sm);
    font-size: 12px;
    background: var(--bg-tertiary);
    border-radius: var(--radius-sm);
    color: var(--text-secondary);
    transition: var(--transition-fast);
  }
  
  .speed-btn:hover {
    background: var(--bg-hover);
    color: var(--text-primary);
  }
  
  .speed-btn.active {
    background: var(--accent-cyan);
    color: var(--bg-primary);
  }
  
  .control-btn {
    display: flex;
    align-items: center;
    gap: var(--spacing-xs);
    padding: var(--spacing-xs) var(--spacing-md);
    font-size: 12px;
    background: var(--bg-tertiary);
    border-radius: var(--radius-sm);
    color: var(--text-primary);
    transition: var(--transition-fast);
  }
  
  .control-btn:hover {
    background: var(--bg-hover);
  }
  
  .icon {
    font-size: 10px;
  }

  .flow-status {
    display: flex;
    align-items: center;
  }

  .status {
    font-size: 11px;
    padding: var(--spacing-xs) var(--spacing-sm);
    border-radius: var(--radius-sm);
    font-weight: 500;
  }

  .status.playing {
    background: var(--accent-green);
    color: var(--bg-primary);
  }

  .status.paused {
    background: var(--accent-yellow);
    color: var(--bg-primary);
  }

  .status.stepping {
    background: var(--accent-cyan);
    color: var(--bg-primary);
  }
</style>
