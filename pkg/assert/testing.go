package assert

// TestingT is an interface that matches *testing.T methods we need.
// This allows for easier testing of the assertion package itself.
type TestingT interface {
	Helper()
	Errorf(format string, args ...any)
	Fatalf(format string, args ...any)
}

// Assert fails the test if any assertion in the chain failed.
// Uses t.Errorf to report failures (does not stop the test).
func (a *Assertion) Assert(t TestingT) *Assertion {
	t.Helper()
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
	if a.Failed() {
		t.Fatalf("Assertion failed:\n%s", a.Error())
	}
	return a
}

// Must is an alias for AssertFatal for more fluent syntax.
func (a *Assertion) Must(t TestingT) *Assertion {
	return a.AssertFatal(t)
}
