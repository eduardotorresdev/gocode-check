// Package config provides configuration settings for gocode-check.
package config

// Config holds the global configuration settings.
type Config struct {
	// Tolerance is the numerical tolerance for floating point comparisons.
	// This ensures deterministic behavior across different platforms.
	Tolerance float64

	// UIEnabled controls whether UI rendering is active.
	// When false (default), gocode-check runs in headless mode.
	UIEnabled bool

	// SnapshotDir is the directory where snapshots are stored.
	SnapshotDir string
}

// DefaultConfig returns the default configuration.
func DefaultConfig() *Config {
	return &Config{
		Tolerance:   1e-9,
		UIEnabled:   false,
		SnapshotDir: "testdata/snapshots",
	}
}

// Option is a function that modifies Config.
type Option func(*Config)

// WithTolerance sets a custom numerical tolerance.
func WithTolerance(t float64) Option {
	return func(c *Config) {
		c.Tolerance = t
	}
}

// WithUI enables UI rendering.
func WithUI() Option {
	return func(c *Config) {
		c.UIEnabled = true
	}
}

// WithSnapshotDir sets a custom snapshot directory.
func WithSnapshotDir(dir string) Option {
	return func(c *Config) {
		c.SnapshotDir = dir
	}
}

// NewConfig creates a new Config with the given options.
func NewConfig(opts ...Option) *Config {
	cfg := DefaultConfig()
	for _, opt := range opts {
		opt(cfg)
	}
	return cfg
}
