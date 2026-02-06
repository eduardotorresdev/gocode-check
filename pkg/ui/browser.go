package ui

import (
	"os/exec"
	"runtime"
)

// OpenBrowser opens the given URL in the default system browser.
// Returns nil on unsupported platforms (silently ignores).
func OpenBrowser(url string) error {
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
