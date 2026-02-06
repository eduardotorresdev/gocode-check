<script>
  import { sessions } from '../state/sessions.svelte.js';
  
  let { onEventClick = () => {} } = $props();
  
  function getEventColor(type) {
    switch (type) {
      case 'RapidMove': return 'var(--accent-red)';
      case 'LinearCut': return 'var(--accent-green)';
      case 'ArcCW':
      case 'ArcCCW': return 'var(--accent-cyan)';
      case 'SpindleStart': return 'var(--accent-yellow)';
      case 'SpindleStop': return 'var(--accent-orange, #ff8800)';
      case 'ToolChange': return 'var(--accent-purple)';
      case 'DrillCycle': return 'var(--accent-blue)';
      default: return 'var(--text-secondary)';
    }
  }
  
  function getEventDescription(type) {
    switch (type) {
      case 'RapidMove': return 'Rapid positioning';
      case 'LinearCut': return 'Linear cutting';
      case 'ArcCW': return 'Clockwise arc';
      case 'ArcCCW': return 'Counter-clockwise arc';
      case 'SpindleStart': return 'Spindle on';
      case 'SpindleStop': return 'Spindle off';
      case 'ToolChange': return 'Tool change';
      case 'DrillCycle': return 'Drill cycle';
      default: return 'Unknown';
    }
  }

  function handleClick(index) {
    onEventClick(index);
  }
</script>

<div class="event-timeline">
  <div class="timeline-header">
    <h3>Event Timeline</h3>
    <span class="counter">{sessions.currentIndex + 1} / {sessions.stats.total}</span>
  </div>
  
  <div class="timeline-list">
    {#each sessions.events as event, i}
      <button 
        class="event-item"
        class:current={i === sessions.currentIndex}
        class:past={i < sessions.currentIndex}
        onclick={() => handleClick(event.index)}
      >
        <div class="event-index">{event.index}</div>
        <div class="event-info">
          <div 
            class="event-type-badge"
            style="background: {getEventColor(event.event?.Type)}; color: white;"
          >
            {getEventDescription(event.event?.Type)}
          </div>
          <div class="event-instruction">
            <code>{event.instruction?.RawLine ?? '-'}</code>
          </div>
        </div>
        {#if event.hasError}
          <span class="error-badge">Error</span>
        {/if}
      </button>
    {:else}
      <div class="empty">
        {#if sessions.count === 0}
          Waiting for test session...
        {:else}
          Waiting for events...
        {/if}
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
    padding: var(--spacing-sm) var(--spacing-sm);
    border-radius: var(--radius-sm);
    margin-bottom: 4px;
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
    border-left: 3px solid var(--accent-cyan);
  }
  
  .event-item.past {
    opacity: 0.8;
  }
  
  .event-index {
    width: 24px;
    font-family: var(--font-mono);
    color: var(--text-muted);
    text-align: right;
    flex-shrink: 0;
  }
  
  .event-info {
    display: flex;
    flex-direction: column;
    gap: 4px;
    flex: 1;
    min-width: 0;
  }
  
  .event-type-badge {
    font-size: 10px;
    font-weight: 600;
    padding: 2px 6px;
    border-radius: var(--radius-sm);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: fit-content;
  }
  
  .event-instruction {
    overflow: hidden;
  }
  
  .event-instruction code {
    font-size: 9px;
    color: var(--text-muted);
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
    flex-shrink: 0;
  }
  
  .empty {
    text-align: center;
    padding: var(--spacing-lg);
    color: var(--text-muted);
    font-size: 12px;
  }
</style>
