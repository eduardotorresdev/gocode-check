.PHONY: fmt lint test snapshot release build clean help

# Default target
.DEFAULT_GOAL := help

# Go parameters
GOCMD=go
GOBUILD=$(GOCMD) build
GOTEST=$(GOCMD) test
GOFMT=$(GOCMD) fmt
GOVET=$(GOCMD) vet
GOMOD=$(GOCMD) mod

# Binary name
BINARY_NAME=gocodecheck

## fmt: Format Go source code
fmt:
	@echo "Formatting code..."
	$(GOFMT) ./...

## lint: Run linters (go vet)
lint:
	@echo "Running linters..."
	$(GOVET) ./...

## test: Run all tests
test:
	@echo "Running tests..."
	$(GOTEST) -v ./...

## test-cover: Run tests with coverage
test-cover:
	@echo "Running tests with coverage..."
	$(GOTEST) -v -cover -coverprofile=coverage.out ./...
	$(GOCMD) tool cover -html=coverage.out -o coverage.html

## snapshot: Update test snapshots
snapshot:
	@echo "Updating snapshots..."
	UPDATE_SNAPSHOTS=true $(GOTEST) -v ./...

## build: Build the binary
build:
	@echo "Building..."
	$(GOBUILD) -o $(BINARY_NAME) ./cmd/gocodecheck

## release: Build release binary
release:
	@echo "Building release..."
	CGO_ENABLED=0 $(GOBUILD) -ldflags="-s -w" -o $(BINARY_NAME) ./cmd/gocodecheck

## clean: Clean build artifacts
clean:
	@echo "Cleaning..."
	rm -f $(BINARY_NAME)
	rm -f coverage.out coverage.html

## tidy: Tidy go modules
tidy:
	@echo "Tidying modules..."
	$(GOMOD) tidy

## help: Show this help message
help:
	@echo "Usage: make [target]"
	@echo ""
	@echo "Targets:"
	@grep -E '^## ' $(MAKEFILE_LIST) | sed 's/## /  /'
