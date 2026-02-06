<script>
  import { events } from '../state/events.svelte.js';
  
  let { onEventClick = () => {} } = $props();
  
  function getEventColor(type) {
    switch (type) {
      case 'RapidMove': return 'var(--text-muted)';
      case 'LinearCut': return 'var(--accent-green)';
      case 'ArcCW':
      case 'ArcCCW': return 'var(--accent-cyan)';
      case 'SpindleStart': return 'var(--accent-yellow)';
      case 'SpindleStop': return 'var(--accent-red)';
      case 'ToolChange': return 'var(--accent-purple)';
      default: return 'var(--text-secondary)';
    }
  }

  function handleClick(index) {
    onEventClick(index);
  }
</script>

<div class="event-timeline">
  <div class="timeline-header">
    <h3>Event Timeline</h3>
    <span class="counter">{events.currentIndex + 1} / {events.stats.total}</span>
  </div>
  
  <div class="timeline-list">
    {#each events.list as event, i}
      <button 
        class="event-item"
        class:current={i === events.currentIndex}
        class:past={i < events.currentIndex}
        onclick={() => handleClick(event.index)}
      >
        <div class="event-index">{event.index}</div>
        <div 
          class="event-type"
          style="color: {getEventColor(event.event?.Type)}"
        >
          {event.event?.Type ?? 'Unknown'}
        </div>
        <div class="event-instruction">
          <code>{event.instruction?.RawLine ?? '-'}</code>
        </div>
        {#if event.hasError}
          <span class="error-badge">Error</span>
        {/if}
      </button>
    {:else}
      <div class="empty">
        Waiting for events...
      </div>
    {/each}
  </div>
</div>

<style>
  .event-timeline {
    display: flex;
    flex-direction: column;
    background: var(--bg-secondary);
    border-right: 1px solid var(--border-color);
    height: 100%;
    overflow: hidden;
  }
  
  .timeline-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: var(--spacing-sm) var(--spacing-md);
    border-bottom: 1px solid var(--border-color);
  }
  
  .timeline-header h3 {
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    color: var(--text-secondary);
  }
  
  .counter {
    font-size: 11px;
    font-family: var(--font-mono);
    color: var(--text-muted);
  }
  
  .timeline-list {
    flex: 1;
    overflow-y: auto;
    padding: var(--spacing-xs);
  }
  
  .event-item {
    display: flex;
    align-items: center;
    gap: var(--spacing-sm);
    padding: var(--spacing-xs) var(--spacing-sm);
    border-radius: var(--radius-sm);
    margin-bottom: 2px;
    font-size: 11px;
    opacity: 0.5;
    transition: var(--transition-fast);
    width: 100%;
    text-align: left;
    border: none;
    background: transparent;
    cursor: pointer;
  }

  .event-item:hover {
    background: var(--bg-hover);
    opacity: 1;
  }
  
  .event-item.current {
    background: var(--bg-hover);
    opacity: 1;
    border-left: 2px solid var(--accent-cyan);
  }
  
  .event-item.past {
    opacity: 0.8;
  }
  
  .event-index {
    width: 28px;
    font-family: var(--font-mono);
    color: var(--text-muted);
    text-align: right;
  }
  
  .event-type {
    width: 80px;
    font-weight: 500;
    font-size: 10px;
  }
  
  .event-instruction {
    flex: 1;
    overflow: hidden;
  }
  
  .event-instruction code {
    font-size: 10px;
    color: var(--text-secondary);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    display: block;
  }
  
  .error-badge {
    font-size: 9px;
    padding: 1px 4px;
    background: var(--accent-red);
    color: white;
    border-radius: 2px;
    font-weight: 600;
  }
  
  .empty {
    text-align: center;
    padding: var(--spacing-lg);
    color: var(--text-muted);
    font-size: 12px;
  }
</style>
