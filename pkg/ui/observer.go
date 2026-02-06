package ui

import (
	"fmt"
	"time"

	"github.com/eduardotorresdev/gocode-check/pkg/assert"
	"github.com/eduardotorresdev/gocode-check/pkg/interpreter"
)

// uiObserver implements both interpreter.Observer and assert.Observer
type uiObserver struct {
	viewer            *Viewer
	currentTotalSteps int
}

// Verify interface compliance at compile time
var _ interpreter.Observer = (*uiObserver)(nil)
var _ assert.Observer = (*uiObserver)(nil)

// OnInterpretStart handles the start of G-code interpretation.
func (o *uiObserver) OnInterpretStart(event interpreter.InterpretStartEvent) {
	o.currentTotalSteps = event.TotalInstructions

	o.viewer.server.Broadcast(Message{
		Type: "interpret_start",
		Data: map[string]interface{}{
			"totalInstructions": event.TotalInstructions,
		},
	})

	o.viewer.logger.Debug("Interpretation started: %d instructions", event.TotalInstructions)
}

// OnStep handles each execution step.
func (o *uiObserver) OnStep(event interpreter.StepEvent) {
	// Broadcast to UI
	o.viewer.server.Broadcast(Message{
		Type: "step",
		Data: StepMessage{
			Index:       event.Index,
			Total:       o.currentTotalSteps,
			Instruction: event.Instruction,
			Event:       event.Event,
			StateBefore: event.StateBefore,
			StateAfter:  event.StateAfter,
			HasError:    event.Error != nil,
		},
	})

	// Log to console
	o.viewer.logger.Step(
		event.Index,
		o.currentTotalSteps,
		formatInstruction(event.Instruction),
	)

	// Apply delay for human-readable visualization
	if o.viewer.config.Speed != SpeedManual {
		delay := SpeedToDuration(o.viewer.config.Speed)
		time.Sleep(delay)
	}
}

// OnInterpretEnd handles the end of interpretation.
func (o *uiObserver) OnInterpretEnd(event interpreter.InterpretEndEvent) {
	if event.Error != nil {
		o.viewer.server.Broadcast(Message{
			Type: "interpret_error",
			Data: map[string]interface{}{
				"error": event.Error.Error(),
			},
		})
		o.viewer.logger.Error("Interpretation failed: %v", event.Error)
	} else {
		o.viewer.server.Broadcast(Message{
			Type: "interpret_end",
			Data: map[string]interface{}{
				"totalEvents": len(event.Trace.Events),
				"finalState":  event.FinalState,
			},
		})
		o.viewer.logger.Debug("Interpretation completed: %d events", len(event.Trace.Events))
	}
}

// OnAssert handles assertion execution.
func (o *uiObserver) OnAssert(ctx assert.AssertContext) {
	// Update step count
	if ctx.Trace != nil {
		o.currentTotalSteps = len(ctx.Trace.Events)
	}

	// Log test start
	o.viewer.logger.TestStart(ctx.TestName)

	// Broadcast session start
	o.viewer.server.Broadcast(Message{
		Type: "session_start",
		Data: SessionStartMessage{
			TestName:          ctx.TestName,
			TotalEvents:       o.currentTotalSteps,
			TotalExpectations: len(ctx.Results),
		},
	})

	// Broadcast each expectation and log to console
	passed := 0
	failed := 0
	for _, result := range ctx.Results {
		o.viewer.server.Broadcast(Message{
			Type: "expectation",
			Data: ExpectationMessage{
				Description:       result.Description,
				Passed:            result.Passed,
				Expected:          result.Expected,
				Actual:            result.Actual,
				RelatedEventIndex: result.RelatedEventIndex,
				ErrorMessage:      result.ErrorMessage,
			},
		})

		o.viewer.logger.Expectation(result.Description, result.Passed)

		if result.Passed {
			passed++
		} else {
			failed++
		}
	}

	// Log test end
	o.viewer.logger.TestEnd(ctx.TestName, ctx.AllPassed, len(ctx.Results), failed)

	// Broadcast session end
	o.viewer.server.Broadcast(Message{
		Type: "session_end",
		Data: SessionEndMessage{
			TestName:  ctx.TestName,
			AllPassed: ctx.AllPassed,
			Passed:    passed,
			Failed:    failed,
		},
	})
}

// formatInstruction converts an instruction to a readable string.
func formatInstruction(inst any) string {
	// Try to get a string representation
	if s, ok := inst.(fmt.Stringer); ok {
		return s.String()
	}
	return fmt.Sprintf("%v", inst)
}
