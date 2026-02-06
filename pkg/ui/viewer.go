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
	flow     *FlowController
	ctx      context.Context
	cancel   context.CancelFunc
}

// Enable activates the UI viewer and returns a cleanup function.
// This should be called in TestMain.
// The cleanup function should be deferred to ensure proper shutdown.
//
// Note: After cleanup is called, the server continues running to allow
// viewing results even after tests complete. Use Shutdown() to fully
// stop the server if needed.
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
		flowController := NewFlowController()

		globalViewer = &Viewer{
			config: cfg,
			logger: logger,
			flow:   flowController,
			ctx:    ctx,
			cancel: cancel,
		}

		// Create and start server
		globalViewer.server = NewServer(cfg.Port, logger, flowController)

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

			// Unregister observers
			interpreter.UnregisterObserver(globalViewer.observer)
			assert.UnregisterObserver(globalViewer.observer)

			// In production use, the server keeps running after tests complete
			// so users can view results even after closing/reopening the browser
			logger.Info("UI server will continue running...")
			logger.Info("You can close the browser and reopen it at %s to view the results.", globalViewer.server.URL())
			logger.Info("Press Ctrl+C to stop the server when you're done.")

			// Note: We don't cancel context or clear globalViewer here to keep server alive
			// The server continues running until the process exits (e.g., Ctrl+C)
			// For tests that need full cleanup, they can call Shutdown() directly

			// Clear browser lock file
			ClearBrowserLock()

			logger.Success("Test execution complete. Server still running.")
		}
	})

	if cleanup == nil {
		// Return no-op if already enabled or failed
		return func() {}
	}

	return cleanup
}

// Shutdown fully stops the UI server and cleans up all resources.
// This is mainly useful for testing. In production, the server is meant
// to keep running after tests complete.
func Shutdown() {
	mu.Lock()
	defer mu.Unlock()

	if globalViewer == nil {
		return
	}

	// Unregister observers if still registered
	interpreter.UnregisterObserver(globalViewer.observer)
	assert.UnregisterObserver(globalViewer.observer)

	// Cancel context (stops server)
	globalViewer.cancel()

	// Clear browser lock file
	ClearBrowserLock()

	globalViewer.logger.Info("UI server stopped.")

	globalViewer = nil
	// Reset once for potential re-enable
	once = sync.Once{}
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
