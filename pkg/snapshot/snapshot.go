package snapshot

import (
	"encoding/json"
	"fmt"
	"math"
	"os"
	"path/filepath"
	"sort"
	"strings"

	"github.com/eduardotorresdev/gocode-check/pkg/machining"
)

// Version is the current snapshot format version.
const Version = "1.0.0"

// DefaultPrecision is the default number of decimal places for rounding.
const DefaultPrecision = 6

// DefaultDir is the default directory for storing snapshots.
const DefaultDir = "testdata/snapshots"

// Config holds configuration for snapshot operations.
type Config struct {
	// Dir is the directory where snapshots are stored.
	Dir string

	// Precision is the number of decimal places for rounding float values.
	Precision int
}

// DefaultConfig returns the default snapshot configuration.
func DefaultConfig() Config {
	return Config{
		Dir:       DefaultDir,
		Precision: DefaultPrecision,
	}
}

// Snapshot represents a saved snapshot of a MachiningModel.
type Snapshot struct {
	// Version is the snapshot format version.
	Version string `json:"version"`

	// Model contains the normalized machining model data.
	Model NormalizedModel `json:"model"`
}

// NormalizedModel is a deterministic representation of MachiningModel.
// All lists are sorted and all float values are rounded.
type NormalizedModel struct {
	Holes    []NormalizedHole    `json:"holes"`
	Slots    []NormalizedSlot    `json:"slots"`
	Contours []NormalizedContour `json:"contours"`
}

// NormalizedPoint2D is a deterministic 2D point.
type NormalizedPoint2D struct {
	X float64 `json:"x"`
	Y float64 `json:"y"`
}

// NormalizedHole is a deterministic hole representation.
type NormalizedHole struct {
	Center   NormalizedPoint2D `json:"center"`
	Diameter float64           `json:"diameter"`
	Depth    float64           `json:"depth"`
	TopZ     float64           `json:"topZ"`
	BottomZ  float64           `json:"bottomZ"`
	Tool     int               `json:"tool"`
}

// NormalizedSlot is a deterministic slot representation.
type NormalizedSlot struct {
	Start NormalizedPoint2D `json:"start"`
	End   NormalizedPoint2D `json:"end"`
	Width float64           `json:"width"`
	Depth float64           `json:"depth"`
	Z     float64           `json:"z"`
	Tool  int               `json:"tool"`
}

// NormalizedContour is a deterministic contour representation.
type NormalizedContour struct {
	Segments []NormalizedSegment `json:"segments"`
	Z        float64             `json:"z"`
	Closed   bool                `json:"closed"`
	Tool     int                 `json:"tool"`
}

// NormalizedSegment is a deterministic segment representation.
type NormalizedSegment struct {
	Type   string            `json:"type"`
	Start  NormalizedPoint2D `json:"start"`
	End    NormalizedPoint2D `json:"end"`
	Center NormalizedPoint2D `json:"center,omitempty"`
	Radius float64           `json:"radius,omitempty"`
}

// roundFloat rounds a float64 to the specified precision.
func roundFloat(val float64, precision int) float64 {
	mult := math.Pow(10, float64(precision))
	return math.Round(val*mult) / mult
}

// normalizePoint2D normalizes a Point2D.
func normalizePoint2D(p machining.Point2D, precision int) NormalizedPoint2D {
	return NormalizedPoint2D{
		X: roundFloat(p.X, precision),
		Y: roundFloat(p.Y, precision),
	}
}

// normalizeHole normalizes a Hole.
func normalizeHole(h machining.Hole, precision int) NormalizedHole {
	return NormalizedHole{
		Center:   normalizePoint2D(h.Center, precision),
		Diameter: roundFloat(h.Diameter, precision),
		Depth:    roundFloat(h.Depth, precision),
		TopZ:     roundFloat(h.TopZ, precision),
		BottomZ:  roundFloat(h.BottomZ, precision),
		Tool:     h.Tool,
	}
}

// normalizeSlot normalizes a Slot.
func normalizeSlot(s machining.Slot, precision int) NormalizedSlot {
	return NormalizedSlot{
		Start: normalizePoint2D(s.Start, precision),
		End:   normalizePoint2D(s.End, precision),
		Width: roundFloat(s.Width, precision),
		Depth: roundFloat(s.Depth, precision),
		Z:     roundFloat(s.Z, precision),
		Tool:  s.Tool,
	}
}

// normalizeSegment normalizes a Segment.
func normalizeSegment(s machining.Segment, precision int) NormalizedSegment {
	ns := NormalizedSegment{
		Type:  s.Type.String(),
		Start: normalizePoint2D(s.Start, precision),
		End:   normalizePoint2D(s.End, precision),
	}
	if s.IsArc() {
		ns.Center = normalizePoint2D(s.Center, precision)
		ns.Radius = roundFloat(s.Radius, precision)
	}
	return ns
}

// normalizeContour normalizes a Contour.
func normalizeContour(c machining.Contour, precision int) NormalizedContour {
	segments := make([]NormalizedSegment, len(c.Segments))
	for i, s := range c.Segments {
		segments[i] = normalizeSegment(s, precision)
	}
	return NormalizedContour{
		Segments: segments,
		Z:        roundFloat(c.Z, precision),
		Closed:   c.Closed,
		Tool:     c.Tool,
	}
}

// Normalize creates a deterministic NormalizedModel from a MachiningModel.
// All lists are sorted and all floats are rounded to the specified precision.
func Normalize(model *machining.MachiningModel, precision int) NormalizedModel {
	if model == nil {
		return NormalizedModel{
			Holes:    []NormalizedHole{},
			Slots:    []NormalizedSlot{},
			Contours: []NormalizedContour{},
		}
	}

	// Normalize holes
	holes := make([]NormalizedHole, len(model.Holes))
	for i, h := range model.Holes {
		holes[i] = normalizeHole(h, precision)
	}

	// Sort holes by center X, then Y, then depth
	sort.Slice(holes, func(i, j int) bool {
		if holes[i].Center.X != holes[j].Center.X {
			return holes[i].Center.X < holes[j].Center.X
		}
		if holes[i].Center.Y != holes[j].Center.Y {
			return holes[i].Center.Y < holes[j].Center.Y
		}
		return holes[i].Depth < holes[j].Depth
	})

	// Normalize slots
	slots := make([]NormalizedSlot, len(model.Slots))
	for i, s := range model.Slots {
		slots[i] = normalizeSlot(s, precision)
	}

	// Sort slots by start X, then start Y, then end X, then end Y
	sort.Slice(slots, func(i, j int) bool {
		if slots[i].Start.X != slots[j].Start.X {
			return slots[i].Start.X < slots[j].Start.X
		}
		if slots[i].Start.Y != slots[j].Start.Y {
			return slots[i].Start.Y < slots[j].Start.Y
		}
		if slots[i].End.X != slots[j].End.X {
			return slots[i].End.X < slots[j].End.X
		}
		return slots[i].End.Y < slots[j].End.Y
	})

	// Normalize contours
	contours := make([]NormalizedContour, len(model.Contours))
	for i, c := range model.Contours {
		contours[i] = normalizeContour(c, precision)
	}

	// Sort contours by Z, then by first segment start X, then Y
	sort.Slice(contours, func(i, j int) bool {
		if contours[i].Z != contours[j].Z {
			return contours[i].Z < contours[j].Z
		}
		if len(contours[i].Segments) == 0 {
			return true
		}
		if len(contours[j].Segments) == 0 {
			return false
		}
		si := contours[i].Segments[0]
		sj := contours[j].Segments[0]
		if si.Start.X != sj.Start.X {
			return si.Start.X < sj.Start.X
		}
		return si.Start.Y < sj.Start.Y
	})

	return NormalizedModel{
		Holes:    holes,
		Slots:    slots,
		Contours: contours,
	}
}

// ToJSON serializes a Snapshot to deterministic JSON.
func (s *Snapshot) ToJSON() ([]byte, error) {
	return json.MarshalIndent(s, "", "  ")
}

// FromJSON deserializes a Snapshot from JSON.
func FromJSON(data []byte) (*Snapshot, error) {
	var s Snapshot
	if err := json.Unmarshal(data, &s); err != nil {
		return nil, fmt.Errorf("failed to parse snapshot: %w", err)
	}
	return &s, nil
}

// NewSnapshot creates a new Snapshot from a MachiningModel.
func NewSnapshot(model *machining.MachiningModel, precision int) *Snapshot {
	return &Snapshot{
		Version: Version,
		Model:   Normalize(model, precision),
	}
}

// snapshotPath returns the full path to a snapshot file.
func snapshotPath(dir, name string) string {
	return filepath.Join(dir, name+".snap.json")
}

// Save saves a snapshot to disk.
func Save(model *machining.MachiningModel, name string, config Config) error {
	snapshot := NewSnapshot(model, config.Precision)
	data, err := snapshot.ToJSON()
	if err != nil {
		return fmt.Errorf("failed to serialize snapshot: %w", err)
	}

	path := snapshotPath(config.Dir, name)

	// Create directory if it doesn't exist
	if err := os.MkdirAll(filepath.Dir(path), 0755); err != nil {
		return fmt.Errorf("failed to create snapshot directory: %w", err)
	}

	if err := os.WriteFile(path, data, 0644); err != nil {
		return fmt.Errorf("failed to write snapshot file: %w", err)
	}

	return nil
}

// Load loads a snapshot from disk.
func Load(name string, config Config) (*Snapshot, error) {
	path := snapshotPath(config.Dir, name)
	data, err := os.ReadFile(path)
	if err != nil {
		if os.IsNotExist(err) {
			return nil, fmt.Errorf("snapshot not found: %s", path)
		}
		return nil, fmt.Errorf("failed to read snapshot file: %w", err)
	}

	return FromJSON(data)
}

// Exists checks if a snapshot exists.
func Exists(name string, config Config) bool {
	path := snapshotPath(config.Dir, name)
	_, err := os.Stat(path)
	return err == nil
}

// ShouldUpdate returns true if snapshots should be updated.
// This is controlled by the UPDATE_SNAPSHOTS environment variable.
func ShouldUpdate() bool {
	val := os.Getenv("UPDATE_SNAPSHOTS")
	return val == "true" || val == "1" || val == "yes"
}

// CompareResult represents the result of comparing two snapshots.
type CompareResult struct {
	// Match is true if the snapshots are identical.
	Match bool

	// Diff contains a human-readable diff if Match is false.
	Diff string

	// ExpectedJSON is the expected snapshot JSON.
	ExpectedJSON string

	// ActualJSON is the actual snapshot JSON.
	ActualJSON string
}

// Compare compares a MachiningModel against a saved snapshot.
func Compare(model *machining.MachiningModel, name string, config Config) (*CompareResult, error) {
	expected, err := Load(name, config)
	if err != nil {
		return nil, err
	}

	actual := NewSnapshot(model, config.Precision)

	expectedJSON, err := expected.ToJSON()
	if err != nil {
		return nil, fmt.Errorf("failed to serialize expected snapshot: %w", err)
	}

	actualJSON, err := actual.ToJSON()
	if err != nil {
		return nil, fmt.Errorf("failed to serialize actual snapshot: %w", err)
	}

	result := &CompareResult{
		ExpectedJSON: string(expectedJSON),
		ActualJSON:   string(actualJSON),
	}

	if result.ExpectedJSON == result.ActualJSON {
		result.Match = true
		return result, nil
	}

	result.Match = false
	result.Diff = generateDiff(result.ExpectedJSON, result.ActualJSON)

	return result, nil
}

// generateDiff generates a human-readable diff between two JSON strings.
func generateDiff(expected, actual string) string {
	expectedLines := strings.Split(expected, "\n")
	actualLines := strings.Split(actual, "\n")

	var diff strings.Builder
	diff.WriteString("Snapshot mismatch:\n")
	diff.WriteString("--- Expected\n")
	diff.WriteString("+++ Actual\n")
	diff.WriteString("@@ @@\n")

	// Simple line-by-line diff
	maxLines := len(expectedLines)
	if len(actualLines) > maxLines {
		maxLines = len(actualLines)
	}

	for i := 0; i < maxLines; i++ {
		var expLine, actLine string
		if i < len(expectedLines) {
			expLine = expectedLines[i]
		}
		if i < len(actualLines) {
			actLine = actualLines[i]
		}

		if expLine == actLine {
			diff.WriteString("  " + expLine + "\n")
		} else {
			if i < len(expectedLines) {
				diff.WriteString("- " + expLine + "\n")
			}
			if i < len(actualLines) {
				diff.WriteString("+ " + actLine + "\n")
			}
		}
	}

	return diff.String()
}
