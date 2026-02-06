package ui

import (
	"fmt"
	"strings"
	"time"
)

// ANSI color codes for terminal output
const (
	colorReset  = "\033[0m"
	colorRed    = "\033[31m"
	colorGreen  = "\033[32m"
	colorYellow = "\033[33m"
	colorBlue   = "\033[34m"
	colorPurple = "\033[35m"
	colorCyan   = "\033[36m"
	colorGray   = "\033[90m"
	colorBold   = "\033[1m"
)

// Logger provides formatted console output for the UI.
type Logger struct {
	verbose bool
	prefix  string
}

// NewLogger creates a new Logger instance.
func NewLogger(verbose bool) *Logger {
	return &Logger{
		verbose: verbose,
		prefix:  fmt.Sprintf("%s[gocode-check:ui]%s", colorCyan, colorReset),
	}
}

func (l *Logger) timestamp() string {
	return fmt.Sprintf("%s%s%s", colorGray, time.Now().Format("15:04:05.000"), colorReset)
}

// Info logs an informational message.
func (l *Logger) Info(format string, args ...interface{}) {
	msg := fmt.Sprintf(format, args...)
	fmt.Printf("%s %s %s\n", l.timestamp(), l.prefix, msg)
}

// Success logs a success message with green checkmark.
func (l *Logger) Success(format string, args ...interface{}) {
	msg := fmt.Sprintf(format, args...)
	fmt.Printf("%s %s %s✓%s %s\n", l.timestamp(), l.prefix, colorGreen, colorReset, msg)
}

// Error logs an error message with red X.
func (l *Logger) Error(format string, args ...interface{}) {
	msg := fmt.Sprintf(format, args...)
	fmt.Printf("%s %s %s✗%s %s\n", l.timestamp(), l.prefix, colorRed, colorReset, msg)
}

// Warn logs a warning message with yellow warning sign.
func (l *Logger) Warn(format string, args ...interface{}) {
	msg := fmt.Sprintf(format, args...)
	fmt.Printf("%s %s %s⚠%s %s\n", l.timestamp(), l.prefix, colorYellow, colorReset, msg)
}

// Debug logs a debug message (only when verbose is enabled).
func (l *Logger) Debug(format string, args ...interface{}) {
	if !l.verbose {
		return
	}
	msg := fmt.Sprintf(format, args...)
	fmt.Printf("%s %s %s%s%s\n", l.timestamp(), l.prefix, colorGray, msg, colorReset)
}

// Step logs an execution step with progress indicator.
func (l *Logger) Step(index int, total int, instruction string) {
	if !l.verbose {
		return
	}
	progress := fmt.Sprintf("[%d/%d]", index+1, total)
	fmt.Printf("%s %s %s%s%s %s\n", l.timestamp(), l.prefix, colorPurple, progress, colorReset, instruction)
}

// TestStart logs the beginning of a test with a visual separator.
func (l *Logger) TestStart(testName string) {
	line := strings.Repeat("─", 50)
	fmt.Printf("\n%s %s %s%s%s\n", l.timestamp(), l.prefix, colorBlue, line, colorReset)
	fmt.Printf("%s %s %s🧪 %s%s\n", l.timestamp(), l.prefix, colorBold, testName, colorReset)
	fmt.Printf("%s %s %s%s%s\n", l.timestamp(), l.prefix, colorBlue, line, colorReset)
}

// TestEnd logs the end of a test with pass/fail summary.
func (l *Logger) TestEnd(testName string, passed bool, total int, failed int) {
	if passed {
		fmt.Printf("%s %s %s✓ %s: %d/%d expectations passed%s\n",
			l.timestamp(), l.prefix, colorGreen, testName, total, total, colorReset)
	} else {
		fmt.Printf("%s %s %s✗ %s: %d/%d expectations failed%s\n",
			l.timestamp(), l.prefix, colorRed, testName, failed, total, colorReset)
	}
	fmt.Println()
}

// ServerStart logs the server startup with a formatted box.
func (l *Logger) ServerStart(url string) {
	fmt.Println()
	fmt.Printf("%s┌──────────────────────────────────────────────────────────────┐%s\n", colorCyan, colorReset)
	fmt.Printf("%s│%s                                                              %s│%s\n", colorCyan, colorReset, colorCyan, colorReset)
	fmt.Printf("%s│%s   %s🖥️  gocode-check UI Server%s                                 %s│%s\n", colorCyan, colorReset, colorBold, colorReset, colorCyan, colorReset)
	fmt.Printf("%s│%s                                                              %s│%s\n", colorCyan, colorReset, colorCyan, colorReset)
	fmt.Printf("%s│%s   %s➜%s  Local:   %s%-43s%s %s│%s\n", colorCyan, colorReset, colorGreen, colorReset, colorCyan, url, colorReset, colorCyan, colorReset)
	fmt.Printf("%s│%s                                                              %s│%s\n", colorCyan, colorReset, colorCyan, colorReset)
	fmt.Printf("%s│%s   %sPress Ctrl+C to stop%s                                       %s│%s\n", colorCyan, colorReset, colorGray, colorReset, colorCyan, colorReset)
	fmt.Printf("%s│%s                                                              %s│%s\n", colorCyan, colorReset, colorCyan, colorReset)
	fmt.Printf("%s└──────────────────────────────────────────────────────────────┘%s\n", colorCyan, colorReset)
	fmt.Println()
}

// ConnectionStatus logs browser connection/disconnection events.
func (l *Logger) ConnectionStatus(connected bool, clientCount int) {
	if connected {
		l.Success("Browser connected (%d client(s))", clientCount)
	} else {
		l.Warn("Browser disconnected (%d client(s) remaining)", clientCount)
	}
}

// Expectation logs a single expectation result.
func (l *Logger) Expectation(description string, passed bool) {
	if passed {
		fmt.Printf("%s %s   %s✓%s %s\n", l.timestamp(), l.prefix, colorGreen, colorReset, description)
	} else {
		fmt.Printf("%s %s   %s✗%s %s\n", l.timestamp(), l.prefix, colorRed, colorReset, description)
	}
}
