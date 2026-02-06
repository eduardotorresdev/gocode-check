// Test session state (tabs)

let sessionList = $state([]);
let activeSessionId = $state(null);
let sessionIdCounter = $state(0);
// Track which session is currently receiving events (the latest running session)
let receivingSessionId = $state(null);
// Track if user has manually changed the tab
let userChangedTab = $state(false);

// Create session structure
function createSession(testName) {
  return {
    id: ++sessionIdCounter,
    testName: testName || `Test ${sessionIdCounter}`,
    events: [],
    expectations: [],
    currentIndex: -1,
    running: true,
    allPassed: null,
    machine: {
      position: { X: 0, Y: 0, Z: 0 },
      unit: 'mm',
      mode: 'absolute',
      tool: null,
      feed: 0,
      spindle: 0,
      spindleOn: false,
      spindleCW: true,
    }
  };
}

// Compute the tool path for a given session
function computeToolPath(events) {
  return events.map(e => ({
    x: e.stateAfter?.Position?.X ?? 0,
    y: e.stateAfter?.Position?.Y ?? 0,
    z: e.stateAfter?.Position?.Z ?? 0,
    type: e.event?.Type ?? 'unknown',
    index: e.index,
    isCut: ['LinearCut', 'ArcCW', 'ArcCCW', 'DrillCycle'].includes(e.event?.Type),
  }));
}

// Compute statistics for a given session
function computeStats(events) {
  return {
    total: events.length,
    rapidMoves: events.filter(e => e.event?.Type === 'RapidMove').length,
    linearCuts: events.filter(e => e.event?.Type === 'LinearCut').length,
    arcs: events.filter(e => e.event?.Type === 'ArcCW' || e.event?.Type === 'ArcCCW').length,
  };
}

export const sessions = {
  get list() { return sessionList; },
  get activeId() { return activeSessionId; },
  get receivingId() { return receivingSessionId; },
  get active() {
    return sessionList.find(s => s.id === activeSessionId) || null;
  },
  get receiving() {
    return sessionList.find(s => s.id === receivingSessionId) || null;
  },
  get count() { return sessionList.length; },

  // Get tool path for active session
  get toolPath() {
    const session = this.active;
    if (!session) return [];
    return computeToolPath(session.events);
  },

  // Get stats for active session
  get stats() {
    const session = this.active;
    if (!session) return { total: 0, rapidMoves: 0, linearCuts: 0, arcs: 0 };
    return computeStats(session.events);
  },

  // Get machine state for active session at current index
  get machine() {
    const session = this.active;
    if (!session) return {
      position: { X: 0, Y: 0, Z: 0 },
      unit: 'mm',
      mode: 'absolute',
      tool: null,
      feed: 0,
      spindle: 0,
      spindleOn: false,
      spindleCW: true,
    };
    return session.machine;
  },

  // Get events for active session
  get events() {
    const session = this.active;
    if (!session) return [];
    return session.events;
  },

  // Get expectations for active session
  get expectations() {
    const session = this.active;
    if (!session) return [];
    return session.expectations;
  },

  // Get current index for active session
  get currentIndex() {
    const session = this.active;
    if (!session) return -1;
    return session.currentIndex;
  },

  // Create new session - this becomes the receiving session
  create(testName) {
    const session = createSession(testName);
    sessionList.push(session);
    // New session becomes the receiving session
    receivingSessionId = session.id;
    // Only switch to new tab if user hasn't manually changed tabs
    if (!userChangedTab) {
      activeSessionId = session.id;
    }
    return session.id;
  },

  // Select active session (for viewing) - marks as manual change
  setActive(sessionId) {
    const session = sessionList.find(s => s.id === sessionId);
    if (session) {
      activeSessionId = sessionId;
      // Mark that user manually changed the tab
      userChangedTab = true;
      // When switching tabs, restore the machine state from that session's last event
      // This ensures the viewer shows the correct state for the selected session
      if (session.events.length > 0 && session.currentIndex >= 0) {
        const event = session.events.find(e => e.index === session.currentIndex);
        if (event?.stateAfter) {
          const newMachine = { ...session.machine };
          if (event.stateAfter.Position) {
            newMachine.position = { ...event.stateAfter.Position };
          }
          if (event.stateAfter.Unit) newMachine.unit = event.stateAfter.Unit;
          if (event.stateAfter.Mode) newMachine.mode = event.stateAfter.Mode;
          if (event.stateAfter.Tool !== undefined) newMachine.tool = event.stateAfter.Tool;
          if (event.stateAfter.Feed !== undefined) newMachine.feed = event.stateAfter.Feed;
          if (event.stateAfter.Spindle !== undefined) newMachine.spindle = event.stateAfter.Spindle;
          if (event.stateAfter.SpindleOn !== undefined) newMachine.spindleOn = event.stateAfter.SpindleOn;
          if (event.stateAfter.SpindleCW !== undefined) newMachine.spindleCW = event.stateAfter.SpindleCW;
          session.machine = newMachine;
        }
      }
    }
  },

  // Add event to the RECEIVING session (not active)
  addEvent(event) {
    const session = this.receiving;
    if (session) {
      session.events.push(event);
      session.currentIndex = event.index;
    }
  },

  // Add expectation to the RECEIVING session (not active)
  addExpectation(expectation) {
    const session = this.receiving;
    if (session) {
      session.expectations.push(expectation);
    }
  },

  // Update machine state in the RECEIVING session (not active)
  updateMachine(newState) {
    const session = this.receiving;
    if (session && newState) {
      const newMachine = { ...session.machine };
      if (newState.Position) {
        newMachine.position = { ...newState.Position };
      }
      if (newState.Unit) newMachine.unit = newState.Unit;
      if (newState.Mode) newMachine.mode = newState.Mode;
      if (newState.Tool !== undefined) newMachine.tool = newState.Tool;
      if (newState.Feed !== undefined) newMachine.feed = newState.Feed;
      if (newState.Spindle !== undefined) newMachine.spindle = newState.Spindle;
      if (newState.SpindleOn !== undefined) newMachine.spindleOn = newState.SpindleOn;
      if (newState.SpindleCW !== undefined) newMachine.spindleCW = newState.SpindleCW;
      session.machine = newMachine;
    }
  },

  // Mark receiving session as finished
  endSession(allPassed) {
    const session = this.receiving;
    if (session) {
      session.running = false;
      session.allPassed = allPassed;
    }
  },

  // Set current index in active session (for navigation/playback)
  setCurrentIndex(index) {
    const session = this.active;
    if (session) {
      session.currentIndex = index;
      // Update machine state based on the event at that index
      const event = session.events.find(e => e.index === index);
      if (event?.stateAfter) {
        const newMachine = { ...session.machine };
        if (event.stateAfter.Position) {
          newMachine.position = { ...event.stateAfter.Position };
        }
        if (event.stateAfter.Unit) newMachine.unit = event.stateAfter.Unit;
        if (event.stateAfter.Mode) newMachine.mode = event.stateAfter.Mode;
        if (event.stateAfter.Tool !== undefined) newMachine.tool = event.stateAfter.Tool;
        if (event.stateAfter.Feed !== undefined) newMachine.feed = event.stateAfter.Feed;
        if (event.stateAfter.Spindle !== undefined) newMachine.spindle = event.stateAfter.Spindle;
        if (event.stateAfter.SpindleOn !== undefined) newMachine.spindleOn = event.stateAfter.SpindleOn;
        if (event.stateAfter.SpindleCW !== undefined) newMachine.spindleCW = event.stateAfter.SpindleCW;
        session.machine = newMachine;
      }
    }
  },

  // Clear all sessions
  clear() {
    sessionList.length = 0;
    activeSessionId = null;
    receivingSessionId = null;
    sessionIdCounter = 0;
    userChangedTab = false;
  },

  // Remove specific session
  remove(sessionId) {
    const index = sessionList.findIndex(s => s.id === sessionId);
    if (index >= 0) {
      sessionList.splice(index, 1);
      if (activeSessionId === sessionId) {
        activeSessionId = sessionList.length > 0 ? sessionList[0].id : null;
      }
      if (receivingSessionId === sessionId) {
        // Find the next running session or null
        const nextRunning = sessionList.find(s => s.running);
        receivingSessionId = nextRunning?.id || null;
      }
    }
  },
};
