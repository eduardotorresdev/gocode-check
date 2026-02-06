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
	// Enable UI visualization when GOCODECHECK_UI is set
	if os.Getenv("GOCODECHECK_UI") != "" {
		cleanup := ui.Enable(ui.DefaultConfig().
			WithSpeed(ui.SpeedNormal).
			WithAutoOpen(true))
		defer cleanup()
	}
	os.Exit(m.Run())
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
