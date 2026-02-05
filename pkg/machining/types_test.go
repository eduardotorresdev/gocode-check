package machining

import (
	"testing"

	"github.com/eduardotorresdev/gocode-check/pkg/interpreter"
)

func TestPoint2D_Equal(t *testing.T) {
	p1 := Point2D{X: 10.0, Y: 20.0}
	p2 := Point2D{X: 10.0000001, Y: 20.0}
	p3 := Point2D{X: 15.0, Y: 20.0}

	if !p1.Equal(p2, 1e-6) {
		t.Error("expected p1 and p2 to be equal within tolerance")
	}
	if p1.Equal(p3, 1e-6) {
		t.Error("expected p1 and p3 to not be equal")
	}
}

func TestPoint2D_Distance(t *testing.T) {
	p1 := Point2D{X: 0, Y: 0}
	p2 := Point2D{X: 3, Y: 4}

	dist := p1.Distance(p2)
	if dist != 5.0 {
		t.Errorf("expected distance 5, got %v", dist)
	}
}

func TestPoint3D_Equal(t *testing.T) {
	p1 := Point3D{X: 10.0, Y: 20.0, Z: 30.0}
	p2 := Point3D{X: 10.0000001, Y: 20.0, Z: 30.0}
	p3 := Point3D{X: 10.0, Y: 20.0, Z: 35.0}

	if !p1.Equal(p2, 1e-6) {
		t.Error("expected p1 and p2 to be equal within tolerance")
	}
	if p1.Equal(p3, 1e-6) {
		t.Error("expected p1 and p3 to not be equal")
	}
}

func TestPoint3D_ToPoint2D(t *testing.T) {
	p3d := Point3D{X: 10, Y: 20, Z: 30}
	p2d := p3d.ToPoint2D()

	if p2d.X != 10 || p2d.Y != 20 {
		t.Errorf("expected (10, 20), got (%v, %v)", p2d.X, p2d.Y)
	}
}

func TestFromPosition(t *testing.T) {
	pos := interpreter.Position{X: 1, Y: 2, Z: 3}
	p3d := FromPosition(pos)

	if p3d.X != 1 || p3d.Y != 2 || p3d.Z != 3 {
		t.Errorf("expected (1, 2, 3), got (%v, %v, %v)", p3d.X, p3d.Y, p3d.Z)
	}
}

func TestSlot_Length(t *testing.T) {
	slot := Slot{
		Start: Point2D{X: 0, Y: 0},
		End:   Point2D{X: 30, Y: 40},
	}

	length := slot.Length()
	if length != 50.0 {
		t.Errorf("expected length 50, got %v", length)
	}
}

func TestSegmentType_String(t *testing.T) {
	tests := []struct {
		segType SegmentType
		want    string
	}{
		{SegmentLine, "Line"},
		{SegmentArcCW, "ArcCW"},
		{SegmentArcCCW, "ArcCCW"},
	}

	for _, tt := range tests {
		if got := tt.segType.String(); got != tt.want {
			t.Errorf("SegmentType(%d).String() = %s, want %s", tt.segType, got, tt.want)
		}
	}
}

func TestSegment_IsArc(t *testing.T) {
	lineSegment := Segment{Type: SegmentLine}
	arcCWSegment := Segment{Type: SegmentArcCW}
	arcCCWSegment := Segment{Type: SegmentArcCCW}

	if lineSegment.IsArc() {
		t.Error("expected line segment to not be an arc")
	}
	if !arcCWSegment.IsArc() {
		t.Error("expected CW arc segment to be an arc")
	}
	if !arcCCWSegment.IsArc() {
		t.Error("expected CCW arc segment to be an arc")
	}
}

func TestSegment_Length_Line(t *testing.T) {
	seg := Segment{
		Type:  SegmentLine,
		Start: Point2D{X: 0, Y: 0},
		End:   Point2D{X: 3, Y: 4},
	}

	length := seg.Length()
	if length != 5.0 {
		t.Errorf("expected length 5, got %v", length)
	}
}

func TestContour_IsClosed(t *testing.T) {
	closedContour := Contour{
		Segments: []Segment{
			{Start: Point2D{X: 0, Y: 0}, End: Point2D{X: 10, Y: 0}},
			{Start: Point2D{X: 10, Y: 0}, End: Point2D{X: 10, Y: 10}},
			{Start: Point2D{X: 10, Y: 10}, End: Point2D{X: 0, Y: 0}},
		},
	}

	openContour := Contour{
		Segments: []Segment{
			{Start: Point2D{X: 0, Y: 0}, End: Point2D{X: 10, Y: 0}},
			{Start: Point2D{X: 10, Y: 0}, End: Point2D{X: 10, Y: 10}},
		},
	}

	if !closedContour.IsClosed(1e-6) {
		t.Error("expected contour to be closed")
	}
	if openContour.IsClosed(1e-6) {
		t.Error("expected contour to be open")
	}
}

func TestContour_TotalLength(t *testing.T) {
	contour := Contour{
		Segments: []Segment{
			{Type: SegmentLine, Start: Point2D{X: 0, Y: 0}, End: Point2D{X: 10, Y: 0}},
			{Type: SegmentLine, Start: Point2D{X: 10, Y: 0}, End: Point2D{X: 10, Y: 10}},
		},
	}

	total := contour.TotalLength()
	if total != 20.0 {
		t.Errorf("expected total length 20, got %v", total)
	}
}

func TestContour_AddSegment(t *testing.T) {
	contour := Contour{
		Segments:    make([]Segment, 0),
		SourceLines: make([]int, 0),
	}

	seg := Segment{
		Type:       SegmentLine,
		Start:      Point2D{X: 0, Y: 0},
		End:        Point2D{X: 10, Y: 0},
		SourceLine: 5,
	}

	contour.AddSegment(seg)

	if len(contour.Segments) != 1 {
		t.Errorf("expected 1 segment, got %d", len(contour.Segments))
	}
	if len(contour.SourceLines) != 1 || contour.SourceLines[0] != 5 {
		t.Error("expected source line 5 to be added")
	}
}

func TestContour_StartEndPoints(t *testing.T) {
	contour := Contour{
		Segments: []Segment{
			{Start: Point2D{X: 1, Y: 2}, End: Point2D{X: 3, Y: 4}},
			{Start: Point2D{X: 3, Y: 4}, End: Point2D{X: 5, Y: 6}},
		},
	}

	start := contour.StartPoint()
	end := contour.EndPoint()

	if start.X != 1 || start.Y != 2 {
		t.Errorf("expected start (1, 2), got (%v, %v)", start.X, start.Y)
	}
	if end.X != 5 || end.Y != 6 {
		t.Errorf("expected end (5, 6), got (%v, %v)", end.X, end.Y)
	}
}

func TestNewMachiningModel(t *testing.T) {
	model := NewMachiningModel()

	if model.HoleCount() != 0 {
		t.Errorf("expected 0 holes, got %d", model.HoleCount())
	}
	if model.SlotCount() != 0 {
		t.Errorf("expected 0 slots, got %d", model.SlotCount())
	}
	if model.ContourCount() != 0 {
		t.Errorf("expected 0 contours, got %d", model.ContourCount())
	}
	if !model.IsEmpty() {
		t.Error("expected model to be empty")
	}
}

func TestMachiningModel_AddFeatures(t *testing.T) {
	model := NewMachiningModel()

	model.AddHole(Hole{Center: Point2D{X: 10, Y: 20}})
	model.AddSlot(Slot{Start: Point2D{X: 0, Y: 0}, End: Point2D{X: 10, Y: 0}})
	model.AddContour(Contour{Segments: []Segment{{}}})

	if model.HoleCount() != 1 {
		t.Errorf("expected 1 hole, got %d", model.HoleCount())
	}
	if model.SlotCount() != 1 {
		t.Errorf("expected 1 slot, got %d", model.SlotCount())
	}
	if model.ContourCount() != 1 {
		t.Errorf("expected 1 contour, got %d", model.ContourCount())
	}
	if model.TotalFeatures() != 3 {
		t.Errorf("expected 3 total features, got %d", model.TotalFeatures())
	}
	if model.IsEmpty() {
		t.Error("expected model to not be empty")
	}
}

func TestMachiningModel_HolesAt(t *testing.T) {
	model := NewMachiningModel()
	model.AddHole(Hole{Center: Point2D{X: 10, Y: 20}})
	model.AddHole(Hole{Center: Point2D{X: 30, Y: 40}})
	model.AddHole(Hole{Center: Point2D{X: 10.0000001, Y: 20}})

	holes := model.HolesAt(10, 20, 1e-6)
	if len(holes) != 2 {
		t.Errorf("expected 2 holes at (10, 20), got %d", len(holes))
	}
}

func TestMachiningModel_HolesWithDiameter(t *testing.T) {
	model := NewMachiningModel()
	model.AddHole(Hole{Diameter: 6.0})
	model.AddHole(Hole{Diameter: 8.0})
	model.AddHole(Hole{Diameter: 6.0001})

	holes := model.HolesWithDiameter(6.0, 0.01)
	if len(holes) != 2 {
		t.Errorf("expected 2 holes with diameter 6, got %d", len(holes))
	}
}

func TestMachiningModel_HolesWithDepth(t *testing.T) {
	model := NewMachiningModel()
	model.AddHole(Hole{Depth: 10.0})
	model.AddHole(Hole{Depth: 15.0})
	model.AddHole(Hole{Depth: 10.001})

	holes := model.HolesWithDepth(10.0, 0.01)
	if len(holes) != 2 {
		t.Errorf("expected 2 holes with depth 10, got %d", len(holes))
	}
}

func TestMachiningModel_ClosedOpenContours(t *testing.T) {
	model := NewMachiningModel()

	closedContour := Contour{
		Segments: []Segment{
			{Start: Point2D{X: 0, Y: 0}, End: Point2D{X: 10, Y: 0}},
			{Start: Point2D{X: 10, Y: 0}, End: Point2D{X: 0, Y: 0}},
		},
	}
	openContour := Contour{
		Segments: []Segment{
			{Start: Point2D{X: 0, Y: 0}, End: Point2D{X: 10, Y: 10}},
		},
	}

	model.AddContour(closedContour)
	model.AddContour(openContour)

	closed := model.ClosedContours(1e-6)
	open := model.OpenContours(1e-6)

	if len(closed) != 1 {
		t.Errorf("expected 1 closed contour, got %d", len(closed))
	}
	if len(open) != 1 {
		t.Errorf("expected 1 open contour, got %d", len(open))
	}
}
