// Package error_handling demonstrates warning handling in the analyzer.
//
// Run with UI:
//
//	GOCODECHECK_UI=1 go test -v ./examples/error_handling
package error_handling

import (
	"os"
	"testing"

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

func TestWarnings(t *testing.T) {
	gcode := `
G21
G90
G0 X0 Y0 Z5
G1 Z-5
`

	trace, err := interpreter.ParseAndInterpret(gcode)
	if err != nil {
		t.Fatalf("parse error: %v", err)
	}

	_, warnings := machining.Analyze(trace)

	if !warnings.HasType(machining.WarningMissingTool) {
		t.Error("expected WarningMissingTool")
	}
	if !warnings.HasType(machining.WarningZeroFeed) {
		t.Error("expected WarningZeroFeed")
	}
}
