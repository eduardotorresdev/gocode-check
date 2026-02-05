# Roadmap — gocode-check

Este roadmap organiza o desenvolvimento por camadas, garantindo evolução incremental,
reprodutibilidade e segurança para uso em CI/CD.

## Fase 0 — Setup e fundação
- Criar módulo `gocode-check`
- go.mod / go.sum
- Estrutura de pastas por camada
- Makefile
  - fmt
  - lint
  - test
  - snapshot
  - release
- air.toml para desenvolvimento local
- Configuração de ambiente
  - tolerâncias numéricas
  - flags de UI (on/off)
- CI inicial
  - go test
  - go vet
  - lint

## Fase 1 — Parser
- Parser determinístico de G-code
- Suporte inicial:
  - G0, G1, G2, G3
  - G90, G91
  - G20, G21
  - T, M
- Modelo Instruction
- Testes unitários do parser

## Fase 2 — Interpreter (core headless)
- Estado lógico da máquina
  - posição (X,Y,Z)
  - unidade
  - plano
  - modo abs/inc
  - ferramenta
  - feed
  - spindle
- Geração de ExecutionTrace
- Eventos:
  - RapidMove
  - LinearCut
  - ArcCut
  - DrillCycle
  - ToolChange
- Testes determinísticos de interpretação

## Fase 3 — Machining Model
- Resolver eventos em entidades semânticas
- Implementar:
  - Holes
  - Slots
  - Contours
- Warnings não bloqueantes
- Testes geométricos

## Fase 4 — Assertion API
- API fluente inspirada no Playwright
- Asserts iniciais:
  - HasHole
  - At
  - WithDiameter
  - WithDepth
  - HasContour
  - NoOperationOutside
- Mensagens de erro claras
- Testes de asserts

## Fase 5 — Snapshot Engine
- Normalização do MachiningModel
- Ordenação explícita
- Tolerância numérica fixa
- Serialização JSON
- Update de snapshot controlado
- Integração com CI

## Fase 6 — UI Renderer (opcional)
- Renderer SVG inicial
- Visualização do MachiningModel
- RenderDiff(snapshot, model)
- Flag para ativar UI

## Fase 7 — Tooling e DX
- CLI para execução local
- Integração com go test
- Debug headed / headless
- Documentação de uso

## Fase 8 — CI/CD e releases
- Pipeline completo
  - lint
  - test
  - snapshot
- Versionamento semântico
- Release automatizado
- Changelog
