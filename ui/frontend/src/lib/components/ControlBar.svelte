<script>
  import { send } from '../state/connection.svelte.js';
  
  let { speed = 'normal' } = $props();
  let paused = $state(false);
  
  function setSpeed(newSpeed) {
    speed = newSpeed;
    send({ type: 'set_speed', data: newSpeed });
  }
  
  function togglePause() {
    paused = !paused;
    send({ type: paused ? 'pause' : 'resume' });
  }
  
  function step() {
    send({ type: 'step' });
  }
</script>

<div class="control-bar">
  <div class="speed-controls">
    <span class="label">Speed:</span>
    <button 
      class="speed-btn"
      class:active={speed === 'fast'}
      onclick={() => setSpeed('fast')}
    >
      Fast
    </button>
    <button 
      class="speed-btn"
      class:active={speed === 'normal'}
      onclick={() => setSpeed('normal')}
    >
      Normal
    </button>
    <button 
      class="speed-btn"
      class:active={speed === 'slow'}
      onclick={() => setSpeed('slow')}
    >
      Slow
    </button>
  </div>
  
  <div class="playback-controls">
    <button class="control-btn" onclick={togglePause}>
      {#if paused}
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
</style>
