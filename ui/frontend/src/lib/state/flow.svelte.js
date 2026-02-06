// Estado do controle de fluxo (play/pause/step)

let flowState = $state({
  state: 'playing', // 'playing' | 'paused' | 'stepping'
  speed: 'normal',  // 'fast' | 'normal' | 'slow'
});

export const flow = {
  get state() { return flowState.state; },
  get speed() { return flowState.speed; },
  get isPaused() { return flowState.state === 'paused'; },
  get isPlaying() { return flowState.state === 'playing'; },
  get isStepping() { return flowState.state === 'stepping'; },

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
