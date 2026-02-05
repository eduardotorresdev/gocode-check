package parser

import (
	"fmt"
	"regexp"
	"strconv"
	"strings"
)

// Parser is a deterministic G-code parser.
// It converts G-code strings into a sequence of Instructions.
type Parser struct {
	// No state - parser is stateless for determinism
}

// New creates a new Parser.
func New() *Parser {
	return &Parser{}
}

// Parse parses a G-code string and returns a slice of Instructions.
// The parser is deterministic: same input always produces same output.
func (p *Parser) Parse(gcode string) ([]Instruction, error) {
	var instructions []Instruction

	lines := strings.Split(gcode, "\n")
	for i, line := range lines {
		lineNum := i + 1
		line = p.cleanLine(line)
		if line == "" {
			continue
		}

		lineInstructions, err := p.parseLine(line, lineNum)
		if err != nil {
			return nil, fmt.Errorf("line %d: %w", lineNum, err)
		}

		instructions = append(instructions, lineInstructions...)
	}

	return instructions, nil
}

// cleanLine removes comments and whitespace from a line.
func (p *Parser) cleanLine(line string) string {
	// Remove inline comments (everything after semicolon or parentheses)
	if idx := strings.Index(line, ";"); idx != -1 {
		line = line[:idx]
	}
	if idx := strings.Index(line, "("); idx != -1 {
		// Find closing parenthesis
		if end := strings.Index(line, ")"); end != -1 && end > idx {
			line = line[:idx] + line[end+1:]
		} else {
			line = line[:idx]
		}
	}

	return strings.TrimSpace(line)
}

// Regular expressions for parsing G-code tokens
var (
	gCodePattern = regexp.MustCompile(`G(\d+)`)
	mCodePattern = regexp.MustCompile(`M(\d+)`)
	tCodePattern = regexp.MustCompile(`T(\d+)`)
	xPattern     = regexp.MustCompile(`X([+-]?\d*\.?\d+)`)
	yPattern     = regexp.MustCompile(`Y([+-]?\d*\.?\d+)`)
	zPattern     = regexp.MustCompile(`Z([+-]?\d*\.?\d+)`)
	iPattern     = regexp.MustCompile(`I([+-]?\d*\.?\d+)`)
	jPattern     = regexp.MustCompile(`J([+-]?\d*\.?\d+)`)
	kPattern     = regexp.MustCompile(`K([+-]?\d*\.?\d+)`)
	rPattern     = regexp.MustCompile(`R([+-]?\d*\.?\d+)`)
	fPattern     = regexp.MustCompile(`F([+-]?\d*\.?\d+)`)
	sPattern     = regexp.MustCompile(`S([+-]?\d*\.?\d+)`)
	pPattern     = regexp.MustCompile(`P([+-]?\d*\.?\d+)`)
)

// parseLine parses a single G-code line.
func (p *Parser) parseLine(line string, lineNum int) ([]Instruction, error) {
	var instructions []Instruction
	upperLine := strings.ToUpper(line)

	// Parse G codes
	gMatches := gCodePattern.FindAllStringSubmatch(upperLine, -1)
	for _, match := range gMatches {
		code, _ := strconv.Atoi(match[1])
		instr, err := p.parseGCode(code, upperLine, line, lineNum)
		if err != nil {
			return nil, err
		}
		if instr != nil {
			instructions = append(instructions, *instr)
		}
	}

	// Parse M codes
	mMatches := mCodePattern.FindAllStringSubmatch(upperLine, -1)
	for _, match := range mMatches {
		code, _ := strconv.Atoi(match[1])
		instr := p.parseMCode(code, line, lineNum)
		instructions = append(instructions, *instr)
	}

	// Parse T codes (tool)
	tMatches := tCodePattern.FindAllStringSubmatch(upperLine, -1)
	for _, match := range tMatches {
		toolNum, _ := strconv.Atoi(match[1])
		instr := p.parseTCode(toolNum, line, lineNum)
		instructions = append(instructions, *instr)
	}

	return instructions, nil
}

// parseGCode parses a G code instruction.
func (p *Parser) parseGCode(code int, upperLine, rawLine string, lineNum int) (*Instruction, error) {
	var op Op
	switch code {
	case 0:
		op = OpG0
	case 1:
		op = OpG1
	case 2:
		op = OpG2
	case 3:
		op = OpG3
	case 20:
		op = OpG20
	case 21:
		op = OpG21
	case 90:
		op = OpG90
	case 91:
		op = OpG91
	default:
		// Unsupported G code - skip silently for forward compatibility
		return nil, nil
	}

	instr := &Instruction{
		Op:         op,
		RawLine:    rawLine,
		LineNumber: lineNum,
	}

	// Parse parameters
	p.parseParams(&instr.Params, upperLine)

	return instr, nil
}

// parseMCode parses an M code instruction.
func (p *Parser) parseMCode(code int, rawLine string, lineNum int) *Instruction {
	instr := &Instruction{
		Op:         OpM,
		RawLine:    rawLine,
		LineNumber: lineNum,
	}
	instr.Params.SetCode(code)
	return instr
}

// parseTCode parses a T code instruction.
func (p *Parser) parseTCode(toolNum int, rawLine string, lineNum int) *Instruction {
	instr := &Instruction{
		Op:         OpT,
		RawLine:    rawLine,
		LineNumber: lineNum,
	}
	instr.Params.SetN(toolNum)
	return instr
}

// parseParams extracts coordinate and other parameters from a line.
func (p *Parser) parseParams(params *Params, line string) {
	// X coordinate
	if match := xPattern.FindStringSubmatch(line); match != nil {
		if v, err := strconv.ParseFloat(match[1], 64); err == nil {
			params.SetX(v)
		}
	}

	// Y coordinate
	if match := yPattern.FindStringSubmatch(line); match != nil {
		if v, err := strconv.ParseFloat(match[1], 64); err == nil {
			params.SetY(v)
		}
	}

	// Z coordinate
	if match := zPattern.FindStringSubmatch(line); match != nil {
		if v, err := strconv.ParseFloat(match[1], 64); err == nil {
			params.SetZ(v)
		}
	}

	// I offset (arc center)
	if match := iPattern.FindStringSubmatch(line); match != nil {
		if v, err := strconv.ParseFloat(match[1], 64); err == nil {
			params.SetI(v)
		}
	}

	// J offset (arc center)
	if match := jPattern.FindStringSubmatch(line); match != nil {
		if v, err := strconv.ParseFloat(match[1], 64); err == nil {
			params.SetJ(v)
		}
	}

	// K offset (arc center)
	if match := kPattern.FindStringSubmatch(line); match != nil {
		if v, err := strconv.ParseFloat(match[1], 64); err == nil {
			params.SetK(v)
		}
	}

	// R radius (arc)
	if match := rPattern.FindStringSubmatch(line); match != nil {
		if v, err := strconv.ParseFloat(match[1], 64); err == nil {
			params.SetR(v)
		}
	}

	// F feed rate
	if match := fPattern.FindStringSubmatch(line); match != nil {
		if v, err := strconv.ParseFloat(match[1], 64); err == nil {
			params.SetF(v)
		}
	}

	// S spindle speed
	if match := sPattern.FindStringSubmatch(line); match != nil {
		if v, err := strconv.ParseFloat(match[1], 64); err == nil {
			params.SetS(v)
		}
	}

	// P parameter
	if match := pPattern.FindStringSubmatch(line); match != nil {
		if v, err := strconv.ParseFloat(match[1], 64); err == nil {
			params.SetP(v)
		}
	}
}

// ParseFile is a convenience function to parse G-code from a string.
func ParseFile(gcode string) ([]Instruction, error) {
	return New().Parse(gcode)
}
