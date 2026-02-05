# gocode-check

gocode-check é uma biblioteca em Go para validação end-to-end de G-code.
Ela interpreta G-code como uma CNC lógica, gera um modelo semântico de usinagem
e permite asserts, snapshots e inspeção visual opcional — sem depender de máquina real.

## Princípio central

A validação não depende da UI.
A UI é apenas uma forma de visualizar o mesmo estado interno.

- core 100% headless
- UI consome o mesmo modelo
- snapshot é serialização determinística do estado

## Arquitetura

Pacote: gocode-check

Camadas (ordem obrigatória):

1. Parser
2. Interpreter (estado da máquina)
3. Machining Model (semântica)
4. Assertion API
5. Snapshot Engine
6. UI Renderer (opcional)

## Parser

Responsabilidade:
Converter string G-code em instruções semânticas mínimas.

Características:
- sem IO
- sem tempo
- sem aleatoriedade

Input:
- string

Output:
- []Instruction

Instruction:
- Op (G0, G1, G2, G3, M, T, etc)
- Params (X,Y,Z,I,J,F,S)
- RawLine (debug)

## Interpreter (core headless)

Responsabilidade:
Simular o estado lógico da CNC, não a física.

Estado:
- posição (X,Y,Z)
- unidade (mm/inch)
- plano (XY)
- modo (abs/inc)
- ferramenta
- feed
- spindle

Processo:
- percorre instruções
- gera eventos de execução

Output:
ExecutionTrace
- Events
- FinalState

Eventos:
- RapidMove
- LinearCut
- ArcCut
- DrillCycle
- ToolChange

## Machining Model

Responsabilidade:
Responder: “o que foi usinado?”

Transforma eventos em entidades verificáveis.

Modelo:
MachiningModel
- Holes
- Slots
- Contours
- Pockets (opcional)
- Warnings

Exemplo Hole:
- CenterX
- CenterY
- Diameter
- Depth
- Tool

Este modelo é a fonte de verdade para validação.

## Assertion API

Inspirada no Playwright.
Fluente, legível e reprodutível.

Exemplo:

model := gocodecheck.Interpret(gcode)

gocodecheck.Assert(model).
  HasHole().
  At(120, 45).
  WithDiameter(5).
  WithDepth(15)

gocodecheck.Assert(model).
  NoOperationOutside(bounds)

Características:
- asserts puros
- mensagens de erro descritivas
- sem dependência de UI

## Snapshot Engine

Snapshot não é imagem.
Snapshot é o estado semântico serializado.

Inclui:
- MachiningModel normalizado
- ordenação explícita
- tolerância numérica fixa

Formato:
- JSON

Uso:

Assert(model).MatchesSnapshot("simple_panel.json")

Benefícios:
- CI-friendly
- diff legível
- determinístico
- independente de UI

## UI Renderer (opcional)

A UI não interpreta G-code.
Ela apenas renderiza o MachiningModel.

Possibilidades:
- SVG
- PNG
- WebView
- Canvas

Uso:
- debug local
- inspeção visual
- documentação

Exemplo:

ui.Render(model)
ui.RenderDiff(snapshot, model)

## Headless vs Headed

Headless (default):
- parser
- interpreter
- asserts
- snapshot
- usado em CI
- rápido e determinístico

Headed:
- tudo do headless
- + renderer
- ativado por flag

Exemplo:

gocodecheck.Run(test, WithUI())

## Reprodutibilidade

Regras obrigatórias:
- não usar time.Now
- não usar RNG sem seed fixa
- ordenar listas explicitamente
- usar tolerância numérica fixa

Isso garante snapshots confiáveis e CI estável.

## O que não é escopo

- validar texto bruto do G-code
- simular aceleração
- simular tempo
- depender de CNC real
- misturar UI com core

## Modelo mental (Playwright)

Playwright -> gocode-check
DOM -> MachiningModel
expect() -> Assert()
snapshot visual -> snapshot semântico
headed -> renderer
headless -> core

## Fluxo final

string G-code
→ parser
→ interpreter
→ machining model
→ asserts
→ snapshot
→ (opcional) UI

Isso fecha um teste end-to-end real, independente de CNC, reproduzível e evolutivo.
