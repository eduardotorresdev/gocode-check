.PHONY: fmt lint test snapshot release build clean help ui-install ui-dev ui-build ui-test test-ui-package

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

# ============================================================================
# UI Targets
# ============================================================================

## ui-install: Install frontend dependencies
ui-install:
	cd ui/frontend && npm install

## ui-dev: Run frontend in development mode
ui-dev:
	cd ui/frontend && npm run dev

## ui-build: Build frontend for production
ui-build:
	cd ui/frontend && npm install && npm run build
	rm -rf pkg/ui/static/*
	cp -r ui/frontend/dist/* pkg/ui/static/
	@echo "✓ Frontend built and copied to pkg/ui/static/"

## ui-test: Run tests with UI enabled
ui-test:
	GOCODECHECK_UI=1 $(GOTEST) -v -p 1 ./...

## test-ui-package: Run UI package tests
test-ui-package:
	$(GOTEST) -v ./pkg/ui/...

## help: Show this help message
help:
	@echo "Usage: make [target]"
	@echo ""
	@echo "Targets:"
	@grep -E '^## ' $(MAKEFILE_LIST) | sed 's/## /  /'
