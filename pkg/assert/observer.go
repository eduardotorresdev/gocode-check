// Package assert provides fluent assertions for machining models.
package assert

import (
	"sync"

	"github.com/eduardotorresdev/gocode-check/pkg/interpreter"
	"github.com/eduardotorresdev/gocode-check/pkg/machining"
)

// ValidationResult represents the result of a single validation.
type ValidationResult struct {
	// Description is a human-readable description of what was validated
	Description string `json:"description"`
	// Passed indicates whether the validation succeeded
	Passed bool `json:"passed"`
	// Expected is the expected value (for failed validations)
	Expected interface{} `json:"expected,omitempty"`
	// Actual is the actual value found (for failed validations)
	Actual interface{} `json:"actual,omitempty"`
	// RelatedEventIndex indicates which trace event this validation relates to
	RelatedEventIndex int `json:"relatedEventIndex"`
	// ErrorMessage provides additional error context
	ErrorMessage string `json:"errorMessage,omitempty"`
}

// AssertContext contains the complete context of an assertion execution.
type AssertContext struct {
	// TestName is the name of the test function
	TestName string `json:"testName"`
	// Trace is the execution trace being validated
	Trace *interpreter.ExecutionTrace `json:"trace,omitempty"`
	// Model is the machining model being validated
	Model *machining.MachiningModel `json:"model,omitempty"`
	// Results contains all validation results
	Results []ValidationResult `json:"results"`
	// AllPassed indicates whether all validations succeeded
	AllPassed bool `json:"allPassed"`
}

// Observer receives notifications when assertions are executed.
// Implementations must be safe for concurrent use.
type Observer interface {
	// OnAssert is called after all validations complete, before test failure
	OnAssert(ctx AssertContext)
}

var (
	observers []Observer
	mu        sync.RWMutex
)

// RegisterObserver adds an observer to receive assertion notifications.
// This function is safe for concurrent use.
func RegisterObserver(o Observer) {
	mu.Lock()
	defer mu.Unlock()
	observers = append(observers, o)
}

// UnregisterObserver removes a specific observer.
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

// notifyAssert notifies all observers of an assertion execution.
func notifyAssert(ctx AssertContext) {
	mu.RLock()
	defer mu.RUnlock()
	for _, o := range observers {
		o.OnAssert(ctx)
	}
}
