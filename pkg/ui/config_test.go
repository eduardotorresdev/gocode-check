package ui

import (
	"testing"
	"time"
)

func TestDefaultConfig(t *testing.T) {
	cfg := DefaultConfig()

	if cfg.Port != 3333 {
		t.Errorf("expected port 3333, got %d", cfg.Port)
	}

	if cfg.Speed != SpeedNormal {
		t.Errorf("expected SpeedNormal, got %s", cfg.Speed)
	}

	if !cfg.AutoOpen {
		t.Error("expected AutoOpen to be true")
	}

	if !cfg.Verbose {
		t.Error("expected Verbose to be true")
	}

	if !cfg.WaitForConnection {
		t.Error("expected WaitForConnection to be true")
	}

	if cfg.ConnectionTimeout != 30*time.Second {
		t.Errorf("expected 30s timeout, got %v", cfg.ConnectionTimeout)
	}
}

func TestConfigBuilderPattern(t *testing.T) {
	cfg := DefaultConfig().
		WithPort(8080).
		WithSpeed(SpeedFast).
		WithAutoOpen(false).
		WithVerbose(false).
		WithWaitForConnection(false).
		WithConnectionTimeout(10 * time.Second)

	if cfg.Port != 8080 {
		t.Errorf("expected port 8080, got %d", cfg.Port)
	}

	if cfg.Speed != SpeedFast {
		t.Errorf("expected SpeedFast, got %s", cfg.Speed)
	}

	if cfg.AutoOpen {
		t.Error("expected AutoOpen to be false")
	}

	if cfg.Verbose {
		t.Error("expected Verbose to be false")
	}

	if cfg.WaitForConnection {
		t.Error("expected WaitForConnection to be false")
	}

	if cfg.ConnectionTimeout != 10*time.Second {
		t.Errorf("expected 10s timeout, got %v", cfg.ConnectionTimeout)
	}
}

func TestSpeedToDuration(t *testing.T) {
	tests := []struct {
		speed    SpeedPreset
		expected time.Duration
	}{
		{SpeedFast, 50 * time.Millisecond},
		{SpeedNormal, 200 * time.Millisecond},
		{SpeedSlow, 500 * time.Millisecond},
		{SpeedManual, 0},
		{"unknown", 200 * time.Millisecond}, // default
	}

	for _, tt := range tests {
		t.Run(string(tt.speed), func(t *testing.T) {
			got := SpeedToDuration(tt.speed)
			if got != tt.expected {
				t.Errorf("SpeedToDuration(%s) = %v, want %v", tt.speed, got, tt.expected)
			}
		})
	}
}
