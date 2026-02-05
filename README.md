# gocode-check

Biblioteca em Go para validação end-to-end de G-code.

---

## O que é

gocode-check é uma biblioteca que interpreta G-code como uma CNC lógica, gerando um modelo semântico de usinagem que permite validação automatizada sem depender de máquina real.

**Características principais:**
- Parser determinístico de G-code
- Interpretador de estado da máquina CNC
- Modelo semântico de usinagem
- API de assertions fluente (inspirada no Playwright)
- Sistema de snapshots para CI/CD
- Renderização opcional para debug visual

## Propósito

Permitir testes end-to-end de programas G-code de forma:
- **Determinística** - mesma entrada sempre produz mesma saída
- **Reprodutível** - funciona igual em qualquer ambiente
- **Automatizada** - integração nativa com CI/CD
- **Independente** - não requer CNC real

### Princípio Central

> A validação não depende da UI. A UI é apenas uma forma de visualizar o mesmo estado interno.

- Core 100% headless
- UI consome o mesmo modelo
- Snapshot é serialização determinística do estado

---

## Como Usar

### Instalação

```bash
go get github.com/eduardotorresdev/gocode-check
```

### Exemplo Básico

```go
package main

import (
    "fmt"
    "github.com/eduardotorresdev/gocode-check/pkg/parser"
    "github.com/eduardotorresdev/gocode-check/pkg/interpreter"
)

func main() {
    // 1. Parse G-code
    gcode := `
        G21
        G90
        G0 X0 Y0 Z5
        G1 X100 Y100 F500
        M30
    `
    instructions, _ := parser.ParseFile(gcode)

    // 2. Interpret
    trace, _ := interpreter.InterpretGCode(instructions)

    // 3. Access results
    fmt.Printf("Events: %d\n", trace.EventCount())
    fmt.Printf("Final position: X=%v Y=%v Z=%v\n",
        trace.FinalState.Position.X,
        trace.FinalState.Position.Y,
        trace.FinalState.Position.Z)
}
```

### Conveniência: Parse e Interpret em uma chamada

```go
trace, err := interpreter.ParseAndInterpret(gcode)
```

### Configuração

```go
import "github.com/eduardotorresdev/gocode-check/internal/config"

cfg := config.NewConfig(
    config.WithTolerance(1e-6),      // Tolerância numérica
    config.WithUI(),                  // Habilitar UI (headed mode)
    config.WithSnapshotDir("./snaps"), // Diretório de snapshots
)
```

### Modos de Execução

| Modo | Descrição | Uso |
|------|-----------|-----|
| Headless | Parser + Interpreter + Asserts + Snapshot | CI/CD, testes automatizados |
| Headed | Headless + Renderer | Debug local, inspeção visual |

---

## Detalhes de Implementação

### Arquitetura

```
string G-code
    ↓
┌─────────┐
│ Parser  │  → []Instruction
└────┬────┘
     ↓
┌──────────────┐
│ Interpreter  │  → ExecutionTrace (Events + FinalState)
└──────┬───────┘
       ↓
┌─────────────────┐
│ Machining Model │  → Holes, Slots, Contours (futuro)
└────────┬────────┘
         ↓
┌────────────────┐
│ Assertion API  │  → Validação fluente (futuro)
└────────┬───────┘
         ↓
┌─────────────────┐
│ Snapshot Engine │  → JSON determinístico (futuro)
└────────┬────────┘
         ↓
┌─────────────┐
│ UI Renderer │  → SVG, PNG, WebView (opcional, futuro)
└─────────────┘
```

### Estrutura de Pacotes

```
gocode-check/
├── cmd/gocodecheck/     # CLI
├── internal/
│   └── config/          # Configurações globais
└── pkg/
    ├── parser/          # Parser de G-code
    └── interpreter/     # Interpretador de estado
```

### Parser (`pkg/parser`)

**Responsabilidade:** Converter string G-code em instruções semânticas mínimas.

**Características:**
- Sem IO
- Sem tempo (time.Now)
- Sem aleatoriedade
- Determinístico

**Códigos Suportados:**
| Tipo | Códigos | Descrição |
|------|---------|-----------|
| Motion | G0, G1, G2, G3 | Movimentos rápidos, lineares e arcos |
| Positioning | G90, G91 | Absoluto / Incremental |
| Units | G20, G21 | Polegadas / Milímetros |
| Tool | T | Seleção de ferramenta |
| Misc | M | Comandos diversos (M3, M4, M5, M30, etc.) |

**Estrutura de dados:**
```go
type Instruction struct {
    Op         Op        // G0, G1, G2, G3, M, T, etc.
    Params     Params    // X, Y, Z, I, J, K, R, F, S, P
    RawLine    string    // Linha original (debug)
    LineNumber int       // Número da linha
}
```

### Interpreter (`pkg/interpreter`)

**Responsabilidade:** Simular o estado lógico da CNC, não a física.

**Estado da Máquina (`MachineState`):**
| Campo | Tipo | Descrição |
|-------|------|-----------|
| Position | Position | Coordenadas X, Y, Z |
| Unit | Unit | mm ou inches |
| Plane | Plane | XY, XZ, YZ |
| Mode | PositionMode | Absoluto ou Incremental |
| Tool | *int | Ferramenta atual |
| Feed | float64 | Taxa de avanço |
| Spindle | float64 | Velocidade do spindle |
| SpindleOn | bool | Spindle ligado/desligado |
| SpindleCW | bool | Sentido de rotação |

**Eventos Gerados:**
| Evento | Descrição |
|--------|-----------|
| RapidMove | Movimento rápido (G0) |
| LinearCut | Corte linear (G1) |
| ArcCW | Arco horário (G2) |
| ArcCCW | Arco anti-horário (G3) |
| DrillCycle | Ciclo de furação |
| ToolChange | Troca de ferramenta |
| SpindleStart | Ligar spindle (M3/M4) |
| SpindleStop | Desligar spindle (M5) |
| UnitChange | Mudança de unidade (G20/G21) |
| ModeChange | Mudança de modo (G90/G91) |

**Saída (`ExecutionTrace`):**
```go
type ExecutionTrace struct {
    Events     []Event       // Lista ordenada de eventos
    FinalState *MachineState // Estado final da máquina
}
```

### Reprodutibilidade

**Regras obrigatórias:**
- Não usar `time.Now`
- Não usar RNG sem seed fixa
- Ordenar listas explicitamente
- Usar tolerância numérica fixa (default: 1e-9)

Isso garante snapshots confiáveis e CI estável.

---

## Roadmap

Consulte [ROADMAP.md](ROADMAP.md) para o planejamento completo.

**Status atual:**
- ✅ Fase 0 — Setup e fundação
- ✅ Fase 1 — Parser
- ✅ Fase 2 — Interpreter (core headless)
- ⬜ Fase 3 — Machining Model
- ⬜ Fase 4 — Assertion API
- ⬜ Fase 5 — Snapshot Engine
- ⬜ Fase 6 — UI Renderer
- ⬜ Fase 7 — Tooling e DX
- ⬜ Fase 8 — CI/CD e releases

---

## Desenvolvimento

### Comandos Make

```bash
make fmt       # Formatar código
make lint      # Executar linters
make test      # Executar testes
make test-cover # Testes com cobertura
make build     # Compilar binário
make release   # Build de release
make clean     # Limpar artefatos
```

### Desenvolvimento local com hot reload

```bash
# Requer: go install github.com/air-verse/air@latest
air
```

---

## O que NÃO é escopo

- Validar texto bruto do G-code (sintaxe pura)
- Simular aceleração física
- Simular tempo de execução real
- Depender de CNC real
- Misturar lógica de UI com core

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

MIT
