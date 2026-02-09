package ui

import (
	"fmt"
	"time"

	"github.com/eduardotorresdev/gocode-check/pkg/assert"
	"github.com/eduardotorresdev/gocode-check/pkg/interpreter"
	"github.com/eduardotorresdev/gocode-check/pkg/machining"
	"github.com/eduardotorresdev/gocode-check/pkg/parser"
)

// uiObserver implements both interpreter.Observer and assert.Observer
type uiObserver struct {
	viewer            *Viewer
	currentTotalSteps int
	instructionByLine map[int]parser.Instruction
}

// Verify interface compliance at compile time
var _ interpreter.Observer = (*uiObserver)(nil)
var _ assert.Observer = (*uiObserver)(nil)

// OnInterpretStart handles the start of G-code interpretation.
func (o *uiObserver) OnInterpretStart(event interpreter.InterpretStartEvent) {
	o.currentTotalSteps = event.TotalInstructions

	// Build instruction lookup for later replay
	o.instructionByLine = make(map[int]parser.Instruction, len(event.Instructions))
	for _, inst := range event.Instructions {
		if inst.LineNumber > 0 {
			o.instructionByLine[inst.LineNumber] = inst
		}
	}

	o.viewer.Broadcast(Message{
		Type: "interpret_start",
		Data: map[string]interface{}{
			"totalInstructions": event.TotalInstructions,
		},
	})

	o.viewer.logger.Debug("Interpretation started: %d instructions", event.TotalInstructions)
}

// OnStep handles each execution step.
func (o *uiObserver) OnStep(event interpreter.StepEvent) {
	// Go emits events continuously - no flow control blocking
	// Frontend controls only visualization, not emission

	// Broadcast to UI
	o.viewer.Broadcast(Message{
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
		o.viewer.Broadcast(Message{
			Type: "interpret_error",
			Data: map[string]interface{}{
				"error": event.Error.Error(),
			},
		})
		o.viewer.logger.Error("Interpretation failed: %v", event.Error)
	} else {
		o.viewer.Broadcast(Message{
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

	// Get stock and tools from model if available
	var stock *machining.Stock
	var tools map[int]*machining.Tool
	if ctx.Model != nil {
		stock = ctx.Model.Stock
		if len(ctx.Model.Tools) > 0 {
			tools = ctx.Model.Tools
		}
	}

	// Broadcast session start
	o.viewer.Broadcast(Message{
		Type: "session_start",
		Data: SessionStartMessage{
			SuiteID:           ctx.SuiteID,
			SuiteName:         ctx.SuiteName,
			TestName:          ctx.TestName,
			TotalEvents:       o.currentTotalSteps,
			TotalExpectations: len(ctx.Results),
			Stock:             stock,
			Tools:             tools,
		},
	})

	// Replay all events from the trace so the session has complete history
	// This ensures events are visible even when a tab is opened manually
	// after real-time events have already been sent
	if ctx.Trace != nil {
		state := interpreter.NewMachineState()
		for i, event := range ctx.Trace.Events {
			stateBefore := state.Clone()
			// Update state based on event
			state = applyEvent(state, event)

			var instruction *parser.Instruction
			if o.instructionByLine != nil && event.SourceLine > 0 {
				if inst, ok := o.instructionByLine[event.SourceLine]; ok {
					instruction = &inst
				}
			}
			o.viewer.Broadcast(Message{
				Type: "step",
				Data: StepMessage{
					Index:       i,
					Total:       o.currentTotalSteps,
					Instruction: instruction,
					Event:       event,
					StateBefore: stateBefore,
					StateAfter:  state,
					HasError:    false,
				},
			})

			// Apply delay for human-readable visualization (same as OnStep)
			if o.viewer.config.Speed != SpeedManual {
				delay := SpeedToDuration(o.viewer.config.Speed)
				time.Sleep(delay)
			}
		}
	}

	// Broadcast each expectation and log to console
	passed := 0
	failed := 0
	for _, result := range ctx.Results {
		o.viewer.Broadcast(Message{
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
	o.viewer.Broadcast(Message{
		Type: "session_end",
		Data: SessionEndMessage{
			TestName:  ctx.TestName,
			AllPassed: ctx.AllPassed,
			Passed:    passed,
			Failed:    failed,
		},
	})
}

// applyEvent updates the machine state based on an event
func applyEvent(state *interpreter.MachineState, event interpreter.Event) *interpreter.MachineState {
	newState := state.Clone()

	// Update position for motion events
	switch event.Type {
	case interpreter.EventRapidMove, interpreter.EventLinearCut,
		interpreter.EventArcCW, interpreter.EventArcCCW, interpreter.EventDrillCycle:
		newState.Position = event.To
	}

	// Update spindle state
	if event.Type == interpreter.EventSpindleStart {
		newState.SpindleOn = true
		newState.Spindle = event.Spindle
		newState.SpindleCW = event.SpindleCW
	} else if event.Type == interpreter.EventSpindleStop {
		newState.SpindleOn = false
	}

	// Update tool
	if event.Type == interpreter.EventToolChange && event.Tool > 0 {
		newState.SetTool(event.Tool)
	}

	// Update feed rate for cutting moves
	if event.Feed > 0 {
		newState.Feed = event.Feed
	}

	// Update unit
	if event.Type == interpreter.EventUnitChange {
		newState.Unit = event.Unit
	}

	// Update mode
	if event.Type == interpreter.EventModeChange {
		newState.Mode = event.Mode
	}

	return newState
}

// formatInstruction converts an instruction to a readable string.
func formatInstruction(inst any) string {
	// Try to get a string representation
	if s, ok := inst.(fmt.Stringer); ok {
		return s.String()
	}
	return fmt.Sprintf("%v", inst)
}
