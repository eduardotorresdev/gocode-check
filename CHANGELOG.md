# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.1] - 2026-02-09

### Added
- **License file**: Added `LICENSE.md` with MIT License text

### Changed
- **License metadata**: Updated copyright holder name

## [1.0.0] - 2026-02-09

### Added
- **Stock/Workpiece System**: Complete support for workpiece configuration with dimensions and positioning
  - `WithStock(width, height, depth, position)` method in MachiningModel
  - Stock boundary checking methods: `Contains()`, `IsPassThrough()`, `IsBlindHole()`
  - Z-axis convention: Z=0 at top surface, negative Z inside workpiece
  
- **Tool Configuration System**: Full tool library support with multiple tool types
  - `WithTool(number, diameter, fluteLength, toolType)` method
  - Support for `EndMill` (flat bottom) and `BallNose` (spherical tip) tools
  - Per-tool configuration (T1, T2, T3, etc.)
  - Convenience methods: `WithEndMill()` and `WithBallNose()`
  - Default fallback: 6mm EndMill if no tool configured
  
- **3D UI Visualization**: Interactive web interface for visual debugging
  - Three.js-based 3D rendering with realistic tool geometry
  - Dual-path visualization: Red (cutting inside workpiece), Green (rapid outside workpiece)
  - Real-time flow control: Play/Pause/Step through events
  - Event timeline with detailed state information
  - Expectations panel showing test assertions
  - WebSocket-based real-time communication
  - Static workpiece rendering (semi-transparent wood texture)
  
- **Parser & Interpreter**: Deterministic G-code parsing and interpretation
  - Support for G0/G1/G2/G3 commands
  - Modal state tracking (G90/G91, G20/G21, etc.)
  - Spindle control (M3/M4/M5)
  - Tool change handling (T commands, M6)
  
- **Machining Model**: Semantic analysis of machining operations
  - Automatic hole detection
  - Slot/groove identification
  - Contour recognition
  - Operation classification based on tool movements
  
- **Assertion API**: Fluent testing interface
  - Holes assertions: count, depth, type (blind/through), position
  - Slots assertions: count, length, width
  - Contours assertions: count, direction (CW/CCW), closed/open
  - Machine state assertions: position, spindle, unit
  
- **Snapshot System**: Deterministic test snapshots for CI/CD
  - Automatic snapshot generation and comparison
  - Update mode via `-update` flag
  - Git-friendly diff format
  
- **CLI Tool**: `gocodecheck` command-line interface
  - `--ui` flag for visual debugging
  - `--events` flag for detailed event output
  - `--port` flag for custom UI port
  
- **Documentation**:
  - Comprehensive README with quick start guide
  - Usage guide (docs/USAGE_GUIDE.md)
  - LLMs.txt for AI assistant integration
  - Complete examples in `/examples`

### Technical Implementation
- **Architecture**: Headless-first design with optional UI layer
- **Language**: Go 1.22+
- **Frontend**: Svelte 5 + Three.js for 3D rendering
- **Communication**: WebSocket for real-time UI updates
- **Testing**: Snapshot-based testing with automatic comparison

### Examples
- `basic_holes/`: Simple hole drilling operations
- `slots_and_contours/`: Slots and contour milling
- `complete_part/`: Complex part with multiple tools and operations

### Breaking Changes
None - this is the initial 1.0.0 release

### Migration Guide
Not applicable - initial release

---

## [Unreleased]

### Planned Features
- Collision detection system
- Performance optimizations for CSG operations
- Additional tool types support
- Enhanced 3D visualization features
- More machining operation types (threading, chamfering, etc.)

[1.0.1]: https://github.com/eduardotorresdev/gocode-check/releases/tag/v1.0.1
[1.0.0]: https://github.com/eduardotorresdev/gocode-check/releases/tag/v1.0.0
