package ui

import (
	"context"
	"errors"
	"os"
	"sync"
	"syscall"

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
	client   *WSClient
	external bool
	logger   *Logger
	observer *uiObserver
	flow     *FlowController
	ctx      context.Context
	cancel   context.CancelFunc
}

const externalServerEnv = "GOCODECHECK_UI_SERVER_URL"

// Enable activates the UI viewer and returns a cleanup function.
// This should be called in TestMain.
// The cleanup function should be deferred to ensure proper shutdown.
//
// Example:
//
//	func TestMain(m *testing.M) {
//	    var cleanup func()
//	    if os.Getenv("GOCODECHECK_UI") != "" {
//	        cleanup = ui.Enable(ui.DefaultConfig())
//	    }
//	    exitCode := m.Run()
//	    if cleanup != nil {
//	        cleanup()
//	    }
//	    os.Exit(exitCode)
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

		createServer := func(port int) *Server {
			srv := NewServer(port, logger, flowController)
			srv.SetSpeed(cfg.Speed)
			srv.onSpeedChange = func(speed SpeedPreset) {
				globalViewer.config = globalViewer.config.WithSpeed(speed)
			}
			// Set up callback to shut down server when all browsers disconnect
			srv.onAllClientsDisconnected = func() {
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
			return srv
		}

		if serverURL := os.Getenv(externalServerEnv); serverURL != "" {
			client := NewWSClient(serverURL, logger)
			client.OnSpeedChange(func(speed SpeedPreset) {
				globalViewer.config = globalViewer.config.WithSpeed(speed)
			})
			globalViewer.client = client
			globalViewer.external = true
			logger.Info("Using external UI server at %s", serverURL)

			if cfg.WaitForConnection {
				logger.Info("Waiting for UI server connection...")
				if client.WaitForConnection(cfg.ConnectionTimeout) {
					logger.Success("Connected to UI server!")
				} else {
					logger.Warn("Timeout connecting to UI server.")
				}
			} else {
				_ = client.ConnectOnce()
			}
		} else {
			// Create and start server
			globalViewer.server = createServer(cfg.Port)

			url, err := globalViewer.server.Start(ctx)
			if err != nil && cfg.Port != 0 && isAddrInUse(err) {
				logger.Warn("Port %d in use. Retrying with a random available port...", cfg.Port)
				globalViewer.server = createServer(0)
				globalViewer.config = globalViewer.config.WithPort(0)
				url, err = globalViewer.server.Start(ctx)
			}

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
		}

		// Create and register observer
		globalViewer.observer = &uiObserver{viewer: globalViewer}
		interpreter.RegisterObserver(globalViewer.observer)
		assert.RegisterObserver(globalViewer.observer)

		logger.Info("UI observer registered. All test events will be visualized.")
		logger.Info("")

		cleanup = func() {
			mu.Lock()
			viewer := globalViewer
			mu.Unlock()

			if viewer == nil {
				return
			}

			// Unregister observers (stop capturing new events)
			interpreter.UnregisterObserver(viewer.observer)
			assert.UnregisterObserver(viewer.observer)

			if viewer.external {
				viewer.client.Close()
				mu.Lock()
				if globalViewer == viewer {
					globalViewer = nil
					once = sync.Once{}
				}
				mu.Unlock()
				return
			}

			// Check if any browser is connected
			if viewer.server.ClientCount() == 0 {
				// No browser connected - shut down immediately like headless mode
				logger.Info("No browser connected. Shutting down UI server...")
				viewer.cancel()
				ClearBrowserLock()

				mu.Lock()
				if globalViewer == viewer {
					globalViewer = nil
					once = sync.Once{}
				}
				mu.Unlock()

				logger.Success("UI server stopped.")
				return
			}

			// Browser is connected - keep server running until browser disconnects
			logger.Info("Tests completed. Server will remain active while browser is connected...")
			logger.Info("Close the browser to shut down the server.")
			viewer.server.WaitForAllClientsDisconnected()

			mu.Lock()
			if globalViewer == viewer {
				logger.Info("Shutting down UI server...")
				viewer.cancel()
				ClearBrowserLock()
				globalViewer = nil
				once = sync.Once{}
				logger.Success("UI server stopped.")
			}
			mu.Unlock()
		}
	})

	if cleanup == nil {
		// Return no-op if already enabled or failed
		return func() {}
	}

	return cleanup
}

func isAddrInUse(err error) bool {
	return errors.Is(err, syscall.EADDRINUSE)
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

func (v *Viewer) Broadcast(msg Message) {
	if v == nil {
		return
	}
	if v.client != nil {
		v.client.Broadcast(msg)
		return
	}
	if v.server != nil {
		v.server.Broadcast(msg)
	}
}
