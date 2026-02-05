package interpreter

import (
	"testing"

	"github.com/eduardotorresdev/gocode-check/pkg/parser"
)

func TestNewMachineState(t *testing.T) {
	state := NewMachineState()

	if state.Position.X != 0 || state.Position.Y != 0 || state.Position.Z != 0 {
		t.Error("expected position to be (0, 0, 0)")
	}
	if state.Unit != UnitMillimeters {
		t.Error("expected default unit to be millimeters")
	}
	if state.Plane != PlaneXY {
		t.Error("expected default plane to be XY")
	}
	if state.Mode != ModeAbsolute {
		t.Error("expected default mode to be absolute")
	}
	if state.Tool != nil {
		t.Error("expected default tool to be nil")
	}
	if state.Feed != 0 {
		t.Error("expected default feed to be 0")
	}
	if state.Spindle != 0 {
		t.Error("expected default spindle to be 0")
	}
}

func TestMachineState_Clone(t *testing.T) {
	state := NewMachineState()
	state.Position = Position{X: 10, Y: 20, Z: 30}
	state.Unit = UnitInches
	state.SetTool(5)

	clone := state.Clone()

	// Modify original
	state.Position.X = 100
	state.SetTool(10)

	// Clone should be independent
	if clone.Position.X != 10 {
		t.Error("clone position should not be affected by original")
	}
	if clone.GetTool() != 5 {
		t.Error("clone tool should not be affected by original")
	}
}

func TestInterpreter_Empty(t *testing.T) {
	interp := New()
	trace, err := interp.Interpret([]parser.Instruction{})
	if err != nil {
		t.Fatalf("unexpected error: %v", err)
	}
	if trace.EventCount() != 0 {
		t.Errorf("expected 0 events, got %d", trace.EventCount())
	}
}

func TestInterpreter_G0_RapidMove(t *testing.T) {
	gcode := "G0 X10 Y20 Z5"
	instructions, err := parser.ParseFile(gcode)
	if err != nil {
		t.Fatalf("parse error: %v", err)
	}

	interp := New()
	trace, err := interp.Interpret(instructions)
	if err != nil {
		t.Fatalf("interpret error: %v", err)
	}

	if trace.EventCount() != 1 {
		t.Fatalf("expected 1 event, got %d", trace.EventCount())
	}

	event := trace.Events[0]
	if event.Type != EventRapidMove {
		t.Errorf("expected RapidMove, got %s", event.Type)
	}
	if event.From.X != 0 || event.From.Y != 0 || event.From.Z != 0 {
		t.Error("expected from position to be origin")
	}
	if event.To.X != 10 || event.To.Y != 20 || event.To.Z != 5 {
		t.Errorf("expected to position (10, 20, 5), got (%v, %v, %v)", event.To.X, event.To.Y, event.To.Z)
	}

	// Check final state
	if trace.FinalState.Position.X != 10 || trace.FinalState.Position.Y != 20 || trace.FinalState.Position.Z != 5 {
		t.Error("final state position incorrect")
	}
}

func TestInterpreter_G1_LinearCut(t *testing.T) {
	gcode := `G0 X0 Y0
G1 X50 Y50 F500`
	instructions, err := parser.ParseFile(gcode)
	if err != nil {
		t.Fatalf("parse error: %v", err)
	}

	interp := New()
	trace, err := interp.Interpret(instructions)
	if err != nil {
		t.Fatalf("interpret error: %v", err)
	}

	linearCuts := trace.LinearCuts()
	if len(linearCuts) != 1 {
		t.Fatalf("expected 1 linear cut, got %d", len(linearCuts))
	}

	cut := linearCuts[0]
	if cut.Feed != 500 {
		t.Errorf("expected feed 500, got %v", cut.Feed)
	}
	if cut.To.X != 50 || cut.To.Y != 50 {
		t.Errorf("expected to position (50, 50), got (%v, %v)", cut.To.X, cut.To.Y)
	}

	// Check final state
	if trace.FinalState.Feed != 500 {
		t.Errorf("expected final feed 500, got %v", trace.FinalState.Feed)
	}
}

func TestInterpreter_G2_ArcCW(t *testing.T) {
	gcode := "G2 X20 Y20 I10 J0"
	instructions, err := parser.ParseFile(gcode)
	if err != nil {
		t.Fatalf("parse error: %v", err)
	}

	interp := New()
	trace, err := interp.Interpret(instructions)
	if err != nil {
		t.Fatalf("interpret error: %v", err)
	}

	arcs := trace.ArcCuts()
	if len(arcs) != 1 {
		t.Fatalf("expected 1 arc, got %d", len(arcs))
	}

	arc := arcs[0]
	if arc.Type != EventArcCW {
		t.Errorf("expected ArcCW, got %s", arc.Type)
	}
	if arc.Arc == nil {
		t.Fatal("expected arc data to be set")
	}
	if !arc.Arc.Clockwise {
		t.Error("expected clockwise arc")
	}
	if arc.Arc.I != 10 || arc.Arc.J != 0 {
		t.Errorf("expected I=10, J=0, got I=%v, J=%v", arc.Arc.I, arc.Arc.J)
	}
}

func TestInterpreter_G3_ArcCCW(t *testing.T) {
	gcode := "G3 X20 Y20 I0 J10"
	instructions, err := parser.ParseFile(gcode)
	if err != nil {
		t.Fatalf("parse error: %v", err)
	}

	interp := New()
	trace, err := interp.Interpret(instructions)
	if err != nil {
		t.Fatalf("interpret error: %v", err)
	}

	arcs := trace.ArcCuts()
	if len(arcs) != 1 {
		t.Fatalf("expected 1 arc, got %d", len(arcs))
	}

	arc := arcs[0]
	if arc.Type != EventArcCCW {
		t.Errorf("expected ArcCCW, got %s", arc.Type)
	}
	if arc.Arc.Clockwise {
		t.Error("expected counter-clockwise arc")
	}
}

func TestInterpreter_G90_AbsoluteMode(t *testing.T) {
	gcode := `G91
G0 X10
G90
G0 X20`
	instructions, err := parser.ParseFile(gcode)
	if err != nil {
		t.Fatalf("parse error: %v", err)
	}

	interp := New()
	trace, err := interp.Interpret(instructions)
	if err != nil {
		t.Fatalf("interpret error: %v", err)
	}

	rapidMoves := trace.RapidMoves()
	if len(rapidMoves) != 2 {
		t.Fatalf("expected 2 rapid moves, got %d", len(rapidMoves))
	}

	// First move is incremental: 0 + 10 = 10
	if rapidMoves[0].To.X != 10 {
		t.Errorf("expected first move to X=10, got %v", rapidMoves[0].To.X)
	}

	// Second move is absolute: directly to 20
	if rapidMoves[1].To.X != 20 {
		t.Errorf("expected second move to X=20, got %v", rapidMoves[1].To.X)
	}

	if trace.FinalState.Mode != ModeAbsolute {
		t.Error("expected final mode to be absolute")
	}
}

func TestInterpreter_G91_IncrementalMode(t *testing.T) {
	gcode := `G91
G0 X10
G0 X10`
	instructions, err := parser.ParseFile(gcode)
	if err != nil {
		t.Fatalf("parse error: %v", err)
	}

	interp := New()
	trace, err := interp.Interpret(instructions)
	if err != nil {
		t.Fatalf("interpret error: %v", err)
	}

	rapidMoves := trace.RapidMoves()
	if len(rapidMoves) != 2 {
		t.Fatalf("expected 2 rapid moves, got %d", len(rapidMoves))
	}

	// First move: 0 + 10 = 10
	if rapidMoves[0].To.X != 10 {
		t.Errorf("expected first move to X=10, got %v", rapidMoves[0].To.X)
	}

	// Second move: 10 + 10 = 20
	if rapidMoves[1].To.X != 20 {
		t.Errorf("expected second move to X=20, got %v", rapidMoves[1].To.X)
	}

	if trace.FinalState.Mode != ModeIncremental {
		t.Error("expected final mode to be incremental")
	}
}

func TestInterpreter_G20_Inches(t *testing.T) {
	gcode := "G20"
	instructions, err := parser.ParseFile(gcode)
	if err != nil {
		t.Fatalf("parse error: %v", err)
	}

	interp := New()
	trace, err := interp.Interpret(instructions)
	if err != nil {
		t.Fatalf("interpret error: %v", err)
	}

	if trace.FinalState.Unit != UnitInches {
		t.Error("expected unit to be inches")
	}
}

func TestInterpreter_G21_Millimeters(t *testing.T) {
	gcode := `G20
G21`
	instructions, err := parser.ParseFile(gcode)
	if err != nil {
		t.Fatalf("parse error: %v", err)
	}

	interp := New()
	trace, err := interp.Interpret(instructions)
	if err != nil {
		t.Fatalf("interpret error: %v", err)
	}

	if trace.FinalState.Unit != UnitMillimeters {
		t.Error("expected unit to be millimeters")
	}
}

func TestInterpreter_ToolChange(t *testing.T) {
	gcode := `T1
T5`
	instructions, err := parser.ParseFile(gcode)
	if err != nil {
		t.Fatalf("parse error: %v", err)
	}

	interp := New()
	trace, err := interp.Interpret(instructions)
	if err != nil {
		t.Fatalf("interpret error: %v", err)
	}

	toolChanges := trace.ToolChanges()
	if len(toolChanges) != 2 {
		t.Fatalf("expected 2 tool changes, got %d", len(toolChanges))
	}

	if toolChanges[0].Tool != 1 {
		t.Errorf("expected first tool change to T1, got T%d", toolChanges[0].Tool)
	}
	if toolChanges[1].Tool != 5 {
		t.Errorf("expected second tool change to T5, got T%d", toolChanges[1].Tool)
	}

	if trace.FinalState.GetTool() != 5 {
		t.Errorf("expected final tool to be 5, got %d", trace.FinalState.GetTool())
	}
}

func TestInterpreter_M3_SpindleOnCW(t *testing.T) {
	gcode := "M3 S1000"
	instructions, err := parser.ParseFile(gcode)
	if err != nil {
		t.Fatalf("parse error: %v", err)
	}

	interp := New()
	trace, err := interp.Interpret(instructions)
	if err != nil {
		t.Fatalf("interpret error: %v", err)
	}

	events := trace.EventsOfType(EventSpindleStart)
	if len(events) != 1 {
		t.Fatalf("expected 1 spindle start event, got %d", len(events))
	}

	if events[0].Spindle != 1000 {
		t.Errorf("expected spindle speed 1000, got %v", events[0].Spindle)
	}
	if !events[0].SpindleCW {
		t.Error("expected clockwise spindle rotation")
	}

	if !trace.FinalState.SpindleOn {
		t.Error("expected spindle to be on")
	}
	if !trace.FinalState.SpindleCW {
		t.Error("expected spindle to be clockwise")
	}
}

func TestInterpreter_M4_SpindleOnCCW(t *testing.T) {
	gcode := "M4 S500"
	instructions, err := parser.ParseFile(gcode)
	if err != nil {
		t.Fatalf("parse error: %v", err)
	}

	interp := New()
	trace, err := interp.Interpret(instructions)
	if err != nil {
		t.Fatalf("interpret error: %v", err)
	}

	events := trace.EventsOfType(EventSpindleStart)
	if len(events) != 1 {
		t.Fatalf("expected 1 spindle start event, got %d", len(events))
	}

	if events[0].SpindleCW {
		t.Error("expected counter-clockwise spindle rotation")
	}
}

func TestInterpreter_M5_SpindleOff(t *testing.T) {
	gcode := `M3 S1000
M5`
	instructions, err := parser.ParseFile(gcode)
	if err != nil {
		t.Fatalf("parse error: %v", err)
	}

	interp := New()
	trace, err := interp.Interpret(instructions)
	if err != nil {
		t.Fatalf("interpret error: %v", err)
	}

	if trace.FinalState.SpindleOn {
		t.Error("expected spindle to be off")
	}
}

func TestInterpreter_CompleteProgram(t *testing.T) {
	gcode := `G21
G90
G0 X0 Y0 Z5
T1
M3 S1000
G0 X50 Y50
G1 Z-5 F200
G1 X100 Y100
G0 Z5
M5
M30`

	instructions, err := parser.ParseFile(gcode)
	if err != nil {
		t.Fatalf("parse error: %v", err)
	}

	interp := New()
	trace, err := interp.Interpret(instructions)
	if err != nil {
		t.Fatalf("interpret error: %v", err)
	}

	// Verify event counts
	rapidMoves := trace.RapidMoves()
	linearCuts := trace.LinearCuts()
	toolChanges := trace.ToolChanges()

	if len(rapidMoves) != 3 {
		t.Errorf("expected 3 rapid moves, got %d", len(rapidMoves))
	}
	if len(linearCuts) != 2 {
		t.Errorf("expected 2 linear cuts, got %d", len(linearCuts))
	}
	if len(toolChanges) != 1 {
		t.Errorf("expected 1 tool change, got %d", len(toolChanges))
	}

	// Verify final state
	fs := trace.FinalState
	if fs.Unit != UnitMillimeters {
		t.Error("expected final unit to be millimeters")
	}
	if fs.Mode != ModeAbsolute {
		t.Error("expected final mode to be absolute")
	}
	if fs.GetTool() != 1 {
		t.Errorf("expected final tool to be 1, got %d", fs.GetTool())
	}
	if fs.SpindleOn {
		t.Error("expected spindle to be off")
	}
	if fs.Position.X != 100 || fs.Position.Y != 100 || fs.Position.Z != 5 {
		t.Errorf("expected final position (100, 100, 5), got (%v, %v, %v)",
			fs.Position.X, fs.Position.Y, fs.Position.Z)
	}
}

func TestInterpreter_Determinism(t *testing.T) {
	gcode := `G21
G90
G0 X0 Y0 Z5
G1 X100 Y100 F500
G2 X150 Y100 I25 J0
G3 X100 Y100 I-25 J0
T1
M3 S1000
G1 Z-5 F200
M30`

	instructions, err := parser.ParseFile(gcode)
	if err != nil {
		t.Fatalf("parse error: %v", err)
	}

	// Interpret multiple times
	for i := 0; i < 10; i++ {
		interp1 := New()
		interp2 := New()

		trace1, err1 := interp1.Interpret(instructions)
		trace2, err2 := interp2.Interpret(instructions)

		if err1 != nil || err2 != nil {
			t.Fatalf("iteration %d: unexpected error: err1=%v, err2=%v", i, err1, err2)
		}

		if trace1.EventCount() != trace2.EventCount() {
			t.Fatalf("iteration %d: different event counts: %d vs %d",
				i, trace1.EventCount(), trace2.EventCount())
		}

		for j := range trace1.Events {
			e1, e2 := trace1.Events[j], trace2.Events[j]
			if e1.Type != e2.Type {
				t.Errorf("iteration %d, event %d: different types: %s vs %s",
					i, j, e1.Type, e2.Type)
			}
			if e1.To != e2.To {
				t.Errorf("iteration %d, event %d: different To positions",
					i, j)
			}
		}
	}
}

func TestInterpreter_ParseAndInterpret(t *testing.T) {
	gcode := `G0 X10 Y20`

	trace, err := ParseAndInterpret(gcode)
	if err != nil {
		t.Fatalf("unexpected error: %v", err)
	}

	if trace.EventCount() != 1 {
		t.Errorf("expected 1 event, got %d", trace.EventCount())
	}
}

func TestInterpreter_PartialCoordinates(t *testing.T) {
	// Test that partial coordinates don't change unspecified axes
	gcode := `G0 X10 Y20 Z30
G0 X50`

	trace, err := ParseAndInterpret(gcode)
	if err != nil {
		t.Fatalf("unexpected error: %v", err)
	}

	rapidMoves := trace.RapidMoves()
	if len(rapidMoves) != 2 {
		t.Fatalf("expected 2 rapid moves, got %d", len(rapidMoves))
	}

	// Second move should only change X, Y and Z remain from previous position
	secondMove := rapidMoves[1]
	if secondMove.To.X != 50 {
		t.Errorf("expected X=50, got %v", secondMove.To.X)
	}
	if secondMove.To.Y != 20 {
		t.Errorf("expected Y=20 (unchanged), got %v", secondMove.To.Y)
	}
	if secondMove.To.Z != 30 {
		t.Errorf("expected Z=30 (unchanged), got %v", secondMove.To.Z)
	}
}

func TestInterpreter_FeedRatePersistence(t *testing.T) {
	// Feed rate should persist across moves
	gcode := `G1 X10 F500
G1 X20`

	trace, err := ParseAndInterpret(gcode)
	if err != nil {
		t.Fatalf("unexpected error: %v", err)
	}

	linearCuts := trace.LinearCuts()
	if len(linearCuts) != 2 {
		t.Fatalf("expected 2 linear cuts, got %d", len(linearCuts))
	}

	if linearCuts[0].Feed != 500 {
		t.Errorf("expected first cut feed 500, got %v", linearCuts[0].Feed)
	}
	if linearCuts[1].Feed != 500 {
		t.Errorf("expected second cut feed 500 (persisted), got %v", linearCuts[1].Feed)
	}
}

func TestPosition_Equal(t *testing.T) {
	p1 := Position{X: 10.0, Y: 20.0, Z: 30.0}
	p2 := Position{X: 10.0000001, Y: 20.0, Z: 30.0}
	p3 := Position{X: 15.0, Y: 20.0, Z: 30.0}

	if !p1.Equal(p2, 1e-6) {
		t.Error("expected p1 and p2 to be equal within tolerance")
	}
	if p1.Equal(p3, 1e-6) {
		t.Error("expected p1 and p3 to not be equal")
	}
}

func TestUnit_String(t *testing.T) {
	if UnitMillimeters.String() != "mm" {
		t.Errorf("expected 'mm', got %s", UnitMillimeters.String())
	}
	if UnitInches.String() != "in" {
		t.Errorf("expected 'in', got %s", UnitInches.String())
	}
}

func TestPlane_String(t *testing.T) {
	if PlaneXY.String() != "XY" {
		t.Errorf("expected 'XY', got %s", PlaneXY.String())
	}
}

func TestPositionMode_String(t *testing.T) {
	if ModeAbsolute.String() != "absolute" {
		t.Errorf("expected 'absolute', got %s", ModeAbsolute.String())
	}
	if ModeIncremental.String() != "incremental" {
		t.Errorf("expected 'incremental', got %s", ModeIncremental.String())
	}
}

func TestEventType_String(t *testing.T) {
	tests := []struct {
		eventType EventType
		want      string
	}{
		{EventRapidMove, "RapidMove"},
		{EventLinearCut, "LinearCut"},
		{EventArcCW, "ArcCW"},
		{EventArcCCW, "ArcCCW"},
		{EventDrillCycle, "DrillCycle"},
		{EventToolChange, "ToolChange"},
		{EventSpindleStart, "SpindleStart"},
		{EventSpindleStop, "SpindleStop"},
		{EventUnitChange, "UnitChange"},
		{EventModeChange, "ModeChange"},
	}

	for _, tt := range tests {
		if got := tt.eventType.String(); got != tt.want {
			t.Errorf("EventType(%d).String() = %s, want %s", tt.eventType, got, tt.want)
		}
	}
}

func BenchmarkInterpreter_Interpret(b *testing.B) {
	gcode := `G21
G90
G0 X0 Y0 Z5
G1 X100 Y100 F500
G2 X150 Y100 I25 J0
G3 X100 Y100 I-25 J0
G0 Z5
G0 X200 Y0
G1 Z-5 F200
G1 X300 Y100
M30`

	instructions, err := parser.ParseFile(gcode)
	if err != nil {
		b.Fatalf("parse error: %v", err)
	}

	b.ResetTimer()
	for i := 0; i < b.N; i++ {
		interp := New()
		_, _ = interp.Interpret(instructions)
	}
}
