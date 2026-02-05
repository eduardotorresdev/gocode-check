package machining

import (
	"testing"
)

func TestWarningType_String(t *testing.T) {
	tests := []struct {
		wtype WarningType
		want  string
	}{
		{WarningMissingTool, "MissingTool"},
		{WarningSpindleOff, "SpindleOff"},
		{WarningZeroFeed, "ZeroFeed"},
		{WarningShallowCut, "ShallowCut"},
		{WarningUnusualGeometry, "UnusualGeometry"},
		{WarningIncompleteHole, "IncompleteHole"},
		{WarningOpenContour, "OpenContour"},
	}

	for _, tt := range tests {
		if got := tt.wtype.String(); got != tt.want {
			t.Errorf("WarningType(%d).String() = %s, want %s", tt.wtype, got, tt.want)
		}
	}
}

func TestNewWarning(t *testing.T) {
	w := NewWarning(WarningMissingTool, "Test message", 42)

	if w.Type != WarningMissingTool {
		t.Errorf("expected type WarningMissingTool, got %v", w.Type)
	}
	if w.Message != "Test message" {
		t.Errorf("expected message 'Test message', got %s", w.Message)
	}
	if w.SourceLine != 42 {
		t.Errorf("expected source line 42, got %d", w.SourceLine)
	}
	if w.Details == nil {
		t.Error("expected Details to be initialized")
	}
}

func TestWarning_WithDetail(t *testing.T) {
	w := NewWarning(WarningMissingTool, "Test", 1).
		WithDetail("key1", "value1").
		WithDetail("key2", 123)

	if w.Details["key1"] != "value1" {
		t.Error("expected key1 to be 'value1'")
	}
	if w.Details["key2"] != 123 {
		t.Error("expected key2 to be 123")
	}
}

func TestWarning_String(t *testing.T) {
	w1 := NewWarning(WarningMissingTool, "No tool selected", 42)
	w2 := NewWarning(WarningZeroFeed, "Zero feed rate", 0)

	s1 := w1.String()
	s2 := w2.String()

	if s1 != "[MissingTool] Line 42: No tool selected" {
		t.Errorf("unexpected string: %s", s1)
	}
	if s2 != "[ZeroFeed] Zero feed rate" {
		t.Errorf("unexpected string: %s", s2)
	}
}

func TestWarnings_Add(t *testing.T) {
	var ws Warnings
	ws.Add(NewWarning(WarningMissingTool, "Test 1", 1))
	ws.Add(NewWarning(WarningZeroFeed, "Test 2", 2))

	if ws.Count() != 2 {
		t.Errorf("expected 2 warnings, got %d", ws.Count())
	}
}

func TestWarnings_AddNew(t *testing.T) {
	var ws Warnings
	ws.AddNew(WarningMissingTool, "Test message", 10)

	if ws.Count() != 1 {
		t.Errorf("expected 1 warning, got %d", ws.Count())
	}
	if ws[0].Type != WarningMissingTool {
		t.Errorf("expected WarningMissingTool, got %v", ws[0].Type)
	}
}

func TestWarnings_OfType(t *testing.T) {
	var ws Warnings
	ws.Add(NewWarning(WarningMissingTool, "Test 1", 1))
	ws.Add(NewWarning(WarningZeroFeed, "Test 2", 2))
	ws.Add(NewWarning(WarningMissingTool, "Test 3", 3))

	missingTool := ws.OfType(WarningMissingTool)
	if len(missingTool) != 2 {
		t.Errorf("expected 2 MissingTool warnings, got %d", len(missingTool))
	}

	zeroFeed := ws.OfType(WarningZeroFeed)
	if len(zeroFeed) != 1 {
		t.Errorf("expected 1 ZeroFeed warning, got %d", len(zeroFeed))
	}
}

func TestWarnings_HasType(t *testing.T) {
	var ws Warnings
	ws.Add(NewWarning(WarningMissingTool, "Test", 1))

	if !ws.HasType(WarningMissingTool) {
		t.Error("expected to have WarningMissingTool")
	}
	if ws.HasType(WarningZeroFeed) {
		t.Error("expected to not have WarningZeroFeed")
	}
}

func TestWarnings_IsEmpty(t *testing.T) {
	var ws Warnings
	if !ws.IsEmpty() {
		t.Error("expected empty warnings to be empty")
	}

	ws.Add(NewWarning(WarningMissingTool, "Test", 1))
	if ws.IsEmpty() {
		t.Error("expected non-empty warnings to not be empty")
	}
}
