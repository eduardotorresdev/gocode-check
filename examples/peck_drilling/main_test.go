// Package peck_drilling demonstrates peck drilling consolidation with UI visualization.
//
// Run with UI:
//
//	GOCODECHECK_UI=1 go test -v ./examples/peck_drilling
package peck_drilling

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

func TestPeckDrilling(t *testing.T) {
	gcode := `
G21
G90
T1
M3 S18000

G0 X50 Y50 Z5
G1 Z-5 F1200
G0 Z-3
G1 Z-10 F1200
G0 Z-8
G1 Z-15 F1200
G0 Z5
M5
`

	trace, err := interpreter.ParseAndInterpret(gcode)
	if err != nil {
		t.Fatalf("parse error: %v", err)
	}

	model, _ := machining.Analyze(trace)

	_ = assert.Expect(trace, model).
		HasHoleCount(1).
		HasHole(50, 50).
		IsPeckDrilled().
		WithPeckCount(3).
		WithDepth(15.0).
		Assert(t)
}
