package assert

import (
	"strings"
	"testing"

	"github.com/eduardotorresdev/gocode-check/pkg/interpreter"
	"github.com/eduardotorresdev/gocode-check/pkg/machining"
)

// Helper to create a trace and model from G-code
func traceAndModelFromGCode(t *testing.T, gcode string) (*interpreter.ExecutionTrace, *machining.MachiningModel) {
	t.Helper()
	trace, err := interpreter.ParseAndInterpret(gcode)
	if err != nil {
		t.Fatalf("parse error: %v", err)
	}
	model, _ := machining.Analyze(trace)
	return trace, model
}

// --- Basic Tests ---

func TestExpect_NilModel(t *testing.T) {
	result := Expect(nil, nil).HasHole(0, 0)

	if result.Pass() {
		t.Error("expected failure for nil model")
	}
	if !strings.Contains(result.Error(), "model is nil") {
		t.Errorf("expected 'model is nil' error, got: %s", result.Error())
	}
}

func TestExpect_EmptyModel(t *testing.T) {
	model := machining.NewMachiningModel()
	result := Expect(nil, model).HasHole(0, 0)

	if result.Pass() {
		t.Error("expected failure for empty model")
	}
}

func TestExpectWithTolerance(t *testing.T) {
	gcode := `G21
G90
T1
G0 X50 Y50 Z5
G1 Z-10 F100`

	trace, model := traceAndModelFromGCode(t, gcode)

	// With tight tolerance - exact match required
	result := ExpectWithTolerance(trace, model, 1e-9).HasHole(50.0000001, 50)
	if result.Pass() {
		t.Error("expected failure with tight tolerance")
	}

	// With loose tolerance - should match
	result = ExpectWithTolerance(trace, model, 0.001).HasHole(50.0001, 50)
	if result.Failed() {
		t.Errorf("expected pass with loose tolerance: %s", result.Error())
	}
}

// --- Hole Assertions ---

func TestHasHole_Exists(t *testing.T) {
	gcode := `G21
G90
T1
G0 X50 Y50 Z5
G1 Z-10 F100`

	trace, model := traceAndModelFromGCode(t, gcode)
	result := Expect(trace, model).HasHole(50, 50)

	if result.Failed() {
		t.Errorf("expected hole at (50, 50): %s", result.Error())
	}
}

func TestHasHole_NotExists(t *testing.T) {
	gcode := `G21
G90
T1
G0 X50 Y50 Z5
G1 Z-10 F100`

	trace, model := traceAndModelFromGCode(t, gcode)
	result := Expect(trace, model).HasHole(100, 100)

	if result.Pass() {
		t.Error("expected failure for non-existent hole")
	}
	// Check that error contains helpful information
	if !strings.Contains(result.Error(), "Available holes") {
		t.Error("expected error to list available holes")
	}
}

func TestHasHoleCount(t *testing.T) {
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

	trace, model := traceAndModelFromGCode(t, gcode)

	result := Expect(trace, model).HasHoleCount(3)
	if result.Failed() {
		t.Errorf("expected 3 holes: %s", result.Error())
	}

	result = Expect(trace, model).HasHoleCount(5)
	if result.Pass() {
		t.Error("expected failure for wrong hole count")
	}
}

func TestWithDiameter(t *testing.T) {
	gcode := `G21
G90
T1
G0 X50 Y50 Z5
G1 Z-10 F100`

	trace, model := traceAndModelFromGCode(t, gcode)

	// Default tool diameter in analyzer is 6.0
	result := Expect(trace, model).HasHole(50, 50).WithDiameter(6.0)
	if result.Failed() {
		t.Errorf("expected hole with diameter 6.0: %s", result.Error())
	}

	result = Expect(trace, model).HasHole(50, 50).WithDiameter(10.0)
	if result.Pass() {
		t.Error("expected failure for wrong diameter")
	}
}

func TestWithDepth(t *testing.T) {
	gcode := `G21
G90
T1
G0 X50 Y50 Z5
G1 Z-10 F100`

	trace, model := traceAndModelFromGCode(t, gcode)

	// Depth should be 10 (from Z0 to Z-10)
	result := Expect(trace, model).HasHole(50, 50).WithDepth(10.0)
	if result.Failed() {
		t.Errorf("expected hole with depth 10.0: %s", result.Error())
	}

	result = Expect(trace, model).HasHole(50, 50).WithDepth(15.0)
	if result.Pass() {
		t.Error("expected failure for wrong depth")
	}
}

func TestWithTool(t *testing.T) {
	gcode := `G21
G90
T1
G0 X50 Y50 Z5
G1 Z-10 F100`

	trace, model := traceAndModelFromGCode(t, gcode)

	result := Expect(trace, model).HasHole(50, 50).WithTool(1)
	if result.Failed() {
		t.Errorf("expected hole with tool 1: %s", result.Error())
	}

	result = Expect(trace, model).HasHole(50, 50).WithTool(2)
	if result.Pass() {
		t.Error("expected failure for wrong tool")
	}
}

func TestPeckAssertions(t *testing.T) {
	gcode := `G21
G90
T1
G0 X50 Y50 Z5
G1 Z-5 F1200
G0 Z-3
G1 Z-10 F1200
G0 Z-8
G1 Z-15 F1200
G0 Z5`

	trace, model := traceAndModelFromGCode(t, gcode)

	result := Expect(trace, model).
		HasHole(50, 50).
		IsPeckDrilled().
		WithPeckCount(3)

	if result.Failed() {
		t.Errorf("expected peck-drilled hole: %s", result.Error())
	}
}

func TestHoleChainedAssertions(t *testing.T) {
	gcode := `G21
G90
T1
G0 X50 Y50 Z5
G1 Z-10 F100`

	trace, model := traceAndModelFromGCode(t, gcode)

	// Chain all assertions
	result := Expect(trace, model).
		HasHole(50, 50).
		WithDiameter(6.0).
		WithDepth(10.0).
		WithTool(1)

	if result.Failed() {
		t.Errorf("chained assertions failed: %s", result.Error())
	}
}

// --- Slot Assertions ---

func TestHasSlot_Exists(t *testing.T) {
	gcode := `G21
G90
T1
G0 X0 Y50 Z5
G1 Z-5 F100
G1 X100 F200`

	trace, model := traceAndModelFromGCode(t, gcode)

	result := Expect(trace, model).HasSlot(0, 50, 100, 50)
	if result.Failed() {
		t.Errorf("expected slot from (0,50) to (100,50): %s", result.Error())
	}
}

func TestHasSlot_NotExists(t *testing.T) {
	gcode := `G21
G90
T1
G0 X0 Y50 Z5
G1 Z-5 F100
G1 X100 F200`

	trace, model := traceAndModelFromGCode(t, gcode)

	result := Expect(trace, model).HasSlot(0, 0, 100, 0)
	if result.Pass() {
		t.Error("expected failure for non-existent slot")
	}
	// Check that error contains helpful information
	if !strings.Contains(result.Error(), "Available slots") {
		t.Error("expected error to list available slots")
	}
}

func TestHasSlotCount(t *testing.T) {
	gcode := `G21
G90
T1
G0 X0 Y50 Z5
G1 Z-5 F100
G1 X100 F200`

	trace, model := traceAndModelFromGCode(t, gcode)

	result := Expect(trace, model).HasSlotCount(1)
	if result.Failed() {
		t.Errorf("expected 1 slot: %s", result.Error())
	}

	result = Expect(trace, model).HasSlotCount(3)
	if result.Pass() {
		t.Error("expected failure for wrong slot count")
	}
}

// --- Contour Assertions ---

func TestHasContour_Exists(t *testing.T) {
	gcode := `G21
G90
T1
G0 X0 Y0 Z5
G1 Z-5 F100
G1 X100 F200
G1 Y100
G1 X0
G1 Y0`

	trace, model := traceAndModelFromGCode(t, gcode)

	result := Expect(trace, model).HasContour()
	if result.Failed() {
		t.Errorf("expected contour: %s", result.Error())
	}
}

func TestHasContour_NotExists(t *testing.T) {
	gcode := `G21
G90
T1
G0 X50 Y50 Z5
G1 Z-10 F100`

	trace, model := traceAndModelFromGCode(t, gcode)

	result := Expect(trace, model).HasContour()
	if result.Pass() {
		t.Error("expected failure for no contours (only hole)")
	}
}

func TestHasContourCount(t *testing.T) {
	gcode := `G21
G90
T1
G0 X0 Y0 Z5
G1 Z-5 F100
G1 X100 F200
G1 Y100
G1 X0
G1 Y0`

	trace, model := traceAndModelFromGCode(t, gcode)

	result := Expect(trace, model).HasContourCount(1)
	if result.Failed() {
		t.Errorf("expected 1 contour: %s", result.Error())
	}

	result = Expect(trace, model).HasContourCount(5)
	if result.Pass() {
		t.Error("expected failure for wrong contour count")
	}
}

func TestIsClosed(t *testing.T) {
	gcode := `G21
G90
T1
G0 X0 Y0 Z5
G1 Z-5 F100
G1 X100 F200
G1 Y100
G1 X0
G1 Y0`

	trace, model := traceAndModelFromGCode(t, gcode)

	result := Expect(trace, model).HasContour().IsClosed()
	if result.Failed() {
		t.Errorf("expected closed contour: %s", result.Error())
	}
}

func TestIsOpen(t *testing.T) {
	// Create an L-shaped path that doesn't close
	gcode := `G21
G90
T1
G0 X0 Y0 Z-5
G1 X100 F200
G1 Y100`

	trace, model := traceAndModelFromGCode(t, gcode)

	result := Expect(trace, model).HasContour().IsOpen()
	if result.Failed() {
		t.Errorf("expected open contour: %s", result.Error())
	}
}

func TestHasSegmentCount(t *testing.T) {
	gcode := `G21
G90
T1
G0 X0 Y0 Z5
G1 Z-5 F100
G1 X100 F200
G1 Y100
G1 X0
G1 Y0`

	trace, model := traceAndModelFromGCode(t, gcode)

	// Square has 4 segments
	result := Expect(trace, model).HasContour().HasSegmentCount(4)
	if result.Failed() {
		t.Errorf("expected 4 segments: %s", result.Error())
	}

	result = Expect(trace, model).HasContour().HasSegmentCount(3)
	if result.Pass() {
		t.Error("expected failure for wrong segment count")
	}
}

func TestContourChainedAssertions(t *testing.T) {
	gcode := `G21
G90
T1
G0 X0 Y0 Z5
G1 Z-5 F100
G1 X100 F200
G1 Y100
G1 X0
G1 Y0`

	trace, model := traceAndModelFromGCode(t, gcode)

	result := Expect(trace, model).
		HasContour().
		IsClosed().
		HasSegmentCount(4)

	if result.Failed() {
		t.Errorf("chained contour assertions failed: %s", result.Error())
	}
}

// --- Bounds Assertions ---

func TestNoOperationOutside_Pass(t *testing.T) {
	gcode := `G21
G90
T1
G0 X50 Y50 Z5
G1 Z-10 F100`

	trace, model := traceAndModelFromGCode(t, gcode)

	bounds := Bounds{
		MinX: 0, MaxX: 100,
		MinY: 0, MaxY: 100,
		MinZ: -20, MaxZ: 10,
	}

	result := Expect(trace, model).NoOperationOutside(bounds)
	if result.Failed() {
		t.Errorf("expected all operations within bounds: %s", result.Error())
	}
}

func TestNoOperationOutside_Fail_XY(t *testing.T) {
	gcode := `G21
G90
T1
G0 X150 Y50 Z5
G1 Z-10 F100`

	trace, model := traceAndModelFromGCode(t, gcode)

	bounds := Bounds{
		MinX: 0, MaxX: 100,
		MinY: 0, MaxY: 100,
		MinZ: -20, MaxZ: 10,
	}

	result := Expect(trace, model).NoOperationOutside(bounds)
	if result.Pass() {
		t.Error("expected failure for hole outside X bounds")
	}
	if !strings.Contains(result.Error(), "outside XY bounds") {
		t.Errorf("expected 'outside XY bounds' error, got: %s", result.Error())
	}
}

func TestNoOperationOutside_Fail_Z(t *testing.T) {
	gcode := `G21
G90
T1
G0 X50 Y50 Z5
G1 Z-30 F100`

	trace, model := traceAndModelFromGCode(t, gcode)

	bounds := Bounds{
		MinX: 0, MaxX: 100,
		MinY: 0, MaxY: 100,
		MinZ: -20, MaxZ: 10,
	}

	result := Expect(trace, model).NoOperationOutside(bounds)
	if result.Pass() {
		t.Error("expected failure for hole outside Z bounds")
	}
	if !strings.Contains(result.Error(), "outside Z bounds") {
		t.Errorf("expected 'outside Z bounds' error, got: %s", result.Error())
	}
}

// --- And() Method Tests ---

func TestAnd_MultipleChains(t *testing.T) {
	gcode := `G21
G90
T1
G0 X50 Y50 Z5
G1 Z-10 F100
G0 Z5
G0 X0 Y0
G1 Z-5 F100
G1 X100 F200
G1 Y100
G1 X0
G1 Y0`

	trace, model := traceAndModelFromGCode(t, gcode)

	result := Expect(trace, model).
		HasHole(50, 50).WithDepth(10.0).
		And().
		HasContour().IsClosed()

	if result.Failed() {
		t.Errorf("multiple assertion chains failed: %s", result.Error())
	}
}

// --- FilteredX Methods Tests ---

func TestFilteredHoles(t *testing.T) {
	gcode := `G21
G90
T1
G0 X50 Y50 Z5
G1 Z-10 F100`

	trace, model := traceAndModelFromGCode(t, gcode)

	result := Expect(trace, model).HasHole(50, 50)
	holes := result.FilteredHoles()

	if len(holes) != 1 {
		t.Errorf("expected 1 filtered hole, got %d", len(holes))
	}
	if holes[0].Center.X != 50 || holes[0].Center.Y != 50 {
		t.Error("filtered hole has wrong position")
	}
}

// --- Error Message Quality Tests ---

func TestErrorMessages_AreDescriptive(t *testing.T) {
	gcode := `G21
G90
T1
G0 X50 Y50 Z5
G1 Z-10 F100`

	trace, model := traceAndModelFromGCode(t, gcode)

	// Test that error messages include context
	result := Expect(trace, model).HasHole(100, 100)
	if !strings.Contains(result.Error(), "HasHole") {
		t.Error("error should include assertion name")
	}

	// Test that chained errors have full context
	result = Expect(trace, model).HasHole(50, 50).WithDiameter(999)
	if !strings.Contains(result.Error(), "HasHole") || !strings.Contains(result.Error(), "WithDiameter") {
		t.Error("chained error should include full context")
	}
}

// --- Testing Integration Tests ---

// mockT implements TestingT for testing purposes
type mockT struct {
	errors []string
	fatal  bool
}

func (m *mockT) Helper()                           {}
func (m *mockT) Name() string                      { return "mockTest" }
func (m *mockT) Errorf(format string, args ...any) { m.errors = append(m.errors, "error") }
func (m *mockT) Fatalf(format string, args ...any) {
	m.errors = append(m.errors, "fatal")
	m.fatal = true
}

func TestAssert_PassingTest(t *testing.T) {
	gcode := `G21
G90
T1
G0 X50 Y50 Z5
G1 Z-10 F100`

	trace, model := traceAndModelFromGCode(t, gcode)
	mock := &mockT{}

	_ = Expect(trace, model).HasHole(50, 50).Assert(mock)

	if len(mock.errors) > 0 {
		t.Error("expected no errors for passing assertion")
	}
}

func TestAssert_FailingTest(t *testing.T) {
	gcode := `G21
G90
T1
G0 X50 Y50 Z5
G1 Z-10 F100`

	trace, model := traceAndModelFromGCode(t, gcode)
	mock := &mockT{}

	_ = Expect(trace, model).HasHole(100, 100).Assert(mock)

	if len(mock.errors) == 0 {
		t.Error("expected error for failing assertion")
	}
	if mock.fatal {
		t.Error("Assert should not call Fatalf")
	}
}

func TestAssertFatal_FailingTest(t *testing.T) {
	gcode := `G21
G90
T1
G0 X50 Y50 Z5
G1 Z-10 F100`

	trace, model := traceAndModelFromGCode(t, gcode)
	mock := &mockT{}

	_ = Expect(trace, model).HasHole(100, 100).AssertFatal(mock)

	if !mock.fatal {
		t.Error("AssertFatal should call Fatalf")
	}
}

func TestMust_AliasForAssertFatal(t *testing.T) {
	gcode := `G21
G90
T1
G0 X50 Y50 Z5
G1 Z-10 F100`

	trace, model := traceAndModelFromGCode(t, gcode)
	mock := &mockT{}

	_ = Expect(trace, model).HasHole(100, 100).Must(mock)

	if !mock.fatal {
		t.Error("Must should call Fatalf")
	}
}

// --- Determinism Tests ---

func TestDeterminism(t *testing.T) {
	gcode := `G21
G90
T1
G0 X50 Y50 Z5
G1 Z-10 F100`

	trace, model := traceAndModelFromGCode(t, gcode)

	// Run the same assertion multiple times
	for i := 0; i < 10; i++ {
		result1 := Expect(trace, model).HasHole(50, 50).WithDepth(10.0)
		result2 := Expect(trace, model).HasHole(50, 50).WithDepth(10.0)

		if result1.Pass() != result2.Pass() {
			t.Error("assertions should be deterministic")
		}
	}
}

// --- Integration Test with Real Usage ---

func TestIntegration_CompleteValidation(t *testing.T) {
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

	trace, model := traceAndModelFromGCode(t, gcode)

	// Verify all features exist
	// Note: The analyzer detects plunge cuts (vertical moves from positive to negative Z)
	// as holes. This includes:
	// - 3 explicit drill holes at (10,10), (30,10), (50,10)
	// - 1 plunge at the start of the slot operation
	// - 1 plunge at the start of the contour operation
	// This behavior is documented in the machining package.
	_ = Expect(trace, model).
		HasHoleCount(5).
		Assert(t)

	_ = Expect(trace, model).
		HasSlotCount(1).
		Assert(t)

	_ = Expect(trace, model).
		HasContour().
		IsClosed().
		HasSegmentCount(3). // Triangle has 3 sides
		Assert(t)

	// Verify specific hole positions
	_ = Expect(trace, model).HasHole(10, 10).Assert(t)
	_ = Expect(trace, model).HasHole(30, 10).Assert(t)
	_ = Expect(trace, model).HasHole(50, 10).Assert(t)

	// Verify bounds
	bounds := Bounds{
		MinX: 0, MaxX: 100,
		MinY: 0, MaxY: 200,
		MinZ: -20, MaxZ: 10,
	}
	_ = Expect(trace, model).NoOperationOutside(bounds).Assert(t)
}

// --- Benchmarks ---

func BenchmarkExpect_HasHole(b *testing.B) {
	gcode := `G21
G90
T1
G0 X50 Y50 Z5
G1 Z-10 F100`

	trace, _ := interpreter.ParseAndInterpret(gcode)
	model, _ := machining.Analyze(trace)

	b.ResetTimer()
	for i := 0; i < b.N; i++ {
		_ = Expect(trace, model).HasHole(50, 50)
	}
}

func BenchmarkExpect_ChainedAssertions(b *testing.B) {
	gcode := `G21
G90
T1
G0 X50 Y50 Z5
G1 Z-10 F100`

	trace, _ := interpreter.ParseAndInterpret(gcode)
	model, _ := machining.Analyze(trace)

	b.ResetTimer()
	for i := 0; i < b.N; i++ {
		_ = Expect(trace, model).
			HasHole(50, 50).
			WithDiameter(6.0).
			WithDepth(10.0).
			WithTool(1)
	}
}
