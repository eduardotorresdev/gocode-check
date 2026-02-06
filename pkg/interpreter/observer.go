// Package interpreter provides G-code interpretation with observable execution.
package interpreter

import (
	"sync"

	"github.com/eduardotorresdev/gocode-check/pkg/parser"
)

// StepEvent represents a single execution step.
type StepEvent struct {
	// Index is the zero-based step number
	Index int
	// Instruction is the G-code instruction being executed
	Instruction parser.Instruction
	// Event is the resulting machine event
	Event Event
	// StateBefore is the machine state before this step
	StateBefore *MachineState
	// StateAfter is the machine state after this step
	StateAfter *MachineState
	// Error is non-nil if the step failed
	Error error
}

// InterpretStartEvent is emitted when interpretation begins.
type InterpretStartEvent struct {
	// TotalInstructions is the number of instructions to execute
	TotalInstructions int
	// Instructions is the full list of instructions
	Instructions []parser.Instruction
}

// InterpretEndEvent is emitted when interpretation completes.
type InterpretEndEvent struct {
	// Trace is the complete execution trace (nil if error occurred early)
	Trace *ExecutionTrace
	// FinalState is the final machine state
	FinalState *MachineState
	// Error is non-nil if interpretation failed
	Error error
}

// Observer receives notifications during G-code interpretation.
// Implementations must be safe for concurrent use.
type Observer interface {
	// OnInterpretStart is called when interpretation begins
	OnInterpretStart(event InterpretStartEvent)
	// OnStep is called for each instruction executed
	OnStep(event StepEvent)
	// OnInterpretEnd is called when interpretation completes (success or failure)
	OnInterpretEnd(event InterpretEndEvent)
}

var (
	observers []Observer
	mu        sync.RWMutex
)

// RegisterObserver adds an observer to receive execution notifications.
// The observer will receive events for all subsequent interpretations.
// This function is safe for concurrent use.
func RegisterObserver(o Observer) {
	mu.Lock()
	defer mu.Unlock()
	observers = append(observers, o)
}

// UnregisterObserver removes a specific observer.
// If the observer is not registered, this is a no-op.
// This function is safe for concurrent use.
func UnregisterObserver(o Observer) {
	mu.Lock()
	defer mu.Unlock()
	for i, obs := range observers {
		if obs == o {
			observers = append(observers[:i], observers[i+1:]...)
			return
		}
	}
}

// UnregisterAllObservers removes all registered observers.
// This function is safe for concurrent use.
func UnregisterAllObservers() {
	mu.Lock()
	defer mu.Unlock()
	observers = nil
}

// HasObservers returns true if any observers are registered.
// This function is safe for concurrent use.
func HasObservers() bool {
	mu.RLock()
	defer mu.RUnlock()
	return len(observers) > 0
}

// ObserverCount returns the number of registered observers.
// This function is safe for concurrent use.
func ObserverCount() int {
	mu.RLock()
	defer mu.RUnlock()
	return len(observers)
}

// notifyInterpretStart notifies all observers that interpretation is starting.
func notifyInterpretStart(event InterpretStartEvent) {
	mu.RLock()
	defer mu.RUnlock()
	for _, o := range observers {
		o.OnInterpretStart(event)
	}
}

// notifyStep notifies all observers of a single execution step.
func notifyStep(event StepEvent) {
	mu.RLock()
	defer mu.RUnlock()
	for _, o := range observers {
		o.OnStep(event)
	}
}

// notifyInterpretEnd notifies all observers that interpretation has completed.
func notifyInterpretEnd(event InterpretEndEvent) {
	mu.RLock()
	defer mu.RUnlock()
	for _, o := range observers {
		o.OnInterpretEnd(event)
	}
}
