package ui

import (
	"bytes"
	"os"
	"strings"
	"testing"
)

func TestNewLogger(t *testing.T) {
	logger := NewLogger(true)

	if logger == nil {
		t.Fatal("expected non-nil logger")
	}

	if !logger.verbose {
		t.Error("expected verbose to be true")
	}

	if logger.prefix == "" {
		t.Error("expected prefix to be set")
	}
}

func TestLoggerVerboseFlag(t *testing.T) {
	// Test that verbose logger has verbose=true
	verboseLogger := NewLogger(true)
	if !verboseLogger.verbose {
		t.Error("expected verbose logger to have verbose=true")
	}

	// Test that non-verbose logger has verbose=false
	quietLogger := NewLogger(false)
	if quietLogger.verbose {
		t.Error("expected quiet logger to have verbose=false")
	}
}

func TestLoggerTimestamp(t *testing.T) {
	logger := NewLogger(true)
	ts := logger.timestamp()

	// Timestamp should contain color codes and time format
	if ts == "" {
		t.Error("expected non-empty timestamp")
	}

	// Should contain the gray color code
	if !strings.Contains(ts, colorGray) {
		t.Error("expected timestamp to contain gray color code")
	}
}

// captureOutput captures stdout during function execution
func captureOutput(f func()) string {
	// Save original stdout
	old := os.Stdout
	r, w, _ := os.Pipe()
	os.Stdout = w

	f()

	w.Close()
	os.Stdout = old

	var buf bytes.Buffer
	buf.ReadFrom(r)
	return buf.String()
}

func TestLoggerInfo(t *testing.T) {
	logger := NewLogger(true)
	output := captureOutput(func() {
		logger.Info("test message %s", "arg")
	})

	if !strings.Contains(output, "test message arg") {
		t.Errorf("expected output to contain 'test message arg', got: %s", output)
	}
}

func TestLoggerSuccess(t *testing.T) {
	logger := NewLogger(true)
	output := captureOutput(func() {
		logger.Success("success message")
	})

	if !strings.Contains(output, "✓") {
		t.Error("expected success output to contain checkmark")
	}
	if !strings.Contains(output, "success message") {
		t.Error("expected output to contain message")
	}
}

func TestLoggerError(t *testing.T) {
	logger := NewLogger(true)
	output := captureOutput(func() {
		logger.Error("error message")
	})

	if !strings.Contains(output, "✗") {
		t.Error("expected error output to contain X mark")
	}
	if !strings.Contains(output, "error message") {
		t.Error("expected output to contain message")
	}
}

func TestLoggerWarn(t *testing.T) {
	logger := NewLogger(true)
	output := captureOutput(func() {
		logger.Warn("warning message")
	})

	if !strings.Contains(output, "⚠") {
		t.Error("expected warning output to contain warning sign")
	}
	if !strings.Contains(output, "warning message") {
		t.Error("expected output to contain message")
	}
}

func TestLoggerDebugVerbose(t *testing.T) {
	// Verbose logger should output debug messages
	verboseLogger := NewLogger(true)
	output := captureOutput(func() {
		verboseLogger.Debug("debug message")
	})

	if !strings.Contains(output, "debug message") {
		t.Error("expected verbose logger to output debug message")
	}
}

func TestLoggerDebugQuiet(t *testing.T) {
	// Quiet logger should not output debug messages
	quietLogger := NewLogger(false)
	output := captureOutput(func() {
		quietLogger.Debug("debug message")
	})

	if strings.Contains(output, "debug message") {
		t.Error("expected quiet logger to not output debug message")
	}
}

func TestLoggerStep(t *testing.T) {
	logger := NewLogger(true)
	output := captureOutput(func() {
		logger.Step(0, 5, "G0 X10 Y20")
	})

	if !strings.Contains(output, "[1/5]") {
		t.Error("expected step output to contain progress indicator")
	}
	if !strings.Contains(output, "G0 X10 Y20") {
		t.Error("expected step output to contain instruction")
	}
}

func TestLoggerStepQuiet(t *testing.T) {
	// Quiet logger should not output step messages
	quietLogger := NewLogger(false)
	output := captureOutput(func() {
		quietLogger.Step(0, 5, "G0 X10 Y20")
	})

	if output != "" {
		t.Error("expected quiet logger to not output step message")
	}
}

func TestLoggerTestStart(t *testing.T) {
	logger := NewLogger(true)
	output := captureOutput(func() {
		logger.TestStart("TestExample")
	})

	if !strings.Contains(output, "🧪") {
		t.Error("expected test start output to contain test tube emoji")
	}
	if !strings.Contains(output, "TestExample") {
		t.Error("expected test start output to contain test name")
	}
}

func TestLoggerTestEnd(t *testing.T) {
	logger := NewLogger(true)

	// Test passing
	output := captureOutput(func() {
		logger.TestEnd("TestPass", true, 5, 0)
	})
	if !strings.Contains(output, "✓") {
		t.Error("expected passing test to show checkmark")
	}
	if !strings.Contains(output, "5/5") {
		t.Error("expected passing test to show count")
	}

	// Test failing
	output = captureOutput(func() {
		logger.TestEnd("TestFail", false, 5, 2)
	})
	if !strings.Contains(output, "✗") {
		t.Error("expected failing test to show X mark")
	}
	if !strings.Contains(output, "2/5") {
		t.Error("expected failing test to show count")
	}
}

func TestLoggerServerStart(t *testing.T) {
	logger := NewLogger(true)
	output := captureOutput(func() {
		logger.ServerStart("http://localhost:3333")
	})

	if !strings.Contains(output, "gocode-check UI Server") {
		t.Error("expected server start output to contain title")
	}
	if !strings.Contains(output, "http://localhost:3333") {
		t.Error("expected server start output to contain URL")
	}
	if !strings.Contains(output, "┌") && !strings.Contains(output, "└") {
		t.Error("expected server start output to contain box characters")
	}
}

func TestLoggerConnectionStatus(t *testing.T) {
	logger := NewLogger(true)

	// Test connected
	output := captureOutput(func() {
		logger.ConnectionStatus(true, 1)
	})
	if !strings.Contains(output, "Browser connected") {
		t.Error("expected connected status message")
	}

	// Test disconnected
	output = captureOutput(func() {
		logger.ConnectionStatus(false, 0)
	})
	if !strings.Contains(output, "Browser disconnected") {
		t.Error("expected disconnected status message")
	}
}

func TestLoggerExpectation(t *testing.T) {
	logger := NewLogger(true)

	// Test passed expectation
	output := captureOutput(func() {
		logger.Expectation("hole at (50, 50)", true)
	})
	if !strings.Contains(output, "✓") {
		t.Error("expected passed expectation to show checkmark")
	}
	if !strings.Contains(output, "hole at (50, 50)") {
		t.Error("expected output to contain description")
	}

	// Test failed expectation
	output = captureOutput(func() {
		logger.Expectation("hole at (100, 100)", false)
	})
	if !strings.Contains(output, "✗") {
		t.Error("expected failed expectation to show X mark")
	}
}
