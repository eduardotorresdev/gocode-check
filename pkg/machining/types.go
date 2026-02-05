package machining

import (
	"math"

	"github.com/eduardotorresdev/gocode-check/pkg/interpreter"
)

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
	X float64
	Y float64
	Z float64
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
