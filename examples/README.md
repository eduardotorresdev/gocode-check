# gocode-check Examples

This folder contains example test programs demonstrating how to use gocode-check to validate G-code programs with real-time UI visualization.

## Running Examples

All examples can be run with or without the UI visualization:

### Without UI (Normal test execution)
```bash
go test -v ./examples/...
```

### With UI (Real-time visualization)
```bash
gocodecheck test ./examples/...
```

You can still run UI directly with `go test` (one server per package):
```bash
GOCODECHECK_UI=1 go test -v ./examples/...
```

When UI is enabled, a browser window will automatically open showing the 3D visualization of the CNC machining operations.

## Example Projects

### 1. Basic Holes (`examples/basic_holes`)

Demonstrates hole drilling validation:
- Single hole drilling
- Multi-hole grid patterns
- Hole depth and diameter validation
- Tool selection verification

```bash
GOCODECHECK_UI=1 go test -v ./examples/basic_holes
```

### 2. Slots and Contours (`examples/slots_and_contours`)

Demonstrates linear and contour operations:
- Horizontal and vertical slot cutting
- Square and triangle contour milling
- Open vs closed contour detection
- Multiple parallel slots

```bash
GOCODECHECK_UI=1 go test -v ./examples/slots_and_contours
```

### 3. Complete Part (`examples/complete_part`)

Demonstrates complex multi-feature validation:
- Complete bracket with mounting holes, adjustment slot, and pocket outline
- Circular flange with bolt hole patterns
- Keyway cutting operations
- Work envelope bounds checking

```bash
GOCODECHECK_UI=1 go test -v ./examples/complete_part
```

### 4. Peck Drilling (`examples/peck_drilling`)

Demonstrates peck drilling consolidation:
- Single hole detected from multiple pecks
- Peck count assertions

```bash
GOCODECHECK_UI=1 go test -v ./examples/peck_drilling
```

### 5. Multi-tool Job (`examples/multi_tool_job`)

Demonstrates tool changes and per-tool validation:
- T1/T2 tool changes
- Per-tool hole validation

```bash
GOCODECHECK_UI=1 go test -v ./examples/multi_tool_job
```

### 6. Contours and Arcs (`examples/contours_and_arcs`)

Demonstrates arc interpolation validation:
- G2/G3 arcs
- Closed contour detection

```bash
GOCODECHECK_UI=1 go test -v ./examples/contours_and_arcs
```

### 7. Error Handling (`examples/error_handling`)

Demonstrates warnings and error handling:
- Missing tool warnings
- Zero feed warnings

```bash
GOCODECHECK_UI=1 go test -v ./examples/error_handling
```

### 8. Tolerance (`examples/tolerance`)

Demonstrates custom tolerance usage:
- ExpectWithTolerance

```bash
GOCODECHECK_UI=1 go test -v ./examples/tolerance
```

## UI Configuration

The examples demonstrate different UI speed configurations:

```go
// Normal speed (default: 200ms delay between steps)
cleanup := ui.Enable(ui.DefaultConfig().
    WithSpeed(ui.SpeedNormal))

// Slow speed (500ms delay - better for learning/demos)
cleanup := ui.Enable(ui.DefaultConfig().
    WithSpeed(ui.SpeedSlow))

// Fast speed (50ms delay - for quick validation)
cleanup := ui.Enable(ui.DefaultConfig().
    WithSpeed(ui.SpeedFast))
```

## Creating Your Own Tests

Use these examples as templates. The basic pattern is:

```go
func TestMain(m *testing.M) {
    var cleanup func()
    if os.Getenv("GOCODECHECK_UI") != "" {
        cleanup = ui.Enable(ui.DefaultConfig())
    }
    exitCode := m.Run()
    if cleanup != nil {
        cleanup()
    }
    os.Exit(exitCode)
}

func TestMyGCode(t *testing.T) {
    gcode := `G21
    G90
    ; ... your G-code ...`
    
    trace, err := interpreter.ParseAndInterpret(gcode)
    if err != nil {
        t.Fatalf("parse error: %v", err)
    }
    
    model, _ := machining.Analyze(trace)
    
    assert.Expect(trace, model).
        HasHole(x, y).
        WithDepth(depth).
        Assert(t)
}
```

## Available Assertions

- `HasHole(x, y)` - Hole exists at position
- `HasHoleCount(n)` - Exact number of holes
- `HasSlot(x1, y1, x2, y2)` - Slot from point to point
- `HasSlotCount(n)` - Exact number of slots
- `HasContour()` - Contour path exists
- `IsClosed()` / `IsOpen()` - Contour closure
- `HasSegmentCount(n)` - Number of contour segments
- `NoOperationOutside(bounds)` - Work envelope validation
- `WithDepth(d)` - Hole/feature depth
- `WithDiameter(d)` - Hole diameter
- `WithTool(n)` - Tool number used
- `IsPeckDrilled()` - Peck drilling detection
- `WithPeckCount(n)` - Peck count filter
