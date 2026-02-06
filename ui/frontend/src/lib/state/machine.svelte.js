// Estado da máquina CNC

let state = $state({
  position: { X: 0, Y: 0, Z: 0 },
  unit: 'mm',
  mode: 'absolute',
  tool: null,
  feed: 0,
  spindle: 0,
  spindleOn: false,
  spindleCW: true,
});

export const machine = {
  get position() { return state.position; },
  get unit() { return state.unit; },
  get mode() { return state.mode; },
  get tool() { return state.tool; },
  get feed() { return state.feed; },
  get spindle() { return state.spindle; },
  get spindleOn() { return state.spindleOn; },
  get spindleCW() { return state.spindleCW; },
  
  // Getter para o estado completo (útil para componentes)
  get state() { return state; },
  
  update(newState) {
    if (!newState) return;
    
    if (newState.Position) {
      state.position = { ...newState.Position };
    }
    if (newState.Unit) state.unit = newState.Unit;
    if (newState.Mode) state.mode = newState.Mode;
    if (newState.Tool !== undefined) state.tool = newState.Tool;
    if (newState.Feed !== undefined) state.feed = newState.Feed;
    if (newState.Spindle !== undefined) state.spindle = newState.Spindle;
    if (newState.SpindleOn !== undefined) state.spindleOn = newState.SpindleOn;
    if (newState.SpindleCW !== undefined) state.spindleCW = newState.SpindleCW;
  },
  
  reset() {
    state.position = { X: 0, Y: 0, Z: 0 };
    state.unit = 'mm';
    state.mode = 'absolute';
    state.tool = null;
    state.feed = 0;
    state.spindle = 0;
    state.spindleOn = false;
    state.spindleCW = true;
  },
};
