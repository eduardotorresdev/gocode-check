package interpreter

import (
	"sync"
	"testing"
)

// mockObserver records all events for testing
type mockObserver struct {
	mu          sync.Mutex
	startEvents []InterpretStartEvent
	stepEvents  []StepEvent
	endEvents   []InterpretEndEvent
}

func newMockObserver() *mockObserver {
	return &mockObserver{}
}

func (m *mockObserver) OnInterpretStart(event InterpretStartEvent) {
	m.mu.Lock()
	defer m.mu.Unlock()
	m.startEvents = append(m.startEvents, event)
}

func (m *mockObserver) OnStep(event StepEvent) {
	m.mu.Lock()
	defer m.mu.Unlock()
	m.stepEvents = append(m.stepEvents, event)
}

func (m *mockObserver) OnInterpretEnd(event InterpretEndEvent) {
	m.mu.Lock()
	defer m.mu.Unlock()
	m.endEvents = append(m.endEvents, event)
}

func (m *mockObserver) StartCount() int {
	m.mu.Lock()
	defer m.mu.Unlock()
	return len(m.startEvents)
}

func (m *mockObserver) StepCount() int {
	m.mu.Lock()
	defer m.mu.Unlock()
	return len(m.stepEvents)
}

func (m *mockObserver) EndCount() int {
	m.mu.Lock()
	defer m.mu.Unlock()
	return len(m.endEvents)
}

func TestRegisterObserver(t *testing.T) {
	// Cleanup after test
	defer UnregisterAllObservers()

	if HasObservers() {
		t.Error("expected no observers initially")
	}

	obs := newMockObserver()
	RegisterObserver(obs)

	if !HasObservers() {
		t.Error("expected HasObservers to return true after registration")
	}

	if ObserverCount() != 1 {
		t.Errorf("expected 1 observer, got %d", ObserverCount())
	}
}

func TestUnregisterObserver(t *testing.T) {
	defer UnregisterAllObservers()

	obs1 := newMockObserver()
	obs2 := newMockObserver()

	RegisterObserver(obs1)
	RegisterObserver(obs2)

	if ObserverCount() != 2 {
		t.Errorf("expected 2 observers, got %d", ObserverCount())
	}

	UnregisterObserver(obs1)

	if ObserverCount() != 1 {
		t.Errorf("expected 1 observer after unregister, got %d", ObserverCount())
	}

	// Unregistering non-existent observer should be no-op
	UnregisterObserver(obs1)
	if ObserverCount() != 1 {
		t.Errorf("expected 1 observer after duplicate unregister, got %d", ObserverCount())
	}
}

func TestUnregisterAllObservers(t *testing.T) {
	obs1 := newMockObserver()
	obs2 := newMockObserver()

	RegisterObserver(obs1)
	RegisterObserver(obs2)

	UnregisterAllObservers()

	if HasObservers() {
		t.Error("expected no observers after UnregisterAllObservers")
	}
}

func TestObserverNotifications(t *testing.T) {
	defer UnregisterAllObservers()

	obs := newMockObserver()
	RegisterObserver(obs)

	// Simulate notification flow
	notifyInterpretStart(InterpretStartEvent{
		TotalInstructions: 3,
	})

	notifyStep(StepEvent{Index: 0})
	notifyStep(StepEvent{Index: 1})
	notifyStep(StepEvent{Index: 2})

	notifyInterpretEnd(InterpretEndEvent{})

	if obs.StartCount() != 1 {
		t.Errorf("expected 1 start event, got %d", obs.StartCount())
	}

	if obs.StepCount() != 3 {
		t.Errorf("expected 3 step events, got %d", obs.StepCount())
	}

	if obs.EndCount() != 1 {
		t.Errorf("expected 1 end event, got %d", obs.EndCount())
	}
}

func TestMultipleObservers(t *testing.T) {
	defer UnregisterAllObservers()

	obs1 := newMockObserver()
	obs2 := newMockObserver()

	RegisterObserver(obs1)
	RegisterObserver(obs2)

	notifyStep(StepEvent{Index: 0})

	if obs1.StepCount() != 1 {
		t.Errorf("obs1: expected 1 step event, got %d", obs1.StepCount())
	}

	if obs2.StepCount() != 1 {
		t.Errorf("obs2: expected 1 step event, got %d", obs2.StepCount())
	}
}

func TestConcurrentObserverAccess(t *testing.T) {
	defer UnregisterAllObservers()

	var wg sync.WaitGroup

	// Concurrent registrations
	for i := 0; i < 10; i++ {
		wg.Add(1)
		go func() {
			defer wg.Done()
			obs := newMockObserver()
			RegisterObserver(obs)
		}()
	}

	// Concurrent notifications
	for i := 0; i < 10; i++ {
		wg.Add(1)
		go func(idx int) {
			defer wg.Done()
			notifyStep(StepEvent{Index: idx})
		}(i)
	}

	wg.Wait()

	// Should not panic or deadlock
	if ObserverCount() != 10 {
		t.Errorf("expected 10 observers, got %d", ObserverCount())
	}
}

func TestObserverIntegration(t *testing.T) {
	defer UnregisterAllObservers()

	obs := newMockObserver()
	RegisterObserver(obs)

	// Interpret a simple G-code program
	gcode := `G21
G90
G0 X10 Y20
G1 X50 Y50 F500`

	trace, err := ParseAndInterpret(gcode)
	if err != nil {
		t.Fatalf("unexpected error: %v", err)
	}

	// Verify start event
	if obs.StartCount() != 1 {
		t.Errorf("expected 1 start event, got %d", obs.StartCount())
	}

	obs.mu.Lock()
	startEvent := obs.startEvents[0]
	obs.mu.Unlock()

	if startEvent.TotalInstructions != 4 {
		t.Errorf("expected 4 instructions, got %d", startEvent.TotalInstructions)
	}

	// Verify step events
	if obs.StepCount() != 4 {
		t.Errorf("expected 4 step events, got %d", obs.StepCount())
	}

	// Verify end event
	if obs.EndCount() != 1 {
		t.Errorf("expected 1 end event, got %d", obs.EndCount())
	}

	obs.mu.Lock()
	endEvent := obs.endEvents[0]
	obs.mu.Unlock()

	if endEvent.Error != nil {
		t.Errorf("expected no error in end event, got %v", endEvent.Error)
	}
	if endEvent.Trace != trace {
		t.Error("expected end event trace to match returned trace")
	}
}

func TestObserverStepEventData(t *testing.T) {
	defer UnregisterAllObservers()

	obs := newMockObserver()
	RegisterObserver(obs)

	// Interpret a simple G0 move
	gcode := "G0 X10 Y20"
	_, err := ParseAndInterpret(gcode)
	if err != nil {
		t.Fatalf("unexpected error: %v", err)
	}

	if obs.StepCount() != 1 {
		t.Fatalf("expected 1 step event, got %d", obs.StepCount())
	}

	obs.mu.Lock()
	stepEvent := obs.stepEvents[0]
	obs.mu.Unlock()

	// Verify step event data
	if stepEvent.Index != 0 {
		t.Errorf("expected index 0, got %d", stepEvent.Index)
	}
	if stepEvent.Error != nil {
		t.Errorf("expected no error, got %v", stepEvent.Error)
	}
	if stepEvent.StateBefore == nil {
		t.Error("expected StateBefore to be set")
	}
	if stepEvent.StateAfter == nil {
		t.Error("expected StateAfter to be set")
	}

	// Verify state changed correctly
	if stepEvent.StateBefore.Position.X != 0 {
		t.Errorf("expected StateBefore X=0, got %v", stepEvent.StateBefore.Position.X)
	}
	if stepEvent.StateAfter.Position.X != 10 {
		t.Errorf("expected StateAfter X=10, got %v", stepEvent.StateAfter.Position.X)
	}
	if stepEvent.StateAfter.Position.Y != 20 {
		t.Errorf("expected StateAfter Y=20, got %v", stepEvent.StateAfter.Position.Y)
	}

	// Verify event type
	if stepEvent.Event.Type != EventRapidMove {
		t.Errorf("expected EventRapidMove, got %s", stepEvent.Event.Type)
	}
}

func TestObserverNoObserversRegistered(t *testing.T) {
	defer UnregisterAllObservers()

	// Make sure there are no observers
	UnregisterAllObservers()

	// Interpret should work fine without any observers
	gcode := "G0 X10 Y20"
	trace, err := ParseAndInterpret(gcode)
	if err != nil {
		t.Fatalf("unexpected error: %v", err)
	}
	if trace.EventCount() != 1 {
		t.Errorf("expected 1 event, got %d", trace.EventCount())
	}
}
