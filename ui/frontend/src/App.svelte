<script>
  import { onMount, onDestroy } from 'svelte';
  import { connection, connect, send } from './lib/state/connection.svelte.js';
  import { sessions } from './lib/state/sessions.svelte.js';
  import { flow } from './lib/state/flow.svelte.js';
  
  import Header from './lib/components/Header.svelte';
  import TabBar from './lib/components/TabBar.svelte';
  import CNCViewer from './lib/components/CNCViewer.svelte';
  import ControlBar from './lib/components/ControlBar.svelte';
  import ExpectationPanel from './lib/components/ExpectationPanel.svelte';
  import EventTimeline from './lib/components/EventTimeline.svelte';
  import ErrorDisplay from './lib/components/ErrorDisplay.svelte';
  
  let error = $state(null);
  let cleanup = null;
  
  onMount(() => {
    cleanup = connect(handleMessage);
  });
  
  onDestroy(() => {
    cleanup?.();
  });
  
  function handleMessage(msg) {
    switch (msg.type) {
      case 'connected':
        console.log('Connected:', msg.data.message);
        break;
        
      case 'interpret_start':
        // Clear error on new interpretation
        error = null;
        break;
        
      case 'step':
        // Add event to the RECEIVING session (not necessarily active)
        sessions.addEvent(msg.data);
        sessions.updateMachine(msg.data.stateAfter);
        break;
        
      case 'interpret_end':
        sessions.updateMachine(msg.data.finalState);
        break;
        
      case 'interpret_error':
        error = msg.data.error;
        break;
        
      case 'session_start':
        // Create new session tab - this becomes the receiving session
        sessions.create(msg.data.testName);
        // Reset waiting for start on first test
        flow.resetWaitingForStart();
        break;
        
      case 'expectation':
        // Add expectation to the RECEIVING session
        sessions.addExpectation(msg.data);
        break;
        
      case 'session_end':
        // Mark the RECEIVING session as finished
        sessions.endSession(msg.data.allPassed);
        break;
        
      case 'flow_state':
        flow.setState(msg.data.state);
        break;
    }
  }
  
  function dismissError() {
    error = null;
  }

  function handleEventClick(index) {
    // Clicking on an event while playing should pause
    if (flow.isPlaying) {
      flow.pause();
      send({ type: 'pause' });
    }
    // Jump to specific event in the ACTIVE session
    send({ type: 'jump_to', data: { index } });
    sessions.setCurrentIndex(index);
  }

  function handleTabSwitch(sessionId) {
    // Switching to a different tab should pause the flow
    if (sessions.activeId !== sessionId && flow.isPlaying) {
      flow.pause();
      send({ type: 'pause' });
    }
    sessions.setActive(sessionId);
  }

  function handlePlayOverlayClick() {
    // User clicked play on the overlay - resume from event 0 of current tab
    flow.resume();
    send({ type: 'resume' });
    // Jump to event 0
    send({ type: 'jump_to', data: { index: 0 } });
    sessions.setCurrentIndex(0);
  }
</script>

<div class="app">
  <Header />
  
  {#if sessions.count > 0}
    <TabBar onTabSwitch={handleTabSwitch} />
  {/if}
  
  <div class="main-content">
    <aside class="sidebar-left">
      <EventTimeline onEventClick={handleEventClick} />
    </aside>
    
    <main class="viewer-area">
      <CNCViewer />
      
      {#if flow.waitingForStart}
        <div 
          class="play-overlay" 
          onclick={handlePlayOverlayClick}
          onkeydown={(e) => e.key === 'Enter' && handlePlayOverlayClick()}
          role="button"
          tabindex="0"
        >
          <div class="play-button">
            <div class="play-icon">▶</div>
            <div class="play-text">Click to Start Tests</div>
          </div>
        </div>
      {/if}
    </main>
    
    <aside class="sidebar-right">
      <ExpectationPanel />
    </aside>
  </div>
  
  <ControlBar />
  
  <ErrorDisplay {error} onDismiss={dismissError} />
</div>

<style>
  .app {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  
  .main-content {
    flex: 1;
    display: flex;
    overflow: hidden;
  }
  
  .sidebar-left {
    width: 280px;
    min-width: 200px;
  }
  
  .sidebar-right {
    width: 320px;
    min-width: 240px;
  }
  
  .viewer-area {
    flex: 1;
    overflow: hidden;
    position: relative;
  }

  .play-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.85);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    z-index: 1000;
    backdrop-filter: blur(4px);
    animation: fadeIn 0.3s ease-out;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  .play-button {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--spacing-lg);
    transition: transform 0.2s ease-out;
  }

  .play-overlay:hover .play-button {
    transform: scale(1.05);
  }

  .play-icon {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    background: linear-gradient(135deg, var(--accent-cyan), var(--accent-blue, #0066ff));
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 48px;
    color: white;
    box-shadow: 0 8px 32px rgba(0, 255, 136, 0.3);
    animation: pulse 2s infinite;
  }

  @keyframes pulse {
    0%, 100% {
      box-shadow: 0 8px 32px rgba(0, 255, 136, 0.3);
    }
    50% {
      box-shadow: 0 8px 48px rgba(0, 255, 136, 0.6);
    }
  }

  .play-text {
    font-size: 24px;
    font-weight: 600;
    color: var(--text-primary);
    text-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
  }
</style>
