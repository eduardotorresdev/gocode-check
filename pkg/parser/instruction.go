// Package parser provides G-code parsing functionality.
package parser

// Op represents a G-code operation type.
type Op string

// Supported G-code operations.
const (
	// Motion commands
	OpG0 Op = "G0" // Rapid move
	OpG1 Op = "G1" // Linear interpolation (cut)
	OpG2 Op = "G2" // Circular interpolation CW
	OpG3 Op = "G3" // Circular interpolation CCW

	// Coordinate system
	OpG90 Op = "G90" // Absolute positioning
	OpG91 Op = "G91" // Incremental positioning

	// Units
	OpG20 Op = "G20" // Inches
	OpG21 Op = "G21" // Millimeters

	// Tool commands
	OpT Op = "T" // Tool selection

	// Miscellaneous commands
	OpM Op = "M" // Miscellaneous function
)

// Params holds the parameters for a G-code instruction.
type Params struct {
	// X, Y, Z are the target coordinates
	X *float64
	Y *float64
	Z *float64

	// I, J, K are arc center offsets (for G2/G3)
	I *float64
	J *float64
	K *float64

	// R is the arc radius (alternative to I/J/K)
	R *float64

	// F is the feed rate
	F *float64

	// S is the spindle speed
	S *float64

	// P is a dwell time or parameter
	P *float64

	// N is the tool number (for T command)
	N *int

	// Code is the numeric code (for M commands)
	Code *int
}

// Instruction represents a single parsed G-code instruction.
type Instruction struct {
	// Op is the operation type (G0, G1, G2, G3, M, T, etc.)
	Op Op

	// Params holds the instruction parameters
	Params Params

	// RawLine is the original G-code line for debugging
	RawLine string

	// LineNumber is the 1-based line number in the source
	LineNumber int
}

// NewInstruction creates a new Instruction with the given operation.
func NewInstruction(op Op) *Instruction {
	return &Instruction{
		Op: op,
	}
}

// SetX sets the X parameter.
func (p *Params) SetX(v float64) *Params {
	p.X = &v
	return p
}

// SetY sets the Y parameter.
func (p *Params) SetY(v float64) *Params {
	p.Y = &v
	return p
}

// SetZ sets the Z parameter.
func (p *Params) SetZ(v float64) *Params {
	p.Z = &v
	return p
}

// SetI sets the I parameter.
func (p *Params) SetI(v float64) *Params {
	p.I = &v
	return p
}

// SetJ sets the J parameter.
func (p *Params) SetJ(v float64) *Params {
	p.J = &v
	return p
}

// SetK sets the K parameter.
func (p *Params) SetK(v float64) *Params {
	p.K = &v
	return p
}

// SetR sets the R parameter.
func (p *Params) SetR(v float64) *Params {
	p.R = &v
	return p
}

// SetF sets the F parameter.
func (p *Params) SetF(v float64) *Params {
	p.F = &v
	return p
}

// SetS sets the S parameter.
func (p *Params) SetS(v float64) *Params {
	p.S = &v
	return p
}

// SetP sets the P parameter.
func (p *Params) SetP(v float64) *Params {
	p.P = &v
	return p
}

// SetN sets the N parameter (tool number).
func (p *Params) SetN(v int) *Params {
	p.N = &v
	return p
}

// SetCode sets the Code parameter (for M commands).
func (p *Params) SetCode(v int) *Params {
	p.Code = &v
	return p
}

// HasX returns true if X parameter is set.
func (p *Params) HasX() bool { return p.X != nil }

// HasY returns true if Y parameter is set.
func (p *Params) HasY() bool { return p.Y != nil }

// HasZ returns true if Z parameter is set.
func (p *Params) HasZ() bool { return p.Z != nil }

// HasI returns true if I parameter is set.
func (p *Params) HasI() bool { return p.I != nil }

// HasJ returns true if J parameter is set.
func (p *Params) HasJ() bool { return p.J != nil }

// HasK returns true if K parameter is set.
func (p *Params) HasK() bool { return p.K != nil }

// HasR returns true if R parameter is set.
func (p *Params) HasR() bool { return p.R != nil }

// HasF returns true if F parameter is set.
func (p *Params) HasF() bool { return p.F != nil }

// HasS returns true if S parameter is set.
func (p *Params) HasS() bool { return p.S != nil }

// GetX returns the X value or 0 if not set.
func (p *Params) GetX() float64 {
	if p.X != nil {
		return *p.X
	}
	return 0
}

// GetY returns the Y value or 0 if not set.
func (p *Params) GetY() float64 {
	if p.Y != nil {
		return *p.Y
	}
	return 0
}

// GetZ returns the Z value or 0 if not set.
func (p *Params) GetZ() float64 {
	if p.Z != nil {
		return *p.Z
	}
	return 0
}

// GetI returns the I value or 0 if not set.
func (p *Params) GetI() float64 {
	if p.I != nil {
		return *p.I
	}
	return 0
}

// GetJ returns the J value or 0 if not set.
func (p *Params) GetJ() float64 {
	if p.J != nil {
		return *p.J
	}
	return 0
}

// GetK returns the K value or 0 if not set.
func (p *Params) GetK() float64 {
	if p.K != nil {
		return *p.K
	}
	return 0
}

// GetF returns the F value or 0 if not set.
func (p *Params) GetF() float64 {
	if p.F != nil {
		return *p.F
	}
	return 0
}

// GetS returns the S value or 0 if not set.
func (p *Params) GetS() float64 {
	if p.S != nil {
		return *p.S
	}
	return 0
}
