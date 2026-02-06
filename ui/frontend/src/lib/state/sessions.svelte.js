// Estado das sessões de teste (tabs)

let sessionList = $state([]);
let activeSessionId = $state(null);
let sessionIdCounter = $state(0);

// Criar estrutura de sessão
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

  // Criar nova sessão
  create(testName) {
    const session = createSession(testName);
    sessionList.push(session);
    activeSessionId = session.id;
    return session.id;
  },

  // Selecionar sessão ativa
  setActive(sessionId) {
    if (sessionList.some(s => s.id === sessionId)) {
      activeSessionId = sessionId;
    }
  },

  // Adicionar evento à sessão ativa
  addEvent(event) {
    const session = this.active;
    if (session) {
      session.events.push(event);
      session.currentIndex = event.index;
    }
  },

  // Adicionar expectativa à sessão ativa
  addExpectation(expectation) {
    const session = this.active;
    if (session) {
      session.expectations.push(expectation);
    }
  },

  // Atualizar estado da máquina na sessão ativa
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

  // Marcar sessão atual como finalizada
  endSession(allPassed) {
    const session = this.active;
    if (session) {
      session.running = false;
      session.allPassed = allPassed;
    }
  },

  // Definir índice atual na sessão ativa
  setCurrentIndex(index) {
    const session = this.active;
    if (session) {
      session.currentIndex = index;
    }
  },

  // Limpar todas as sessões
  clear() {
    sessionList.length = 0;
    activeSessionId = null;
    sessionIdCounter = 0;
  },

  // Remover sessão específica
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
