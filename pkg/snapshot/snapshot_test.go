package snapshot

import (
	"encoding/json"
	"os"
	"path/filepath"
	"strings"
	"testing"

	"github.com/eduardotorresdev/gocode-check/pkg/machining"
)

// testDir returns a temporary directory for test snapshots.
func testDir(t *testing.T) string {
	t.Helper()
	dir := t.TempDir()
	return filepath.Join(dir, "snapshots")
}

// testConfig returns a test configuration with a temporary directory.
func testConfig(t *testing.T) Config {
	t.Helper()
	return Config{
		Dir:       testDir(t),
		Precision: DefaultPrecision,
	}
}

func TestDefaultConfig(t *testing.T) {
	cfg := DefaultConfig()

	if cfg.Dir != DefaultDir {
		t.Errorf("expected Dir %q, got %q", DefaultDir, cfg.Dir)
	}
	if cfg.Precision != DefaultPrecision {
		t.Errorf("expected Precision %d, got %d", DefaultPrecision, cfg.Precision)
	}
}

func TestRoundFloat(t *testing.T) {
	tests := []struct {
		input     float64
		precision int
		expected  float64
	}{
		{1.23456789, 6, 1.234568},
		{1.23456789, 4, 1.2346},
		{1.23456789, 2, 1.23},
		{1.23456789, 0, 1},
		{-1.23456789, 4, -1.2346},
		{0.0, 6, 0.0},
		{100.0, 6, 100.0},
	}

	for _, tc := range tests {
		result := roundFloat(tc.input, tc.precision)
		if result != tc.expected {
			t.Errorf("roundFloat(%v, %d) = %v, expected %v", tc.input, tc.precision, result, tc.expected)
		}
	}
}

func TestNormalize_EmptyModel(t *testing.T) {
	model := machining.NewMachiningModel()
	normalized := Normalize(model, DefaultPrecision)

	if len(normalized.Holes) != 0 {
		t.Errorf("expected 0 holes, got %d", len(normalized.Holes))
	}
	if len(normalized.Slots) != 0 {
		t.Errorf("expected 0 slots, got %d", len(normalized.Slots))
	}
	if len(normalized.Contours) != 0 {
		t.Errorf("expected 0 contours, got %d", len(normalized.Contours))
	}
}

func TestNormalize_NilModel(t *testing.T) {
	normalized := Normalize(nil, DefaultPrecision)

	if len(normalized.Holes) != 0 {
		t.Errorf("expected 0 holes, got %d", len(normalized.Holes))
	}
	if len(normalized.Slots) != 0 {
		t.Errorf("expected 0 slots, got %d", len(normalized.Slots))
	}
	if len(normalized.Contours) != 0 {
		t.Errorf("expected 0 contours, got %d", len(normalized.Contours))
	}
}

func TestNormalize_Holes_SortedByPosition(t *testing.T) {
	model := machining.NewMachiningModel()

	// Add holes in unsorted order
	model.AddHole(machining.Hole{Center: machining.Point2D{X: 50, Y: 50}, Depth: 10, Tool: 1})
	model.AddHole(machining.Hole{Center: machining.Point2D{X: 10, Y: 20}, Depth: 10, Tool: 1})
	model.AddHole(machining.Hole{Center: machining.Point2D{X: 10, Y: 10}, Depth: 10, Tool: 1})
	model.AddHole(machining.Hole{Center: machining.Point2D{X: 30, Y: 30}, Depth: 10, Tool: 1})

	normalized := Normalize(model, DefaultPrecision)

	// Verify sorted order: X ascending, then Y ascending
	expected := []machining.Point2D{
		{X: 10, Y: 10},
		{X: 10, Y: 20},
		{X: 30, Y: 30},
		{X: 50, Y: 50},
	}

	for i, exp := range expected {
		if normalized.Holes[i].Center.X != exp.X || normalized.Holes[i].Center.Y != exp.Y {
			t.Errorf("hole[%d]: expected (%.0f, %.0f), got (%.0f, %.0f)",
				i, exp.X, exp.Y, normalized.Holes[i].Center.X, normalized.Holes[i].Center.Y)
		}
	}
}

func TestNormalize_Slots_SortedByPosition(t *testing.T) {
	model := machining.NewMachiningModel()

	// Add slots in unsorted order
	model.AddSlot(machining.Slot{
		Start: machining.Point2D{X: 50, Y: 50},
		End:   machining.Point2D{X: 100, Y: 50},
		Tool:  1,
	})
	model.AddSlot(machining.Slot{
		Start: machining.Point2D{X: 0, Y: 0},
		End:   machining.Point2D{X: 50, Y: 0},
		Tool:  1,
	})

	normalized := Normalize(model, DefaultPrecision)

	// First slot should be (0,0) -> (50,0)
	if normalized.Slots[0].Start.X != 0 {
		t.Errorf("expected first slot start X=0, got %.0f", normalized.Slots[0].Start.X)
	}
	// Second slot should be (50,50) -> (100,50)
	if normalized.Slots[1].Start.X != 50 {
		t.Errorf("expected second slot start X=50, got %.0f", normalized.Slots[1].Start.X)
	}
}

func TestNormalize_Contours_SortedByZ(t *testing.T) {
	model := machining.NewMachiningModel()

	// Add contours at different Z depths
	c1 := machining.Contour{Z: -5, Tool: 1}
	c1.AddSegment(machining.Segment{
		Type:  machining.SegmentLine,
		Start: machining.Point2D{X: 0, Y: 0},
		End:   machining.Point2D{X: 100, Y: 0},
	})
	model.AddContour(c1)

	c2 := machining.Contour{Z: -10, Tool: 1}
	c2.AddSegment(machining.Segment{
		Type:  machining.SegmentLine,
		Start: machining.Point2D{X: 0, Y: 0},
		End:   machining.Point2D{X: 100, Y: 0},
	})
	model.AddContour(c2)

	normalized := Normalize(model, DefaultPrecision)

	// Should be sorted by Z ascending (more negative first)
	if normalized.Contours[0].Z != -10 {
		t.Errorf("expected first contour Z=-10, got %.0f", normalized.Contours[0].Z)
	}
	if normalized.Contours[1].Z != -5 {
		t.Errorf("expected second contour Z=-5, got %.0f", normalized.Contours[1].Z)
	}
}

func TestNormalize_FloatPrecision(t *testing.T) {
	model := machining.NewMachiningModel()

	// Add hole with many decimal places
	model.AddHole(machining.Hole{
		Center:   machining.Point2D{X: 50.123456789, Y: 50.987654321},
		Diameter: 6.123456789,
		Depth:    15.111111111,
		TopZ:     5.222222222,
		BottomZ:  -9.888888888,
		Tool:     1,
	})

	normalized := Normalize(model, 4) // 4 decimal places

	hole := normalized.Holes[0]
	if hole.Center.X != 50.1235 {
		t.Errorf("expected X=50.1235, got %v", hole.Center.X)
	}
	if hole.Center.Y != 50.9877 {
		t.Errorf("expected Y=50.9877, got %v", hole.Center.Y)
	}
	if hole.Diameter != 6.1235 {
		t.Errorf("expected Diameter=6.1235, got %v", hole.Diameter)
	}
}

func TestNewSnapshot(t *testing.T) {
	model := machining.NewMachiningModel()
	model.AddHole(machining.Hole{
		Center: machining.Point2D{X: 50, Y: 50},
		Depth:  10,
		Tool:   1,
	})

	snapshot := NewSnapshot(model, DefaultPrecision)

	if snapshot.Version != Version {
		t.Errorf("expected version %q, got %q", Version, snapshot.Version)
	}
	if len(snapshot.Model.Holes) != 1 {
		t.Errorf("expected 1 hole, got %d", len(snapshot.Model.Holes))
	}
}

func TestSnapshot_ToJSON(t *testing.T) {
	model := machining.NewMachiningModel()
	model.AddHole(machining.Hole{
		Center:   machining.Point2D{X: 50, Y: 50},
		Diameter: 6,
		Depth:    10,
		TopZ:     5,
		BottomZ:  -5,
		Tool:     1,
	})

	snapshot := NewSnapshot(model, DefaultPrecision)
	jsonData, err := snapshot.ToJSON()
	if err != nil {
		t.Fatalf("ToJSON failed: %v", err)
	}

	// Verify it's valid JSON
	var parsed map[string]any
	if err := json.Unmarshal(jsonData, &parsed); err != nil {
		t.Fatalf("produced invalid JSON: %v", err)
	}

	// Verify structure
	if parsed["version"] != Version {
		t.Errorf("expected version %q in JSON", Version)
	}
}

func TestFromJSON(t *testing.T) {
	jsonData := `{
  "version": "1.0.0",
  "model": {
    "holes": [
      {
        "center": {"x": 50, "y": 50},
        "diameter": 6,
        "depth": 10,
        "topZ": 5,
        "bottomZ": -5,
        "tool": 1
      }
    ],
    "slots": [],
    "contours": []
  }
}`

	snapshot, err := FromJSON([]byte(jsonData))
	if err != nil {
		t.Fatalf("FromJSON failed: %v", err)
	}

	if snapshot.Version != "1.0.0" {
		t.Errorf("expected version 1.0.0, got %q", snapshot.Version)
	}
	if len(snapshot.Model.Holes) != 1 {
		t.Errorf("expected 1 hole, got %d", len(snapshot.Model.Holes))
	}
	if snapshot.Model.Holes[0].Center.X != 50 {
		t.Errorf("expected hole X=50, got %v", snapshot.Model.Holes[0].Center.X)
	}
}

func TestFromJSON_InvalidJSON(t *testing.T) {
	_, err := FromJSON([]byte("not json"))
	if err == nil {
		t.Error("expected error for invalid JSON")
	}
}

func TestSaveAndLoad(t *testing.T) {
	config := testConfig(t)

	model := machining.NewMachiningModel()
	model.AddHole(machining.Hole{
		Center:   machining.Point2D{X: 50, Y: 50},
		Diameter: 6,
		Depth:    10,
		Tool:     1,
	})

	// Save snapshot
	if err := Save(model, "test-save-load", config); err != nil {
		t.Fatalf("Save failed: %v", err)
	}

	// Load snapshot
	loaded, err := Load("test-save-load", config)
	if err != nil {
		t.Fatalf("Load failed: %v", err)
	}

	// Verify content
	if loaded.Version != Version {
		t.Errorf("expected version %q, got %q", Version, loaded.Version)
	}
	if len(loaded.Model.Holes) != 1 {
		t.Errorf("expected 1 hole, got %d", len(loaded.Model.Holes))
	}
}

func TestLoad_NotFound(t *testing.T) {
	config := testConfig(t)

	_, err := Load("nonexistent", config)
	if err == nil {
		t.Error("expected error for nonexistent snapshot")
	}
	if !strings.Contains(err.Error(), "snapshot not found") {
		t.Errorf("expected 'snapshot not found' error, got: %v", err)
	}
}

func TestExists(t *testing.T) {
	config := testConfig(t)

	// Should not exist initially
	if Exists("test-exists", config) {
		t.Error("snapshot should not exist initially")
	}

	// Create snapshot
	model := machining.NewMachiningModel()
	if err := Save(model, "test-exists", config); err != nil {
		t.Fatalf("Save failed: %v", err)
	}

	// Should exist now
	if !Exists("test-exists", config) {
		t.Error("snapshot should exist after save")
	}
}

func TestCompare_Match(t *testing.T) {
	config := testConfig(t)

	model := machining.NewMachiningModel()
	model.AddHole(machining.Hole{
		Center: machining.Point2D{X: 50, Y: 50},
		Depth:  10,
		Tool:   1,
	})

	// Save snapshot
	if err := Save(model, "test-compare-match", config); err != nil {
		t.Fatalf("Save failed: %v", err)
	}

	// Compare with same model
	result, err := Compare(model, "test-compare-match", config)
	if err != nil {
		t.Fatalf("Compare failed: %v", err)
	}

	if !result.Match {
		t.Errorf("expected match, got mismatch:\n%s", result.Diff)
	}
}

func TestCompare_Mismatch(t *testing.T) {
	config := testConfig(t)

	model1 := machining.NewMachiningModel()
	model1.AddHole(machining.Hole{
		Center: machining.Point2D{X: 50, Y: 50},
		Depth:  10,
		Tool:   1,
	})

	// Save snapshot
	if err := Save(model1, "test-compare-mismatch", config); err != nil {
		t.Fatalf("Save failed: %v", err)
	}

	// Create different model
	model2 := machining.NewMachiningModel()
	model2.AddHole(machining.Hole{
		Center: machining.Point2D{X: 100, Y: 100}, // Different position
		Depth:  10,
		Tool:   1,
	})

	// Compare with different model
	result, err := Compare(model2, "test-compare-mismatch", config)
	if err != nil {
		t.Fatalf("Compare failed: %v", err)
	}

	if result.Match {
		t.Error("expected mismatch, got match")
	}

	// Verify diff contains useful information
	if !strings.Contains(result.Diff, "50") || !strings.Contains(result.Diff, "100") {
		t.Errorf("diff should contain position values:\n%s", result.Diff)
	}
}

func TestDeterminism(t *testing.T) {
	model := machining.NewMachiningModel()

	// Add features in random-ish order
	model.AddHole(machining.Hole{Center: machining.Point2D{X: 50, Y: 50}, Depth: 10, Tool: 1})
	model.AddHole(machining.Hole{Center: machining.Point2D{X: 10, Y: 10}, Depth: 5, Tool: 1})
	model.AddSlot(machining.Slot{
		Start: machining.Point2D{X: 0, Y: 100},
		End:   machining.Point2D{X: 100, Y: 100},
		Tool:  1,
	})

	// Generate snapshots multiple times
	snapshots := make([]string, 10)
	for i := 0; i < 10; i++ {
		s := NewSnapshot(model, DefaultPrecision)
		data, err := s.ToJSON()
		if err != nil {
			t.Fatalf("ToJSON failed: %v", err)
		}
		snapshots[i] = string(data)
	}

	// All snapshots should be identical
	for i := 1; i < len(snapshots); i++ {
		if snapshots[i] != snapshots[0] {
			t.Errorf("snapshot %d differs from snapshot 0:\n%s\nvs\n%s",
				i, snapshots[0], snapshots[i])
		}
	}
}

func TestShouldUpdate(t *testing.T) {
	// Save original value
	original := os.Getenv("UPDATE_SNAPSHOTS")
	defer os.Setenv("UPDATE_SNAPSHOTS", original)

	tests := []struct {
		envValue string
		expected bool
	}{
		{"true", true},
		{"1", true},
		{"yes", true},
		{"false", false},
		{"0", false},
		{"no", false},
		{"", false},
	}

	for _, tc := range tests {
		os.Setenv("UPDATE_SNAPSHOTS", tc.envValue)
		if got := ShouldUpdate(); got != tc.expected {
			t.Errorf("ShouldUpdate() with UPDATE_SNAPSHOTS=%q: got %v, expected %v",
				tc.envValue, got, tc.expected)
		}
	}
}

func TestGenerateDiff(t *testing.T) {
	expected := `{
  "version": "1.0.0",
  "holes": [
    {"x": 50, "y": 50}
  ]
}`

	actual := `{
  "version": "1.0.0",
  "holes": [
    {"x": 100, "y": 100}
  ]
}`

	diff := generateDiff(expected, actual)

	// Should contain the header
	if !strings.Contains(diff, "--- Expected") {
		t.Error("diff should contain '--- Expected'")
	}
	if !strings.Contains(diff, "+++ Actual") {
		t.Error("diff should contain '+++ Actual'")
	}

	// Should contain the differing values
	if !strings.Contains(diff, "50") && !strings.Contains(diff, "100") {
		t.Error("diff should contain the differing values")
	}
}

func TestNormalizeSegment_Arc(t *testing.T) {
	segment := machining.Segment{
		Type:   machining.SegmentArcCW,
		Start:  machining.Point2D{X: 0, Y: 0},
		End:    machining.Point2D{X: 50, Y: 50},
		Center: machining.Point2D{X: 25, Y: 25},
		Radius: 35.355339,
	}

	normalized := normalizeSegment(segment, 4)

	if normalized.Type != "ArcCW" {
		t.Errorf("expected type ArcCW, got %s", normalized.Type)
	}
	if normalized.Center.X != 25 {
		t.Errorf("expected center X=25, got %v", normalized.Center.X)
	}
	if normalized.Radius != 35.3553 {
		t.Errorf("expected radius 35.3553, got %v", normalized.Radius)
	}
}

func TestNormalizeSegment_Line(t *testing.T) {
	segment := machining.Segment{
		Type:  machining.SegmentLine,
		Start: machining.Point2D{X: 0, Y: 0},
		End:   machining.Point2D{X: 100, Y: 100},
	}

	normalized := normalizeSegment(segment, DefaultPrecision)

	if normalized.Type != "Line" {
		t.Errorf("expected type Line, got %s", normalized.Type)
	}
	// Line segments should not have center/radius (zero values)
	if normalized.Center.X != 0 || normalized.Center.Y != 0 {
		t.Errorf("line segment should have zero center")
	}
	if normalized.Radius != 0 {
		t.Errorf("line segment should have zero radius")
	}
}

func BenchmarkNormalize(b *testing.B) {
	model := machining.NewMachiningModel()

	// Add many features
	for i := 0; i < 100; i++ {
		model.AddHole(machining.Hole{
			Center: machining.Point2D{X: float64(i * 10), Y: float64(i * 10)},
			Depth:  10,
			Tool:   1,
		})
	}

	for i := 0; i < 50; i++ {
		model.AddSlot(machining.Slot{
			Start: machining.Point2D{X: float64(i * 20), Y: 0},
			End:   machining.Point2D{X: float64(i*20 + 100), Y: 0},
			Tool:  1,
		})
	}

	b.ResetTimer()
	for i := 0; i < b.N; i++ {
		Normalize(model, DefaultPrecision)
	}
}

func BenchmarkToJSON(b *testing.B) {
	model := machining.NewMachiningModel()

	for i := 0; i < 50; i++ {
		model.AddHole(machining.Hole{
			Center: machining.Point2D{X: float64(i * 10), Y: float64(i * 10)},
			Depth:  10,
			Tool:   1,
		})
	}

	snapshot := NewSnapshot(model, DefaultPrecision)

	b.ResetTimer()
	for i := 0; i < b.N; i++ {
		_, _ = snapshot.ToJSON()
	}
}
