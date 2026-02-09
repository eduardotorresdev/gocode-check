package ui

import (
	"github.com/eduardotorresdev/gocode-check/pkg/assert"
	"github.com/eduardotorresdev/gocode-check/pkg/interpreter"
	"github.com/eduardotorresdev/gocode-check/pkg/machining"
)

// Session represents a test visualization session.
type Session struct {
	// TestName is the name of the test being visualized
	TestName string `json:"testName"`
	// Trace is the execution trace for this test
	Trace *interpreter.ExecutionTrace `json:"trace,omitempty"`
	// Model is the machining model derived from the trace
	Model *machining.MachiningModel `json:"model,omitempty"`
	// Expectations contains all validation results
	Expectations []assert.ValidationResult `json:"expectations"`
	// AllPassed indicates whether all expectations passed
	AllPassed bool `json:"allPassed"`
}

// SessionStartMessage is sent when a test session begins.
type SessionStartMessage struct {
	SuiteID           string                  `json:"suiteId,omitempty"`
	SuiteName         string                  `json:"suiteName,omitempty"`
	TestName          string                  `json:"testName"`
	TotalEvents       int                     `json:"totalEvents"`
	TotalExpectations int                     `json:"totalExpectations"`
	Stock             *machining.Stock        `json:"stock,omitempty"`
	Tools             map[int]*machining.Tool `json:"tools,omitempty"`
}

// SessionEndMessage is sent when a test session ends.
type SessionEndMessage struct {
	TestName  string `json:"testName"`
	AllPassed bool   `json:"allPassed"`
	Passed    int    `json:"passed"`
	Failed    int    `json:"failed"`
}

// StepMessage is sent for each execution step.
type StepMessage struct {
	Index       int         `json:"index"`
	Total       int         `json:"total"`
	Instruction interface{} `json:"instruction"`
	Event       interface{} `json:"event"`
	StateBefore interface{} `json:"stateBefore"`
	StateAfter  interface{} `json:"stateAfter"`
	HasError    bool        `json:"hasError"`
}

// ExpectationMessage is sent for each expectation result.
type ExpectationMessage struct {
	Description       string      `json:"description"`
	Passed            bool        `json:"passed"`
	Expected          interface{} `json:"expected,omitempty"`
	Actual            interface{} `json:"actual,omitempty"`
	RelatedEventIndex int         `json:"relatedEventIndex"`
	ErrorMessage      string      `json:"errorMessage,omitempty"`
}
