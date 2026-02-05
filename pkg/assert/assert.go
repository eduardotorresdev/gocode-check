package assert

import (
	"fmt"
	"math"
	"strings"

	"github.com/eduardotorresdev/gocode-check/pkg/machining"
)

// DefaultTolerance is the default tolerance for floating-point comparisons.
const DefaultTolerance = 1e-6

// Assertion represents the result of an assertion operation.
// It holds the pass/fail state, any error message, and allows for chaining.
type Assertion struct {
	model     *machining.MachiningModel
	tolerance float64
	passed    bool
	errors    []string

	// Filtered items for chained assertions
	filteredHoles    []machining.Hole
	filteredSlots    []machining.Slot
	filteredContours []machining.Contour

	// Context for better error messages
	context string
}

// Expect creates a new Assertion for the given MachiningModel.
// Uses the default tolerance for floating-point comparisons.
func Expect(model *machining.MachiningModel) *Assertion {
	return ExpectWithTolerance(model, DefaultTolerance)
}

// ExpectWithTolerance creates a new Assertion with a custom tolerance.
func ExpectWithTolerance(model *machining.MachiningModel, tolerance float64) *Assertion {
	return &Assertion{
		model:            model,
		tolerance:        tolerance,
		passed:           true,
		errors:           make([]string, 0),
		filteredHoles:    nil,
		filteredSlots:    nil,
		filteredContours: nil,
	}
}

// Pass returns true if all assertions passed.
func (a *Assertion) Pass() bool {
	return a.passed
}

// Failed returns true if any assertion failed.
func (a *Assertion) Failed() bool {
	return !a.passed
}

// Error returns the combined error message from all failed assertions.
// Returns an empty string if all assertions passed.
func (a *Assertion) Error() string {
	if a.passed {
		return ""
	}
	return strings.Join(a.errors, "\n")
}

// Errors returns all error messages as a slice.
func (a *Assertion) Errors() []string {
	return a.errors
}

// addError adds an error and marks the assertion as failed.
func (a *Assertion) addError(format string, args ...any) {
	a.passed = false
	msg := fmt.Sprintf(format, args...)
	if a.context != "" {
		msg = a.context + ": " + msg
	}
	a.errors = append(a.errors, msg)
}

// assertModelNotNil ensures the model is not nil.
func (a *Assertion) assertModelNotNil() bool {
	if a.model == nil {
		a.addError("model is nil")
		return false
	}
	return true
}

// floatEqual checks if two floats are equal within tolerance.
func (a *Assertion) floatEqual(v1, v2 float64) bool {
	return math.Abs(v1-v2) <= a.tolerance
}

// pointEqual checks if two 2D points are equal within tolerance.
func (a *Assertion) pointEqual(p1, p2 machining.Point2D) bool {
	return math.Abs(p1.X-p2.X) <= a.tolerance && math.Abs(p1.Y-p2.Y) <= a.tolerance
}

// --- Hole Assertions ---

// HasHole asserts that a hole exists at the given XY position.
// The assertion uses the configured tolerance for position comparison.
// Returns the same Assertion for chaining.
func (a *Assertion) HasHole(x, y float64) *Assertion {
	if !a.assertModelNotNil() {
		return a
	}

	a.context = fmt.Sprintf("HasHole(%.4f, %.4f)", x, y)

	holes := a.model.HolesAt(x, y, a.tolerance)
	if len(holes) == 0 {
		a.addError("no hole found at position (%.4f, %.4f)", x, y)
		// Provide helpful info about existing holes
		if len(a.model.Holes) > 0 {
			a.errors[len(a.errors)-1] += "\n  Available holes:"
			for i, h := range a.model.Holes {
				a.errors[len(a.errors)-1] += fmt.Sprintf("\n    [%d] at (%.4f, %.4f), diameter=%.4f, depth=%.4f",
					i, h.Center.X, h.Center.Y, h.Diameter, h.Depth)
			}
		}
		a.filteredHoles = nil
		return a
	}

	a.filteredHoles = holes
	return a
}

// HasHoleCount asserts that the model contains exactly the specified number of holes.
func (a *Assertion) HasHoleCount(expected int) *Assertion {
	if !a.assertModelNotNil() {
		return a
	}

	a.context = fmt.Sprintf("HasHoleCount(%d)", expected)

	actual := a.model.HoleCount()
	if actual != expected {
		a.addError("expected %d holes, got %d", expected, actual)
	}

	return a
}

// WithDiameter filters holes by diameter.
// Must be called after HasHole() or on a model with filtered holes.
func (a *Assertion) WithDiameter(diameter float64) *Assertion {
	if a.filteredHoles == nil {
		a.addError("WithDiameter must be called after HasHole")
		return a
	}

	a.context += fmt.Sprintf(".WithDiameter(%.4f)", diameter)

	var filtered []machining.Hole
	for _, h := range a.filteredHoles {
		if a.floatEqual(h.Diameter, diameter) {
			filtered = append(filtered, h)
		}
	}

	if len(filtered) == 0 {
		a.addError("no hole with diameter %.4f found", diameter)
		if len(a.filteredHoles) > 0 {
			a.errors[len(a.errors)-1] += "\n  Available diameters:"
			for _, h := range a.filteredHoles {
				a.errors[len(a.errors)-1] += fmt.Sprintf(" %.4f", h.Diameter)
			}
		}
	}

	a.filteredHoles = filtered
	return a
}

// WithDepth filters holes by depth.
// Must be called after HasHole() or on a model with filtered holes.
func (a *Assertion) WithDepth(depth float64) *Assertion {
	if a.filteredHoles == nil {
		a.addError("WithDepth must be called after HasHole")
		return a
	}

	a.context += fmt.Sprintf(".WithDepth(%.4f)", depth)

	var filtered []machining.Hole
	for _, h := range a.filteredHoles {
		if a.floatEqual(h.Depth, depth) {
			filtered = append(filtered, h)
		}
	}

	if len(filtered) == 0 {
		a.addError("no hole with depth %.4f found", depth)
		if len(a.filteredHoles) > 0 {
			a.errors[len(a.errors)-1] += "\n  Available depths:"
			for _, h := range a.filteredHoles {
				a.errors[len(a.errors)-1] += fmt.Sprintf(" %.4f", h.Depth)
			}
		}
	}

	a.filteredHoles = filtered
	return a
}

// WithTool filters holes by tool number.
// Must be called after HasHole() or on a model with filtered holes.
func (a *Assertion) WithTool(tool int) *Assertion {
	if a.filteredHoles == nil {
		a.addError("WithTool must be called after HasHole")
		return a
	}

	a.context += fmt.Sprintf(".WithTool(%d)", tool)

	var filtered []machining.Hole
	for _, h := range a.filteredHoles {
		if h.Tool == tool {
			filtered = append(filtered, h)
		}
	}

	if len(filtered) == 0 {
		a.addError("no hole with tool %d found", tool)
		if len(a.filteredHoles) > 0 {
			a.errors[len(a.errors)-1] += "\n  Available tools:"
			for _, h := range a.filteredHoles {
				a.errors[len(a.errors)-1] += fmt.Sprintf(" %d", h.Tool)
			}
		}
	}

	a.filteredHoles = filtered
	return a
}

// --- Slot Assertions ---

// HasSlot asserts that a slot exists from start to end position.
func (a *Assertion) HasSlot(startX, startY, endX, endY float64) *Assertion {
	if !a.assertModelNotNil() {
		return a
	}

	a.context = fmt.Sprintf("HasSlot((%.4f, %.4f) -> (%.4f, %.4f))", startX, startY, endX, endY)

	start := machining.Point2D{X: startX, Y: startY}
	end := machining.Point2D{X: endX, Y: endY}

	var found []machining.Slot
	for _, s := range a.model.Slots {
		// Check both directions
		if (a.pointEqual(s.Start, start) && a.pointEqual(s.End, end)) ||
			(a.pointEqual(s.Start, end) && a.pointEqual(s.End, start)) {
			found = append(found, s)
		}
	}

	if len(found) == 0 {
		a.addError("no slot found from (%.4f, %.4f) to (%.4f, %.4f)", startX, startY, endX, endY)
		if len(a.model.Slots) > 0 {
			a.errors[len(a.errors)-1] += "\n  Available slots:"
			for i, s := range a.model.Slots {
				a.errors[len(a.errors)-1] += fmt.Sprintf("\n    [%d] from (%.4f, %.4f) to (%.4f, %.4f), length=%.4f",
					i, s.Start.X, s.Start.Y, s.End.X, s.End.Y, s.Length())
			}
		}
		a.filteredSlots = nil
		return a
	}

	a.filteredSlots = found
	return a
}

// HasSlotCount asserts that the model contains exactly the specified number of slots.
func (a *Assertion) HasSlotCount(expected int) *Assertion {
	if !a.assertModelNotNil() {
		return a
	}

	a.context = fmt.Sprintf("HasSlotCount(%d)", expected)

	actual := a.model.SlotCount()
	if actual != expected {
		a.addError("expected %d slots, got %d", expected, actual)
	}

	return a
}

// WithWidth filters slots by width.
func (a *Assertion) WithWidth(width float64) *Assertion {
	if a.filteredSlots == nil {
		a.addError("WithWidth must be called after HasSlot")
		return a
	}

	a.context += fmt.Sprintf(".WithWidth(%.4f)", width)

	var filtered []machining.Slot
	for _, s := range a.filteredSlots {
		if a.floatEqual(s.Width, width) {
			filtered = append(filtered, s)
		}
	}

	if len(filtered) == 0 {
		a.addError("no slot with width %.4f found", width)
	}

	a.filteredSlots = filtered
	return a
}

// WithSlotDepth filters slots by depth.
func (a *Assertion) WithSlotDepth(depth float64) *Assertion {
	if a.filteredSlots == nil {
		a.addError("WithSlotDepth must be called after HasSlot")
		return a
	}

	a.context += fmt.Sprintf(".WithSlotDepth(%.4f)", depth)

	var filtered []machining.Slot
	for _, s := range a.filteredSlots {
		if a.floatEqual(s.Depth, depth) {
			filtered = append(filtered, s)
		}
	}

	if len(filtered) == 0 {
		a.addError("no slot with depth %.4f found", depth)
	}

	a.filteredSlots = filtered
	return a
}

// --- Contour Assertions ---

// HasContour asserts that at least one contour exists in the model.
func (a *Assertion) HasContour() *Assertion {
	if !a.assertModelNotNil() {
		return a
	}

	a.context = "HasContour()"

	if a.model.ContourCount() == 0 {
		a.addError("no contours found in model")
		a.filteredContours = nil
		return a
	}

	// Copy all contours for filtering
	a.filteredContours = make([]machining.Contour, len(a.model.Contours))
	copy(a.filteredContours, a.model.Contours)
	return a
}

// HasContourCount asserts that the model contains exactly the specified number of contours.
func (a *Assertion) HasContourCount(expected int) *Assertion {
	if !a.assertModelNotNil() {
		return a
	}

	a.context = fmt.Sprintf("HasContourCount(%d)", expected)

	actual := a.model.ContourCount()
	if actual != expected {
		a.addError("expected %d contours, got %d", expected, actual)
	}

	return a
}

// IsClosed filters contours to only those that form closed loops.
func (a *Assertion) IsClosed() *Assertion {
	if a.filteredContours == nil {
		a.addError("IsClosed must be called after HasContour")
		return a
	}

	a.context += ".IsClosed()"

	var filtered []machining.Contour
	for _, c := range a.filteredContours {
		if c.IsClosed(a.tolerance) {
			filtered = append(filtered, c)
		}
	}

	if len(filtered) == 0 {
		a.addError("no closed contours found")
	}

	a.filteredContours = filtered
	return a
}

// IsOpen filters contours to only those that don't form closed loops.
func (a *Assertion) IsOpen() *Assertion {
	if a.filteredContours == nil {
		a.addError("IsOpen must be called after HasContour")
		return a
	}

	a.context += ".IsOpen()"

	var filtered []machining.Contour
	for _, c := range a.filteredContours {
		if !c.IsClosed(a.tolerance) {
			filtered = append(filtered, c)
		}
	}

	if len(filtered) == 0 {
		a.addError("no open contours found")
	}

	a.filteredContours = filtered
	return a
}

// HasSegmentCount filters contours by segment count.
func (a *Assertion) HasSegmentCount(expected int) *Assertion {
	if a.filteredContours == nil {
		a.addError("HasSegmentCount must be called after HasContour")
		return a
	}

	a.context += fmt.Sprintf(".HasSegmentCount(%d)", expected)

	var filtered []machining.Contour
	for _, c := range a.filteredContours {
		if len(c.Segments) == expected {
			filtered = append(filtered, c)
		}
	}

	if len(filtered) == 0 {
		a.addError("no contour with %d segments found", expected)
		if len(a.filteredContours) > 0 {
			a.errors[len(a.errors)-1] += "\n  Available segment counts:"
			for _, c := range a.filteredContours {
				a.errors[len(a.errors)-1] += fmt.Sprintf(" %d", len(c.Segments))
			}
		}
	}

	a.filteredContours = filtered
	return a
}

// --- Bounds Assertions ---

// Bounds represents a rectangular bounding box.
type Bounds struct {
	MinX, MaxX float64
	MinY, MaxY float64
	MinZ, MaxZ float64
}

// NoOperationOutside asserts that all machining operations are within the specified bounds.
func (a *Assertion) NoOperationOutside(bounds Bounds) *Assertion {
	if !a.assertModelNotNil() {
		return a
	}

	a.context = fmt.Sprintf("NoOperationOutside(X:[%.4f, %.4f], Y:[%.4f, %.4f], Z:[%.4f, %.4f])",
		bounds.MinX, bounds.MaxX, bounds.MinY, bounds.MaxY, bounds.MinZ, bounds.MaxZ)

	// Check holes
	for i, h := range a.model.Holes {
		if h.Center.X < bounds.MinX-a.tolerance || h.Center.X > bounds.MaxX+a.tolerance ||
			h.Center.Y < bounds.MinY-a.tolerance || h.Center.Y > bounds.MaxY+a.tolerance {
			a.addError("hole[%d] at (%.4f, %.4f) is outside XY bounds", i, h.Center.X, h.Center.Y)
		}
		if h.TopZ > bounds.MaxZ+a.tolerance || h.BottomZ < bounds.MinZ-a.tolerance {
			a.addError("hole[%d] Z range [%.4f, %.4f] is outside Z bounds [%.4f, %.4f]",
				i, h.BottomZ, h.TopZ, bounds.MinZ, bounds.MaxZ)
		}
	}

	// Check slots
	for i, s := range a.model.Slots {
		if s.Start.X < bounds.MinX-a.tolerance || s.Start.X > bounds.MaxX+a.tolerance ||
			s.Start.Y < bounds.MinY-a.tolerance || s.Start.Y > bounds.MaxY+a.tolerance {
			a.addError("slot[%d] start (%.4f, %.4f) is outside XY bounds", i, s.Start.X, s.Start.Y)
		}
		if s.End.X < bounds.MinX-a.tolerance || s.End.X > bounds.MaxX+a.tolerance ||
			s.End.Y < bounds.MinY-a.tolerance || s.End.Y > bounds.MaxY+a.tolerance {
			a.addError("slot[%d] end (%.4f, %.4f) is outside XY bounds", i, s.End.X, s.End.Y)
		}
		if s.Z < bounds.MinZ-a.tolerance || s.Z > bounds.MaxZ+a.tolerance {
			a.addError("slot[%d] Z=%.4f is outside Z bounds [%.4f, %.4f]",
				i, s.Z, bounds.MinZ, bounds.MaxZ)
		}
	}

	// Check contours
	for i, c := range a.model.Contours {
		for j, seg := range c.Segments {
			if seg.Start.X < bounds.MinX-a.tolerance || seg.Start.X > bounds.MaxX+a.tolerance ||
				seg.Start.Y < bounds.MinY-a.tolerance || seg.Start.Y > bounds.MaxY+a.tolerance {
				a.addError("contour[%d].segment[%d] start (%.4f, %.4f) is outside XY bounds",
					i, j, seg.Start.X, seg.Start.Y)
			}
			if seg.End.X < bounds.MinX-a.tolerance || seg.End.X > bounds.MaxX+a.tolerance ||
				seg.End.Y < bounds.MinY-a.tolerance || seg.End.Y > bounds.MaxY+a.tolerance {
				a.addError("contour[%d].segment[%d] end (%.4f, %.4f) is outside XY bounds",
					i, j, seg.End.X, seg.End.Y)
			}
		}
		if c.Z < bounds.MinZ-a.tolerance || c.Z > bounds.MaxZ+a.tolerance {
			a.addError("contour[%d] Z=%.4f is outside Z bounds [%.4f, %.4f]",
				i, c.Z, bounds.MinZ, bounds.MaxZ)
		}
	}

	return a
}

// --- Utility Methods ---

// And resets the context for a new assertion chain while preserving the pass/fail state.
func (a *Assertion) And() *Assertion {
	a.context = ""
	a.filteredHoles = nil
	a.filteredSlots = nil
	a.filteredContours = nil
	return a
}

// FilteredHoles returns the holes that passed the current filter chain.
// Returns nil if no filter has been applied.
func (a *Assertion) FilteredHoles() []machining.Hole {
	return a.filteredHoles
}

// FilteredSlots returns the slots that passed the current filter chain.
func (a *Assertion) FilteredSlots() []machining.Slot {
	return a.filteredSlots
}

// FilteredContours returns the contours that passed the current filter chain.
func (a *Assertion) FilteredContours() []machining.Contour {
	return a.filteredContours
}
