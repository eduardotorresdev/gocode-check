package machining

import (
	"math"

	"github.com/eduardotorresdev/gocode-check/pkg/interpreter"
)

// DefaultTolerance is the default tolerance for geometric comparisons.
const DefaultTolerance = 1e-6

// AnalyzerConfig contains configuration options for the analyzer.
type AnalyzerConfig struct {
	// Tolerance is the tolerance for geometric comparisons.
	Tolerance float64

	// MinHoleDepth is the minimum depth to consider a plunge as a hole.
	MinHoleDepth float64

	// DefaultToolDiameter is the tool diameter to assume when not specified.
	DefaultToolDiameter float64

	// WorkpieceTopZ is the Z coordinate of the workpiece top surface.
	WorkpieceTopZ float64

	// ConsolidatePeckDrilling merges peck cycles into a single hole.
	ConsolidatePeckDrilling bool

	// PeckDetectionRadius is the max XY deviation to treat pecks as the same hole.
	PeckDetectionRadius float64
}

// DefaultConfig returns an AnalyzerConfig with sensible defaults.
func DefaultConfig() AnalyzerConfig {
	return AnalyzerConfig{
		Tolerance:               DefaultTolerance,
		MinHoleDepth:            0.001,
		DefaultToolDiameter:     6.0, // 6mm default end mill
		WorkpieceTopZ:           0,
		ConsolidatePeckDrilling: true,
		PeckDetectionRadius:     0.5,
	}
}

// Analyzer converts execution traces into semantic machining models.
type Analyzer struct {
	config   AnalyzerConfig
	warnings Warnings
	model    *MachiningModel
}

// NewAnalyzer creates a new Analyzer with the given configuration.
func NewAnalyzer(config AnalyzerConfig) *Analyzer {
	return &Analyzer{
		config:   config,
		warnings: make(Warnings, 0),
		model:    NewMachiningModel(),
	}
}

// NewDefaultAnalyzer creates a new Analyzer with default configuration.
func NewDefaultAnalyzer() *Analyzer {
	return NewAnalyzer(DefaultConfig())
}

// Analyze processes an execution trace and returns the machining model with warnings.
func (a *Analyzer) Analyze(trace *interpreter.ExecutionTrace) (*MachiningModel, Warnings) {
	// Reset state for determinism
	a.model = NewMachiningModel()
	a.warnings = make(Warnings, 0)

	if trace == nil || len(trace.Events) == 0 {
		return a.model, a.warnings
	}

	// First pass: identify holes (vertical plunges)
	a.detectHoles(trace)

	// Second pass: identify contours (horizontal cutting paths)
	a.detectContours(trace)

	// Third pass: identify slots (linear horizontal cuts)
	a.detectSlots(trace)

	return a.model, a.warnings
}

// detectHoles identifies vertical plunge cuts that form holes.
// A hole is detected when:
// - Z moves from a higher Z to a lower Z (plunge cut)
// - The XY position remains constant during the plunge
// - The tool returns to original Z or higher (retract)
func (a *Analyzer) detectHoles(trace *interpreter.ExecutionTrace) {
	events := trace.Events
	currentTool := 0
	peckEvents := make([]peckEvent, 0)

	for _, event := range events {
		if event.Type == interpreter.EventToolChange {
			currentTool = event.Tool
			continue
		}

		// Look for linear cuts that are purely vertical (Z-only movement)
		if event.Type == interpreter.EventLinearCut {
			if a.isPlungeCut(event) {
				if peck := a.createPeckEvent(event, currentTool); peck != nil {
					peckEvents = append(peckEvents, *peck)
				}
			}
		}

		// Also check for drill cycles (if implemented in interpreter)
		if event.Type == interpreter.EventDrillCycle {
			if peck := a.createPeckEvent(event, currentTool); peck != nil {
				peckEvents = append(peckEvents, *peck)
			}
		}

		// Detect circular holes created by full circle arcs
		if event.Type == interpreter.EventArcCW || event.Type == interpreter.EventArcCCW {
			if a.isFullCircleArc(event) {
				hole := a.createHoleFromArc(event, currentTool)
				if hole != nil {
					a.model.AddHole(*hole)
				}
			}
		}

		// Warn about cutting without tool
		if a.isCuttingEvent(event.Type) && currentTool == 0 {
			a.warnings.Add(NewWarning(
				WarningMissingTool,
				"Cutting operation without tool selected",
				event.SourceLine,
			))
		}

		// Warn about cutting with zero feed
		if a.isCuttingEvent(event.Type) && event.Feed == 0 {
			a.warnings.Add(NewWarning(
				WarningZeroFeed,
				"Cutting operation with zero feed rate",
				event.SourceLine,
			))
		}
	}

	if len(peckEvents) > 0 {
		a.addPeckHoles(peckEvents)
	}
}

// detectContours identifies connected cutting paths that form contours.
func (a *Analyzer) detectContours(trace *interpreter.ExecutionTrace) {
	events := trace.Events
	currentTool := 0
	var currentContour *Contour
	var lastCutEndPos *Point2D

	for _, event := range events {
		if event.Type == interpreter.EventToolChange {
			currentTool = event.Tool
			// End current contour on tool change
			a.finalizeContour(currentContour)
			currentContour = nil
			lastCutEndPos = nil
			continue
		}

		// Only process horizontal cutting events
		if !a.isHorizontalCut(event) {
			if currentContour != nil && len(currentContour.Segments) > 0 {
				a.finalizeContour(currentContour)
				currentContour = nil
			}
			lastCutEndPos = nil
			continue
		}

		// Skip if this looks like a pure vertical move
		if a.isPlungeCut(event) {
			continue
		}

		fromXY := Point2D{X: event.From.X, Y: event.From.Y}
		toXY := Point2D{X: event.To.X, Y: event.To.Y}

		// Check if this cut is connected to the previous one
		if currentContour == nil || lastCutEndPos == nil || !lastCutEndPos.Equal(fromXY, a.config.Tolerance) {
			// Start a new contour
			a.finalizeContour(currentContour)
			currentContour = &Contour{
				Segments:    make([]Segment, 0),
				Z:           event.To.Z,
				Tool:        currentTool,
				SourceLines: make([]int, 0),
			}
		}

		// Add segment to current contour
		segment := a.createSegmentFromEvent(event, fromXY, toXY)
		currentContour.AddSegment(segment)
		lastCutEndPos = &toXY
	}

	// Finalize any remaining contour
	a.finalizeContour(currentContour)
}

// detectSlots identifies linear groove features.
// A slot is a simple linear cut at constant depth.
func (a *Analyzer) detectSlots(trace *interpreter.ExecutionTrace) {
	// Slots are identified from contours that consist of a single linear segment
	// This is done to avoid duplicating logic; we examine the model's contours
	var nonSlotContours []Contour

	for _, contour := range a.model.Contours {
		// A slot is a single-segment open contour that is linear
		if len(contour.Segments) == 1 && !contour.Closed {
			seg := contour.Segments[0]
			if seg.Type == SegmentLine && seg.Length() > a.config.Tolerance {
				slot := Slot{
					Start:       seg.Start,
					End:         seg.End,
					Width:       a.config.DefaultToolDiameter,
					Depth:       a.config.WorkpieceTopZ - contour.Z,
					Z:           contour.Z,
					Tool:        contour.Tool,
					SourceLines: contour.SourceLines,
				}
				a.model.AddSlot(slot)
				continue
			}
		}
		nonSlotContours = append(nonSlotContours, contour)
	}

	// Keep only contours that weren't converted to slots
	a.model.Contours = nonSlotContours
}

// finalizeContour processes a completed contour and adds it to the model.
func (a *Analyzer) finalizeContour(c *Contour) {
	if c == nil || len(c.Segments) == 0 {
		return
	}

	c.Closed = c.IsClosed(a.config.Tolerance)
	if !c.Closed && len(c.Segments) > 2 {
		// Warn about open contours with multiple segments
		a.warnings.Add(NewWarning(
			WarningOpenContour,
			"Contour is not closed",
			0,
		).WithDetail("segmentCount", len(c.Segments)))
	}

	a.model.AddContour(*c)
}

// isPlungeCut returns true if the event represents a vertical plunge (Z-only movement).
func (a *Analyzer) isPlungeCut(event interpreter.Event) bool {
	if event.Type != interpreter.EventLinearCut {
		return false
	}

	// Check if X and Y remain constant
	sameX := math.Abs(event.From.X-event.To.X) <= a.config.Tolerance
	sameY := math.Abs(event.From.Y-event.To.Y) <= a.config.Tolerance
	differentZ := math.Abs(event.From.Z-event.To.Z) > a.config.Tolerance

	return sameX && sameY && differentZ
}

// isHorizontalCut returns true if the event is a cutting operation in the XY plane.
func (a *Analyzer) isHorizontalCut(event interpreter.Event) bool {
	switch event.Type {
	case interpreter.EventLinearCut, interpreter.EventArcCW, interpreter.EventArcCCW:
		// Has some XY movement
		hasXYMovement := math.Abs(event.From.X-event.To.X) > a.config.Tolerance ||
			math.Abs(event.From.Y-event.To.Y) > a.config.Tolerance
		return hasXYMovement
	default:
		return false
	}
}

// isFullCircleArc returns true if the arc forms a full circle (start == end).
func (a *Analyzer) isFullCircleArc(event interpreter.Event) bool {
	if event.Type != interpreter.EventArcCW && event.Type != interpreter.EventArcCCW {
		return false
	}

	return math.Abs(event.From.X-event.To.X) <= a.config.Tolerance &&
		math.Abs(event.From.Y-event.To.Y) <= a.config.Tolerance &&
		event.Arc != nil && event.Arc.Radius > a.config.Tolerance
}

// isCuttingEvent returns true if the event type represents a cutting operation.
func (a *Analyzer) isCuttingEvent(et interpreter.EventType) bool {
	switch et {
	case interpreter.EventLinearCut, interpreter.EventArcCW, interpreter.EventArcCCW, interpreter.EventDrillCycle:
		return true
	default:
		return false
	}
}

type peckEvent struct {
	center     Point2D
	tool       int
	startZ     float64
	endZ       float64
	sourceLine int
}

type peckSequence struct {
	center      Point2D
	tool        int
	pecks       []Peck
	sourceLines []int
	minBottomZ  float64
	lastBottomZ float64
}

func (a *Analyzer) createPeckEvent(event interpreter.Event, tool int) *peckEvent {
	// Only consider plunges going down (from higher to lower Z)
	if event.To.Z >= event.From.Z {
		return nil
	}

	depth := a.config.WorkpieceTopZ - event.To.Z
	if depth < a.config.MinHoleDepth {
		return nil
	}

	return &peckEvent{
		center:     Point2D{X: event.To.X, Y: event.To.Y},
		tool:       tool,
		startZ:     event.From.Z,
		endZ:       event.To.Z,
		sourceLine: event.SourceLine,
	}
}

func (a *Analyzer) addPeckHoles(pecks []peckEvent) {
	if !a.config.ConsolidatePeckDrilling {
		for _, peck := range pecks {
			hole := a.holeFromPeckSequence(&peckSequence{
				center:      peck.center,
				tool:        peck.tool,
				pecks:       []Peck{peckToPeck(peck)},
				sourceLines: []int{peck.sourceLine},
				minBottomZ:  peck.endZ,
				lastBottomZ: peck.endZ,
			})
			a.model.AddHole(hole)
		}
		return
	}

	var current *peckSequence
	for _, peck := range pecks {
		if current == nil {
			current = &peckSequence{
				center:      peck.center,
				tool:        peck.tool,
				pecks:       []Peck{peckToPeck(peck)},
				sourceLines: []int{peck.sourceLine},
				minBottomZ:  peck.endZ,
				lastBottomZ: peck.endZ,
			}
			continue
		}

		if a.isSamePeckGroup(current, peck) {
			current.pecks = append(current.pecks, peckToPeck(peck))
			current.sourceLines = append(current.sourceLines, peck.sourceLine)
			if peck.endZ < current.minBottomZ {
				current.minBottomZ = peck.endZ
			}
			current.lastBottomZ = peck.endZ
			continue
		}

		a.model.AddHole(a.holeFromPeckSequence(current))
		current = &peckSequence{
			center:      peck.center,
			tool:        peck.tool,
			pecks:       []Peck{peckToPeck(peck)},
			sourceLines: []int{peck.sourceLine},
			minBottomZ:  peck.endZ,
			lastBottomZ: peck.endZ,
		}
	}

	if current != nil {
		a.model.AddHole(a.holeFromPeckSequence(current))
	}
}

func (a *Analyzer) isSamePeckGroup(seq *peckSequence, peck peckEvent) bool {
	if seq.tool != peck.tool {
		return false
	}
	if seq.center.Distance(peck.center) > a.config.PeckDetectionRadius {
		return false
	}

	// Require retraction above previous bottom and a deeper next plunge
	if peck.startZ <= seq.lastBottomZ+a.config.Tolerance {
		return false
	}
	if peck.endZ >= seq.lastBottomZ-a.config.Tolerance {
		return false
	}

	return true
}

func (a *Analyzer) holeFromPeckSequence(seq *peckSequence) Hole {
	depth := a.config.WorkpieceTopZ - seq.minBottomZ
	hole := Hole{
		Center:      seq.center,
		Diameter:    a.config.DefaultToolDiameter,
		Depth:       depth,
		TopZ:        a.config.WorkpieceTopZ,
		BottomZ:     seq.minBottomZ,
		Tool:        seq.tool,
		SourceLines: seq.sourceLines,
	}

	if len(seq.pecks) > 1 {
		hole.IsPeckDrilled = true
		hole.PeckCount = len(seq.pecks)
		hole.Pecks = seq.pecks
	}

	return hole
}

func peckToPeck(event peckEvent) Peck {
	return Peck{
		StartZ: event.startZ,
		EndZ:   event.endZ,
		Depth:  math.Abs(event.startZ - event.endZ),
	}
}

// createHoleFromArc creates a Hole from a full circle arc event.
func (a *Analyzer) createHoleFromArc(event interpreter.Event, tool int) *Hole {
	if event.Arc == nil {
		return nil
	}

	// For a full circle, the center is the arc center
	// The hole diameter is 2 * arc radius + tool diameter
	diameter := 2*event.Arc.Radius + a.config.DefaultToolDiameter

	return &Hole{
		Center:      Point2D{X: event.Arc.Center.X, Y: event.Arc.Center.Y},
		Diameter:    diameter,
		Depth:       a.config.WorkpieceTopZ - event.To.Z,
		TopZ:        a.config.WorkpieceTopZ,
		BottomZ:     event.To.Z,
		Tool:        tool,
		SourceLines: []int{event.SourceLine},
	}
}

// createSegmentFromEvent creates a Segment from an interpreter event.
func (a *Analyzer) createSegmentFromEvent(event interpreter.Event, from, to Point2D) Segment {
	seg := Segment{
		Start:      from,
		End:        to,
		SourceLine: event.SourceLine,
	}

	switch event.Type {
	case interpreter.EventLinearCut:
		seg.Type = SegmentLine
	case interpreter.EventArcCW:
		seg.Type = SegmentArcCW
		if event.Arc != nil {
			seg.Center = Point2D{X: event.Arc.Center.X, Y: event.Arc.Center.Y}
			seg.Radius = event.Arc.Radius
		}
	case interpreter.EventArcCCW:
		seg.Type = SegmentArcCCW
		if event.Arc != nil {
			seg.Center = Point2D{X: event.Arc.Center.X, Y: event.Arc.Center.Y}
			seg.Radius = event.Arc.Radius
		}
	}

	return seg
}

// Analyze is a convenience function that creates a default analyzer and processes a trace.
func Analyze(trace *interpreter.ExecutionTrace) (*MachiningModel, Warnings) {
	return NewDefaultAnalyzer().Analyze(trace)
}

// AnalyzeWithConfig is a convenience function that creates an analyzer with custom config.
func AnalyzeWithConfig(trace *interpreter.ExecutionTrace, config AnalyzerConfig) (*MachiningModel, Warnings) {
	return NewAnalyzer(config).Analyze(trace)
}
