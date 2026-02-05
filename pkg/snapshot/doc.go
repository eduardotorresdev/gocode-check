// Package snapshot provides snapshot-based testing for MachiningModel.
//
// The snapshot engine enables regression testing by comparing the current
// MachiningModel against a previously saved "golden" snapshot. This is
// particularly useful for detecting unintended changes in G-code interpretation.
//
// # Determinism
//
// Snapshots are designed to be fully deterministic:
//   - All lists (holes, slots, contours, segments) are sorted before serialization
//   - Floating-point numbers are rounded to a fixed precision
//   - JSON field order is consistent
//   - No timestamps or runtime-dependent data included
//
// This ensures that the same MachiningModel always produces the same snapshot,
// regardless of the order in which features were detected.
//
// # Usage
//
// Basic snapshot testing in a Go test:
//
//	func TestMyGCodeProgram(t *testing.T) {
//	    trace, _ := interpreter.ParseAndInterpret(gcode)
//	    model, _ := machining.Analyze(trace)
//
//	    // Compare against saved snapshot
//	    snapshot.AssertMatchesSnapshot(t, model, "my-program-v1")
//	}
//
// # Updating Snapshots
//
// When the model intentionally changes, update snapshots by running:
//
//	UPDATE_SNAPSHOTS=true go test ./...
//
// Or using make:
//
//	make snapshot
//
// # Snapshot Format
//
// Snapshots are stored as JSON files with the following structure:
//
//	{
//	    "version": "1.0.0",
//	    "model": {
//	        "holes": [...],
//	        "slots": [...],
//	        "contours": [...]
//	    }
//	}
//
// # Configuration
//
// The snapshot directory can be configured:
//
//	config := snapshot.Config{
//	    Dir:       "testdata/snapshots",
//	    Precision: 6,  // decimal places for rounding
//	}
//	snapshot.AssertMatchesSnapshotWithConfig(t, model, "name", config)
//
// # Diff Output
//
// When snapshots don't match, the diff output shows:
//   - Added lines (prefixed with +)
//   - Removed lines (prefixed with -)
//   - Context lines for better understanding
package snapshot
