package machining

import (
	"math"

	"github.com/eduardotorresdev/gocode-check/pkg/interpreter"
)

// Stock represents the raw workpiece (material block) being machined.
// In CNC conventions, the top surface is at Z=0 and the piece extends downward.
type Stock struct {
	// Width is the X dimension of the stock.
	Width float64 `json:"width"`

	// Height is the Y dimension of the stock.
	Height float64 `json:"height"`

	// Depth is the Z dimension (thickness) of the stock.
	// The stock extends from TopZ to TopZ-Depth.
	Depth float64 `json:"depth"`

	// Position is the XYZ position of the stock's minimum corner.
	// Default is (0, 0, -Depth) meaning top surface at Z=0.
	Position Point3D `json:"position"`
}

// NewStock creates a new stock with the given dimensions.
// The stock is positioned with its top surface at Z=0 and bottom at Z=-depth.
func NewStock(width, height, depth float64) *Stock {
	return &Stock{
		Width:    width,
		Height:   height,
		Depth:    depth,
		Position: Point3D{X: 0, Y: 0, Z: -depth},
	}
}

// At sets the position of the stock's minimum corner.
// Returns the stock for method chaining.
func (s *Stock) At(x, y, z float64) *Stock {
	s.Position = Point3D{X: x, Y: y, Z: z}
	return s
}

// TopZ returns the Z coordinate of the top surface.
func (s *Stock) TopZ() float64 {
	return s.Position.Z + s.Depth
}

// BottomZ returns the Z coordinate of the bottom surface.
func (s *Stock) BottomZ() float64 {
	return s.Position.Z
}

// MinX returns the minimum X coordinate.
func (s *Stock) MinX() float64 {
	return s.Position.X
}

// MaxX returns the maximum X coordinate.
func (s *Stock) MaxX() float64 {
	return s.Position.X + s.Width
}

// MinY returns the minimum Y coordinate.
func (s *Stock) MinY() float64 {
	return s.Position.Y
}

// MaxY returns the maximum Y coordinate.
func (s *Stock) MaxY() float64 {
	return s.Position.Y + s.Height
}

// Contains checks if a point is within the stock bounds (with tolerance).
func (s *Stock) Contains(x, y, z, tolerance float64) bool {
	return x >= s.MinX()-tolerance && x <= s.MaxX()+tolerance &&
		y >= s.MinY()-tolerance && y <= s.MaxY()+tolerance &&
		z >= s.BottomZ()-tolerance && z <= s.TopZ()+tolerance
}

// ContainsXY checks if a 2D point is within the stock XY bounds (with tolerance).
func (s *Stock) ContainsXY(x, y, tolerance float64) bool {
	return x >= s.MinX()-tolerance && x <= s.MaxX()+tolerance &&
		y >= s.MinY()-tolerance && y <= s.MaxY()+tolerance
}

// IsPassThrough checks if a depth would go through the entire stock (with tolerance).
func (s *Stock) IsPassThrough(topZ, bottomZ, tolerance float64) bool {
	return bottomZ <= s.BottomZ()+tolerance
}

// Point2D represents a 2D coordinate in the XY plane.
type Point2D struct {
	X float64
	Y float64
}

// Equal checks if two points are equal within a tolerance.
func (p Point2D) Equal(other Point2D, tolerance float64) bool {
	return math.Abs(p.X-other.X) <= tolerance && math.Abs(p.Y-other.Y) <= tolerance
}

// Distance calculates the Euclidean distance between two points.
func (p Point2D) Distance(other Point2D) float64 {
	dx := p.X - other.X
	dy := p.Y - other.Y
	return math.Sqrt(dx*dx + dy*dy)
}

// Point3D represents a 3D coordinate.
type Point3D struct {
	X float64 `json:"X"`
	Y float64 `json:"Y"`
	Z float64 `json:"Z"`
}

// Equal checks if two 3D points are equal within a tolerance.
func (p Point3D) Equal(other Point3D, tolerance float64) bool {
	return math.Abs(p.X-other.X) <= tolerance &&
		math.Abs(p.Y-other.Y) <= tolerance &&
		math.Abs(p.Z-other.Z) <= tolerance
}

// ToPoint2D converts a 3D point to 2D by dropping the Z coordinate.
func (p Point3D) ToPoint2D() Point2D {
	return Point2D{X: p.X, Y: p.Y}
}

// FromPosition creates a Point3D from an interpreter.Position.
func FromPosition(pos interpreter.Position) Point3D {
	return Point3D{X: pos.X, Y: pos.Y, Z: pos.Z}
}

// Hole represents a circular hole feature in the workpiece.
// A hole is typically created by drilling operations (plunge cuts).
type Hole struct {
	// Center is the XY center position of the hole.
	Center Point2D

	// Diameter is the hole diameter (derived from tool diameter or arc radius).
	Diameter float64

	// Depth is the hole depth (positive value, measured from surface).
	Depth float64

	// TopZ is the Z coordinate of the hole top (workpiece surface).
	TopZ float64

	// BottomZ is the Z coordinate of the hole bottom.
	BottomZ float64

	// Tool is the tool number used to create this hole.
	Tool int

	// SourceLines contains the source line numbers that created this hole.
	SourceLines []int
}

// Slot represents a linear groove feature in the workpiece.
// A slot is created by horizontal cutting moves at a constant depth.
type Slot struct {
	// Start is the starting XY position of the slot.
	Start Point2D

	// End is the ending XY position of the slot.
	End Point2D

	// Width is the slot width (tool diameter).
	Width float64

	// Depth is the slot depth (positive value).
	Depth float64

	// Z is the Z coordinate of the slot bottom.
	Z float64

	// Tool is the tool number used to create this slot.
	Tool int

	// SourceLines contains the source line numbers that created this slot.
	SourceLines []int
}

// Length calculates the slot length.
func (s Slot) Length() float64 {
	return s.Start.Distance(s.End)
}

// SegmentType represents the type of a contour segment.
type SegmentType int

const (
	// SegmentLine is a linear segment.
	SegmentLine SegmentType = iota
	// SegmentArcCW is a clockwise arc segment.
	SegmentArcCW
	// SegmentArcCCW is a counter-clockwise arc segment.
	SegmentArcCCW
)

// String returns the string representation of the segment type.
func (s SegmentType) String() string {
	switch s {
	case SegmentLine:
		return "Line"
	case SegmentArcCW:
		return "ArcCW"
	case SegmentArcCCW:
		return "ArcCCW"
	default:
		return "Unknown"
	}
}

// Segment represents a single segment of a contour.
type Segment struct {
	// Type is the segment type (line or arc).
	Type SegmentType

	// Start is the starting point of the segment.
	Start Point2D

	// End is the ending point of the segment.
	End Point2D

	// Center is the arc center (only for arc segments).
	Center Point2D

	// Radius is the arc radius (only for arc segments).
	Radius float64

	// SourceLine is the source line number.
	SourceLine int
}

// IsArc returns true if this segment is an arc.
func (s Segment) IsArc() bool {
	return s.Type == SegmentArcCW || s.Type == SegmentArcCCW
}

// Length calculates the length of the segment.
func (s Segment) Length() float64 {
	if s.IsArc() {
		// For arcs, calculate arc length using angle and radius
		angle := s.ArcAngle()
		return math.Abs(angle * s.Radius)
	}
	return s.Start.Distance(s.End)
}

// ArcAngle calculates the arc angle in radians (only valid for arc segments).
func (s Segment) ArcAngle() float64 {
	if !s.IsArc() {
		return 0
	}

	startAngle := math.Atan2(s.Start.Y-s.Center.Y, s.Start.X-s.Center.X)
	endAngle := math.Atan2(s.End.Y-s.Center.Y, s.End.X-s.Center.X)

	angle := endAngle - startAngle

	// Adjust angle based on direction
	if s.Type == SegmentArcCW {
		if angle > 0 {
			angle -= 2 * math.Pi
		}
	} else {
		if angle < 0 {
			angle += 2 * math.Pi
		}
	}

	return angle
}

// Contour represents a connected path of cutting operations.
// A contour can be either closed (forms a loop) or open.
type Contour struct {
	// Segments is the ordered list of segments forming the contour.
	Segments []Segment

	// Z is the Z depth of the contour.
	Z float64

	// Closed indicates if the contour forms a closed loop.
	Closed bool

	// Tool is the tool number used to create this contour.
	Tool int

	// SourceLines contains all source line numbers that created this contour.
	SourceLines []int
}

// IsClosed returns true if the contour forms a closed loop.
// A contour is closed if its first and last points are equal within tolerance.
func (c Contour) IsClosed(tolerance float64) bool {
	if len(c.Segments) == 0 {
		return false
	}
	first := c.Segments[0].Start
	last := c.Segments[len(c.Segments)-1].End
	return first.Equal(last, tolerance)
}

// TotalLength calculates the total length of all segments in the contour.
func (c Contour) TotalLength() float64 {
	var total float64
	for _, seg := range c.Segments {
		total += seg.Length()
	}
	return total
}

// AddSegment adds a new segment to the contour.
func (c *Contour) AddSegment(seg Segment) {
	c.Segments = append(c.Segments, seg)
	if seg.SourceLine > 0 {
		c.SourceLines = append(c.SourceLines, seg.SourceLine)
	}
}

// StartPoint returns the starting point of the contour.
func (c Contour) StartPoint() Point2D {
	if len(c.Segments) == 0 {
		return Point2D{}
	}
	return c.Segments[0].Start
}

// EndPoint returns the ending point of the contour.
func (c Contour) EndPoint() Point2D {
	if len(c.Segments) == 0 {
		return Point2D{}
	}
	return c.Segments[len(c.Segments)-1].End
}
