# Guia Completo de Uso - gocode-check

Este guia apresenta a biblioteca gocode-check de forma progressiva, começando pelo nível mais alto de abstração (Assert API) até o nível mais baixo (Parser). Cada camada oferece diferentes níveis de controle e flexibilidade.

---

## Sumário

1. [Visão Geral das Camadas](#visão-geral-das-camadas)
2. [Nível 1: Assert API (Alto Nível)](#nível-1-assert-api-alto-nível)
3. [Nível 2: Snapshot API](#nível-2-snapshot-api)
4. [Nível 3: Machining Model](#nível-3-machining-model)
5. [Nível 4: Interpreter](#nível-4-interpreter)
6. [Nível 5: Parser (Baixo Nível)](#nível-5-parser-baixo-nível)
7. [Fluxo Completo de Dados](#fluxo-completo-de-dados)
8. [Exemplos Práticos](#exemplos-práticos)

---

## Visão Geral das Camadas

A biblioteca está organizada em camadas que transformam progressivamente o G-code:

```
┌─────────────────────────────────────────────────────────────────┐
│                     ALTO NÍVEL (Mais Abstrato)                  │
│  ┌─────────────────────────────────────────────────────────┐    │
│  │  Assert API (pkg/assert)                                │    │
│  │  → Validações fluentes estilo Playwright                │    │
│  │  → Ideal para: Testes automatizados, CI/CD              │    │
│  └────────────────────────┬────────────────────────────────┘    │
│                           ↓                                     │
│  ┌─────────────────────────────────────────────────────────┐    │
│  │  Snapshot API (pkg/snapshot)                            │    │
│  │  → Testes baseados em snapshots                         │    │
│  │  → Ideal para: Detecção de regressões                   │    │
│  └────────────────────────┬────────────────────────────────┘    │
│                           ↓                                     │
│  ┌─────────────────────────────────────────────────────────┐    │
│  │  Machining Model (pkg/machining)                        │    │
│  │  → Modelo semântico de usinagem                         │    │
│  │  → Ideal para: Análise de operações CNC                 │    │
│  └────────────────────────┬────────────────────────────────┘    │
│                           ↓                                     │
│  ┌─────────────────────────────────────────────────────────┐    │
│  │  Interpreter (pkg/interpreter)                          │    │
│  │  → Simulação de estado da máquina                       │    │
│  │  → Ideal para: Rastreamento de movimentos               │    │
│  └────────────────────────┬────────────────────────────────┘    │
│                           ↓                                     │
│  ┌─────────────────────────────────────────────────────────┐    │
│  │  Parser (pkg/parser)                                    │    │
│  │  → Conversão de texto para instruções                   │    │
│  │  → Ideal para: Manipulação direta de G-code             │    │
│  └─────────────────────────────────────────────────────────┘    │
│                     BAIXO NÍVEL (Mais Controle)                 │
└─────────────────────────────────────────────────────────────────┘
```

---

## Nível 1: Assert API (Alto Nível)

A Assert API é a forma mais simples e recomendada para validar programas G-code. Ela abstrai completamente o processo de parse, interpretação e análise.

### Quando Usar

- ✅ Testes automatizados em CI/CD
- ✅ Validação rápida de programas G-code
- ✅ Quando você quer focar no "o que" e não no "como"

### Exemplo Básico

```go
package mytest

import (
    "testing"
    
    "github.com/eduardotorresdev/gocode-check/pkg/assert"
    "github.com/eduardotorresdev/gocode-check/pkg/interpreter"
    "github.com/eduardotorresdev/gocode-check/pkg/machining"
)

func TestBracketHoles(t *testing.T) {
    gcode := `
        G21           ; Milímetros
        G90           ; Modo absoluto
        T1            ; Broca de 6mm
        
        ; Fazer 4 furos de montagem
        G0 X10 Y10 Z5
        G1 Z-15 F100
        G0 Z5
        
        G0 X90 Y10
        G1 Z-15 F100
        G0 Z5
        
        G0 X10 Y90
        G1 Z-15 F100
        G0 Z5
        
        G0 X90 Y90
        G1 Z-15 F100
        G0 Z5
        
        M30
    `
    
    // Parse + Interpret + Analyze em um único fluxo
    trace, err := interpreter.ParseAndInterpret(gcode)
    if err != nil {
        t.Fatalf("erro no parse: %v", err)
    }
    model, _ := machining.Analyze(trace)
    
    // Validações fluentes
    assert.Expect(trace, model).
        HasHoleCount(4).                    // Exatamente 4 furos
        HasHole(10, 10).WithDepth(15).      // Furo no canto inferior esquerdo
        And().
        HasHole(90, 90).WithDepth(15).      // Furo no canto superior direito
        Assert(t)
}
```

### Assertions Encadeadas

```go
// Validar furo com múltiplos critérios
assert.Expect(trace, model).
    HasHole(50, 50).
    WithDiameter(6.0).
    WithDepth(15.0).
    WithTool(1).
    Assert(t)

// Validar contorno fechado
assert.Expect(trace, model).
    HasContour().
    IsClosed().
    HasSegmentCount(4).
    Assert(t)

// Múltiplas validações independentes
assert.Expect(trace, model).
    HasHoleCount(3).
    And().
    HasSlotCount(1).
    And().
    HasContour().IsClosed().
    Assert(t)
```

### Validação de Limites

```go
// Verificar se todas as operações estão dentro da área de trabalho
bounds := assert.Bounds{
    MinX: 0,   MaxX: 200,
    MinY: 0,   MaxY: 200,
    MinZ: -50, MaxZ: 10,
}
assert.Expect(trace, model).
    NoOperationOutside(bounds).
    Assert(t)
```

### Tolerância Customizada

```go
// Para peças de alta precisão
assert.ExpectWithTolerance(trace, model, 0.001).
    HasHole(50.001, 50.001).  // Aceita variação de ±0.001
    Assert(t)
```

---

## Nível 2: Snapshot API

A Snapshot API permite testes baseados em "golden files" - você salva o estado esperado uma vez e compara contra ele em execuções futuras.

### Quando Usar

- ✅ Detecção de regressões em programas G-code
- ✅ Quando o modelo esperado é complexo demais para assertions manuais
- ✅ CI/CD com validação contra estado conhecido

### Exemplo Básico

```go
package mytest

import (
    "testing"
    
    "github.com/eduardotorresdev/gocode-check/pkg/interpreter"
    "github.com/eduardotorresdev/gocode-check/pkg/machining"
    "github.com/eduardotorresdev/gocode-check/pkg/snapshot"
)

func TestComplexPart(t *testing.T) {
    gcode := `
        G21
        G90
        T1
        ; ... programa complexo ...
    `
    
    trace, _ := interpreter.ParseAndInterpret(gcode)
    model, _ := machining.Analyze(trace)
    
    // Compara contra snapshot salvo em testdata/snapshots/complex-part.snap.json
    snapshot.AssertMatchesSnapshot(t, model, "complex-part")
}
```

### Criando/Atualizando Snapshots

```bash
# Primeira execução cria o snapshot
UPDATE_SNAPSHOTS=true go test ./...

# Execuções subsequentes comparam contra o snapshot
go test ./...
```

### Configuração Avançada

```go
config := snapshot.Config{
    Dir:       "testdata/custom-snapshots",  // Diretório customizado
    Precision: 4,                            // 4 casas decimais
}

snapshot.AssertMatchesSnapshotWithConfig(t, model, "my-part", config)
```

### Formato do Snapshot

```json
{
  "version": "1.0.0",
  "model": {
    "holes": [
      {
        "center": {"x": 50, "y": 50},
        "diameter": 6,
        "depth": 15,
        "topZ": 5,
        "bottomZ": -10,
        "tool": 1
      }
    ],
    "slots": [],
    "contours": []
  }
}
```

---

## Nível 3: Machining Model

O Machining Model converte eventos de baixo nível em entidades semânticas de usinagem: furos, ranhuras e contornos.

### Quando Usar

- ✅ Quando você precisa inspecionar as operações de usinagem detectadas
- ✅ Análise customizada de padrões de corte
- ✅ Geração de relatórios de usinagem

### Exemplo de Análise

```go
package main

import (
    "fmt"
    
    "github.com/eduardotorresdev/gocode-check/pkg/interpreter"
    "github.com/eduardotorresdev/gocode-check/pkg/machining"
)

func main() {
    gcode := `
        G21
        G90
        T1
        G0 X50 Y50 Z5
        G1 Z-10 F100
        G0 Z5
        G0 X0 Y0
        G1 Z-5 F100
        G1 X100 F200
        G0 Z5
    `
    
    trace, _ := interpreter.ParseAndInterpret(gcode)
    
    // Analisar e gerar modelo
    model, warnings := machining.Analyze(trace)
    
    // Inspecionar furos
    fmt.Printf("Furos encontrados: %d\n", model.HoleCount())
    for i, hole := range model.Holes {
        fmt.Printf("  Furo %d: centro=(%.2f, %.2f), profundidade=%.2f\n",
            i+1, hole.Center.X, hole.Center.Y, hole.Depth)
    }
    
    // Inspecionar ranhuras
    fmt.Printf("Ranhuras encontradas: %d\n", model.SlotCount())
    for i, slot := range model.Slots {
        fmt.Printf("  Ranhura %d: de (%.2f, %.2f) para (%.2f, %.2f)\n",
            i+1, slot.Start.X, slot.Start.Y, slot.End.X, slot.End.Y)
    }
    
    // Verificar warnings
    if !warnings.IsEmpty() {
        fmt.Printf("\nAvisos:\n")
        for _, w := range warnings {
            fmt.Printf("  ⚠️  %s\n", w.Message)
        }
    }
}
```

### Consultas ao Modelo

```go
// Buscar furos por posição
holes := model.HolesAt(50, 50, 0.001)

// Buscar furos por diâmetro
holes6mm := model.HolesWithDiameter(6.0, 0.001)

// Buscar furos por profundidade
deepHoles := model.HolesWithDepth(15.0, 0.001)

> **Nota sobre profundidade:** `Hole.Depth` é calculado como `WorkpieceTopZ - BottomZ` (profundidade absoluta abaixo da superfície), não como distância de deslocamento desde o plano de segurança.

// Verificar contornos fechados
for _, contour := range model.Contours {
    if contour.IsClosed(1e-6) {
        fmt.Printf("Contorno fechado com %d segmentos\n", len(contour.Segments))
    }
}
```

### Configuração do Analisador

```go
config := machining.AnalyzerConfig{
    Tolerance:           1e-6,   // Tolerância para comparações
    MinHoleDepth:        0.1,    // Profundidade mínima para considerar furo
    DefaultToolDiameter: 6.0,    // Diâmetro padrão da ferramenta
    WorkpieceTopZ:       0.0,    // Topo da peça de trabalho
    ConsolidatePeckDrilling: true, // Unifica ciclos de peck em um único furo
    PeckDetectionRadius:     0.5,  // Desvio XY máximo para considerar o mesmo furo
}

model, warnings := machining.AnalyzeWithConfig(trace, config)
```

---

## Nível 4: Interpreter

O Interpreter simula o estado lógico da máquina CNC, gerando eventos para cada movimento e operação.

### Quando Usar

- ✅ Rastrear todos os movimentos da máquina
- ✅ Acessar o estado da máquina em qualquer ponto
- ✅ Implementar visualizações ou análises customizadas

### Exemplo de Interpretação

```go
package main

import (
    "fmt"
    
    "github.com/eduardotorresdev/gocode-check/pkg/interpreter"
    "github.com/eduardotorresdev/gocode-check/pkg/parser"
)

func main() {
    gcode := `
        G21
        G90
        G0 X0 Y0 Z5
        G1 X100 Y100 F500
        M30
    `
    
    // Parse primeiro
    instructions, _ := parser.ParseFile(gcode)
    
    // Depois interpreta
    interp := interpreter.New()
    trace, _ := interp.Interpret(instructions)
    
    // Inspecionar eventos
    fmt.Printf("Total de eventos: %d\n", trace.EventCount())
    for i, event := range trace.Events {
        fmt.Printf("Evento %d: %s\n", i+1, event.Type)
        fmt.Printf("  De: (%.2f, %.2f, %.2f)\n", event.From.X, event.From.Y, event.From.Z)
        fmt.Printf("  Para: (%.2f, %.2f, %.2f)\n", event.To.X, event.To.Y, event.To.Z)
    }
    
    // Estado final da máquina
    fmt.Printf("\nEstado Final:\n")
    fmt.Printf("  Posição: (%.2f, %.2f, %.2f)\n",
        trace.FinalState.Position.X,
        trace.FinalState.Position.Y,
        trace.FinalState.Position.Z)
    fmt.Printf("  Unidade: %s\n", trace.FinalState.Unit)
    fmt.Printf("  Modo: %s\n", trace.FinalState.Mode)
}
```

### Tipos de Eventos

| Evento | Descrição | Dados Disponíveis |
|--------|-----------|-------------------|
| `EventRapidMove` | G0 - Movimento rápido | From, To, SourceLine |
| `EventLinearCut` | G1 - Corte linear | From, To, Feed, SourceLine |
| `EventArcCW` | G2 - Arco horário | From, To, Arc, Feed, SourceLine |
| `EventArcCCW` | G3 - Arco anti-horário | From, To, Arc, Feed, SourceLine |
| `EventToolChange` | Tn - Troca de ferramenta | Tool, SourceLine |
| `EventSpindleStart` | M3/M4 - Liga spindle | Spindle, SpindleCW, SourceLine |
| `EventSpindleStop` | M5 - Desliga spindle | SourceLine |
| `EventUnitChange` | G20/G21 - Mudança de unidade | Unit, SourceLine |
| `EventModeChange` | G90/G91 - Mudança de modo | Mode, SourceLine |

### Observer Pattern

```go
// Registrar observer para receber eventos em tempo real
interpreter.RegisterObserver(func(event interpreter.StepEvent) {
    fmt.Printf("Passo %d: %s -> %s\n",
        event.Index,
        event.Instruction.Op,
        event.StateAfter.Position)
})

trace, _ := interpreter.ParseAndInterpret(gcode)

// Limpar observers
interpreter.ClearObservers()
```

---

## Nível 5: Parser (Baixo Nível)

O Parser converte strings de G-code em instruções estruturadas. É o nível mais baixo de abstração.

### Quando Usar

- ✅ Manipulação direta de instruções G-code
- ✅ Implementar validadores customizados
- ✅ Transformar ou filtrar instruções antes da interpretação

### Exemplo de Parse

```go
package main

import (
    "fmt"
    
    "github.com/eduardotorresdev/gocode-check/pkg/parser"
)

func main() {
    gcode := `
        G21           ; Milímetros
        G90           ; Absoluto
        G0 X10 Y20 Z5 ; Movimento rápido
        G1 Z-15 F100  ; Corte linear
        M30           ; Fim
    `
    
    // Parse do G-code
    p := parser.New()
    instructions, err := p.Parse(gcode)
    if err != nil {
        fmt.Printf("Erro: %v\n", err)
        return
    }
    
    // Inspecionar instruções
    for i, instr := range instructions {
        fmt.Printf("Instrução %d (linha %d):\n", i+1, instr.LineNumber)
        fmt.Printf("  Operação: %s\n", instr.Op)
        fmt.Printf("  Raw: %s\n", instr.RawLine)
        
        // Acessar parâmetros
        if instr.Params.HasX() {
            fmt.Printf("  X = %.2f\n", instr.Params.GetX())
        }
        if instr.Params.HasY() {
            fmt.Printf("  Y = %.2f\n", instr.Params.GetY())
        }
        if instr.Params.HasZ() {
            fmt.Printf("  Z = %.2f\n", instr.Params.GetZ())
        }
        if instr.Params.HasF() {
            fmt.Printf("  F = %.2f\n", instr.Params.GetF())
        }
    }
}
```

### Estrutura de Instrução

```go
type Instruction struct {
    Op         Op      // Tipo de operação (G0, G1, G2, G3, M, T, etc.)
    Params     Params  // Parâmetros da instrução
    RawLine    string  // Linha original (útil para debug)
    LineNumber int     // Número da linha no código fonte
}

type Params struct {
    X, Y, Z    *float64  // Coordenadas
    I, J, K    *float64  // Offsets de arco
    R          *float64  // Raio
    F          *float64  // Feed rate
    S          *float64  // Spindle speed
    P          *float64  // Parâmetro genérico
    N          *int      // Número (para T codes)
    Code       *int      // Código (para M codes)
}
```

### Filtrando Instruções

```go
// Extrair apenas movimentos de corte
var cuts []parser.Instruction
for _, instr := range instructions {
    if instr.Op == parser.OpG1 || instr.Op == parser.OpG2 || instr.Op == parser.OpG3 {
        cuts = append(cuts, instr)
    }
}
```

### Códigos Suportados

| Categoria | Códigos | Descrição |
|-----------|---------|-----------|
| **Movimento** | `G0` | Movimento rápido |
| | `G1` | Interpolação linear |
| | `G2` | Arco horário |
| | `G3` | Arco anti-horário |
| **Posicionamento** | `G90` | Modo absoluto |
| | `G91` | Modo incremental |
| **Unidades** | `G20` | Polegadas |
| | `G21` | Milímetros |
| **Ferramenta** | `T` | Seleção de ferramenta |
| **Spindle** | `M3` | Spindle CW |
| | `M4` | Spindle CCW |
| | `M5` | Spindle parar |
| **Programa** | `M30` | Fim do programa |

---

## Fluxo Completo de Dados

Este diagrama mostra como os dados fluem através de todas as camadas:

```
┌──────────────────────────────────────────────────────────────────────┐
│  INPUT: String G-code                                                │
│  "G21\nG90\nT1\nG0 X50 Y50 Z5\nG1 Z-10 F100\nG0 Z5\nM30"           │
└─────────────────────────┬────────────────────────────────────────────┘
                          │
                          ▼
          ┌───────────────────────────────┐
          │  Parser.Parse(gcode)          │
          │  pkg/parser                   │
          └───────────────┬───────────────┘
                          │
                          ▼
┌──────────────────────────────────────────────────────────────────────┐
│  []Instruction                                                       │
│  [                                                                   │
│    {Op: G21, Params: {}},                                           │
│    {Op: G90, Params: {}},                                           │
│    {Op: T,   Params: {N: 1}},                                       │
│    {Op: G0,  Params: {X: 50, Y: 50, Z: 5}},                         │
│    {Op: G1,  Params: {Z: -10, F: 100}},                             │
│    {Op: G0,  Params: {Z: 5}},                                       │
│    {Op: M,   Params: {Code: 30}}                                    │
│  ]                                                                   │
└─────────────────────────┬────────────────────────────────────────────┘
                          │
                          ▼
          ┌───────────────────────────────┐
          │  Interpreter.Interpret(instr) │
          │  pkg/interpreter              │
          └───────────────┬───────────────┘
                          │
                          ▼
┌──────────────────────────────────────────────────────────────────────┐
│  ExecutionTrace                                                      │
│  {                                                                   │
│    Events: [                                                         │
│      {Type: UnitChange, Unit: Millimeters},                         │
│      {Type: ModeChange, Mode: Absolute},                            │
│      {Type: ToolChange, Tool: 1},                                   │
│      {Type: RapidMove, From: (0,0,0), To: (50,50,5)},              │
│      {Type: LinearCut, From: (50,50,5), To: (50,50,-10), Feed:100},│
│      {Type: RapidMove, From: (50,50,-10), To: (50,50,5)}           │
│    ],                                                                │
│    FinalState: {Position: (50,50,5), Tool: 1, ...}                  │
│  }                                                                   │
└─────────────────────────┬────────────────────────────────────────────┘
                          │
                          ▼
          ┌───────────────────────────────┐
          │  machining.Analyze(trace)     │
          │  pkg/machining                │
          └───────────────┬───────────────┘
                          │
                          ▼
┌──────────────────────────────────────────────────────────────────────┐
│  MachiningModel                                                      │
│  {                                                                   │
│    Holes: [                                                          │
│      {Center: (50, 50), Diameter: 6, Depth: 15, Tool: 1}           │
│    ],                                                                │
│    Slots: [],                                                        │
│    Contours: []                                                      │
│  }                                                                   │
│  Warnings: []                                                        │
└─────────────────────────┬────────────────────────────────────────────┘
                          │
                          ▼
          ┌───────────────────────────────┐
          │  assert.Expect(trace, model)  │
          │  pkg/assert                   │
          │      ou                       │
          │  snapshot.AssertMatches(...)  │
          │  pkg/snapshot                 │
          └───────────────────────────────┘
```

---

## Exemplos Práticos

### 1. Validação Simples de Furos

```go
func TestSimpleHoles(t *testing.T) {
    gcode := `
        G21
        G90
        T1
        G0 X25 Y25 Z5
        G1 Z-10 F100
        G0 Z5
        G0 X75 Y75 Z5
        G1 Z-10 F100
        G0 Z5
    `
    
    trace, _ := interpreter.ParseAndInterpret(gcode)
    model, _ := machining.Analyze(trace)
    
    assert.Expect(trace, model).
        HasHoleCount(2).
        HasHole(25, 25).WithDepth(10).
        And().
        HasHole(75, 75).WithDepth(10).
        Assert(t)
}
```

### 2. Validação de Contorno Quadrado

```go
func TestSquareContour(t *testing.T) {
    gcode := `
        G21
        G90
        T1
        G0 X0 Y0 Z5
        G1 Z-5 F100
        G1 X100 F200
        G1 Y100
        G1 X0
        G1 Y0
        G0 Z5
    `
    
    trace, _ := interpreter.ParseAndInterpret(gcode)
    model, _ := machining.Analyze(trace)
    
    assert.Expect(trace, model).
        HasContour().
        IsClosed().
        HasSegmentCount(4).
        Assert(t)
}
```

### 3. Análise Detalhada com Warnings

```go
func analyzeWithWarnings(gcode string) {
    trace, err := interpreter.ParseAndInterpret(gcode)
    if err != nil {
        log.Fatalf("Parse error: %v", err)
    }
    
    model, warnings := machining.Analyze(trace)
    
    // Imprimir análise
    fmt.Printf("Análise do Programa G-code\n")
    fmt.Printf("==========================\n\n")
    
    fmt.Printf("Operações Detectadas:\n")
    fmt.Printf("  Furos:     %d\n", model.HoleCount())
    fmt.Printf("  Ranhuras:  %d\n", model.SlotCount())
    fmt.Printf("  Contornos: %d\n", model.ContourCount())
    
    if !warnings.IsEmpty() {
        fmt.Printf("\nAvisos:\n")
        for _, w := range warnings {
            fmt.Printf("  ⚠️  [Linha %d] %s: %s\n",
                w.SourceLine, w.Type, w.Message)
        }
    } else {
        fmt.Printf("\n✅ Nenhum aviso detectado\n")
    }
}
```

### 4. Teste com Snapshot

```go
func TestComplexPartSnapshot(t *testing.T) {
    gcode := loadGCodeFromFile("testdata/complex-bracket.nc")
    
    trace, _ := interpreter.ParseAndInterpret(gcode)
    model, _ := machining.Analyze(trace)
    
    // Primeira execução com UPDATE_SNAPSHOTS=true cria o arquivo
    // Execuções subsequentes comparam contra o snapshot salvo
    snapshot.AssertMatchesSnapshot(t, model, "complex-bracket-v2")
}
```

---

## Próximos Passos

- Consulte o [README principal](../README.md) para mais detalhes
- Veja os [exemplos](../examples/) para casos de uso práticos
- Consulte o [ROADMAP](../ROADMAP.md) para funcionalidades futuras
