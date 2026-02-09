package machining

import (
	"testing"

	"github.com/eduardotorresdev/gocode-check/pkg/interpreter"
)

func TestAnalyze_Empty(t *testing.T) {
	trace := interpreter.NewExecutionTrace()
	model, warnings := Analyze(trace)

	if !model.IsEmpty() {
		t.Error("expected empty model from empty trace")
	}
	if !warnings.IsEmpty() {
		t.Error("expected no warnings from empty trace")
	}
}

func TestAnalyze_NilTrace(t *testing.T) {
	model, warnings := Analyze(nil)

	if !model.IsEmpty() {
		t.Error("expected empty model from nil trace")
	}
	if !warnings.IsEmpty() {
		t.Error("expected no warnings from nil trace")
	}
}

func TestAnalyze_DetectHole_PlungeCut(t *testing.T) {
	// G-code that creates a hole via vertical plunge
	gcode := `G21
G90
T1
G0 X50 Y50 Z5
G1 Z-10 F100`

	trace, err := interpreter.ParseAndInterpret(gcode)
	if err != nil {
		t.Fatalf("parse error: %v", err)
	}

	model, _ := Analyze(trace)

	if model.HoleCount() != 1 {
		t.Fatalf("expected 1 hole, got %d", model.HoleCount())
	}

	hole := model.Holes[0]
	if hole.Center.X != 50 || hole.Center.Y != 50 {
		t.Errorf("expected hole at (50, 50), got (%v, %v)", hole.Center.X, hole.Center.Y)
	}
	if hole.Depth != 10 { // From Z0 to Z-10
		t.Errorf("expected depth 10, got %v", hole.Depth)
	}
	if hole.Tool != 1 {
		t.Errorf("expected tool 1, got %d", hole.Tool)
	}
}

func TestAnalyze_DetectMultipleHoles(t *testing.T) {
	gcode := `G21
G90
T1
G0 X10 Y10 Z5
G1 Z-5 F100
G0 Z5
G0 X20 Y20
G1 Z-5 F100
G0 Z5
G0 X30 Y30
G1 Z-5 F100`

	trace, err := interpreter.ParseAndInterpret(gcode)
	if err != nil {
		t.Fatalf("parse error: %v", err)
	}

	model, _ := Analyze(trace)

	if model.HoleCount() != 3 {
		t.Fatalf("expected 3 holes, got %d", model.HoleCount())
	}

	// Verify positions
	expectedPositions := []Point2D{
		{X: 10, Y: 10},
		{X: 20, Y: 20},
		{X: 30, Y: 30},
	}

	for i, expected := range expectedPositions {
		if !model.Holes[i].Center.Equal(expected, 1e-6) {
			t.Errorf("hole %d: expected position (%v, %v), got (%v, %v)",
				i, expected.X, expected.Y, model.Holes[i].Center.X, model.Holes[i].Center.Y)
		}
	}
}

func TestAnalyze_ConsolidatePeckDrilling(t *testing.T) {
	gcode := `G21
G90
T1
G0 X50 Y50 Z5
G1 Z-5 F1200
G0 Z-3
G1 Z-10 F1200
G0 Z-8
G1 Z-15 F1200
G0 Z-13
G1 Z-20 F1200
G0 Z-18
G1 Z-25 F1200
G0 Z-23
G1 Z-30 F1200
G0 Z5`

	trace, err := interpreter.ParseAndInterpret(gcode)
	if err != nil {
		t.Fatalf("parse error: %v", err)
	}

	model, _ := Analyze(trace)

	if model.HoleCount() != 1 {
		t.Fatalf("expected 1 hole, got %d", model.HoleCount())
	}

	hole := model.Holes[0]
	if !hole.IsPeckDrilled {
		t.Error("expected hole to be marked as peck-drilled")
	}
	if hole.PeckCount != 6 {
		t.Errorf("expected 6 pecks, got %d", hole.PeckCount)
	}
	if len(hole.Pecks) != 6 {
		t.Errorf("expected 6 peck entries, got %d", len(hole.Pecks))
	}
	if hole.Depth != 30 {
		t.Errorf("expected depth 30, got %v", hole.Depth)
	}
}

func TestAnalyze_DetectSlot(t *testing.T) {
	gcode := `G21
G90
T1
G0 X0 Y50 Z5
G1 Z-5 F100
G1 X100 F200`

	trace, err := interpreter.ParseAndInterpret(gcode)
	if err != nil {
		t.Fatalf("parse error: %v", err)
	}

	model, _ := Analyze(trace)

	if model.SlotCount() != 1 {
		t.Fatalf("expected 1 slot, got %d", model.SlotCount())
	}

	slot := model.Slots[0]
	if slot.Start.X != 0 || slot.Start.Y != 50 {
		t.Errorf("expected slot start (0, 50), got (%v, %v)", slot.Start.X, slot.Start.Y)
	}
	if slot.End.X != 100 || slot.End.Y != 50 {
		t.Errorf("expected slot end (100, 50), got (%v, %v)", slot.End.X, slot.End.Y)
	}
	if slot.Length() != 100 {
		t.Errorf("expected slot length 100, got %v", slot.Length())
	}
}

func TestAnalyze_DetectContour_Square(t *testing.T) {
	// G-code that cuts a square
	gcode := `G21
G90
T1
G0 X0 Y0 Z5
G1 Z-5 F100
G1 X100 F200
G1 Y100
G1 X0
G1 Y0`

	trace, err := interpreter.ParseAndInterpret(gcode)
	if err != nil {
		t.Fatalf("parse error: %v", err)
	}

	model, _ := Analyze(trace)

	if model.ContourCount() != 1 {
		t.Fatalf("expected 1 contour, got %d", model.ContourCount())
	}

	contour := model.Contours[0]
	if !contour.IsClosed(1e-6) {
		t.Error("expected contour to be closed")
	}
	if len(contour.Segments) != 4 {
		t.Errorf("expected 4 segments, got %d", len(contour.Segments))
	}

	// Verify total length (perimeter of 100x100 square)
	if contour.TotalLength() != 400 {
		t.Errorf("expected total length 400, got %v", contour.TotalLength())
	}
}

func TestAnalyze_DetectContour_WithArcs(t *testing.T) {
	// G-code with a linear move followed by an arc
	gcode := `G21
G90
T1
G0 X0 Y0 Z-5
G1 X50 F200
G2 X100 Y50 I0 J50`

	trace, err := interpreter.ParseAndInterpret(gcode)
	if err != nil {
		t.Fatalf("parse error: %v", err)
	}

	model, _ := Analyze(trace)

	if model.ContourCount() != 1 {
		t.Fatalf("expected 1 contour, got %d", model.ContourCount())
	}

	contour := model.Contours[0]
	if len(contour.Segments) != 2 {
		t.Errorf("expected 2 segments, got %d", len(contour.Segments))
	}

	// First segment should be a line
	if contour.Segments[0].Type != SegmentLine {
		t.Errorf("expected first segment to be Line, got %s", contour.Segments[0].Type)
	}

	// Second segment should be a CW arc
	if contour.Segments[1].Type != SegmentArcCW {
		t.Errorf("expected second segment to be ArcCW, got %s", contour.Segments[1].Type)
	}
}

func TestAnalyze_Warning_MissingTool(t *testing.T) {
	// Cutting without selecting a tool first
	gcode := `G21
G90
G0 X0 Y0 Z5
G1 Z-5 F100`

	trace, err := interpreter.ParseAndInterpret(gcode)
	if err != nil {
		t.Fatalf("parse error: %v", err)
	}

	_, warnings := Analyze(trace)

	if !warnings.HasType(WarningMissingTool) {
		t.Error("expected WarningMissingTool")
	}
}

func TestAnalyze_Warning_ZeroFeed(t *testing.T) {
	// Cutting with zero feed rate
	gcode := `G21
G90
T1
G0 X0 Y0 Z5
G1 Z-5`

	trace, err := interpreter.ParseAndInterpret(gcode)
	if err != nil {
		t.Fatalf("parse error: %v", err)
	}

	_, warnings := Analyze(trace)

	if !warnings.HasType(WarningZeroFeed) {
		t.Error("expected WarningZeroFeed")
	}
}

func TestAnalyze_Determinism(t *testing.T) {
	gcode := `G21
G90
T1
G0 X0 Y0 Z5
G1 Z-10 F100
G0 Z5
G0 X50 Y0
G1 Z-10 F100
G0 Z5
G0 X100 Y0
G1 X150 F200`

	trace, err := interpreter.ParseAndInterpret(gcode)
	if err != nil {
		t.Fatalf("parse error: %v", err)
	}

	// Analyze multiple times and verify results are identical
	for i := 0; i < 10; i++ {
		model1, warnings1 := Analyze(trace)
		model2, warnings2 := Analyze(trace)

		if model1.HoleCount() != model2.HoleCount() {
			t.Fatalf("iteration %d: different hole counts: %d vs %d",
				i, model1.HoleCount(), model2.HoleCount())
		}
		if model1.SlotCount() != model2.SlotCount() {
			t.Fatalf("iteration %d: different slot counts: %d vs %d",
				i, model1.SlotCount(), model2.SlotCount())
		}
		if model1.ContourCount() != model2.ContourCount() {
			t.Fatalf("iteration %d: different contour counts: %d vs %d",
				i, model1.ContourCount(), model2.ContourCount())
		}
		if warnings1.Count() != warnings2.Count() {
			t.Fatalf("iteration %d: different warning counts: %d vs %d",
				i, warnings1.Count(), warnings2.Count())
		}

		// Verify hole positions are identical
		for j := range model1.Holes {
			if !model1.Holes[j].Center.Equal(model2.Holes[j].Center, 1e-9) {
				t.Errorf("iteration %d, hole %d: different positions", i, j)
			}
		}
	}
}

func TestAnalyzeWithConfig(t *testing.T) {
	gcode := `G21
G90
T1
G0 X50 Y50 Z5
G1 Z-10 F100`

	trace, err := interpreter.ParseAndInterpret(gcode)
	if err != nil {
		t.Fatalf("parse error: %v", err)
	}

	config := AnalyzerConfig{
		Tolerance:           1e-9,
		MinHoleDepth:        0.001,
		DefaultToolDiameter: 10.0, // Custom tool diameter
		WorkpieceTopZ:       0,
	}

	model, _ := AnalyzeWithConfig(trace, config)

	if model.HoleCount() != 1 {
		t.Fatalf("expected 1 hole, got %d", model.HoleCount())
	}

	// Verify custom tool diameter is used
	if model.Holes[0].Diameter != 10.0 {
		t.Errorf("expected diameter 10, got %v", model.Holes[0].Diameter)
	}
}

func TestDefaultConfig(t *testing.T) {
	config := DefaultConfig()

	if config.Tolerance != DefaultTolerance {
		t.Errorf("expected tolerance %v, got %v", DefaultTolerance, config.Tolerance)
	}
	if config.MinHoleDepth != 0.001 {
		t.Errorf("expected MinHoleDepth 0.001, got %v", config.MinHoleDepth)
	}
	if config.DefaultToolDiameter != 6.0 {
		t.Errorf("expected DefaultToolDiameter 6.0, got %v", config.DefaultToolDiameter)
	}
	if config.WorkpieceTopZ != 0 {
		t.Errorf("expected WorkpieceTopZ 0, got %v", config.WorkpieceTopZ)
	}
	if !config.ConsolidatePeckDrilling {
		t.Errorf("expected ConsolidatePeckDrilling true, got %v", config.ConsolidatePeckDrilling)
	}
	if config.PeckDetectionRadius != 0.5 {
		t.Errorf("expected PeckDetectionRadius 0.5, got %v", config.PeckDetectionRadius)
	}
}

func TestAnalyze_ComplexProgram(t *testing.T) {
	// A more complex program with multiple features
	// Note: Plunge cuts (Z5 to Z-depth) are detected as holes, including those
	// that start the slot and contour operations. This is intentional as the
	// analyzer identifies all vertical plunges as potential holes.
	gcode := `G21
G90
T1
M3 S1000

; Drill three holes
G0 X10 Y10 Z5
G1 Z-15 F50
G0 Z5
G0 X30 Y10
G1 Z-15 F50
G0 Z5
G0 X50 Y10
G1 Z-15 F50
G0 Z5

; Cut a slot
G0 X0 Y50
G1 Z-5 F100
G1 X80 F200
G0 Z5

; Cut a triangle contour
G0 X0 Y100
G1 Z-3 F100
G1 X60 F200
G1 X30 Y150
G1 X0 Y100
G0 Z5

M5
M30`

	trace, err := interpreter.ParseAndInterpret(gcode)
	if err != nil {
		t.Fatalf("parse error: %v", err)
	}

	model, warnings := Analyze(trace)

	// Should have 5 holes (3 drill holes + 1 slot entry + 1 contour entry)
	// Each plunge from Z5 to negative Z is detected as a hole
	if model.HoleCount() != 5 {
		t.Errorf("expected 5 holes, got %d", model.HoleCount())
	}

	// Should have 1 slot
	if model.SlotCount() != 1 {
		t.Errorf("expected 1 slot, got %d", model.SlotCount())
	}

	// Should have 1 closed contour (triangle)
	if model.ContourCount() != 1 {
		t.Errorf("expected 1 contour, got %d", model.ContourCount())
	}

	// Triangle should be closed
	if model.ContourCount() > 0 && !model.Contours[0].IsClosed(1e-6) {
		t.Error("expected triangle contour to be closed")
	}

	// Should have no critical warnings (tool and feed are set)
	if warnings.HasType(WarningMissingTool) {
		t.Error("unexpected WarningMissingTool")
	}

	t.Logf("Complex program analysis: %d holes, %d slots, %d contours, %d warnings",
		model.HoleCount(), model.SlotCount(), model.ContourCount(), warnings.Count())
}

func BenchmarkAnalyze(b *testing.B) {
	gcode := `G21
G90
T1
G0 X0 Y0 Z5
G1 Z-10 F100
G0 Z5
G0 X50 Y50
G1 Z-10 F100
G0 Z5
G0 X100 Y100
G1 X200 F200
G1 Y200
G1 X100
G1 Y100`

	trace, err := interpreter.ParseAndInterpret(gcode)
	if err != nil {
		b.Fatalf("parse error: %v", err)
	}

	b.ResetTimer()
	for i := 0; i < b.N; i++ {
		Analyze(trace)
	}
}
