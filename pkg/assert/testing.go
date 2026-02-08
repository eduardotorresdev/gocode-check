package assert

import (
	"crypto/rand"
	"encoding/hex"
	"path/filepath"
	"runtime"
	"strings"
)

var suiteID = newSuiteID()

// TestingT is an interface that matches *testing.T methods we need.
// This allows for easier testing of the assertion package itself.
type TestingT interface {
	Helper()
	Name() string
	Errorf(format string, args ...any)
	Fatalf(format string, args ...any)
}

// Assert fails the test if any assertion in the chain failed.
// Uses t.Errorf to report failures (does not stop the test).
func (a *Assertion) Assert(t TestingT) *Assertion {
	t.Helper()

	// Build validation results from errors
	results := a.buildValidationResults()

	// Notify observers before reporting failures
	notifyAssert(AssertContext{
		TestName:  t.Name(),
		SuiteID:   suiteID,
		SuiteName: detectSuiteName(),
		Trace:     a.trace,
		Model:     a.model,
		Results:   results,
		AllPassed: a.passed,
	})

	if a.Failed() {
		for _, err := range a.errors {
			t.Errorf("Assertion failed: %s", err)
		}
	}
	return a
}

// AssertFatal fails the test immediately if any assertion failed.
// Uses t.Fatalf to stop test execution on first failure.
func (a *Assertion) AssertFatal(t TestingT) *Assertion {
	t.Helper()

	// Build validation results from errors
	results := a.buildValidationResults()

	// Notify observers before reporting failures
	notifyAssert(AssertContext{
		TestName:  t.Name(),
		SuiteID:   suiteID,
		SuiteName: detectSuiteName(),
		Trace:     a.trace,
		Model:     a.model,
		Results:   results,
		AllPassed: a.passed,
	})

	if a.Failed() {
		t.Fatalf("Assertion failed:\n%s", a.Error())
	}
	return a
}

// Must is an alias for AssertFatal for more fluent syntax.
func (a *Assertion) Must(t TestingT) *Assertion {
	return a.AssertFatal(t)
}

// buildValidationResults converts the current assertion state to ValidationResults.
func (a *Assertion) buildValidationResults() []ValidationResult {
	// Preallocate with expected capacity
	capacity := 1
	if !a.passed && len(a.errors) > 0 {
		capacity = len(a.errors)
	}
	results := make([]ValidationResult, 0, capacity)

	if a.passed {
		// Single passed result if everything passed
		if a.context != "" {
			results = append(results, ValidationResult{
				Description: a.context,
				Passed:      true,
			})
		}
	} else {
		// Convert errors to validation results
		for _, err := range a.errors {
			results = append(results, ValidationResult{
				Description:  a.context,
				Passed:       false,
				ErrorMessage: err,
			})
		}
	}

	return results
}

func detectSuiteName() string {
	for i := 2; i < 12; i++ {
		_, file, _, ok := runtime.Caller(i)
		if !ok || file == "" {
			continue
		}
		if strings.Contains(file, string(filepath.Separator)+"pkg"+string(filepath.Separator)+"assert"+string(filepath.Separator)) {
			continue
		}
		return filepath.Base(filepath.Dir(file))
	}
	return ""
}

func newSuiteID() string {
	buf := make([]byte, 16)
	_, err := rand.Read(buf)
	if err != nil {
		return ""
	}
	return hex.EncodeToString(buf)
}
