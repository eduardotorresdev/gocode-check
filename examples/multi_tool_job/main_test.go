// Package multi_tool_job demonstrates multi-tool validation with UI visualization.
//
// Run with UI:
//
//	GOCODECHECK_UI=1 go test -v ./examples/multi_tool_job
package multi_tool_job

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

func TestMultiToolDrilling(t *testing.T) {
	gcode := `
G21
G90
T1
M3 S1200
G0 X10 Y10 Z5
G1 Z-5 F200
G0 Z5

T2
G0 X40 Y10
G1 Z-8 F200
G0 Z5
M5
`

	trace, err := interpreter.ParseAndInterpret(gcode)
	if err != nil {
		t.Fatalf("parse error: %v", err)
	}

	model, _ := machining.Analyze(trace)
	model = model.
		WithEndMill(1, 6.0, 25.0).
		WithEndMill(2, 10.0, 30.0)

	_ = assert.Expect(trace, model).
		HasHoleCount(2).
		Assert(t)

	_ = assert.Expect(trace, model).
		HasHole(10, 10).
		WithDepth(5.0).
		WithTool(1).
		Assert(t)

	_ = assert.Expect(trace, model).
		HasHole(40, 10).
		WithDepth(8.0).
		WithTool(2).
		Assert(t)
}
