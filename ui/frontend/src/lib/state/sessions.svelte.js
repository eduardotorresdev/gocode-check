// Test session state (tabs)

let sessionList = $state([]);
let activeSessionId = $state(null);
let sessionIdCounter = $state(0);

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

export const sessions = {
  get list() { return sessionList; },
  get activeId() { return activeSessionId; },
  get active() {
    return sessionList.find(s => s.id === activeSessionId) || null;
  },
  get count() { return sessionList.length; },

  // Create new session
  create(testName) {
    const session = createSession(testName);
    sessionList.push(session);
    activeSessionId = session.id;
    return session.id;
  },

  // Select active session
  setActive(sessionId) {
    if (sessionList.some(s => s.id === sessionId)) {
      activeSessionId = sessionId;
    }
  },

  // Add event to active session
  addEvent(event) {
    const session = this.active;
    if (session) {
      session.events.push(event);
      session.currentIndex = event.index;
    }
  },

  // Add expectation to active session
  addExpectation(expectation) {
    const session = this.active;
    if (session) {
      session.expectations.push(expectation);
    }
  },

  // Update machine state in active session
  updateMachine(newState) {
    const session = this.active;
    if (session && newState) {
      if (newState.Position) {
        session.machine.position = { ...newState.Position };
      }
      if (newState.Unit) session.machine.unit = newState.Unit;
      if (newState.Mode) session.machine.mode = newState.Mode;
      if (newState.Tool !== undefined) session.machine.tool = newState.Tool;
      if (newState.Feed !== undefined) session.machine.feed = newState.Feed;
      if (newState.Spindle !== undefined) session.machine.spindle = newState.Spindle;
      if (newState.SpindleOn !== undefined) session.machine.spindleOn = newState.SpindleOn;
      if (newState.SpindleCW !== undefined) session.machine.spindleCW = newState.SpindleCW;
    }
  },

  // Mark current session as finished
  endSession(allPassed) {
    const session = this.active;
    if (session) {
      session.running = false;
      session.allPassed = allPassed;
    }
  },

  // Set current index in active session
  setCurrentIndex(index) {
    const session = this.active;
    if (session) {
      session.currentIndex = index;
    }
  },

  // Clear all sessions
  clear() {
    sessionList.length = 0;
    activeSessionId = null;
    sessionIdCounter = 0;
  },

  // Remove specific session
  remove(sessionId) {
    const index = sessionList.findIndex(s => s.id === sessionId);
    if (index >= 0) {
      sessionList.splice(index, 1);
      if (activeSessionId === sessionId) {
        activeSessionId = sessionList.length > 0 ? sessionList[0].id : null;
      }
    }
  },
};
