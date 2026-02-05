// Package interpreter provides G-code interpretation and execution simulation.
package interpreter

// Unit represents the measurement unit.
type Unit int

const (
	// UnitMillimeters is the default unit (G21).
	UnitMillimeters Unit = iota
	// UnitInches represents inches (G20).
	UnitInches
)

// String returns the string representation of the unit.
func (u Unit) String() string {
	switch u {
	case UnitMillimeters:
		return "mm"
	case UnitInches:
		return "in"
	default:
		return "unknown"
	}
}

// Plane represents the active working plane.
type Plane int

const (
	// PlaneXY is the default plane (G17).
	PlaneXY Plane = iota
	// PlaneXZ represents the XZ plane (G18).
	PlaneXZ
	// PlaneYZ represents the YZ plane (G19).
	PlaneYZ
)

// String returns the string representation of the plane.
func (p Plane) String() string {
	switch p {
	case PlaneXY:
		return "XY"
	case PlaneXZ:
		return "XZ"
	case PlaneYZ:
		return "YZ"
	default:
		return "unknown"
	}
}

// PositionMode represents absolute or incremental positioning.
type PositionMode int

const (
	// ModeAbsolute is absolute positioning (G90).
	ModeAbsolute PositionMode = iota
	// ModeIncremental is incremental positioning (G91).
	ModeIncremental
)

// String returns the string representation of the position mode.
func (m PositionMode) String() string {
	switch m {
	case ModeAbsolute:
		return "absolute"
	case ModeIncremental:
		return "incremental"
	default:
		return "unknown"
	}
}

// Position represents a 3D coordinate.
type Position struct {
	X float64
	Y float64
	Z float64
}

// Equal checks if two positions are equal within a tolerance.
func (p Position) Equal(other Position, tolerance float64) bool {
	return absFloat(p.X-other.X) <= tolerance &&
		absFloat(p.Y-other.Y) <= tolerance &&
		absFloat(p.Z-other.Z) <= tolerance
}

// absFloat returns the absolute value of a float64.
func absFloat(v float64) float64 {
	if v < 0 {
		return -v
	}
	return v
}

// MachineState represents the logical state of a CNC machine.
// It does not simulate physics, only logical state.
type MachineState struct {
	// Position is the current position (X, Y, Z).
	Position Position

	// Unit is the active unit (mm or inches).
	Unit Unit

	// Plane is the active working plane.
	Plane Plane

	// Mode is the positioning mode (absolute or incremental).
	Mode PositionMode

	// Tool is the currently selected tool number (nil if none).
	Tool *int

	// Feed is the current feed rate.
	Feed float64

	// Spindle is the current spindle speed (RPM).
	Spindle float64

	// SpindleOn indicates if the spindle is running.
	SpindleOn bool

	// SpindleCW indicates clockwise rotation (true) or counter-clockwise (false).
	SpindleCW bool
}

// NewMachineState creates a new machine state with default values.
func NewMachineState() *MachineState {
	return &MachineState{
		Position: Position{X: 0, Y: 0, Z: 0},
		Unit:     UnitMillimeters,
		Plane:    PlaneXY,
		Mode:     ModeAbsolute,
		Tool:     nil,
		Feed:     0,
		Spindle:  0,
	}
}

// Clone creates a deep copy of the machine state.
func (s *MachineState) Clone() *MachineState {
	clone := *s
	if s.Tool != nil {
		toolCopy := *s.Tool
		clone.Tool = &toolCopy
	}
	return &clone
}

// SetTool sets the current tool number.
func (s *MachineState) SetTool(t int) {
	s.Tool = &t
}

// GetTool returns the current tool number or 0 if none is set.
func (s *MachineState) GetTool() int {
	if s.Tool != nil {
		return *s.Tool
	}
	return 0
}
