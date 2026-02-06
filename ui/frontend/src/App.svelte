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
    // Jump to specific event in the ACTIVE session
    send({ type: 'jump_to', data: { index } });
    sessions.setCurrentIndex(index);
  }
</script>

<div class="app">
  <Header />
  
  {#if sessions.count > 0}
    <TabBar />
  {/if}
  
  <div class="main-content">
    <aside class="sidebar-left">
      <EventTimeline onEventClick={handleEventClick} />
    </aside>
    
    <main class="viewer-area">
      <CNCViewer />
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
  }
</style>
