package ui

import (
	"context"
	"sync"

	"github.com/eduardotorresdev/gocode-check/pkg/assert"
	"github.com/eduardotorresdev/gocode-check/pkg/interpreter"
)

var (
	globalViewer *Viewer
	once         sync.Once
	mu           sync.Mutex
)

// Viewer manages the UI visualization.
type Viewer struct {
	config   Config
	server   *Server
	logger   *Logger
	observer *uiObserver
	ctx      context.Context
	cancel   context.CancelFunc
}

// Enable activates the UI viewer and returns a cleanup function.
// This should be called in TestMain.
// The cleanup function should be deferred to ensure proper shutdown.
//
// Example:
//
//	func TestMain(m *testing.M) {
//	    if os.Getenv("GOCODECHECK_UI") != "" {
//	        cleanup := ui.Enable(ui.DefaultConfig())
//	        defer cleanup()
//	    }
//	    os.Exit(m.Run())
//	}
func Enable(cfg Config) func() {
	mu.Lock()
	defer mu.Unlock()

	var cleanup func()

	once.Do(func() {
		ctx, cancel := context.WithCancel(context.Background())

		logger := NewLogger(cfg.Verbose)

		globalViewer = &Viewer{
			config: cfg,
			logger: logger,
			ctx:    ctx,
			cancel: cancel,
		}

		// Create and start server
		globalViewer.server = NewServer(cfg.Port, logger)

		url, err := globalViewer.server.Start(ctx)
		if err != nil {
			logger.Error("Failed to start server: %v", err)
			cancel()
			return
		}

		// Show server info
		logger.ServerStart(url)

		// Open browser automatically
		if cfg.AutoOpen {
			if err := OpenBrowser(url); err != nil {
				logger.Warn("Could not open browser automatically: %v", err)
				logger.Info("Please open %s manually", url)
			}
		}

		// Wait for browser connection
		if cfg.WaitForConnection {
			logger.Info("Waiting for browser connection...")
			if globalViewer.server.WaitForConnection(cfg.ConnectionTimeout) {
				logger.Success("Browser connected!")
			} else {
				logger.Warn("Timeout waiting for browser connection.")
				logger.Info("Tests will continue. Connect to %s to see visualization.", url)
			}
		}

		// Create and register observer
		globalViewer.observer = &uiObserver{viewer: globalViewer}
		interpreter.RegisterObserver(globalViewer.observer)
		assert.RegisterObserver(globalViewer.observer)

		logger.Info("UI observer registered. All test events will be visualized.")
		logger.Info("")

		cleanup = func() {
			mu.Lock()
			defer mu.Unlock()

			if globalViewer == nil {
				return
			}

			logger.Info("Shutting down UI server...")

			// Unregister observers
			interpreter.UnregisterObserver(globalViewer.observer)
			assert.UnregisterObserver(globalViewer.observer)

			// Cancel context (stops server)
			cancel()

			logger.Success("UI server stopped.")

			globalViewer = nil
			// Reset once for potential re-enable.
			// Note: This reset is protected by mu.Lock() above, making it safe
			// for sequential test execution. In production, Enable() is typically
			// called only once in TestMain, so this reset is primarily for testing.
			once = sync.Once{}
		}
	})

	if cleanup == nil {
		// Return no-op if already enabled or failed
		return func() {}
	}

	return cleanup
}

// Enabled returns true if the UI viewer is active.
func Enabled() bool {
	mu.Lock()
	defer mu.Unlock()
	return globalViewer != nil
}

// GetViewer returns the global viewer instance (may be nil).
func GetViewer() *Viewer {
	mu.Lock()
	defer mu.Unlock()
	return globalViewer
}
