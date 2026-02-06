// Package ui provides optional real-time visualization for gocode-check tests.
//
// The UI package is completely optional and does not affect the core functionality.
// When enabled, it provides a web-based visualization of G-code execution and
// test assertions in real-time.
//
// # Quick Start
//
// Enable the UI in your TestMain:
//
//	func TestMain(m *testing.M) {
//	    if os.Getenv("GOCODECHECK_UI") != "" {
//	        cleanup := ui.Enable(ui.DefaultConfig())
//	        defer cleanup()
//	    }
//	    os.Exit(m.Run())
//	}
//
// Then run your tests with the environment variable:
//
//	GOCODECHECK_UI=1 go test -v ./...
//
// # Architecture
//
// The UI package uses the Observer pattern to receive events from the core
// packages (interpreter and assert) without coupling them to the UI.
//
// When enabled:
//   - Starts an HTTP server with WebSocket support
//   - Opens a browser automatically (configurable)
//   - Displays real-time execution visualization
//   - Shows test expectations and results
//
// # Configuration
//
// Use Config to customize behavior:
//
//	cfg := ui.DefaultConfig().
//	    WithPort(8080).
//	    WithSpeed(ui.SpeedSlow).
//	    WithAutoOpen(false)
//	cleanup := ui.Enable(cfg)
//
// # Console Output
//
// When enabled, the UI provides rich console output:
//   - Server URL in a formatted box
//   - Connection status (browser connected/disconnected)
//   - Test names and progress
//   - Expectation results (✓/✗)
package ui
