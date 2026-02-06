// Package slots_and_contours demonstrates slot cutting and contour milling validation.
//
// Run with UI:
//
//	GOCODECHECK_UI=1 go test -v ./examples/slots_and_contours
package slots_and_contours

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

// TestHorizontalSlot validates a simple horizontal slot
func TestHorizontalSlot(t *testing.T) {
	gcode := `
; Horizontal slot cutting
G21
G90
T1
M3 S1000

; Position at slot start
G0 X0 Y50 Z5

; Plunge
G1 Z-5 F100

; Cut slot horizontally
G1 X100 F200

; Retract
G0 Z5
M5
M30
`

	trace, err := interpreter.ParseAndInterpret(gcode)
	if err != nil {
		t.Fatalf("parse error: %v", err)
	}

	model, _ := machining.Analyze(trace)

	// Validate the slot exists
	_ = assert.Expect(trace, model).
		HasSlot(0, 50, 100, 50).
		Assert(t)

	_ = assert.Expect(trace, model).
		HasSlotCount(1).
		Assert(t)
}

// TestVerticalSlot validates a vertical slot
func TestVerticalSlot(t *testing.T) {
	gcode := `
; Vertical slot cutting
G21
G90
T1
M3 S1000

; Position at slot start
G0 X25 Y0 Z5

; Plunge
G1 Z-3 F100

; Cut slot vertically
G1 Y80 F200

; Retract
G0 Z5
M5
M30
`

	trace, err := interpreter.ParseAndInterpret(gcode)
	if err != nil {
		t.Fatalf("parse error: %v", err)
	}

	model, _ := machining.Analyze(trace)

	// Validate the slot exists
	_ = assert.Expect(trace, model).
		HasSlot(25, 0, 25, 80).
		Assert(t)
}

// TestSquareContour validates a closed square contour
func TestSquareContour(t *testing.T) {
	gcode := `
; Square contour milling
G21
G90
T1
M3 S1200

; Move to start position
G0 X0 Y0 Z5
G1 Z-5 F100

; Cut square contour
G1 X100 F200    ; Bottom edge
G1 Y100         ; Right edge
G1 X0           ; Top edge
G1 Y0           ; Left edge (closes contour)

; Retract
G0 Z5
M5
M30
`

	trace, err := interpreter.ParseAndInterpret(gcode)
	if err != nil {
		t.Fatalf("parse error: %v", err)
	}

	model, _ := machining.Analyze(trace)

	// Validate the contour
	_ = assert.Expect(trace, model).
		HasContour().
		IsClosed().
		HasSegmentCount(4). // Square has 4 sides
		Assert(t)
}

// TestTriangleContour validates a closed triangular contour
func TestTriangleContour(t *testing.T) {
	gcode := `
; Triangle contour milling
G21
G90
T1
M3 S1200

; Start at bottom-left vertex
G0 X0 Y0 Z5
G1 Z-4 F100

; Cut triangle
G1 X80 F200         ; Bottom edge
G1 X40 Y70          ; Right edge to apex
G1 X0 Y0            ; Left edge back to start

; Retract
G0 Z5
M5
M30
`

	trace, err := interpreter.ParseAndInterpret(gcode)
	if err != nil {
		t.Fatalf("parse error: %v", err)
	}

	model, _ := machining.Analyze(trace)

	// Validate the triangular contour
	_ = assert.Expect(trace, model).
		HasContour().
		IsClosed().
		HasSegmentCount(3). // Triangle has 3 sides
		Assert(t)
}

// TestOpenContour validates an open L-shaped path
func TestOpenContour(t *testing.T) {
	gcode := `
; L-shaped open contour
G21
G90
T1
M3 S1000

; Start position
G0 X0 Y0 Z-3

; Cut L-shape (does not close)
G1 X60 F200     ; Horizontal segment
G1 Y40          ; Vertical segment

; Retract
G0 Z5
M5
M30
`

	trace, err := interpreter.ParseAndInterpret(gcode)
	if err != nil {
		t.Fatalf("parse error: %v", err)
	}

	model, _ := machining.Analyze(trace)

	// Validate open contour
	_ = assert.Expect(trace, model).
		HasContour().
		IsOpen().
		HasSegmentCount(2).
		Assert(t)
}

// TestMultipleSlots validates parallel slot pattern
func TestMultipleSlots(t *testing.T) {
	gcode := `
; Multiple parallel slots
G21
G90
T1
M3 S1000

; Slot 1
G0 X0 Y10 Z5
G1 Z-4 F100
G1 X80 F200
G0 Z5

; Slot 2
G0 X0 Y30
G1 Z-4 F100
G1 X80 F200
G0 Z5

; Slot 3
G0 X0 Y50
G1 Z-4 F100
G1 X80 F200
G0 Z5

M5
M30
`

	trace, err := interpreter.ParseAndInterpret(gcode)
	if err != nil {
		t.Fatalf("parse error: %v", err)
	}

	model, _ := machining.Analyze(trace)

	// Validate slot count
	_ = assert.Expect(trace, model).
		HasSlotCount(3).
		Assert(t)

	// Validate each slot exists
	_ = assert.Expect(trace, model).HasSlot(0, 10, 80, 10).Assert(t)
	_ = assert.Expect(trace, model).HasSlot(0, 30, 80, 30).Assert(t)
	_ = assert.Expect(trace, model).HasSlot(0, 50, 80, 50).Assert(t)
}
