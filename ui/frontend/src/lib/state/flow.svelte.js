// Flow control state (play/pause/step)

let flowState = $state({
  state: 'paused', // 'playing' | 'paused' | 'stepping' - Start paused waiting for user
  speed: 'normal',  // 'fast' | 'normal' | 'slow'
  waitingForStart: true, // Flag to show play overlay at start
});

export const flow = {
  get state() { return flowState.state; },
  get speed() { return flowState.speed; },
  get isPaused() { return flowState.state === 'paused'; },
  get isPlaying() { return flowState.state === 'playing'; },
  get isStepping() { return flowState.state === 'stepping'; },
  get waitingForStart() { return flowState.waitingForStart; },

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
    flowState.waitingForStart = false; // Clear waiting state on first play
  },

  step() {
    flowState.state = 'stepping';
    flowState.waitingForStart = false; // Clear waiting state
  },

  resetWaitingForStart() {
    flowState.waitingForStart = true;
    flowState.state = 'paused';
  },
};
