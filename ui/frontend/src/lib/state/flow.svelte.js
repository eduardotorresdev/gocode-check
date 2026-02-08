// Flow control state (play/pause/step)
// Note: This controls only the VIEW, not Go execution
// Go emits events continuously regardless of this state

let flowState = $state({
  state: 'playing', // 'playing' | 'paused' | 'stepping' - Controls view only
  speed: 'normal',  // 'fast' | 'normal' | 'slow'
});

const speedDelays = {
  fast: 50,
  normal: 200,
  slow: 500,
};

export const flow = {
  get state() { return flowState.state; },
  get speed() { return flowState.speed; },
  get isPaused() { return flowState.state === 'paused'; },
  get isPlaying() { return flowState.state === 'playing'; },
  get isStepping() { return flowState.state === 'stepping'; },
  getDelayMs() { return speedDelays[flowState.speed] ?? 200; },

  setState(newState) {
    flowState.state = newState;
  },

  setSpeed(newSpeed) {
    flowState.speed = newSpeed;
  },

  pause() {
    flowState.state = 'paused';
  },

  resume() {
    flowState.state = 'playing';
  },

  step() {
    flowState.state = 'stepping';
  },
};
