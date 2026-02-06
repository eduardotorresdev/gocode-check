package ui

import (
	"sync"
)

// FlowState represents the current UI playback state.
type FlowState int

const (
	// FlowPlaying means execution proceeds automatically.
	FlowPlaying FlowState = iota
	// FlowPaused means execution is paused.
	FlowPaused
	// FlowStepping means execution advances one step at a time.
	FlowStepping
)

// FlowController manages execution flow control from the UI.
// When the UI is enabled, the FlowController controls when
// execution proceeds (play/pause/step functionality).
type FlowController struct {
	mu           sync.Mutex
	state        FlowState
	stepSignal   chan struct{}
	currentIndex int
	targetIndex  int // For jumping to specific events
}

// NewFlowController creates a new flow controller.
func NewFlowController() *FlowController {
	return &FlowController{
		state:        FlowPlaying,
		stepSignal:   make(chan struct{}, 1),
		currentIndex: 0,
		targetIndex:  -1,
	}
}

// State returns the current flow state.
func (fc *FlowController) State() FlowState {
	fc.mu.Lock()
	defer fc.mu.Unlock()
	return fc.state
}

// IsPaused returns true if execution is paused.
func (fc *FlowController) IsPaused() bool {
	fc.mu.Lock()
	defer fc.mu.Unlock()
	return fc.state == FlowPaused
}

// Pause pauses execution.
func (fc *FlowController) Pause() {
	fc.mu.Lock()
	defer fc.mu.Unlock()
	fc.state = FlowPaused
}

// Resume resumes execution.
func (fc *FlowController) Resume() {
	fc.mu.Lock()
	defer fc.mu.Unlock()
	fc.state = FlowPlaying
	// Signal any waiting step
	select {
	case fc.stepSignal <- struct{}{}:
	default:
	}
}

// Step advances execution by one step.
func (fc *FlowController) Step() {
	fc.mu.Lock()
	defer fc.mu.Unlock()
	fc.state = FlowStepping
	// Signal one step
	select {
	case fc.stepSignal <- struct{}{}:
	default:
	}
}

// JumpTo sets the target index to jump to.
func (fc *FlowController) JumpTo(index int) {
	fc.mu.Lock()
	defer fc.mu.Unlock()
	fc.targetIndex = index
	// If paused or stepping, signal to advance
	if fc.state != FlowPlaying {
		select {
		case fc.stepSignal <- struct{}{}:
		default:
		}
	}
}

// WaitForContinue blocks until execution can continue.
// Returns the target index if a jump was requested (-1 otherwise).
// Call this before each step when paused or stepping.
func (fc *FlowController) WaitForContinue(currentIndex int) int {
	fc.mu.Lock()
	fc.currentIndex = currentIndex

	// Check if we need to wait
	state := fc.state
	targetIdx := fc.targetIndex

	// If jumping and haven't reached target, don't wait
	if targetIdx >= 0 && currentIndex < targetIdx {
		fc.mu.Unlock()
		return targetIdx
	}

	// Clear target if reached
	if targetIdx >= 0 && currentIndex >= targetIdx {
		fc.targetIndex = -1
	}

	// If playing, continue immediately
	if state == FlowPlaying {
		fc.mu.Unlock()
		return -1
	}

	fc.mu.Unlock()

	// Wait for signal
	<-fc.stepSignal

	// Return target index if jumping
	fc.mu.Lock()
	result := fc.targetIndex
	fc.mu.Unlock()
	return result
}

// Reset resets the flow controller state.
func (fc *FlowController) Reset() {
	fc.mu.Lock()
	defer fc.mu.Unlock()
	fc.currentIndex = 0
	fc.targetIndex = -1
	// Clear any pending signals
	select {
	case <-fc.stepSignal:
	default:
	}
}

// GetCurrentIndex returns the current step index.
func (fc *FlowController) GetCurrentIndex() int {
	fc.mu.Lock()
	defer fc.mu.Unlock()
	return fc.currentIndex
}
