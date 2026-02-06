# gocode-check

[![Go Version](https://img.shields.io/badge/Go-1.22+-00ADD8?style=flat&logo=go)](https://go.dev/)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Tests](https://img.shields.io/badge/tests-passing-brightgreen.svg)](https://github.com/eduardotorresdev/gocode-check)

Biblioteca em Go para validação end-to-end de programas G-code através de interpretação lógica e análise semântica.

---

## Índice

- [O que é](#o-que-é)
- [Propósito](#propósito)
- [Como Usar](#como-usar)
  - [Instalação](#instalação)
  - [Exemplo Básico](#exemplo-básico)
  - [Machining Model](#machining-model)
  - [Configuração](#configuração)
  - [Modos de Execução](#modos-de-execução)
- [Guia Completo de Uso](#guia-completo-de-uso)
- [Detalhes de Implementação](#detalhes-de-implementação)
- [Roadmap](#roadmap)
- [Desenvolvimento](#desenvolvimento)
- [MCP (Model Context Protocol)](#mcp-model-context-protocol)
- [Contribuindo](#contribuindo)
- [Licença](#licença)

---

## O que é

**gocode-check** é uma biblioteca Go que interpreta programas G-code como uma CNC lógica, gerando um modelo semântico de usinagem que permite validação automatizada sem depender de máquina real. Ideal para testes automatizados, validação de programas CNC e integração contínua.

**Características principais:**

- ✅ **Parser Determinístico** - Converte G-code em instruções estruturadas
- ✅ **Interpretador de Estado** - Simula o comportamento lógico da máquina CNC
- ✅ **Modelo Semântico** - Identifica furos, ranhuras e contornos automaticamente
- ✅ **API de Assertions** - Interface fluente para validações estilo Playwright
- ✅ **Sistema de Snapshots** - Testes baseados em snapshots para CI/CD
- ✅ **Renderização Visual** - Debug visual opcional com WebSocket

## Propósito

Permitir testes end-to-end de programas G-code de forma:

- 🎯 **Determinística** - Mesma entrada sempre produz mesma saída
- 🔄 **Reprodutível** - Funciona de forma idêntica em qualquer ambiente
- 🤖 **Automatizada** - Integração nativa com CI/CD pipelines
- 🚀 **Independente** - Não requer CNC real ou simuladores proprietários

### Princípio Central

> A validação não depende da UI. A UI é apenas uma forma de visualizar o mesmo estado interno.

**Arquitetura Headless-First:**
- Core 100% headless e determinístico
- UI (quando implementada) consome o mesmo modelo interno
- Snapshots são serializações determinísticas do estado
- Perfeito para integração com sistemas de teste automatizados

---

## Como Usar

### Instalação

**Pré-requisitos:**
- Go 1.22 ou superior

**Instalar a biblioteca:**

```bash
go get github.com/eduardotorresdev/gocode-check
```

**Verificar instalação:**

```bash
go mod tidy
```

### Exemplo Básico

Este exemplo mostra como fazer parse e interpretar um programa G-code simples:

```go
package main

import (
    "fmt"
    "log"
    "github.com/eduardotorresdev/gocode-check/pkg/parser"
    "github.com/eduardotorresdev/gocode-check/pkg/interpreter"
)

func main() {
    // 1. Definir o programa G-code
    gcode := `
        G21          ; Usar milímetros
        G90          ; Modo de posicionamento absoluto
        G0 X0 Y0 Z5  ; Movimento rápido para posição inicial
        G1 X100 Y100 F500  ; Movimento linear com avanço de 500 mm/min
        M30          ; Fim do programa
    `
    
    // 2. Parse do G-code em instruções
    instructions, err := parser.ParseFile(gcode)
    if err != nil {
        log.Fatalf("Erro no parse: %v", err)
    }

    // 3. Interpretar as instruções
    trace, err := interpreter.InterpretGCode(instructions)
    if err != nil {
        log.Fatalf("Erro na interpretação: %v", err)
    }

    // 4. Acessar resultados
    fmt.Printf("Total de eventos gerados: %d\n", trace.EventCount())
    fmt.Printf("Posição final da máquina:\n")
    fmt.Printf("  X = %.2f mm\n", trace.FinalState.Position.X)
    fmt.Printf("  Y = %.2f mm\n", trace.FinalState.Position.Y)
    fmt.Printf("  Z = %.2f mm\n", trace.FinalState.Position.Z)
}
```

**Saída esperada:**
```
Total de eventos gerados: 5
Posição final da máquina:
  X = 100.00 mm
  Y = 100.00 mm
  Z = 5.00 mm
```

### Conveniência: Parse e Interpret em uma Chamada

Para simplificar, você pode usar a função `ParseAndInterpret` que combina ambas as operações:

```go
trace, err := interpreter.ParseAndInterpret(gcode)
if err != nil {
    log.Fatalf("Erro: %v", err)
}
// Agora você pode usar o trace diretamente
```

### Machining Model

O **Machining Model** é uma camada de abstração que converte eventos de baixo nível (movimentos, cortes) em entidades semânticas de usinagem (furos, ranhuras, contornos). Isso facilita a validação de operações de usinagem específicas.

**Exemplo completo:**

```go
package main

import (
    "fmt"
    "log"
    "github.com/eduardotorresdev/gocode-check/pkg/interpreter"
    "github.com/eduardotorresdev/gocode-check/pkg/machining"
)

func main() {
    // Programa G-code que executa furação e cortes
    gcode := `
        G21          ; Milímetros
        G90          ; Absoluto
        T1           ; Ferramenta 1
        
        ; Fazer um furo em (50, 50)
        G0 X50 Y50 Z5
        G1 Z-10 F100  ; Mergulho vertical (plunge)
        G0 Z5         ; Retorno
        
        ; Fazer uma ranhura horizontal
        G0 X0 Y0
        G1 Z-5 F100   ; Descer até profundidade de corte
        G1 X100 F200  ; Cortar horizontalmente
        G0 Z5         ; Retornar
    `
    
    // Parse e interpretar
    trace, err := interpreter.ParseAndInterpret(gcode)
    if err != nil {
        log.Fatalf("Erro: %v", err)
    }
    
    // Analisar e gerar modelo de usinagem
    model, warnings := machining.Analyze(trace)
    
    // Exibir entidades detectadas
    fmt.Printf("=== Análise do Programa ===\n")
    fmt.Printf("Furos detectados: %d\n", model.HoleCount())
    fmt.Printf("Ranhuras detectadas: %d\n", model.SlotCount())
    fmt.Printf("Contornos detectados: %d\n", model.ContourCount())
    
    // Consultar furos específicos por posição
    fmt.Printf("\n=== Detalhes dos Furos ===\n")
    holes := model.HolesAt(50, 50, 0.001)
    for i, hole := range holes {
        fmt.Printf("Furo %d:\n", i+1)
        fmt.Printf("  Centro: (%.2f, %.2f)\n", hole.Center.X, hole.Center.Y)
        fmt.Printf("  Profundidade: %.2f mm\n", hole.Depth)
        fmt.Printf("  Z superior: %.2f mm\n", hole.TopZ)
        fmt.Printf("  Z inferior: %.2f mm\n", hole.BottomZ)
    }
    
    // Verificar warnings (avisos não bloqueantes)
    if !warnings.IsEmpty() {
        fmt.Printf("\n=== Avisos ===\n")
        for _, w := range warnings {
            fmt.Printf("⚠️  %s\n", w)
        }
    } else {
        fmt.Printf("\n✅ Nenhum aviso detectado\n")
    }
}
```

**Saída esperada:**
```
=== Análise do Programa ===
Furos detectados: 1
Ranhuras detectadas: 1
Contornos detectados: 0

=== Detalhes dos Furos ===
Furo 1:
  Centro: (50.00, 50.00)
  Profundidade: 15.00 mm
  Z superior: 5.00 mm
  Z inferior: -10.00 mm

✅ Nenhum aviso detectado
```

### Assertion API

O pacote `assert` fornece uma API fluente para validar modelos de usinagem em testes automatizados. A API é inspirada no Playwright, permitindo encadeamento de assertions com mensagens de erro descritivas.

**Exemplo básico com `testing.T`:**

```go
package mytest

import (
    "testing"
    "github.com/eduardotorresdev/gocode-check/pkg/assert"
    "github.com/eduardotorresdev/gocode-check/pkg/interpreter"
    "github.com/eduardotorresdev/gocode-check/pkg/machining"
)

func TestGCodeProgram(t *testing.T) {
    // Parse e interpreta o G-code
    gcode := `
        G21
        G90
        T1
        G0 X50 Y50 Z5
        G1 Z-10 F100
    `
    trace, err := interpreter.ParseAndInterpret(gcode)
    if err != nil {
        t.Fatalf("parse error: %v", err)
    }
    
    // Analisa e gera modelo de usinagem
    model, _ := machining.Analyze(trace)
    
    // Valida o modelo com assertions fluentes
    assert.Expect(model).
        HasHole(50, 50).
        WithDiameter(6.0).
        WithDepth(15.0).
        Assert(t)
}
```

**Assertions encadeadas:**

```go
// Validar furo com múltiplos critérios
assert.Expect(model).
    HasHole(50, 50).
    WithDiameter(6.0).
    WithDepth(15.0).
    WithTool(1).
    Assert(t)

// Validar contorno fechado
assert.Expect(model).
    HasContour().
    IsClosed().
    HasSegmentCount(4).
    Assert(t)

// Múltiplas validações com And()
assert.Expect(model).
    HasHoleCount(3).
    And().
    HasSlotCount(1).
    And().
    HasContour().IsClosed().
    Assert(t)
```

**Validar limites da peça:**

```go
bounds := assert.Bounds{
    MinX: 0, MaxX: 100,
    MinY: 0, MaxY: 100,
    MinZ: -20, MaxZ: 10,
}
assert.Expect(model).NoOperationOutside(bounds).Assert(t)
```

**Tolerância customizada:**

```go
// Usa tolerância personalizada para comparações
assert.ExpectWithTolerance(model, 0.001).
    HasHole(50.001, 50.001).
    Assert(t)
```

**Assertions disponíveis:**

| Categoria | Assertion | Descrição |
|-----------|-----------|-----------|
| **Holes** | `HasHole(x, y)` | Verifica existência de furo na posição |
| | `HasHoleCount(n)` | Verifica quantidade total de furos |
| | `WithDiameter(d)` | Filtra furos por diâmetro |
| | `WithDepth(d)` | Filtra furos por profundidade |
| | `WithTool(t)` | Filtra furos por ferramenta |
| **Slots** | `HasSlot(x1, y1, x2, y2)` | Verifica existência de ranhura |
| | `HasSlotCount(n)` | Verifica quantidade total de ranhuras |
| | `WithWidth(w)` | Filtra ranhuras por largura |
| | `WithSlotDepth(d)` | Filtra ranhuras por profundidade |
| **Contours** | `HasContour()` | Verifica existência de contorno |
| | `HasContourCount(n)` | Verifica quantidade total de contornos |
| | `IsClosed()` | Filtra contornos fechados |
| | `IsOpen()` | Filtra contornos abertos |
| | `HasSegmentCount(n)` | Filtra por quantidade de segmentos |
| **Bounds** | `NoOperationOutside(bounds)` | Verifica se todas as operações estão dentro dos limites |
| **Utility** | `And()` | Reinicia contexto para nova cadeia de assertions |

### Snapshot API

O pacote `snapshot` fornece testes baseados em snapshots para detectar regressões. Os snapshots são representações JSON determinísticas do `MachiningModel`, permitindo comparações confiáveis em CI/CD.

**Uso básico:**

```go
package mytest

import (
    "testing"
    "github.com/eduardotorresdev/gocode-check/pkg/snapshot"
    "github.com/eduardotorresdev/gocode-check/pkg/interpreter"
    "github.com/eduardotorresdev/gocode-check/pkg/machining"
)

func TestGCodeSnapshot(t *testing.T) {
    gcode := `
        G21
        G90
        T1
        G0 X50 Y50 Z5
        G1 Z-10 F100
    `
    trace, _ := interpreter.ParseAndInterpret(gcode)
    model, _ := machining.Analyze(trace)
    
    // Compara contra snapshot salvo
    snapshot.AssertMatchesSnapshot(t, model, "my-gcode-program")
}
```

**Atualizando snapshots:**

Quando o modelo mudar intencionalmente, atualize os snapshots:

```bash
# Via variável de ambiente
UPDATE_SNAPSHOTS=true go test ./...

# Via make
make snapshot
```

**Configuração customizada:**

```go
config := snapshot.Config{
    Dir:       "testdata/custom-snapshots",
    Precision: 4, // casas decimais para arredondamento
}
snapshot.AssertMatchesSnapshotWithConfig(t, model, "name", config)
```

**Formato do snapshot:**

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

**Características:**

| Característica | Descrição |
|----------------|-----------|
| **Determinístico** | Listas ordenadas, floats arredondados com precisão configurável |
| **Versionado** | Campo `version` para compatibilidade futura |
| **Diff legível** | Mensagens de erro mostram diferenças linha por linha |
| **CI/CD ready** | Falha testes automaticamente se snapshots divergirem |

### Configuração

A biblioteca permite configuração personalizada através do pacote `config`:

```go
import "github.com/eduardotorresdev/gocode-check/internal/config"

// Criar configuração com opções personalizadas
cfg := config.NewConfig(
    config.WithTolerance(1e-6),           // Tolerância numérica para comparações
    config.WithUI(),                       // Habilitar modo UI (headed mode)
    config.WithSnapshotDir("./snapshots"), // Diretório para armazenar snapshots
)

// Usar a configuração (implementação futura)
```

**Opções disponíveis:**

| Opção | Descrição | Valor Padrão |
|-------|-----------|--------------|
| `WithTolerance(float64)` | Tolerância para comparações numéricas | `1e-9` |
| `WithUI()` | Ativa modo headed com renderização visual | `false` |
| `WithSnapshotDir(string)` | Define diretório de snapshots | `"./testdata/snapshots"` |

### Modos de Execução

A biblioteca suporta dois modos de execução:

| Modo | Componentes | Casos de Uso | Status |
|------|-------------|--------------|--------|
| **Headless** | Parser + Interpreter + Assertions + Snapshots | CI/CD, testes automatizados, validação em batch | ✅ Implementado |
| **Headed** | Headless + Renderer (UI) | Debug local, inspeção visual, desenvolvimento | ⏳ Planejado |

**Headless Mode** (Atual):
- Totalmente determinístico
- Sem dependências de interface gráfica
- Ideal para ambientes de CI/CD
- Resultados reproduzíveis entre execuções

**Headed Mode** (Futuro):
- Inclui todas as funcionalidades do modo headless
- Adiciona renderização visual (SVG, PNG, WebView)
- Útil para debug e inspeção visual de programas G-code

---

## Detalhes de Implementação

### Arquitetura em Camadas

A biblioteca segue uma arquitetura em camadas, onde cada camada transforma a informação:

```
┌──────────────────────────────────────────────────────────────┐
│  Input: String G-code                                        │
│  "G21\nG90\nG0 X10 Y20 Z5\nG1 X50 Y50 F100\nM30"           │
└────────────────────────┬─────────────────────────────────────┘
                         ↓
              ┌──────────────────────┐
              │  Parser              │
              │  pkg/parser          │
              └──────────┬───────────┘
                         ↓
         ┌───────────────────────────────┐
         │  []Instruction                │
         │  Lista estruturada de         │
         │  comandos G-code              │
         └───────────┬───────────────────┘
                     ↓
      ┌──────────────────────────────┐
      │  Interpreter                 │
      │  pkg/interpreter             │
      └──────────┬───────────────────┘
                 ↓
    ┌────────────────────────────────────┐
    │  ExecutionTrace                    │
    │  - Events (movimentos, cortes)     │
    │  - FinalState (posição final)      │
    └────────┬───────────────────────────┘
             ↓
 ┌───────────────────────────────┐
 │  Machining Analyzer           │
 │  pkg/machining                │
 └───────┬───────────────────────┘
         ↓
┌────────────────────────────────────┐
│  MachiningModel                    │
│  - Holes (furos)                   │
│  - Slots (ranhuras)                │
│  - Contours (contornos)            │
│  + Warnings (avisos)               │
└────────┬───────────────────────────┘
         ↓
┌────────────────────────────────────┐
│  Assertion API                     │
│  pkg/assert                        │
│  Validações fluentes               │
└────────┬───────────────────────────┘
         ↓
┌────────────────────────────────────┐
│  Snapshot Engine                   │
│  pkg/snapshot                      │
│  JSON determinístico p/ regressão  │
└────────┬───────────────────────────┘
         ↓
┌────────────────────────────────────┐
│  Renderer (futuro)                 │
│  UI visual para debug              │
└────────────────────────────────────┘
```

### Estrutura de Pacotes

```
gocode-check/
├── cmd/
│   └── gocodecheck/     # CLI para execução standalone
├── internal/
│   └── config/          # Configurações globais e opções
└── pkg/                 # API pública da biblioteca
    ├── assert/          # API fluente de assertions
    ├── interpreter/     # Simulador de estado da CNC
    ├── machining/       # Análise semântica de usinagem
    ├── parser/          # Parser determinístico de G-code
    └── snapshot/        # Sistema de snapshots para testes
```

### Parser (`pkg/parser`)

**Responsabilidade:** Converter strings G-code em instruções estruturadas e validadas.

**Princípios de Design:**
- ✅ **Sem I/O** - Não lê arquivos ou rede
- ✅ **Sem tempo** - Não usa `time.Now()` ou timestamps
- ✅ **Sem aleatoriedade** - Sem geradores de números aleatórios
- ✅ **100% Determinístico** - Mesma entrada sempre produz mesma saída

**Códigos G-code Suportados:**

| Categoria | Códigos | Descrição |
|-----------|---------|-----------|
| **Motion** | `G0`, `G1`, `G2`, `G3` | Movimento rápido, linear, arco horário, arco anti-horário |
| **Positioning** | `G90`, `G91` | Modo absoluto e incremental |
| **Units** | `G20`, `G21` | Polegadas e milímetros |
| **Tool** | `T` | Seleção de ferramenta (ex: T1, T2) |
| **Spindle** | `M3`, `M4`, `M5` | Spindle CW, CCW, parar |
| **Program** | `M30` | Fim de programa |

**Estrutura de Dados:**

```go
type Instruction struct {
    Op         Op        // Operação (G0, G1, G2, G3, M, T, etc.)
    Params     Params    // Parâmetros (X, Y, Z, I, J, K, R, F, S)
    RawLine    string    // Linha original (útil para debug)
    LineNumber int       // Número da linha no código fonte
}
```

**Exemplo de uso:**

```go
parser := parser.New()
instructions, err := parser.Parse("G0 X10 Y20\nG1 Z-5 F100")
// instructions[0]: Op=G0, Params={X:10, Y:20}
// instructions[1]: Op=G1, Params={Z:-5, F:100}
```

### Interpreter (`pkg/interpreter`)

**Responsabilidade:** Simular o estado lógico da máquina CNC (não a física real).

O interpretador processa instruções sequencialmente, mantendo o estado da máquina e gerando eventos para cada operação.

**Estado da Máquina (`MachineState`):**

| Campo | Tipo | Descrição | Valor Inicial |
|-------|------|-----------|---------------|
| `Position` | `Position` | Coordenadas X, Y, Z atuais | `(0, 0, 0)` |
| `Unit` | `Unit` | Sistema de unidades | `Millimeters` |
| `Plane` | `Plane` | Plano de trabalho | `XY` |
| `Mode` | `PositionMode` | Absoluto ou incremental | `Absolute` |
| `Tool` | `*int` | Ferramenta selecionada | `nil` |
| `Feed` | `float64` | Taxa de avanço (mm/min ou in/min) | `0` |
| `Spindle` | `float64` | Velocidade do spindle (RPM) | `0` |
| `SpindleOn` | `bool` | Spindle ligado | `false` |
| `SpindleCW` | `bool` | Sentido horário | `false` |

**Eventos Gerados:**

| Tipo de Evento | Comando | Descrição |
|----------------|---------|-----------|
| `RapidMove` | `G0` | Movimento rápido (sem corte) |
| `LinearCut` | `G1` | Corte linear |
| `ArcCW` | `G2` | Arco no sentido horário |
| `ArcCCW` | `G3` | Arco no sentido anti-horário |
| `ToolChange` | `T` | Troca de ferramenta |
| `SpindleStart` | `M3/M4` | Ligar spindle (CW ou CCW) |
| `SpindleStop` | `M5` | Desligar spindle |
| `UnitChange` | `G20/G21` | Mudança de unidade |
| `ModeChange` | `G90/G91` | Mudança de modo posicionamento |

**Estrutura de Saída (`ExecutionTrace`):**

```go
type ExecutionTrace struct {
    Events     []Event       // Lista ordenada de eventos
    FinalState *MachineState // Estado final após execução
}

// Métodos úteis:
// trace.EventCount() int
// trace.FinalState.Position
```

### Machining Model (`pkg/machining`)

**Responsabilidade:** Converter eventos de baixo nível em entidades semânticas de usinagem.

O analisador de usinagem identifica padrões nos eventos de corte e os classifica em operações de usinagem conhecidas.

**Entidades Semânticas Detectadas:**

| Entidade | Descrição | Como é Detectada |
|----------|-----------|------------------|
| **Hole** | Furo circular | Plunge cut vertical, drill cycle, ou arco completo |
| **Slot** | Ranhura linear | Corte horizontal em linha reta |
| **Contour** | Contorno/perfil | Sequência conectada de cortes (linhas e arcos) |

**Estrutura de Dados (`MachiningModel`):**

```go
type MachiningModel struct {
    Holes    []Hole     // Furos detectados
    Slots    []Slot     // Ranhuras detectadas
    Contours []Contour  // Contornos detectados
}

// Métodos de consulta:
// model.HoleCount() int
// model.SlotCount() int
// model.ContourCount() int
// model.HolesAt(x, y, tolerance) []Hole
// model.HolesWithDiameter(diameter, tolerance) []Hole
// model.HolesWithDepth(depth, tolerance) []Hole
```

**Estrutura: Hole (Furo)**

```go
type Hole struct {
    Center   Point2D   // Centro do furo (X, Y)
    Diameter float64   // Diâmetro (baseado na ferramenta)
    Depth    float64   // Profundidade total (valor positivo)
    TopZ     float64   // Coordenada Z do topo
    BottomZ  float64   // Coordenada Z do fundo
    Tool     int       // ID da ferramenta usada
}
```

**Estrutura: Slot (Ranhura)**

```go
type Slot struct {
    Start Point2D   // Ponto inicial (X, Y)
    End   Point2D   // Ponto final (X, Y)
    Width float64   // Largura (diâmetro da ferramenta)
    Depth float64   // Profundidade
    Z     float64   // Coordenada Z do corte
    Tool  int       // ID da ferramenta usada
}

// Método: slot.Length() float64
```

**Estrutura: Contour (Contorno)**

```go
type Contour struct {
    Segments []Segment  // Lista de segmentos (linhas e arcos)
    Z        float64    // Profundidade do contorno
    Closed   bool       // Se forma um loop fechado
    Tool     int        // ID da ferramenta usada
}

// Métodos:
// contour.IsClosed() bool
// contour.TotalLength() float64
```

**Sistema de Warnings:**

O analisador detecta problemas não bloqueantes e gera warnings informativos:

| Tipo de Warning | Descrição | Quando Ocorre |
|-----------------|-----------|---------------|
| `MissingTool` | Corte sem ferramenta selecionada | Operação de corte com `Tool == nil` |
| `SpindleOff` | Corte com spindle desligado | Operação de corte com `SpindleOn == false` |
| `ZeroFeed` | Corte com feed rate zero | Operação de corte com `Feed == 0` |
| `ShallowCut` | Corte muito raso | Profundidade menor que limiar configurado |
| `OpenContour` | Contorno que não fecha | Contorno com ponto inicial ≠ ponto final |

**Configuração Personalizada do Analisador:**

```go
config := machining.AnalyzerConfig{
    Tolerance:           1e-6,  // Tolerância para comparações de ponto flutuante
    MinHoleDepth:        0.001, // Profundidade mínima para detectar como furo
    DefaultToolDiameter: 6.0,   // Diâmetro padrão quando ferramenta não especificada
    WorkpieceTopZ:       0.0,   // Coordenada Z do topo da peça de trabalho
}

model, warnings := machining.AnalyzeWithConfig(trace, config)
```

### Reprodutibilidade e Determinismo

Para garantir que os testes sejam confiáveis e funcionem identicamente em qualquer ambiente, o projeto segue regras estritas:

**Regras Obrigatórias:**

1. ❌ **Proibido usar `time.Now()`** ou qualquer fonte de tempo variável
2. ❌ **Proibido usar RNG sem seed fixa** ou qualquer aleatoriedade
3. ✅ **Sempre ordenar listas explicitamente** para garantir ordem determinística
4. ✅ **Usar tolerância numérica fixa** (padrão: `1e-9`) para comparações de ponto flutuante
5. ✅ **Evitar dependências de I/O não determinístico** (filesystem, rede)

**Por que isso importa?**

- 🔒 **Snapshots confiáveis** - O mesmo G-code sempre gera o mesmo snapshot
- 🔄 **CI estável** - Testes não falham aleatoriamente
- 🌍 **Portabilidade** - Funciona igual em Linux, Windows, macOS
- 📊 **Debugging facilitado** - Problemas são reproduzíveis

**Exemplo de comparação com tolerância:**

```go
// ❌ Errado - comparação direta de floats
if a == b {
    // Pode falhar devido a erros de arredondamento
}

// ✅ Correto - usar tolerância
const tolerance = 1e-9
if math.Abs(a - b) < tolerance {
    // Comparação segura
}
```

---

## Guia Completo de Uso

Para um guia detalhado de como usar a biblioteca, desde o nível mais alto (Assert API) até o nível mais baixo (Parser), consulte:

📖 **[docs/USAGE_GUIDE.md](docs/USAGE_GUIDE.md)**

O guia inclui:
- Visão geral das camadas da biblioteca
- Exemplos práticos para cada nível de abstração
- Fluxo completo de dados entre as camadas
- Quando usar cada componente

---

## Roadmap

Consulte [ROADMAP.md](ROADMAP.md) para o planejamento completo e detalhado.

**Status atual do projeto:**

| Fase | Descrição | Status |
|------|-----------|--------|
| Fase 0 | Setup e fundação | ✅ Completo |
| Fase 1 | Parser de G-code | ✅ Completo |
| Fase 2 | Interpreter (core headless) | ✅ Completo |
| Fase 3 | Machining Model | ✅ Completo |
| Fase 4 | Assertion API | ✅ Completo |
| Fase 5 | Snapshot Engine | ✅ Completo |
| Fase 6 | UI Renderer | ✅ Completo |
| Fase 7 | Tooling e DX | ⏳ Planejado |
| Fase 8 | CI/CD e Releases | ⏳ Planejado |

**Próximos passos:**
- Melhorar ferramentas e DX (Fase 7)
- Configurar CI/CD e releases automatizados (Fase 8)

---

## Visualização UI (Fase 6)

O gocode-check inclui uma UI opcional para visualização em tempo real dos testes.

### Ativando a UI

1. Configure no seu `TestMain`:

```go
func TestMain(m *testing.M) {
    if os.Getenv("GOCODECHECK_UI") != "" {
        cleanup := ui.Enable(ui.DefaultConfig())
        defer cleanup()
    }
    os.Exit(m.Run())
}
```

2. Execute os testes com a variável de ambiente:

```bash
GOCODECHECK_UI=1 go test -v ./...
```

### Configuração

```go
cfg := ui.DefaultConfig().
    WithPort(8080).           // Porta do servidor (0 = automático)
    WithSpeed(ui.SpeedSlow).  // Velocidade: Fast, Normal, Slow, Manual
    WithAutoOpen(true).       // Abrir browser automaticamente
    WithVerbose(true)         // Logs detalhados no console
```

### Velocidades

| Preset | Delay | Uso |
|--------|-------|-----|
| `SpeedFast` | 50ms | Execução rápida |
| `SpeedNormal` | 200ms | Desenvolvimento |
| `SpeedSlow` | 500ms | Apresentações |
| `SpeedManual` | - | Passo a passo |

---

## Desenvolvimento

### Comandos Make

O projeto inclui um Makefile com comandos úteis para desenvolvimento:

```bash
make help            # Mostrar todos os comandos disponíveis
make fmt             # Formatar código com go fmt
make lint            # Executar linters (go vet)
make test            # Executar todos os testes
make test-cover      # Executar testes com relatório de cobertura
make build           # Compilar binário CLI
make release         # Build otimizado para release
make clean           # Limpar artefatos de build
make tidy            # Organizar dependências (go mod tidy)
make ui-test         # Executar testes com UI habilitada
make test-ui-package # Executar testes do pacote UI
```

### Desenvolvimento Local com Hot Reload

Para desenvolvimento com recarga automática, use [Air](https://github.com/air-verse/air):

```bash
# Instalar Air (apenas uma vez)
go install github.com/air-verse/air@latest

# Iniciar desenvolvimento com hot reload
air
```

### Executando Testes

```bash
# Executar todos os testes
make test

# Executar testes com cobertura
make test-cover

# Executar testes de um pacote específico
go test -v ./pkg/parser

# Executar um teste específico
go test -v -run TestParser_Parse_G0 ./pkg/parser
```

---

## MCP (Model Context Protocol)

A biblioteca inclui um arquivo `mcp.json` que descreve suas capacidades para assistentes de IA e ferramentas que suportam o Model Context Protocol.

📄 **[mcp.json](mcp.json)**

O arquivo MCP documenta:
- **Capacidades**: Parsing, interpretação, análise de usinagem, assertions e snapshots
- **Pacotes**: Descrição de cada pacote e suas funções principais
- **Padrões de uso**: Exemplos de código para cenários comuns
- **Códigos G suportados**: Lista completa de códigos G/M suportados
- **Arquitetura**: Visão geral das camadas e fluxo de dados

Este arquivo permite que assistentes de IA entendam melhor a biblioteca e forneçam sugestões mais precisas ao desenvolver com gocode-check.

---

## Contribuindo

Contribuições são bem-vindas! Para contribuir:

1. **Fork** o repositório
2. **Crie uma branch** para sua feature (`git checkout -b feature/minha-feature`)
3. **Faça commit** das suas alterações (`git commit -am 'Adiciona nova feature'`)
4. **Push** para a branch (`git push origin feature/minha-feature`)
5. **Abra um Pull Request**

### Diretrizes de Contribuição

- ✅ Escreva testes para novas funcionalidades
- ✅ Mantenha cobertura de testes alta
- ✅ Execute `make fmt` antes de fazer commit
- ✅ Execute `make lint` e corrija warnings
- ✅ Siga as convenções de código Go
- ✅ Documente funções e tipos exportados
- ✅ Mantenha mudanças atômicas e focadas

### Reportar Issues

Ao reportar um issue, inclua:

- Versão do Go (`go version`)
- Sistema operacional
- Exemplo mínimo de código que reproduz o problema
- Comportamento esperado vs. comportamento observado

---

## Troubleshooting

### Problemas Comuns

**Q: O parser não reconhece meu código G-code**
```
A: Verifique se o código G suportado está na lista de códigos implementados.
   Consulte a seção "Códigos Suportados" para ver a lista completa.
```

**Q: Comparações numéricas falham mesmo com valores "iguais"**
```
A: Use a tolerância configurável. Por padrão, a tolerância é 1e-9.
   Ajuste com config.WithTolerance() se necessário.
```

**Q: Como debugar o trace de execução?**
```go
// Imprima todos os eventos gerados
for i, event := range trace.Events {
    fmt.Printf("Event %d: %v\n", i, event)
}

// Verifique o estado final
fmt.Printf("Final State: %+v\n", trace.FinalState)
```

---

## O que NÃO é Escopo

Para manter o foco e garantir qualidade, as seguintes funcionalidades **não estão** no escopo do projeto:

- ❌ **Validação de sintaxe pura** - Não validamos apenas o texto bruto do G-code
- ❌ **Simulação física** - Não simulamos aceleração, forças ou física real da máquina
- ❌ **Simulação de tempo real** - Não calculamos tempo de execução preciso
- ❌ **Dependência de CNC real** - Não requer conexão com máquinas físicas
- ❌ **Lógica de UI no core** - Mantemos separação estrita entre core e interface

**Por que essas limitações?**

Estas escolhas são intencionais para manter o projeto:
- Focado em validação lógica e semântica
- Determinístico e reproduzível
- Leve e sem dependências pesadas
- Adequado para CI/CD e automação

---

## Modelo Mental (Analogia com Playwright)

| Playwright | gocode-check |
|------------|--------------|
| DOM | MachiningModel |
| expect() | Assert() |
| snapshot visual | snapshot semântico |
| headed | renderer |
| headless | core |

---

## Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE).

Copyright (c) 2024 Eduardo Torres

---

## Modelo Mental (Analogia com Playwright)

Se você está familiarizado com o Playwright para testes de aplicações web, aqui está uma analogia útil:

| Playwright | gocode-check | Descrição |
|------------|--------------|-----------|
| DOM | MachiningModel | Representação estrutural do estado |
| `expect()` | `Assert()` | API de validações (futuro) |
| Screenshot snapshot | Snapshot semântico | Captura determinística do estado |
| Headed mode | Renderer | Modo visual para debug |
| Headless mode | Core | Modo automatizado sem UI |

Assim como o Playwright permite testar aplicações web sem depender de browsers reais em CI, **gocode-check** permite testar programas G-code sem depender de máquinas CNC reais.

---

**Made with ❤️ for the CNC and manufacturing automation community**
