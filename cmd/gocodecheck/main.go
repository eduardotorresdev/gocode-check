// Package main provides the CLI entry point for gocode-check.
package main

import (
	"context"
	"errors"
	"fmt"
	"os"
	"os/exec"
	"syscall"

	"github.com/eduardotorresdev/gocode-check/pkg/ui"
)

func main() {
	if len(os.Args) < 2 {
		printHelp()
		os.Exit(0)
	}

	switch os.Args[1] {
	case "test":
		exitCode := runTest(os.Args[2:])
		os.Exit(exitCode)
	default:
		printHelp()
		os.Exit(1)
	}
}

func printHelp() {
	fmt.Println("gocode-check - G-code validation library")
	fmt.Println("Usage:")
	fmt.Println("  gocodecheck test [packages...]")
	fmt.Println("")
	fmt.Println("Examples:")
	fmt.Println("  gocodecheck test ./examples/...")
	fmt.Println("  gocodecheck test ./...")
}

func runTest(args []string) int {
	packages := args
	if len(packages) == 0 {
		packages = []string{"./..."}
	}

	logger := ui.NewLogger(true)
	flow := ui.NewFlowController()
	server := ui.NewServer(3333, logger, flow)

	ctx, cancel := context.WithCancel(context.Background())
	defer cancel()

	url, err := server.Start(ctx)
	if err != nil && isAddrInUse(err) {
		logger.Warn("Port 3333 in use. Retrying with a random available port...")
		server = ui.NewServer(0, logger, flow)
		url, err = server.Start(ctx)
	}
	if err != nil {
		logger.Error("Failed to start UI server: %v", err)
		return 1
	}

	logger.ServerStart(url)
	if err := ui.OpenBrowser(url); err != nil {
		logger.Warn("Could not open browser automatically: %v", err)
		logger.Info("Please open %s manually", url)
	}

	logger.Info("Preparing to run tests...")

	cmd := exec.Command("go", append([]string{"test", "-count=1", "-p", "1"}, packages...)...)
	cmd.Env = append(os.Environ(),
		"GOCODECHECK_UI=1",
		fmt.Sprintf("GOCODECHECK_UI_SERVER_URL=%s", url),
	)
	cmd.Stdout = os.Stdout
	cmd.Stderr = os.Stderr
	cmd.Stdin = os.Stdin

	err = cmd.Run()

	if server.ClientCount() > 0 {
		logger.Info("Tests completed. Server will remain active while browser is connected...")
		logger.Info("Close the browser to shut down the server.")
		server.WaitForAllClientsDisconnected()
	}

	cancel()

	if err == nil {
		return 0
	}
	if exitErr := new(exec.ExitError); errors.As(err, &exitErr) {
		return exitErr.ExitCode()
	}
	logger.Error("Failed to run tests: %v", err)
	return 1
}

func isAddrInUse(err error) bool {
	return errors.Is(err, syscall.EADDRINUSE)
}
