// Test session state (tabs)

let sessionList = $state([]);
let activeSessionId = $state(null);
let activeSuiteId = $state(null);
let sessionIdCounter = $state(0);
let followLive = $state(true);
// Track which session is currently receiving events (the latest running session)
let receivingSessionId = $state(null);
// Track if user has manually changed the tab
let userChangedTab = $state(false);
let userChangedSuite = $state(false);
// Track if there are tests currently running
let testsRunning = $state(false);

// Create session structure
function createSession(testName, suiteName, suiteId, stock = null, tools = null) {
  const resolvedSuiteId = suiteId || suiteName || 'default';
  const resolvedSuiteName = suiteName || resolvedSuiteId;
  return {
    id: ++sessionIdCounter,
    suiteId: resolvedSuiteId,
    suiteName: resolvedSuiteName,
    testName: testName || `Test ${sessionIdCounter}`,
    events: [],
    expectations: [],
    currentIndex: -1,
    running: true,
    allPassed: null,
    stock: stock, // Stock/workpiece definition
    tools: tools || {}, // Tool library (map of tool number to config)
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
  get activeSuiteId() { return activeSuiteId; },
  get followLive() { return followLive; },
  get receivingId() { return receivingSessionId; },
  get testsRunning() { return testsRunning; },
  // Returns true if there's a session actively receiving events
  get isReceiving() {
    const receiving = sessionList.find(s => s.id === receivingSessionId);
    return receiving?.running === true;
  },
  get active() {
    return sessionList.find(s => s.id === activeSessionId) || null;
  },
  get suites() {
    const map = new Map();
    for (const session of sessionList) {
      const key = session.suiteId || 'default';
      if (!map.has(key)) {
        map.set(key, {
          id: key,
          name: session.suiteName || key,
          tests: [],
          running: false,
          allPassed: true,
        });
      }
      const suite = map.get(key);
      suite.tests.push(session);
      if (session.running) {
        suite.running = true;
      }
      if (session.allPassed === false) {
        suite.allPassed = false;
      }
    }
    return Array.from(map.values());
  },
  get tests() {
    if (!activeSuiteId) return [];
    return sessionList.filter(s => s.suiteId === activeSuiteId);
  },
  get receiving() {
    return sessionList.find(s => s.id === receivingSessionId) || null;
  },
  get count() { return sessionList.length; },

  // Get stock for active session
  get stock() {
    const session = this.active;
    if (!session) return null;
    return session.stock;
  },

  // Get tools for active session
  get tools() {
    const session = this.active;
    if (!session) return {};
    return session.tools || {};
  },

  // Get current tool config for active session
  get currentTool() {
    const session = this.active;
    if (!session || !session.machine.tool) return null;
    const toolNumber = session.machine.tool;
    // Return configured tool or default 6mm end mill
    return session.tools?.[toolNumber] || {
      number: toolNumber,
      diameter: 6.0,
      fluteLength: 25.0,
      type: 'EndMill'
    };
  },

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
    const session = this.active ?? this.receiving;
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
    const session = this.active ?? this.receiving;
    if (!session) return -1;
    return session.currentIndex;
  },

  // Create new session - this becomes the receiving session
  create(testName, suiteName, suiteId, stock = null, tools = null) {
    const session = createSession(testName, suiteName, suiteId, stock, tools);
    sessionList.push(session);
    // New session becomes the receiving session
    receivingSessionId = session.id;
    // Mark that tests are running
    testsRunning = true;
    // Only switch to new tab/suite if user is in follow live mode
    // If user clicked on a specific event (followLive=false), don't change their view
    if (followLive) {
      activeSessionId = session.id;
      activeSuiteId = session.suiteId;
    }
    return session.id;
  },

  setFollowLive(value) {
    followLive = value;
  },

  // Resume live mode and switch to the receiving session/suite
  resumeLive() {
    followLive = true;
    userChangedTab = false;
    userChangedSuite = false;
    // Switch to the session that's currently receiving events
    const receiving = this.receiving;
    if (receiving) {
      activeSessionId = receiving.id;
      activeSuiteId = receiving.suiteId;
      // Jump to the latest event and update machine state
      if (receiving.events.length > 0) {
        const lastEvent = receiving.events[receiving.events.length - 1];
        receiving.currentIndex = lastEvent.index;
        // Update machine state to match the latest event
        if (lastEvent.stateAfter) {
          const newMachine = { ...receiving.machine };
          if (lastEvent.stateAfter.Position) {
            newMachine.position = { ...lastEvent.stateAfter.Position };
          }
          if (lastEvent.stateAfter.Unit) newMachine.unit = lastEvent.stateAfter.Unit;
          if (lastEvent.stateAfter.Mode) newMachine.mode = lastEvent.stateAfter.Mode;
          if (lastEvent.stateAfter.Tool !== undefined) newMachine.tool = lastEvent.stateAfter.Tool;
          if (lastEvent.stateAfter.Feed !== undefined) newMachine.feed = lastEvent.stateAfter.Feed;
          if (lastEvent.stateAfter.Spindle !== undefined) newMachine.spindle = lastEvent.stateAfter.Spindle;
          if (lastEvent.stateAfter.SpindleOn !== undefined) newMachine.spindleOn = lastEvent.stateAfter.SpindleOn;
          if (lastEvent.stateAfter.SpindleCW !== undefined) newMachine.spindleCW = lastEvent.stateAfter.SpindleCW;
          receiving.machine = newMachine;
        }
      }
    }
  },

  setActiveSuite(suiteId) {
    const suite = sessionList.find(s => s.suiteId === suiteId);
    if (!suite) return;
    activeSuiteId = suiteId;
    userChangedSuite = true;
    followLive = false;
    const tests = sessionList.filter(s => s.suiteId === suiteId);
    if (tests.length > 0) {
      activeSessionId = tests[tests.length - 1].id;
      userChangedTab = true;
    }
  },

  // Select active session (for viewing) - marks as manual change
  setActive(sessionId) {
    const session = sessionList.find(s => s.id === sessionId);
    if (session) {
      activeSessionId = sessionId;
  activeSuiteId = session.suiteId;
      // Mark that user manually changed the tab
      userChangedTab = true;
      userChangedSuite = true;
      followLive = false;
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
      if (!activeSessionId) {
        activeSessionId = session.id;
        activeSuiteId = session.suiteId;
      }
      session.events.push(event);
      if (session.id !== activeSessionId) {
        session.currentIndex = event.index;
      } else if (followLive) {
        session.currentIndex = event.index;
      }
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
      if (session.id === activeSessionId && !followLive) {
        return;
      }
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
    // Check if there are still any running sessions
    testsRunning = sessionList.some(s => s.running);
  },

  // Set current index in active session (for navigation/playback)
  // userInitiated: true when user clicks on an event, false for automatic playback
  setCurrentIndex(index, userInitiated = true) {
    const session = this.active;
    if (session) {
      // Only disable follow live if user initiated the navigation
      if (userInitiated) {
        followLive = false;
      }
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
    activeSuiteId = null;
    receivingSessionId = null;
    sessionIdCounter = 0;
    userChangedTab = false;
    userChangedSuite = false;
    followLive = true;
    testsRunning = false;
  },

  // Remove specific session
  remove(sessionId) {
    const index = sessionList.findIndex(s => s.id === sessionId);
    if (index >= 0) {
      const removed = sessionList[index];
      sessionList.splice(index, 1);
      if (activeSessionId === sessionId) {
        const remainingForSuite = sessionList.filter(s => s.suiteId === removed.suiteId);
        if (remainingForSuite.length > 0) {
          activeSessionId = remainingForSuite[remainingForSuite.length - 1].id;
        } else {
          activeSessionId = sessionList.length > 0 ? sessionList[0].id : null;
          activeSuiteId = sessionList.length > 0 ? sessionList[0].suiteId : null;
        }
      }
      if (receivingSessionId === sessionId) {
        // Find the next running session or null
        const nextRunning = sessionList.find(s => s.running);
        receivingSessionId = nextRunning?.id || null;
      }
    }
  },
};
