// Package basic_holes demonstrates basic hole drilling validation with UI visualization.
//
// Run with UI:
//
//	GOCODECHECK_UI=1 go test -v ./examples/basic_holes
package basic_holes

import (
	"os"
	"testing"

	"github.com/eduardotorresdev/gocode-check/pkg/assert"
	"github.com/eduardotorresdev/gocode-check/pkg/interpreter"
	"github.com/eduardotorresdev/gocode-check/pkg/machining"
	"github.com/eduardotorresdev/gocode-check/pkg/ui"
)

func TestMain(m *testing.M) {
	var cleanup func()
	// Enable UI visualization when GOCODECHECK_UI is set
	if os.Getenv("GOCODECHECK_UI") != "" {
		cleanup = ui.Enable(ui.DefaultConfig().
			WithSpeed(ui.SpeedNormal).
			WithAutoOpen(true))
	}
	exitCode := m.Run()
	if cleanup != nil {
		cleanup()
	}
	os.Exit(exitCode)
}

// TestSingleHole validates a simple drilling operation
func TestSingleHole(t *testing.T) {
	gcode := `
; Single hole drilling operation
G21         ; Metric units
G90         ; Absolute positioning
T1          ; Select tool 1
M3 S1000    ; Spindle on

; Rapid to position
G0 X50 Y50 Z5

; Drill hole
G1 Z-10 F100

; Retract
G0 Z5
M5          ; Spindle off
M30         ; Program end
`

	trace, err := interpreter.ParseAndInterpret(gcode)
	if err != nil {
		t.Fatalf("parse error: %v", err)
	}

	model, _ := machining.Analyze(trace)

	// Validate the hole exists at expected position
	_ = assert.Expect(trace, model).
		HasHole(50, 50).
		WithDepth(15.0). // Z5 to Z-10 = 15mm depth
		WithTool(1).
		Assert(t)
}

// TestHolesWithStock validates drilling operations on a defined workpiece
func TestHolesWithStock(t *testing.T) {
	gcode := `
; Drilling on 200x100x15 wood board
G21
G90
T1
M3 S1200

; Through hole (15mm stock, drill to Z-20)
G0 X50 Y50 Z5
G1 Z-20 F80
G0 Z5

; Blind hole (only 10mm deep in 15mm stock)
G0 X100 Y50
G1 Z-10 F80
G0 Z5

M5
M30
`

	trace, err := interpreter.ParseAndInterpret(gcode)
	if err != nil {
		t.Fatalf("parse error: %v", err)
	}

	// Define stock: 200mm wide, 100mm tall, 15mm thick
	model, _ := machining.Analyze(trace)
	model = model.WithStock(200, 100, 15)

	// Validate through hole - should pass through the stock
	_ = assert.Expect(trace, model).
		HasHole(50, 50).
		IsPassThrough(). // Stock is 15mm, hole goes to Z-20, so it's through
		Assert(t)

	// Validate blind hole - should NOT pass through
	_ = assert.Expect(trace, model).
		HasHole(100, 50).
		IsBlindHole(). // Only goes 10mm deep in 15mm stock
		Assert(t)
}

// TestHolesWithinStock validates that all operations stay within stock bounds
func TestHolesWithinStock(t *testing.T) {
	gcode := `
; Conservative drilling - all holes within stock
G21
G90
T1
M3 S1200

; Shallow hole 1
G0 X50 Y50 Z5
G1 Z-10 F80
G0 Z5

; Shallow hole 2
G0 X100 Y50
G1 Z-10 F80
G0 Z5

M5
M30
`

	trace, err := interpreter.ParseAndInterpret(gcode)
	if err != nil {
		t.Fatalf("parse error: %v", err)
	}

	// Define stock: 200mm wide, 100mm tall, 15mm thick (Z0 to Z-15)
	model, _ := machining.Analyze(trace)
	model = model.WithStock(200, 100, 15)

	// Validate all operations are within stock bounds
	_ = assert.Expect(trace, model).
		WithinStock().
		Assert(t)
}

// TestMultipleHoles validates a multi-hole drilling pattern
func TestMultipleHoles(t *testing.T) {
	gcode := `
; Multiple hole drilling - 3x3 grid pattern
G21
G90
T1
M3 S1200

; Row 1
G0 X10 Y10 Z5
G1 Z-8 F80
G0 Z5

G0 X30 Y10
G1 Z-8 F80
G0 Z5

G0 X50 Y10
G1 Z-8 F80
G0 Z5

; Row 2
G0 X10 Y30
G1 Z-8 F80
G0 Z5

G0 X30 Y30
G1 Z-8 F80
G0 Z5

G0 X50 Y30
G1 Z-8 F80
G0 Z5

; Row 3
G0 X10 Y50
G1 Z-8 F80
G0 Z5

G0 X30 Y50
G1 Z-8 F80
G0 Z5

G0 X50 Y50
G1 Z-8 F80
G0 Z5

M5
M30
`

	trace, err := interpreter.ParseAndInterpret(gcode)
	if err != nil {
		t.Fatalf("parse error: %v", err)
	}

	model, _ := machining.Analyze(trace)

	// Validate hole count
	_ = assert.Expect(trace, model).
		HasHoleCount(9).
		Assert(t)

	// Validate corner holes
	_ = assert.Expect(trace, model).HasHole(10, 10).Assert(t)
	_ = assert.Expect(trace, model).HasHole(50, 10).Assert(t)
	_ = assert.Expect(trace, model).HasHole(10, 50).Assert(t)
	_ = assert.Expect(trace, model).HasHole(50, 50).Assert(t)

	// Validate center hole
	_ = assert.Expect(trace, model).HasHole(30, 30).Assert(t)
}

// TestHoleWithSpecificDiameter validates hole diameter
func TestHoleWithSpecificDiameter(t *testing.T) {
	gcode := `
; Precision hole with specific diameter requirement
G21
G90
T1
M3 S1500

G0 X100 Y100 Z5
G1 Z-12 F60
G0 Z5

M5
M30
`

	trace, err := interpreter.ParseAndInterpret(gcode)
	if err != nil {
		t.Fatalf("parse error: %v", err)
	}

	model, _ := machining.Analyze(trace)

	// Default tool diameter is 6.0mm
	_ = assert.Expect(trace, model).
		HasHole(100, 100).
		WithDiameter(6.0).
		WithDepth(17.0).
		Assert(t)
}
