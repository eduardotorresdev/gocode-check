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

		// Set up callback to shut down server when all browsers disconnect
		globalViewer.server.onAllClientsDisconnected = func() {
			mu.Lock()
			defer mu.Unlock()

			if globalViewer == nil {
				return
			}

			logger.Info("Shutting down UI server...")

			// Cancel context (stops server)
			cancel()

			// Clear browser lock file
			ClearBrowserLock()

			logger.Success("UI server stopped.")

			globalViewer = nil
			once = sync.Once{}
		}

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

			// Unregister observers (stop capturing new events)
			interpreter.UnregisterObserver(globalViewer.observer)
			assert.UnregisterObserver(globalViewer.observer)

			// Check if any browser was connected
			if globalViewer.server.ClientCount() == 0 {
				// No browser connected - shut down immediately like headless mode
				logger.Info("No browser connected. Shutting down UI server...")

				// Cancel context (stops server)
				cancel()

				// Clear browser lock file
				ClearBrowserLock()

				logger.Success("UI server stopped.")

				globalViewer = nil
				once = sync.Once{}
			} else {
				// Browser is connected - keep server running until browser disconnects
				logger.Info("Tests completed. Server will remain active while browser is connected...")
				logger.Info("Close the browser to shut down the server.")
				// Server will shut down when browser disconnects (see onAllClientsDisconnected callback)
			}
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
