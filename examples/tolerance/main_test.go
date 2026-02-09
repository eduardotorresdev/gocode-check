// Package tolerance demonstrates custom tolerance usage.
//
// Run with UI:
//
//	GOCODECHECK_UI=1 go test -v ./examples/tolerance
package tolerance

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

func TestCustomTolerance(t *testing.T) {
	gcode := `
G21
G90
T1
G0 X10.0005 Y10.0005 Z5
G1 Z-5 F200
G0 Z5
`

	trace, err := interpreter.ParseAndInterpret(gcode)
	if err != nil {
		t.Fatalf("parse error: %v", err)
	}

	model, _ := machining.Analyze(trace)

	_ = assert.ExpectWithTolerance(trace, model, 0.001).
		HasHole(10.0, 10.0).
		WithDepth(5.0).
		Assert(t)
}
