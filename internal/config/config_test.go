package config

import (
	"testing"
)

func TestDefaultConfig(t *testing.T) {
	cfg := DefaultConfig()

	if cfg.Tolerance != 1e-9 {
		t.Errorf("expected default tolerance 1e-9, got %v", cfg.Tolerance)
	}

	if cfg.UIEnabled {
		t.Error("expected UIEnabled to be false by default")
	}

	if cfg.SnapshotDir != "testdata/snapshots" {
		t.Errorf("expected default SnapshotDir 'testdata/snapshots', got %q", cfg.SnapshotDir)
	}
}

func TestNewConfig_WithOptions(t *testing.T) {
	cfg := NewConfig(
		WithTolerance(1e-6),
		WithUI(),
		WithSnapshotDir("/custom/path"),
	)

	if cfg.Tolerance != 1e-6 {
		t.Errorf("expected tolerance 1e-6, got %v", cfg.Tolerance)
	}

	if !cfg.UIEnabled {
		t.Error("expected UIEnabled to be true")
	}

	if cfg.SnapshotDir != "/custom/path" {
		t.Errorf("expected SnapshotDir '/custom/path', got %q", cfg.SnapshotDir)
	}
}

func TestNewConfig_NoOptions(t *testing.T) {
	cfg := NewConfig()

	// Should be equivalent to DefaultConfig
	defaultCfg := DefaultConfig()

	if cfg.Tolerance != defaultCfg.Tolerance {
		t.Error("NewConfig() should return default values")
	}
	if cfg.UIEnabled != defaultCfg.UIEnabled {
		t.Error("NewConfig() should return default values")
	}
	if cfg.SnapshotDir != defaultCfg.SnapshotDir {
		t.Error("NewConfig() should return default values")
	}
}

func TestWithTolerance(t *testing.T) {
	cfg := NewConfig(WithTolerance(0.001))
	if cfg.Tolerance != 0.001 {
		t.Errorf("expected tolerance 0.001, got %v", cfg.Tolerance)
	}
}

func TestWithUI(t *testing.T) {
	cfg := NewConfig(WithUI())
	if !cfg.UIEnabled {
		t.Error("expected UIEnabled to be true")
	}
}

func TestWithSnapshotDir(t *testing.T) {
	cfg := NewConfig(WithSnapshotDir("my/snapshots"))
	if cfg.SnapshotDir != "my/snapshots" {
		t.Errorf("expected SnapshotDir 'my/snapshots', got %q", cfg.SnapshotDir)
	}
}
