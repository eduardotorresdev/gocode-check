package interpreter

import (
	"fmt"
	"math"

	"github.com/eduardotorresdev/gocode-check/pkg/parser"
)

// Interpreter executes G-code instructions and produces an execution trace.
// It simulates the logical state of a CNC machine without physics simulation.
type Interpreter struct {
	// state is the current machine state.
	state *MachineState

	// trace accumulates execution events.
	trace *ExecutionTrace
}

// New creates a new Interpreter with default machine state.
func New() *Interpreter {
	return &Interpreter{
		state: NewMachineState(),
		trace: NewExecutionTrace(),
	}
}

// Interpret processes a slice of instructions and returns the execution trace.
// The interpreter is deterministic: same input always produces same output.
func (i *Interpreter) Interpret(instructions []parser.Instruction) (*ExecutionTrace, error) {
	// Reset state and trace for determinism
	i.state = NewMachineState()
	i.trace = NewExecutionTrace()

	for _, instr := range instructions {
		if err := i.execute(instr); err != nil {
			return nil, fmt.Errorf("line %d: %w", instr.LineNumber, err)
		}
	}

	// Set final state
	i.trace.FinalState = i.state.Clone()

	return i.trace, nil
}

// execute processes a single instruction.
func (i *Interpreter) execute(instr parser.Instruction) error {
	switch instr.Op {
	case parser.OpG0:
		return i.executeRapidMove(instr)
	case parser.OpG1:
		return i.executeLinearCut(instr)
	case parser.OpG2:
		return i.executeArc(instr, true) // clockwise
	case parser.OpG3:
		return i.executeArc(instr, false) // counter-clockwise
	case parser.OpG20:
		return i.executeUnitChange(instr, UnitInches)
	case parser.OpG21:
		return i.executeUnitChange(instr, UnitMillimeters)
	case parser.OpG90:
		return i.executeModeChange(instr, ModeAbsolute)
	case parser.OpG91:
		return i.executeModeChange(instr, ModeIncremental)
	case parser.OpT:
		return i.executeToolChange(instr)
	case parser.OpM:
		return i.executeMCode(instr)
	default:
		// Unknown operations are ignored for forward compatibility
		return nil
	}
}

// executeRapidMove processes a G0 rapid positioning move.
func (i *Interpreter) executeRapidMove(instr parser.Instruction) error {
	fromPos := i.state.Position
	toPos := i.calculateTargetPosition(instr.Params)

	event := Event{
		Type:       EventRapidMove,
		From:       fromPos,
		To:         toPos,
		SourceLine: instr.LineNumber,
	}
	i.trace.AddEvent(event)

	// Update machine state
	i.state.Position = toPos

	return nil
}

// executeLinearCut processes a G1 linear interpolation cut.
func (i *Interpreter) executeLinearCut(instr parser.Instruction) error {
	fromPos := i.state.Position
	toPos := i.calculateTargetPosition(instr.Params)

	// Update feed rate if specified
	if instr.Params.HasF() {
		i.state.Feed = instr.Params.GetF()
	}

	event := Event{
		Type:       EventLinearCut,
		From:       fromPos,
		To:         toPos,
		Feed:       i.state.Feed,
		SourceLine: instr.LineNumber,
	}
	i.trace.AddEvent(event)

	// Update machine state
	i.state.Position = toPos

	return nil
}

// executeArc processes a G2 or G3 arc move.
func (i *Interpreter) executeArc(instr parser.Instruction, clockwise bool) error {
	fromPos := i.state.Position
	toPos := i.calculateTargetPosition(instr.Params)

	// Update feed rate if specified
	if instr.Params.HasF() {
		i.state.Feed = instr.Params.GetF()
	}

	// Calculate arc data
	arcData := i.calculateArcData(instr.Params, fromPos, toPos, clockwise)

	eventType := EventArcCW
	if !clockwise {
		eventType = EventArcCCW
	}

	event := Event{
		Type:       eventType,
		From:       fromPos,
		To:         toPos,
		Feed:       i.state.Feed,
		Arc:        arcData,
		SourceLine: instr.LineNumber,
	}
	i.trace.AddEvent(event)

	// Update machine state
	i.state.Position = toPos

	return nil
}

// executeUnitChange processes a G20 or G21 unit change.
func (i *Interpreter) executeUnitChange(instr parser.Instruction, unit Unit) error {
	event := Event{
		Type:       EventUnitChange,
		Unit:       unit,
		SourceLine: instr.LineNumber,
	}
	i.trace.AddEvent(event)

	i.state.Unit = unit

	return nil
}

// executeModeChange processes a G90 or G91 mode change.
func (i *Interpreter) executeModeChange(instr parser.Instruction, mode PositionMode) error {
	event := Event{
		Type:       EventModeChange,
		Mode:       mode,
		SourceLine: instr.LineNumber,
	}
	i.trace.AddEvent(event)

	i.state.Mode = mode

	return nil
}

// executeToolChange processes a T code for tool selection.
func (i *Interpreter) executeToolChange(instr parser.Instruction) error {
	toolNum := 0
	if instr.Params.N != nil {
		toolNum = *instr.Params.N
	}

	event := Event{
		Type:       EventToolChange,
		Tool:       toolNum,
		SourceLine: instr.LineNumber,
	}
	i.trace.AddEvent(event)

	i.state.SetTool(toolNum)

	return nil
}

// executeMCode processes miscellaneous M codes.
func (i *Interpreter) executeMCode(instr parser.Instruction) error {
	if instr.Params.Code == nil {
		return nil
	}

	code := *instr.Params.Code

	switch code {
	case 3: // M3 - Spindle on clockwise
		i.state.SpindleOn = true
		i.state.SpindleCW = true
		if instr.Params.HasS() {
			i.state.Spindle = instr.Params.GetS()
		}
		event := Event{
			Type:       EventSpindleStart,
			Spindle:    i.state.Spindle,
			SpindleCW:  true,
			SourceLine: instr.LineNumber,
		}
		i.trace.AddEvent(event)

	case 4: // M4 - Spindle on counter-clockwise
		i.state.SpindleOn = true
		i.state.SpindleCW = false
		if instr.Params.HasS() {
			i.state.Spindle = instr.Params.GetS()
		}
		event := Event{
			Type:       EventSpindleStart,
			Spindle:    i.state.Spindle,
			SpindleCW:  false,
			SourceLine: instr.LineNumber,
		}
		i.trace.AddEvent(event)

	case 5: // M5 - Spindle off
		i.state.SpindleOn = false
		event := Event{
			Type:       EventSpindleStop,
			SourceLine: instr.LineNumber,
		}
		i.trace.AddEvent(event)

		// M0, M1, M2, M30, M6, etc. are acknowledged but don't produce events
		// for the machining model (they are program flow control)
	}

	return nil
}

// calculateTargetPosition calculates the target position based on parameters and mode.
func (i *Interpreter) calculateTargetPosition(params parser.Params) Position {
	target := i.state.Position

	if i.state.Mode == ModeAbsolute {
		if params.HasX() {
			target.X = params.GetX()
		}
		if params.HasY() {
			target.Y = params.GetY()
		}
		if params.HasZ() {
			target.Z = params.GetZ()
		}
	} else {
		// Incremental mode
		if params.HasX() {
			target.X += params.GetX()
		}
		if params.HasY() {
			target.Y += params.GetY()
		}
		if params.HasZ() {
			target.Z += params.GetZ()
		}
	}

	return target
}

// calculateArcData calculates arc-specific data for G2/G3 moves.
func (i *Interpreter) calculateArcData(params parser.Params, from, to Position, clockwise bool) *ArcData {
	arcData := &ArcData{
		Clockwise: clockwise,
	}

	// Get I, J, K offsets (center point relative to start)
	arcData.I = params.GetI()
	arcData.J = params.GetJ()
	arcData.K = params.GetK()

	// Calculate center point (I, J, K are offsets from start position)
	arcData.Center = Position{
		X: from.X + arcData.I,
		Y: from.Y + arcData.J,
		Z: from.Z + arcData.K,
	}

	// Calculate radius if not provided directly
	if params.HasR() {
		arcData.Radius = *params.R
	} else {
		// Calculate radius from center and start point (in XY plane for now)
		dx := arcData.Center.X - from.X
		dy := arcData.Center.Y - from.Y
		arcData.Radius = math.Sqrt(dx*dx + dy*dy)
	}

	return arcData
}

// InterpretGCode is a convenience function to interpret G-code from instructions.
func InterpretGCode(instructions []parser.Instruction) (*ExecutionTrace, error) {
	return New().Interpret(instructions)
}

// ParseAndInterpret parses G-code and interprets it in one call.
func ParseAndInterpret(gcode string) (*ExecutionTrace, error) {
	instructions, err := parser.ParseFile(gcode)
	if err != nil {
		return nil, fmt.Errorf("parse error: %w", err)
	}
	return InterpretGCode(instructions)
}
