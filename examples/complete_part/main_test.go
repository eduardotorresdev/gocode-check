// Package complete_part demonstrates validation of a complex machined part
// with multiple feature types and bounds checking.
//
// Run with UI:
//
//	GOCODECHECK_UI=1 go test -v ./examples/complete_part
package complete_part

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
			WithSpeed(ui.SpeedSlow). // Slow speed for better visualization
			WithAutoOpen(true))
	}
	exitCode := m.Run()
	if cleanup != nil {
		cleanup()
	}
	os.Exit(exitCode)
}

// TestCompleteBracketPart validates a complete machined bracket with:
// - 4 mounting holes in corners
// - 1 center slot for adjustment
// - 1 rectangular pocket outline
func TestCompleteBracketPart(t *testing.T) {
	gcode := `
; Complete Bracket Part
; Material: Aluminum 6061
; Stock Size: 150x100x20mm

G21         ; Metric
G90         ; Absolute
T1          ; 6mm end mill
M3 S2000    ; Spindle on

; ========================================
; PHASE 1: Drill 4 corner mounting holes
; ========================================

; Hole 1 - Bottom Left
G0 X15 Y15 Z5
G1 Z-20 F50
G0 Z5

; Hole 2 - Bottom Right  
G0 X135 Y15
G1 Z-20 F50
G0 Z5

; Hole 3 - Top Left
G0 X15 Y85
G1 Z-20 F50
G0 Z5

; Hole 4 - Top Right
G0 X135 Y85
G1 Z-20 F50
G0 Z5

; ========================================
; PHASE 2: Cut center adjustment slot
; ========================================

G0 X50 Y50 Z5
G1 Z-8 F80
G1 X100 F150
G0 Z5

; ========================================
; PHASE 3: Mill rectangular pocket outline
; ========================================

; Start at pocket corner
G0 X30 Y25 Z5
G1 Z-5 F100

; Cut rectangular path
G1 X120 F200    ; Bottom edge
G1 Y75          ; Right edge
G1 X30          ; Top edge
G1 Y25          ; Left edge (closes)

; Retract
G0 Z5

M5              ; Spindle off
M30             ; Program end
`

	trace, err := interpreter.ParseAndInterpret(gcode)
	if err != nil {
		t.Fatalf("parse error: %v", err)
	}

	model, _ := machining.Analyze(trace)

	// ========================================
	// Validate mounting holes
	// ========================================
	t.Run("MountingHoles", func(t *testing.T) {
		// 4 mounting holes + 1 plunge for slot + 1 plunge for pocket = 6 total
		_ = assert.Expect(trace, model).
			HasHoleCount(6).
			Assert(t)

		// Verify each corner hole
		_ = assert.Expect(trace, model).
			HasHole(15, 15).
			WithDepth(20.0).
			Assert(t)

		_ = assert.Expect(trace, model).
			HasHole(135, 15).
			Assert(t)

		_ = assert.Expect(trace, model).
			HasHole(15, 85).
			Assert(t)

		_ = assert.Expect(trace, model).
			HasHole(135, 85).
			Assert(t)
	})

	// ========================================
	// Validate adjustment slot
	// ========================================
	t.Run("AdjustmentSlot", func(t *testing.T) {
		_ = assert.Expect(trace, model).
			HasSlotCount(1).
			Assert(t)

		_ = assert.Expect(trace, model).
			HasSlot(50, 50, 100, 50).
			Assert(t)
	})

	// ========================================
	// Validate pocket outline
	// ========================================
	t.Run("PocketOutline", func(t *testing.T) {
		_ = assert.Expect(trace, model).
			HasContour().
			IsClosed().
			HasSegmentCount(4). // Rectangle
			Assert(t)
	})

	// ========================================
	// Validate bounds (ensure no cuts outside stock)
	// ========================================
	t.Run("WorkEnvelope", func(t *testing.T) {
		bounds := assert.Bounds{
			MinX: 0, MaxX: 150, // Stock width
			MinY: 0, MaxY: 100, // Stock height
			MinZ: -25, MaxZ: 10, // Max depth + clearance
		}

		_ = assert.Expect(trace, model).
			NoOperationOutside(bounds).
			Assert(t)
	})
}

// TestFlangePart validates a circular flange pattern
func TestFlangePart(t *testing.T) {
	gcode := `
; Circular Flange with 6 bolt holes
; Diameter: 80mm
; 6 holes on 60mm bolt circle

G21
G90
T1
M3 S1800

; Center hole
G0 X0 Y0 Z5
G1 Z-15 F60
G0 Z5

; Bolt hole 1 (0 degrees on R30 circle)
G0 X30 Y0
G1 Z-15 F60
G0 Z5

; Bolt hole 2 (60 degrees)
G0 X15 Y25.98
G1 Z-15 F60
G0 Z5

; Bolt hole 3 (120 degrees)
G0 X-15 Y25.98
G1 Z-15 F60
G0 Z5

; Bolt hole 4 (180 degrees)
G0 X-30 Y0
G1 Z-15 F60
G0 Z5

; Bolt hole 5 (240 degrees)
G0 X-15 Y-25.98
G1 Z-15 F60
G0 Z5

; Bolt hole 6 (300 degrees)
G0 X15 Y-25.98
G1 Z-15 F60
G0 Z5

M5
M30
`

	trace, err := interpreter.ParseAndInterpret(gcode)
	if err != nil {
		t.Fatalf("parse error: %v", err)
	}

	model, _ := machining.Analyze(trace)

	// Validate all 7 holes (1 center + 6 bolt circle)
	_ = assert.Expect(trace, model).
		HasHoleCount(7).
		Assert(t)

	// Validate center hole
	_ = assert.Expect(trace, model).
		HasHole(0, 0).
		WithDepth(15.0).
		Assert(t)

	// Validate a few bolt holes
	_ = assert.Expect(trace, model).HasHole(30, 0).Assert(t)
	_ = assert.Expect(trace, model).HasHole(-30, 0).Assert(t)
}

// TestKeywayCutting validates a keyway slot operation
func TestKeywayCutting(t *testing.T) {
	gcode := `
; Keyway cutting operation
; Width: 8mm, Depth: 4mm, Length: 40mm

G21
G90
T1          ; 8mm keyway cutter
M3 S1200

; Position at keyway start
G0 X10 Y0 Z5

; Plunge to depth
G1 Z-4 F40

; Cut keyway length
G1 X50 F100

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

	// Validate keyway slot
	_ = assert.Expect(trace, model).
		HasSlot(10, 0, 50, 0).
		Assert(t)

	// Validate bounds
	bounds := assert.Bounds{
		MinX: 0, MaxX: 60,
		MinY: -10, MaxY: 10,
		MinZ: -10, MaxZ: 10,
	}

	_ = assert.Expect(trace, model).
		NoOperationOutside(bounds).
		Assert(t)
}
