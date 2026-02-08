<script>
  import { onMount, onDestroy } from 'svelte';
  import { connection, connect } from './lib/state/connection.svelte.js';
  import { sessions } from './lib/state/sessions.svelte.js';
  import { flow } from './lib/state/flow.svelte.js';
  
  import Header from './lib/components/Header.svelte';
  import SuiteBar from './lib/components/SuiteBar.svelte';
  import TabBar from './lib/components/TabBar.svelte';
  import CNCViewer from './lib/components/CNCViewer.svelte';
  import ControlBar from './lib/components/ControlBar.svelte';
  import ExpectationPanel from './lib/components/ExpectationPanel.svelte';
  import EventTimeline from './lib/components/EventTimeline.svelte';
  import ErrorDisplay from './lib/components/ErrorDisplay.svelte';
  
  let error = $state(null);
  let cleanup = null;
  let playbackTimer = null;
  
  onMount(() => {
    cleanup = connect(handleMessage);
  });
  
  onDestroy(() => {
    cleanup?.();
    if (playbackTimer) clearTimeout(playbackTimer);
  });

  function advancePlayback() {
    const session = sessions.active;
    if (!session) return;

    const total = session.events.length;
    if (total === 0) return;

    const current = session.currentIndex;
    const nextIndex = current < 0 ? 0 : Math.min(current + 1, total - 1);
    if (nextIndex !== current) {
      // Pass false to indicate this is automatic playback, not user interaction
      sessions.setCurrentIndex(nextIndex, false);
    }

    if (flow.isStepping) {
      flow.pause();
    }
  }

  function schedulePlayback() {
    if (playbackTimer) clearTimeout(playbackTimer);

    if (!flow.isPlaying && !flow.isStepping) {
      return;
    }

    playbackTimer = setTimeout(() => {
      advancePlayback();
      schedulePlayback();
    }, flow.getDelayMs());
  }

  $effect(() => {
    // Track changes in flow state/speed and active session
    flow.state;
    flow.speed;
    sessions.activeId;
    sessions.events.length;

    if (flow.isPaused) {
      sessions.setFollowLive(false);
    }

    schedulePlayback();

    return () => {
      if (playbackTimer) clearTimeout(playbackTimer);
    };
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
        // Pass the stock if defined
        sessions.create(msg.data.testName, msg.data.suiteName, msg.data.suiteId, msg.data.stock);
        break;
        
      case 'expectation':
        // Add expectation to the RECEIVING session
        sessions.addExpectation(msg.data);
        break;
        
      case 'session_end':
        // Mark the RECEIVING session as finished
        sessions.endSession(msg.data.allPassed);
        break;
        
    }
  }
  
  function dismissError() {
    error = null;
  }

  function handleEventClick(index) {
    // Clicking on an event while playing should pause the view
    if (flow.isPlaying) {
      flow.pause();
    }
    sessions.setFollowLive(false);
    // Jump to specific event in the ACTIVE session
    sessions.setCurrentIndex(index);
  }

  function handleSuiteSwitch(suiteId) {
    if (sessions.activeSuiteId !== suiteId && flow.isPlaying) {
      flow.pause();
    }
    sessions.setFollowLive(false);
    sessions.setActiveSuite(suiteId);
  }

  function handleTabSwitch(sessionId) {
    // Switching to a different tab should pause the view
    if (sessions.activeId !== sessionId && flow.isPlaying) {
      flow.pause();
    }
    sessions.setFollowLive(false);
    sessions.setActive(sessionId);
  }
</script>

<div class="app">
  <Header />
  
  {#if sessions.count > 0}
    <SuiteBar onSuiteSwitch={handleSuiteSwitch} />
    <TabBar onTabSwitch={handleTabSwitch} />
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
