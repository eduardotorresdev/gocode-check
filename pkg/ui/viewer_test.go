package ui

import (
	"testing"
	"time"
)

func TestEnableDisable(t *testing.T) {
	// Disable auto-open and wait for tests
	cfg := DefaultConfig().
		WithAutoOpen(false).
		WithWaitForConnection(false).
		WithVerbose(false).
		WithPort(0)

	cleanup := Enable(cfg)

	if !Enabled() {
		t.Error("expected Enabled() to return true after Enable()")
	}

	viewer := GetViewer()
	if viewer == nil {
		t.Error("expected GetViewer() to return non-nil")
	}

	cleanup()

	// Server continues running after cleanup - need to call Shutdown() for tests
	Shutdown()

	// Give cleanup time to complete
	time.Sleep(100 * time.Millisecond)

	if Enabled() {
		t.Error("expected Enabled() to return false after cleanup")
	}
}

func TestEnableWithEnvVar(t *testing.T) {
	// This test demonstrates the typical usage pattern for enabling UI
	// via environment variable. The test always runs to verify the pattern
	// compiles and works correctly.
	cfg := DefaultConfig().
		WithAutoOpen(false).
		WithWaitForConnection(false).
		WithVerbose(false).
		WithPort(0)

	// Verify the pattern works - enable and immediately cleanup
	cleanup := Enable(cfg)
	if !Enabled() {
		t.Error("expected UI to be enabled")
	}
	cleanup()

	// For tests, we need to fully shutdown
	Shutdown()

	// Wait for cleanup
	time.Sleep(100 * time.Millisecond)
}

func TestDoubleEnable(t *testing.T) {
	cfg := DefaultConfig().
		WithAutoOpen(false).
		WithWaitForConnection(false).
		WithVerbose(false).
		WithPort(0)

	cleanup1 := Enable(cfg)
	cleanup2 := Enable(cfg)

	// Verify first enable worked
	if !Enabled() {
		t.Error("expected UI to be enabled after first Enable()")
	}

	// cleanup2 should be no-op, viewer should still be enabled
	cleanup2()
	if !Enabled() {
		t.Error("expected UI to still be enabled after no-op cleanup2")
	}

	// cleanup1 unregisters observers but keeps server running
	cleanup1()
	if !Enabled() {
		t.Error("expected UI to still be enabled (server still running)")
	}

	// For tests, fully shutdown
	Shutdown()

	time.Sleep(100 * time.Millisecond)

	if Enabled() {
		t.Error("expected UI to be disabled after Shutdown()")
	}
}
