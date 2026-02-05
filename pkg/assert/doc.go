// Package assert provides a fluent assertion API for validating G-code machining models.
//
// The API is inspired by Playwright's expect() pattern, allowing intuitive
// and chainable assertions against MachiningModel instances.
//
// # Basic Usage
//
// Create an assertion using Expect() and chain validation methods:
//
//	result := assert.Expect(model).HasHole(50, 50)
//	if !result.Pass() {
//	    t.Error(result.Error())
//	}
//
// # Chained Assertions
//
// Assertions can be chained for more specific validations:
//
//	result := assert.Expect(model).
//	    HasHole(50, 50).
//	    WithDiameter(6.0).
//	    WithDepth(10.0)
//
// # Tolerance Configuration
//
// Create assertions with custom tolerance for floating-point comparisons:
//
//	result := assert.ExpectWithTolerance(model, 0.001).
//	    HasHole(50.0, 50.0)
//
// # Available Assertions
//
// Hole assertions:
//   - HasHole(x, y) - Verify hole exists at position
//   - WithDiameter(d) - Filter by diameter
//   - WithDepth(d) - Filter by depth
//
// Slot assertions:
//   - HasSlot(startX, startY, endX, endY) - Verify slot exists
//   - WithWidth(w) - Filter by width
//   - WithSlotDepth(d) - Filter by depth
//
// Contour assertions:
//   - HasContour() - Verify at least one contour exists
//   - IsClosed() - Filter to closed contours
//   - IsOpen() - Filter to open contours
//
// Bounds assertions:
//   - NoOperationOutside(bounds) - Verify all operations within bounds
//
// # Integration with testing.T
//
// For seamless integration with Go's testing package:
//
//	func TestMyGCode(t *testing.T) {
//	    model := ... // parse and analyze G-code
//	    assert.Expect(model).HasHole(50, 50).Assert(t)
//	}
package assert
