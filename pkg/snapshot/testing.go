package snapshot

import (
	"testing"

	"github.com/eduardotorresdev/gocode-check/pkg/machining"
)

// AssertMatchesSnapshot compares a MachiningModel against a saved snapshot.
// If the snapshot doesn't exist and UPDATE_SNAPSHOTS is set, it creates one.
// If the snapshots don't match, the test fails with a detailed diff.
func AssertMatchesSnapshot(t *testing.T, model *machining.MachiningModel, name string) {
	t.Helper()
	AssertMatchesSnapshotWithConfig(t, model, name, DefaultConfig())
}

// AssertMatchesSnapshotWithConfig is like AssertMatchesSnapshot but with custom config.
func AssertMatchesSnapshotWithConfig(t *testing.T, model *machining.MachiningModel, name string, config Config) {
	t.Helper()

	// Check if we should update snapshots
	if ShouldUpdate() {
		if err := Save(model, name, config); err != nil {
			t.Fatalf("failed to save snapshot: %v", err)
		}
		t.Logf("snapshot updated: %s", name)
		return
	}

	// Check if snapshot exists
	if !Exists(name, config) {
		t.Fatalf("snapshot not found: %s\nRun with UPDATE_SNAPSHOTS=true to create it", name)
	}

	// Compare against snapshot
	result, err := Compare(model, name, config)
	if err != nil {
		t.Fatalf("failed to compare snapshot: %v", err)
	}

	if !result.Match {
		t.Errorf("snapshot mismatch for %q:\n%s\nRun with UPDATE_SNAPSHOTS=true to update", name, result.Diff)
	}
}

// MustMatchSnapshot is like AssertMatchesSnapshot but calls t.Fatal on mismatch.
func MustMatchSnapshot(t *testing.T, model *machining.MachiningModel, name string) {
	t.Helper()
	MustMatchSnapshotWithConfig(t, model, name, DefaultConfig())
}

// MustMatchSnapshotWithConfig is like MustMatchSnapshot but with custom config.
func MustMatchSnapshotWithConfig(t *testing.T, model *machining.MachiningModel, name string, config Config) {
	t.Helper()

	// Check if we should update snapshots
	if ShouldUpdate() {
		if err := Save(model, name, config); err != nil {
			t.Fatalf("failed to save snapshot: %v", err)
		}
		t.Logf("snapshot updated: %s", name)
		return
	}

	// Check if snapshot exists
	if !Exists(name, config) {
		t.Fatalf("snapshot not found: %s\nRun with UPDATE_SNAPSHOTS=true to create it", name)
	}

	// Compare against snapshot
	result, err := Compare(model, name, config)
	if err != nil {
		t.Fatalf("failed to compare snapshot: %v", err)
	}

	if !result.Match {
		t.Fatalf("snapshot mismatch for %q:\n%s\nRun with UPDATE_SNAPSHOTS=true to update", name, result.Diff)
	}
}
