package ui

import (
	"time"
)

// SpeedPreset defines visualization speed presets.
type SpeedPreset string

const (
	// SpeedFast shows events with 50ms delay
	SpeedFast SpeedPreset = "fast"
	// SpeedNormal shows events with 200ms delay (default)
	SpeedNormal SpeedPreset = "normal"
	// SpeedSlow shows events with 500ms delay
	SpeedSlow SpeedPreset = "slow"
	// SpeedManual waits for user input between steps
	SpeedManual SpeedPreset = "manual"
)

// Config holds UI server configuration.
type Config struct {
	// Port is the HTTP server port. Use 0 for automatic port selection.
	Port int

	// Speed controls the delay between visualization steps.
	Speed SpeedPreset

	// AutoOpen opens the browser automatically when the server starts.
	AutoOpen bool

	// Verbose enables detailed console logging.
	Verbose bool

	// WaitForConnection blocks until a browser connects before running tests.
	WaitForConnection bool

	// ConnectionTimeout is how long to wait for browser connection.
	ConnectionTimeout time.Duration
}

// DefaultConfig returns sensible defaults for local development.
func DefaultConfig() Config {
	return Config{
		Port:              3333,
		Speed:             SpeedNormal,
		AutoOpen:          true,
		Verbose:           true,
		WaitForConnection: true,
		ConnectionTimeout: 30 * time.Second,
	}
}

// WithPort sets the server port.
func (c Config) WithPort(port int) Config {
	c.Port = port
	return c
}

// WithSpeed sets the visualization speed.
func (c Config) WithSpeed(speed SpeedPreset) Config {
	c.Speed = speed
	return c
}

// WithAutoOpen sets whether to open browser automatically.
func (c Config) WithAutoOpen(autoOpen bool) Config {
	c.AutoOpen = autoOpen
	return c
}

// WithVerbose sets whether to show detailed logs.
func (c Config) WithVerbose(verbose bool) Config {
	c.Verbose = verbose
	return c
}

// WithWaitForConnection sets whether to wait for browser connection.
func (c Config) WithWaitForConnection(wait bool) Config {
	c.WaitForConnection = wait
	return c
}

// WithConnectionTimeout sets the timeout for browser connection.
func (c Config) WithConnectionTimeout(timeout time.Duration) Config {
	c.ConnectionTimeout = timeout
	return c
}

// SpeedToDuration converts a SpeedPreset to a time.Duration.
func SpeedToDuration(s SpeedPreset) time.Duration {
	switch s {
	case SpeedFast:
		return 50 * time.Millisecond
	case SpeedNormal:
		return 200 * time.Millisecond
	case SpeedSlow:
		return 500 * time.Millisecond
	case SpeedManual:
		return 0
	default:
		return 200 * time.Millisecond
	}
}
