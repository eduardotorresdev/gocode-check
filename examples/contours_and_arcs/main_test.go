// Package contours_and_arcs demonstrates contour validation with arc segments.
//
// Run with UI:
//
//	GOCODECHECK_UI=1 go test -v ./examples/contours_and_arcs
package contours_and_arcs

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

func TestContourWithArc(t *testing.T) {
	gcode := `
G21
G90
T1
M3 S1200

G0 X0 Y0 Z5
G1 Z-2 F100
G1 X50 Y0 F200
G2 X0 Y0 I-25 J0
G0 Z5
M5
`

	trace, err := interpreter.ParseAndInterpret(gcode)
	if err != nil {
		t.Fatalf("parse error: %v", err)
	}

	model, _ := machining.Analyze(trace)

	_ = assert.Expect(trace, model).
		HasContourCount(1).
		Assert(t)

	_ = assert.Expect(trace, model).
		HasContour().
		IsClosed().
		HasSegmentCount(2).
		Assert(t)
}
