package parser

import (
	"testing"
)

func TestParser_Parse_Empty(t *testing.T) {
	p := New()
	instructions, err := p.Parse("")
	if err != nil {
		t.Fatalf("unexpected error: %v", err)
	}
	if len(instructions) != 0 {
		t.Errorf("expected 0 instructions, got %d", len(instructions))
	}
}

func TestParser_Parse_Comments(t *testing.T) {
	p := New()

	tests := []struct {
		name  string
		input string
		want  int
	}{
		{"semicolon comment", "; this is a comment", 0},
		{"parentheses comment", "(this is a comment)", 0},
		{"inline semicolon", "G0 X10 ; move", 1},
		{"inline parentheses", "G0 X10 (rapid)", 1},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			instructions, err := p.Parse(tt.input)
			if err != nil {
				t.Fatalf("unexpected error: %v", err)
			}
			if len(instructions) != tt.want {
				t.Errorf("expected %d instructions, got %d", tt.want, len(instructions))
			}
		})
	}
}

func TestParser_Parse_G0_RapidMove(t *testing.T) {
	p := New()

	tests := []struct {
		name  string
		input string
		wantX float64
		wantY float64
		wantZ float64
		hasX  bool
		hasY  bool
		hasZ  bool
	}{
		{
			name:  "G0 with X Y Z",
			input: "G0 X10.5 Y20.3 Z-5.0",
			wantX: 10.5, wantY: 20.3, wantZ: -5.0,
			hasX: true, hasY: true, hasZ: true,
		},
		{
			name:  "G0 with only X",
			input: "G0 X100",
			wantX: 100, hasX: true,
		},
		{
			name:  "G0 lowercase",
			input: "g0 x10 y20",
			wantX: 10, wantY: 20,
			hasX: true, hasY: true,
		},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			instructions, err := p.Parse(tt.input)
			if err != nil {
				t.Fatalf("unexpected error: %v", err)
			}
			if len(instructions) != 1 {
				t.Fatalf("expected 1 instruction, got %d", len(instructions))
			}

			instr := instructions[0]
			if instr.Op != OpG0 {
				t.Errorf("expected Op G0, got %s", instr.Op)
			}

			if tt.hasX {
				if !instr.Params.HasX() {
					t.Error("expected X to be set")
				} else if instr.Params.GetX() != tt.wantX {
					t.Errorf("expected X=%v, got %v", tt.wantX, instr.Params.GetX())
				}
			}

			if tt.hasY {
				if !instr.Params.HasY() {
					t.Error("expected Y to be set")
				} else if instr.Params.GetY() != tt.wantY {
					t.Errorf("expected Y=%v, got %v", tt.wantY, instr.Params.GetY())
				}
			}

			if tt.hasZ {
				if !instr.Params.HasZ() {
					t.Error("expected Z to be set")
				} else if instr.Params.GetZ() != tt.wantZ {
					t.Errorf("expected Z=%v, got %v", tt.wantZ, instr.Params.GetZ())
				}
			}
		})
	}
}

func TestParser_Parse_G1_LinearCut(t *testing.T) {
	p := New()

	input := "G1 X50 Y50 F500"
	instructions, err := p.Parse(input)
	if err != nil {
		t.Fatalf("unexpected error: %v", err)
	}
	if len(instructions) != 1 {
		t.Fatalf("expected 1 instruction, got %d", len(instructions))
	}

	instr := instructions[0]
	if instr.Op != OpG1 {
		t.Errorf("expected Op G1, got %s", instr.Op)
	}
	if !instr.Params.HasF() {
		t.Error("expected F to be set")
	}
	if instr.Params.GetF() != 500 {
		t.Errorf("expected F=500, got %v", instr.Params.GetF())
	}
}

func TestParser_Parse_G2_G3_Arc(t *testing.T) {
	p := New()

	tests := []struct {
		name   string
		input  string
		wantOp Op
		wantI  float64
		wantJ  float64
	}{
		{
			name:   "G2 clockwise arc with I J",
			input:  "G2 X20 Y20 I10 J0",
			wantOp: OpG2,
			wantI:  10, wantJ: 0,
		},
		{
			name:   "G3 counter-clockwise arc with I J",
			input:  "G3 X20 Y20 I0 J10",
			wantOp: OpG3,
			wantI:  0, wantJ: 10,
		},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			instructions, err := p.Parse(tt.input)
			if err != nil {
				t.Fatalf("unexpected error: %v", err)
			}
			if len(instructions) != 1 {
				t.Fatalf("expected 1 instruction, got %d", len(instructions))
			}

			instr := instructions[0]
			if instr.Op != tt.wantOp {
				t.Errorf("expected Op %s, got %s", tt.wantOp, instr.Op)
			}
			if instr.Params.GetI() != tt.wantI {
				t.Errorf("expected I=%v, got %v", tt.wantI, instr.Params.GetI())
			}
			if instr.Params.GetJ() != tt.wantJ {
				t.Errorf("expected J=%v, got %v", tt.wantJ, instr.Params.GetJ())
			}
		})
	}
}

func TestParser_Parse_G90_G91_Positioning(t *testing.T) {
	p := New()

	tests := []struct {
		name   string
		input  string
		wantOp Op
	}{
		{"G90 absolute", "G90", OpG90},
		{"G91 incremental", "G91", OpG91},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			instructions, err := p.Parse(tt.input)
			if err != nil {
				t.Fatalf("unexpected error: %v", err)
			}
			if len(instructions) != 1 {
				t.Fatalf("expected 1 instruction, got %d", len(instructions))
			}
			if instructions[0].Op != tt.wantOp {
				t.Errorf("expected Op %s, got %s", tt.wantOp, instructions[0].Op)
			}
		})
	}
}

func TestParser_Parse_G20_G21_Units(t *testing.T) {
	p := New()

	tests := []struct {
		name   string
		input  string
		wantOp Op
	}{
		{"G20 inches", "G20", OpG20},
		{"G21 millimeters", "G21", OpG21},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			instructions, err := p.Parse(tt.input)
			if err != nil {
				t.Fatalf("unexpected error: %v", err)
			}
			if len(instructions) != 1 {
				t.Fatalf("expected 1 instruction, got %d", len(instructions))
			}
			if instructions[0].Op != tt.wantOp {
				t.Errorf("expected Op %s, got %s", tt.wantOp, instructions[0].Op)
			}
		})
	}
}

func TestParser_Parse_TCode_Tool(t *testing.T) {
	p := New()

	input := "T1"
	instructions, err := p.Parse(input)
	if err != nil {
		t.Fatalf("unexpected error: %v", err)
	}
	if len(instructions) != 1 {
		t.Fatalf("expected 1 instruction, got %d", len(instructions))
	}

	instr := instructions[0]
	if instr.Op != OpT {
		t.Errorf("expected Op T, got %s", instr.Op)
	}
	if instr.Params.N == nil {
		t.Fatal("expected N to be set")
	}
	if *instr.Params.N != 1 {
		t.Errorf("expected N=1, got %d", *instr.Params.N)
	}
}

func TestParser_Parse_MCode(t *testing.T) {
	p := New()

	tests := []struct {
		name     string
		input    string
		wantCode int
	}{
		{"M3 spindle on CW", "M3", 3},
		{"M5 spindle off", "M5", 5},
		{"M30 program end", "M30", 30},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			instructions, err := p.Parse(tt.input)
			if err != nil {
				t.Fatalf("unexpected error: %v", err)
			}
			if len(instructions) != 1 {
				t.Fatalf("expected 1 instruction, got %d", len(instructions))
			}

			instr := instructions[0]
			if instr.Op != OpM {
				t.Errorf("expected Op M, got %s", instr.Op)
			}
			if instr.Params.Code == nil {
				t.Fatal("expected Code to be set")
			}
			if *instr.Params.Code != tt.wantCode {
				t.Errorf("expected Code=%d, got %d", tt.wantCode, *instr.Params.Code)
			}
		})
	}
}

func TestParser_Parse_MultiLine(t *testing.T) {
	p := New()

	input := `G21
G90
G0 X0 Y0
G1 X100 Y100 F500
M30`

	instructions, err := p.Parse(input)
	if err != nil {
		t.Fatalf("unexpected error: %v", err)
	}
	if len(instructions) != 5 {
		t.Fatalf("expected 5 instructions, got %d", len(instructions))
	}

	expectedOps := []Op{OpG21, OpG90, OpG0, OpG1, OpM}
	for i, instr := range instructions {
		if instr.Op != expectedOps[i] {
			t.Errorf("instruction %d: expected Op %s, got %s", i, expectedOps[i], instr.Op)
		}
	}
}

func TestParser_Parse_LineNumbers(t *testing.T) {
	p := New()

	input := `G21
; comment line
G90
G0 X10`

	instructions, err := p.Parse(input)
	if err != nil {
		t.Fatalf("unexpected error: %v", err)
	}
	if len(instructions) != 3 {
		t.Fatalf("expected 3 instructions, got %d", len(instructions))
	}

	expectedLineNums := []int{1, 3, 4}
	for i, instr := range instructions {
		if instr.LineNumber != expectedLineNums[i] {
			t.Errorf("instruction %d: expected line %d, got %d", i, expectedLineNums[i], instr.LineNumber)
		}
	}
}

func TestParser_Parse_NegativeCoordinates(t *testing.T) {
	p := New()

	input := "G0 X-10.5 Y-20.3 Z-5"
	instructions, err := p.Parse(input)
	if err != nil {
		t.Fatalf("unexpected error: %v", err)
	}
	if len(instructions) != 1 {
		t.Fatalf("expected 1 instruction, got %d", len(instructions))
	}

	instr := instructions[0]
	if instr.Params.GetX() != -10.5 {
		t.Errorf("expected X=-10.5, got %v", instr.Params.GetX())
	}
	if instr.Params.GetY() != -20.3 {
		t.Errorf("expected Y=-20.3, got %v", instr.Params.GetY())
	}
	if instr.Params.GetZ() != -5 {
		t.Errorf("expected Z=-5, got %v", instr.Params.GetZ())
	}
}

func TestParser_Parse_RawLinePreserved(t *testing.T) {
	p := New()

	input := "G0 X10 Y20"
	instructions, err := p.Parse(input)
	if err != nil {
		t.Fatalf("unexpected error: %v", err)
	}
	if len(instructions) != 1 {
		t.Fatalf("expected 1 instruction, got %d", len(instructions))
	}

	if instructions[0].RawLine != input {
		t.Errorf("expected RawLine=%q, got %q", input, instructions[0].RawLine)
	}
}

func TestParser_Parse_ArcWithRadius(t *testing.T) {
	p := New()

	input := "G2 X20 Y20 R10"
	instructions, err := p.Parse(input)
	if err != nil {
		t.Fatalf("unexpected error: %v", err)
	}
	if len(instructions) != 1 {
		t.Fatalf("expected 1 instruction, got %d", len(instructions))
	}

	instr := instructions[0]
	if !instr.Params.HasR() {
		t.Error("expected R to be set")
	}
	if *instr.Params.R != 10 {
		t.Errorf("expected R=10, got %v", *instr.Params.R)
	}
}

func TestParser_Parse_SpindleSpeed(t *testing.T) {
	p := New()

	input := "G1 X10 S1000"
	instructions, err := p.Parse(input)
	if err != nil {
		t.Fatalf("unexpected error: %v", err)
	}
	if len(instructions) != 1 {
		t.Fatalf("expected 1 instruction, got %d", len(instructions))
	}

	instr := instructions[0]
	if !instr.Params.HasS() {
		t.Error("expected S to be set")
	}
	if instr.Params.GetS() != 1000 {
		t.Errorf("expected S=1000, got %v", instr.Params.GetS())
	}
}

func TestParser_Determinism(t *testing.T) {
	// Parser must be deterministic - same input must always produce same output
	p := New()

	input := `G21
G90
G0 X0 Y0 Z5
G1 X100 Y100 F500
G2 X150 Y100 I25 J0
G3 X100 Y100 I-25 J0
T1 M6
M3 S1000
G1 Z-5 F200
M30`

	// Parse multiple times
	for i := 0; i < 10; i++ {
		instructions1, err1 := p.Parse(input)
		instructions2, err2 := p.Parse(input)

		if err1 != nil || err2 != nil {
			t.Fatalf("unexpected error: err1=%v, err2=%v", err1, err2)
		}

		if len(instructions1) != len(instructions2) {
			t.Fatalf("iteration %d: different instruction counts: %d vs %d",
				i, len(instructions1), len(instructions2))
		}

		for j := range instructions1 {
			if instructions1[j].Op != instructions2[j].Op {
				t.Errorf("iteration %d, instruction %d: different Op: %s vs %s",
					i, j, instructions1[j].Op, instructions2[j].Op)
			}
			if instructions1[j].LineNumber != instructions2[j].LineNumber {
				t.Errorf("iteration %d, instruction %d: different LineNumber: %d vs %d",
					i, j, instructions1[j].LineNumber, instructions2[j].LineNumber)
			}
		}
	}
}

// Benchmark the parser
func BenchmarkParser_Parse(b *testing.B) {
	p := New()

	gcode := `G21
G90
G0 X0 Y0 Z5
G1 X100 Y100 F500
G2 X150 Y100 I25 J0
G3 X100 Y100 I-25 J0
G0 Z5
G0 X200 Y0
G1 Z-5 F200
G1 X300 Y100
M30`

	b.ResetTimer()
	for i := 0; i < b.N; i++ {
		_, _ = p.Parse(gcode)
	}
}
