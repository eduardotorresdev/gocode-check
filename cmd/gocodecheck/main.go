// Package main provides the CLI entry point for gocode-check.
package main

import (
	"fmt"
	"os"
)

func main() {
	fmt.Println("gocode-check - G-code validation library")
	fmt.Println("Version: 0.1.0")
	fmt.Println("")
	fmt.Println("This is a library for validating G-code files.")
	fmt.Println("Use it as a Go dependency in your test suites.")
	os.Exit(0)
}
