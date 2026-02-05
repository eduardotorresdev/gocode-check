# Roadmap — gocode-check

Este roadmap organiza o desenvolvimento por camadas, garantindo evolução incremental,
reprodutibilidade e segurança para uso em CI/CD.

## ✅ Fase 0 — Setup e fundação
- [x] Criar módulo `gocode-check`
- [x] go.mod / go.sum
- [x] Estrutura de pastas por camada
- [x] Makefile
  - [x] fmt
  - [x] lint
  - [x] test
  - [x] snapshot
  - [x] release
- [x] air.toml para desenvolvimento local
- [x] Configuração de ambiente
  - [x] tolerâncias numéricas
  - [x] flags de UI (on/off)
- [x] CI inicial
  - [x] go test
  - [x] go vet
  - [x] lint

## ✅ Fase 1 — Parser
- [x] Parser determinístico de G-code
- [x] Suporte inicial:
  - [x] G0, G1, G2, G3
  - [x] G90, G91
  - [x] G20, G21
  - [x] T, M
- [x] Modelo Instruction
- [x] Testes unitários do parser

## ✅ Fase 2 — Interpreter (core headless)
- [x] Estado lógico da máquina
  - [x] posição (X,Y,Z)
  - [x] unidade
  - [x] plano
  - [x] modo abs/inc
  - [x] ferramenta
  - [x] feed
  - [x] spindle
- [x] Geração de ExecutionTrace
- [x] Eventos:
  - [x] RapidMove
  - [x] LinearCut
  - [x] ArcCut
  - [x] DrillCycle
  - [x] ToolChange
- [x] Testes determinísticos de interpretação

## ✅ Fase 3 — Machining Model
- [x] Resolver eventos em entidades semânticas
- [x] Implementar:
  - [x] Holes (furos via plunge cut, drill cycle, arco completo)
  - [x] Slots (ranhuras lineares)
  - [x] Contours (caminhos conectados de cortes)
- [x] Warnings não bloqueantes
  - [x] MissingTool
  - [x] ZeroFeed
  - [x] OpenContour
- [x] Testes geométricos
- [x] Documentação do pacote machining

## ⬜ Fase 4 — Assertion API
- [ ] API fluente inspirada no Playwright
- [ ] Asserts iniciais:
  - [ ] HasHole
  - [ ] At
  - [ ] WithDiameter
  - [ ] WithDepth
  - [ ] HasContour
  - [ ] NoOperationOutside
- [ ] Mensagens de erro claras
- [ ] Testes de asserts

## ⬜ Fase 5 — Snapshot Engine
- [ ] Normalização do MachiningModel
- [ ] Ordenação explícita
- [ ] Tolerância numérica fixa
- [ ] Serialização JSON
- [ ] Update de snapshot controlado
- [ ] Integração com CI

## ⬜ Fase 6 — UI Renderer (opcional)
- [ ] Renderer SVG inicial
- [ ] Visualização do MachiningModel
- [ ] RenderDiff(snapshot, model)
- [ ] Flag para ativar UI

## ⬜ Fase 7 — Tooling e DX
- [ ] CLI para execução local
- [ ] Integração com go test
- [ ] Debug headed / headless
- [ ] Documentação de uso

## ⬜ Fase 8 — CI/CD e releases
- [ ] Pipeline completo
  - [ ] lint
  - [ ] test
  - [ ] snapshot
- [ ] Versionamento semântico
- [ ] Release automatizado
- [ ] Changelog
