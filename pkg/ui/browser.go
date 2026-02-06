package ui

import (
	"os"
	"os/exec"
	"path/filepath"
	"runtime"
	"time"
)

// browserLockFile is the name of the lock file to prevent multiple browser tabs
const browserLockFile = ".gocode-check-browser-opened"

// browserLockMaxAge is how long the lock file is valid (prevents stale locks)
const browserLockMaxAge = 5 * time.Minute

// OpenBrowser opens the given URL in the default system browser.
// Returns nil on unsupported platforms (silently ignores).
// Uses a lock file to prevent opening multiple browser tabs across test runs.
func OpenBrowser(url string) error {
	// Check if browser was already opened recently (across processes)
	lockPath := filepath.Join(os.TempDir(), browserLockFile)
	
	// Check if lock file exists and is recent
	if info, err := os.Stat(lockPath); err == nil {
		// Lock file exists - check if it's recent
		if time.Since(info.ModTime()) < browserLockMaxAge {
			// Also verify the port matches (in case of stale lock with different server)
			if data, err := os.ReadFile(lockPath); err == nil {
				if string(data) == url {
					// Same URL was already opened recently, skip
					return nil
				}
			}
		}
	}
	
	// Create/update lock file with URL
	_ = os.WriteFile(lockPath, []byte(url), 0600)
	
	var cmd *exec.Cmd

	switch runtime.GOOS {
	case "darwin":
		cmd = exec.Command("open", url)
	case "linux":
		// Try common browsers in order
		browsers := []string{"xdg-open", "gnome-open", "x-www-browser"}
		for _, browser := range browsers {
			if _, err := exec.LookPath(browser); err == nil {
				cmd = exec.Command(browser, url)
				break
			}
		}
		if cmd == nil {
			return nil // No browser found, silent fail
		}
	case "windows":
		cmd = exec.Command("cmd", "/c", "start", url)
	default:
		return nil // Unsupported platform
	}

	return cmd.Start()
}

// ClearBrowserLock removes the browser lock file.
// Call this when shutting down the UI server.
func ClearBrowserLock() {
	lockPath := filepath.Join(os.TempDir(), browserLockFile)
	_ = os.Remove(lockPath)
}
