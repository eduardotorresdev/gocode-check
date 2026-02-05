// Package machining provides semantic machining model generation from G-code execution traces.
//
// The machining package converts low-level G-code events (like linear cuts and arcs) into
// high-level semantic entities that represent the actual machining operations:
//
//   - Holes: Circular features created by drilling or helical milling
//   - Slots: Linear grooves created by cutting operations
//   - Contours: Connected paths of cuts forming closed or open profiles
//
// The package also provides a warning system for non-critical issues detected during
// the analysis (non-blocking warnings).
//
// Example usage:
//
//	trace, _ := interpreter.ParseAndInterpret(gcode)
//	model, warnings := machining.Analyze(trace)
//	for _, hole := range model.Holes {
//	    fmt.Printf("Hole at (%.2f, %.2f) with diameter %.2f\n",
//	        hole.Center.X, hole.Center.Y, hole.Diameter)
//	}
package machining
