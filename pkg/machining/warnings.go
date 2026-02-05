package machining

import "fmt"

// WarningType represents the type of warning.
type WarningType int

const (
	// WarningMissingTool indicates a cutting operation without a tool selected.
	WarningMissingTool WarningType = iota
	// WarningSpindleOff indicates cutting with spindle off.
	WarningSpindleOff
	// WarningZeroFeed indicates cutting with zero feed rate.
	WarningZeroFeed
	// WarningShallowCut indicates a cut that doesn't penetrate the workpiece.
	WarningShallowCut
	// WarningUnusualGeometry indicates unusual or unexpected geometry.
	WarningUnusualGeometry
	// WarningIncompleteHole indicates a potential hole that may be incomplete.
	WarningIncompleteHole
	// WarningOpenContour indicates a contour that is not closed.
	WarningOpenContour
)

// String returns the string representation of the warning type.
func (w WarningType) String() string {
	switch w {
	case WarningMissingTool:
		return "MissingTool"
	case WarningSpindleOff:
		return "SpindleOff"
	case WarningZeroFeed:
		return "ZeroFeed"
	case WarningShallowCut:
		return "ShallowCut"
	case WarningUnusualGeometry:
		return "UnusualGeometry"
	case WarningIncompleteHole:
		return "IncompleteHole"
	case WarningOpenContour:
		return "OpenContour"
	default:
		return "Unknown"
	}
}

// Warning represents a non-blocking warning detected during analysis.
// Warnings are informational and do not prevent the analysis from completing.
type Warning struct {
	// Type is the category of warning.
	Type WarningType

	// Message is a human-readable description of the warning.
	Message string

	// SourceLine is the G-code line number where the warning occurred (0 if N/A).
	SourceLine int

	// Details contains additional context-specific information.
	Details map[string]interface{}
}

// NewWarning creates a new warning with the given type and message.
func NewWarning(wtype WarningType, message string, sourceLine int) Warning {
	return Warning{
		Type:       wtype,
		Message:    message,
		SourceLine: sourceLine,
		Details:    make(map[string]interface{}),
	}
}

// WithDetail adds a detail to the warning and returns the warning for chaining.
func (w Warning) WithDetail(key string, value interface{}) Warning {
	if w.Details == nil {
		w.Details = make(map[string]interface{})
	}
	w.Details[key] = value
	return w
}

// String returns a human-readable representation of the warning.
func (w Warning) String() string {
	if w.SourceLine > 0 {
		return fmt.Sprintf("[%s] Line %d: %s", w.Type, w.SourceLine, w.Message)
	}
	return fmt.Sprintf("[%s] %s", w.Type, w.Message)
}

// Warnings is a collection of Warning values.
type Warnings []Warning

// Add appends a warning to the collection.
func (ws *Warnings) Add(w Warning) {
	*ws = append(*ws, w)
}

// AddNew creates and adds a new warning.
func (ws *Warnings) AddNew(wtype WarningType, message string, sourceLine int) {
	ws.Add(NewWarning(wtype, message, sourceLine))
}

// Count returns the number of warnings.
func (ws Warnings) Count() int {
	return len(ws)
}

// OfType returns all warnings of a specific type.
func (ws Warnings) OfType(wtype WarningType) Warnings {
	var result Warnings
	for _, w := range ws {
		if w.Type == wtype {
			result = append(result, w)
		}
	}
	return result
}

// HasType returns true if there is at least one warning of the given type.
func (ws Warnings) HasType(wtype WarningType) bool {
	for _, w := range ws {
		if w.Type == wtype {
			return true
		}
	}
	return false
}

// IsEmpty returns true if there are no warnings.
func (ws Warnings) IsEmpty() bool {
	return len(ws) == 0
}
