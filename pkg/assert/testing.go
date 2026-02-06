package assert

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
	results := make([]ValidationResult, 0)

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
