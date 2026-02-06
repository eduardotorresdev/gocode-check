<script>
  import { onMount, onDestroy } from 'svelte';
  import { connection, connect } from './lib/state/connection.svelte.js';
  import { machine } from './lib/state/machine.svelte.js';
  import { events } from './lib/state/events.svelte.js';
  import { expectations } from './lib/state/expectations.svelte.js';
  
  import Header from './lib/components/Header.svelte';
  import CNCViewer from './lib/components/CNCViewer.svelte';
  import ControlBar from './lib/components/ControlBar.svelte';
  import ExpectationPanel from './lib/components/ExpectationPanel.svelte';
  import EventTimeline from './lib/components/EventTimeline.svelte';
  import ErrorDisplay from './lib/components/ErrorDisplay.svelte';
  
  let speed = $state('normal');
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
        events.clear();
        machine.reset();
        error = null;
        break;
        
      case 'step':
        events.add(msg.data);
        machine.update(msg.data.stateAfter);
        break;
        
      case 'interpret_end':
        machine.update(msg.data.finalState);
        break;
        
      case 'interpret_error':
        error = msg.data.error;
        break;
        
      case 'session_start':
        expectations.clear();
        expectations.setTest(msg.data.testName);
        break;
        
      case 'expectation':
        expectations.add(msg.data);
        break;
        
      case 'session_end':
        expectations.endTest(msg.data.allPassed);
        break;
    }
  }
  
  function dismissError() {
    error = null;
  }
</script>

<div class="app">
  <Header />
  
  <div class="main-content">
    <aside class="sidebar-left">
      <EventTimeline />
    </aside>
    
    <main class="viewer-area">
      <CNCViewer />
    </main>
    
    <aside class="sidebar-right">
      <ExpectationPanel />
    </aside>
  </div>
  
  <ControlBar {speed} />
  
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
