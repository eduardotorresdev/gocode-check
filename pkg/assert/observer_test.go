package assert

import (
	"sync"
	"testing"
)

type mockAssertObserver struct {
	mu     sync.Mutex
	events []AssertContext
}

func newMockAssertObserver() *mockAssertObserver {
	return &mockAssertObserver{}
}

func (m *mockAssertObserver) OnAssert(ctx AssertContext) {
	m.mu.Lock()
	defer m.mu.Unlock()
	m.events = append(m.events, ctx)
}

func (m *mockAssertObserver) EventCount() int {
	m.mu.Lock()
	defer m.mu.Unlock()
	return len(m.events)
}

func (m *mockAssertObserver) LastEvent() *AssertContext {
	m.mu.Lock()
	defer m.mu.Unlock()
	if len(m.events) == 0 {
		return nil
	}
	return &m.events[len(m.events)-1]
}

func TestAssertObserverRegistration(t *testing.T) {
	defer UnregisterAllObservers()

	if HasObservers() {
		t.Error("expected no observers initially")
	}

	obs := newMockAssertObserver()
	RegisterObserver(obs)

	if !HasObservers() {
		t.Error("expected HasObservers to return true")
	}
}

func TestAssertObserverUnregistration(t *testing.T) {
	defer UnregisterAllObservers()

	obs1 := newMockAssertObserver()
	obs2 := newMockAssertObserver()

	RegisterObserver(obs1)
	RegisterObserver(obs2)

	UnregisterObserver(obs1)

	// Should still have obs2
	if !HasObservers() {
		t.Error("expected HasObservers to return true after partial unregister")
	}

	// Unregistering non-existent observer should be no-op
	UnregisterObserver(obs1)
}

func TestAssertObserverNotification(t *testing.T) {
	defer UnregisterAllObservers()

	obs := newMockAssertObserver()
	RegisterObserver(obs)

	ctx := AssertContext{
		TestName:  "TestExample",
		AllPassed: true,
		Results: []ValidationResult{
			{Description: "hole at (50, 50)", Passed: true},
		},
	}

	notifyAssert(ctx)

	if obs.EventCount() != 1 {
		t.Errorf("expected 1 event, got %d", obs.EventCount())
	}

	last := obs.LastEvent()
	if last.TestName != "TestExample" {
		t.Errorf("expected TestExample, got %s", last.TestName)
	}
}

func TestAssertObserverWithFailedValidation(t *testing.T) {
	defer UnregisterAllObservers()

	obs := newMockAssertObserver()
	RegisterObserver(obs)

	ctx := AssertContext{
		TestName:  "TestFailing",
		AllPassed: false,
		Results: []ValidationResult{
			{Description: "hole at (50, 50)", Passed: true},
			{Description: "hole at (100, 100)", Passed: false, Expected: "exists", Actual: "nil"},
		},
	}

	notifyAssert(ctx)

	last := obs.LastEvent()
	if last.AllPassed {
		t.Error("expected AllPassed to be false")
	}

	if len(last.Results) != 2 {
		t.Errorf("expected 2 results, got %d", len(last.Results))
	}
}

func TestMultipleAssertObservers(t *testing.T) {
	defer UnregisterAllObservers()

	obs1 := newMockAssertObserver()
	obs2 := newMockAssertObserver()

	RegisterObserver(obs1)
	RegisterObserver(obs2)

	ctx := AssertContext{
		TestName:  "TestMultiple",
		AllPassed: true,
	}

	notifyAssert(ctx)

	if obs1.EventCount() != 1 {
		t.Errorf("obs1: expected 1 event, got %d", obs1.EventCount())
	}

	if obs2.EventCount() != 1 {
		t.Errorf("obs2: expected 1 event, got %d", obs2.EventCount())
	}
}

func TestConcurrentAssertObserverAccess(t *testing.T) {
	defer UnregisterAllObservers()

	var wg sync.WaitGroup

	// Concurrent registrations
	for i := 0; i < 10; i++ {
		wg.Add(1)
		go func() {
			defer wg.Done()
			obs := newMockAssertObserver()
			RegisterObserver(obs)
		}()
	}

	// Concurrent notifications
	for i := 0; i < 10; i++ {
		wg.Add(1)
		go func(idx int) {
			defer wg.Done()
			notifyAssert(AssertContext{
				TestName: "ConcurrentTest",
			})
		}(i)
	}

	wg.Wait()

	// Should not panic or deadlock
}

func TestObserverIntegrationWithAssert(t *testing.T) {
	defer UnregisterAllObservers()

	obs := newMockAssertObserver()
	RegisterObserver(obs)

	// Create a simple G-code program
	gcode := `G21
G90
T1
G0 X50 Y50 Z5
G1 Z-10 F100`

	trace, model := traceAndModelFromGCode(t, gcode)

	// Run an assertion that passes
	Expect(trace, model).HasHole(50, 50).Assert(t)

	if obs.EventCount() != 1 {
		t.Errorf("expected 1 event after Assert(), got %d", obs.EventCount())
	}

	last := obs.LastEvent()
	if last == nil {
		t.Fatal("expected last event to be non-nil")
	}

	if !last.AllPassed {
		t.Error("expected AllPassed to be true")
	}

	if last.Trace != trace {
		t.Error("expected Trace to match the provided trace")
	}

	if last.Model != model {
		t.Error("expected Model to match the provided model")
	}
}

func TestObserverReceivesFailedAssertions(t *testing.T) {
	defer UnregisterAllObservers()

	obs := newMockAssertObserver()
	RegisterObserver(obs)

	gcode := `G21
G90
T1
G0 X50 Y50 Z5
G1 Z-10 F100`

	trace, model := traceAndModelFromGCode(t, gcode)

	// Use a mockT so we don't actually fail the real test
	mock := &mockT{}

	// Run an assertion that fails (looking for hole at wrong position)
	Expect(trace, model).HasHole(100, 100).Assert(mock)

	if obs.EventCount() != 1 {
		t.Errorf("expected 1 event after failed Assert(), got %d", obs.EventCount())
	}

	last := obs.LastEvent()
	if last == nil {
		t.Fatal("expected last event to be non-nil")
	}

	if last.AllPassed {
		t.Error("expected AllPassed to be false for failed assertion")
	}
}
