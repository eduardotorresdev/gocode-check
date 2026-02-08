package machining

// MachiningModel represents the semantic model of machining operations.
// It contains all recognized geometric features extracted from G-code events.
type MachiningModel struct {
	// Stock is the raw workpiece being machined (optional).
	Stock *Stock

	// Holes contains all detected hole features.
	Holes []Hole

	// Slots contains all detected slot features.
	Slots []Slot

	// Contours contains all detected contour features.
	Contours []Contour
}

// NewMachiningModel creates a new empty MachiningModel.
func NewMachiningModel() *MachiningModel {
	return &MachiningModel{
		Holes:    make([]Hole, 0),
		Slots:    make([]Slot, 0),
		Contours: make([]Contour, 0),
	}
}

// WithStock sets the stock (raw workpiece) for the model.
// Returns the model for method chaining.
func (m *MachiningModel) WithStock(width, height, depth float64) *MachiningModel {
	m.Stock = NewStock(width, height, depth)
	return m
}

// WithStockAt sets the stock with a custom position.
// Returns the model for method chaining.
func (m *MachiningModel) WithStockAt(width, height, depth, x, y, z float64) *MachiningModel {
	m.Stock = NewStock(width, height, depth).At(x, y, z)
	return m
}

// HasStock returns true if a stock is defined.
func (m *MachiningModel) HasStock() bool {
	return m.Stock != nil
}

// AddHole adds a hole to the model.
func (m *MachiningModel) AddHole(h Hole) {
	m.Holes = append(m.Holes, h)
}

// AddSlot adds a slot to the model.
func (m *MachiningModel) AddSlot(s Slot) {
	m.Slots = append(m.Slots, s)
}

// AddContour adds a contour to the model.
func (m *MachiningModel) AddContour(c Contour) {
	m.Contours = append(m.Contours, c)
}

// HoleCount returns the number of holes.
func (m *MachiningModel) HoleCount() int {
	return len(m.Holes)
}

// SlotCount returns the number of slots.
func (m *MachiningModel) SlotCount() int {
	return len(m.Slots)
}

// ContourCount returns the number of contours.
func (m *MachiningModel) ContourCount() int {
	return len(m.Contours)
}

// TotalFeatures returns the total number of recognized features.
func (m *MachiningModel) TotalFeatures() int {
	return m.HoleCount() + m.SlotCount() + m.ContourCount()
}

// IsEmpty returns true if the model has no features.
func (m *MachiningModel) IsEmpty() bool {
	return m.TotalFeatures() == 0
}

// HolesAt returns all holes at a specific XY location within tolerance.
func (m *MachiningModel) HolesAt(x, y, tolerance float64) []Hole {
	var result []Hole
	target := Point2D{X: x, Y: y}
	for _, h := range m.Holes {
		if h.Center.Equal(target, tolerance) {
			result = append(result, h)
		}
	}
	return result
}

// HolesWithDiameter returns all holes with a specific diameter within tolerance.
func (m *MachiningModel) HolesWithDiameter(diameter, tolerance float64) []Hole {
	var result []Hole
	for _, h := range m.Holes {
		if abs(h.Diameter-diameter) <= tolerance {
			result = append(result, h)
		}
	}
	return result
}

// HolesWithDepth returns all holes with a specific depth within tolerance.
func (m *MachiningModel) HolesWithDepth(depth, tolerance float64) []Hole {
	var result []Hole
	for _, h := range m.Holes {
		if abs(h.Depth-depth) <= tolerance {
			result = append(result, h)
		}
	}
	return result
}

// ClosedContours returns all contours that form closed loops.
func (m *MachiningModel) ClosedContours(tolerance float64) []Contour {
	var result []Contour
	for _, c := range m.Contours {
		if c.IsClosed(tolerance) {
			result = append(result, c)
		}
	}
	return result
}

// OpenContours returns all contours that don't form closed loops.
func (m *MachiningModel) OpenContours(tolerance float64) []Contour {
	var result []Contour
	for _, c := range m.Contours {
		if !c.IsClosed(tolerance) {
			result = append(result, c)
		}
	}
	return result
}

// abs returns the absolute value of a float64.
func abs(v float64) float64 {
	if v < 0 {
		return -v
	}
	return v
}
