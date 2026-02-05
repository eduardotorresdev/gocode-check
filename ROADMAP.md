# Roadmap — gocode-check

Este roadmap organiza o desenvolvimento por camadas, garantindo evolução incremental,
reprodutibilidade e segurança para uso em CI/CD.

---

## Visão Geral

```
✅ Completo    ⏳ Em Progresso    📋 Planejado
```

| Fase | Nome | Status | Progresso |
|------|------|--------|-----------|
| Fase 0 | Setup e Fundação | ✅ | 100% |
| Fase 1 | Parser | ✅ | 100% |
| Fase 2 | Interpreter (Core Headless) | ✅ | 100% |
| Fase 3 | Machining Model | ✅ | 100% |
| Fase 4 | Assertion API | 📋 | 0% |
| Fase 5 | Snapshot Engine | 📋 | 0% |
| Fase 6 | UI Renderer | 📋 | 0% |
| Fase 7 | Tooling e DX | 📋 | 0% |
| Fase 8 | CI/CD e Releases | 📋 | 0% |

---

## ✅ Fase 0 — Setup e Fundação

**Objetivo:** Estabelecer a base do projeto com estrutura, ferramentas e convenções.

**Entregas:**
- [x] Criar módulo `gocode-check`
- [x] Configurar `go.mod` e `go.sum`
- [x] Definir estrutura de pastas por camada (`cmd/`, `internal/`, `pkg/`)
- [x] Criar `Makefile` com comandos essenciais
  - [x] `make fmt` - Formatação de código
  - [x] `make lint` - Verificação de qualidade
  - [x] `make test` - Execução de testes
  - [x] `make snapshot` - Atualização de snapshots
  - [x] `make release` - Build de produção
- [x] Configurar `air.toml` para desenvolvimento com hot reload
- [x] Implementar sistema de configuração
  - [x] Tolerâncias numéricas configuráveis
  - [x] Flags de UI (on/off)
  - [x] Diretório de snapshots configurável
- [x] Setup inicial de CI
  - [x] Executar `go test` automaticamente
  - [x] Executar `go vet` para análise estática
  - [x] Integrar linters

**Status:** ✅ **Completo** (100%)

## ✅ Fase 1 — Parser

**Objetivo:** Criar um parser determinístico e robusto para G-code.

**Entregas:**
- [x] Implementar parser determinístico de G-code
- [x] Suporte para comandos de movimento
  - [x] `G0` - Movimento rápido
  - [x] `G1` - Movimento linear (corte)
  - [x] `G2` - Arco horário
  - [x] `G3` - Arco anti-horário
- [x] Suporte para modos de posicionamento
  - [x] `G90` - Modo absoluto
  - [x] `G91` - Modo incremental
- [x] Suporte para sistemas de unidades
  - [x] `G20` - Polegadas
  - [x] `G21` - Milímetros
- [x] Suporte para comandos auxiliares
  - [x] `T` - Seleção de ferramenta
  - [x] `M` - Comandos diversos (M3, M4, M5, M30, etc.)
- [x] Criar modelo de dados `Instruction`
- [x] Implementar testes unitários abrangentes
- [x] Garantir parsing determinístico (sem I/O, sem tempo, sem RNG)

**Status:** ✅ **Completo** (100%)

## ✅ Fase 2 — Interpreter (Core Headless)

**Objetivo:** Simular o comportamento lógico de uma máquina CNC.

**Entregas:**
- [x] Implementar estado lógico da máquina (`MachineState`)
  - [x] Posição atual (X, Y, Z)
  - [x] Sistema de unidades (mm/inches)
  - [x] Plano de trabalho (XY, XZ, YZ)
  - [x] Modo de posicionamento (absoluto/incremental)
  - [x] Ferramenta selecionada
  - [x] Taxa de avanço (feed rate)
  - [x] Velocidade e estado do spindle
- [x] Geração de `ExecutionTrace` com eventos ordenados
- [x] Implementar tipos de eventos
  - [x] `RapidMove` - Movimento rápido (G0)
  - [x] `LinearCut` - Corte linear (G1)
  - [x] `ArcCut` - Corte em arco (G2/G3)
  - [x] `DrillCycle` - Ciclo de furação
  - [x] `ToolChange` - Troca de ferramenta
  - [x] `SpindleStart/Stop` - Controle do spindle
  - [x] `UnitChange` - Mudança de unidade
  - [x] `ModeChange` - Mudança de modo
- [x] Testes determinísticos de interpretação
- [x] Garantir reprodutibilidade (mesma entrada → mesma saída)

**Status:** ✅ **Completo** (100%)

## ✅ Fase 3 — Machining Model

**Objetivo:** Converter eventos de baixo nível em entidades semânticas de usinagem.

**Entregas:**
- [x] Implementar analisador semântico de eventos
- [x] Detectar e modelar entidades de usinagem
  - [x] **Holes** (Furos)
    - [x] Detecção via plunge cut vertical
    - [x] Detecção via drill cycle
    - [x] Detecção via arco completo (360°)
  - [x] **Slots** (Ranhuras)
    - [x] Detecção de cortes lineares horizontais
    - [x] Cálculo de comprimento e profundidade
  - [x] **Contours** (Contornos)
    - [x] Agregação de cortes conectados
    - [x] Detecção de contornos fechados vs. abertos
    - [x] Suporte a segmentos lineares e arcos
- [x] Sistema de warnings não bloqueantes
  - [x] `MissingTool` - Corte sem ferramenta
  - [x] `ZeroFeed` - Corte com feed zero
  - [x] `SpindleOff` - Corte com spindle desligado
  - [x] `OpenContour` - Contorno que não fecha
  - [x] `ShallowCut` - Corte muito raso
- [x] Testes geométricos e de detecção
- [x] Documentação completa do pacote `machining`
- [x] API de consulta (`HolesAt`, `HolesWithDiameter`, etc.)

**Status:** ✅ **Completo** (100%)

## 📋 Fase 4 — Assertion API

**Objetivo:** Criar uma API fluente para validação de programas G-code, inspirada no Playwright.

**Entregas Planejadas:**
- [ ] Design da API fluente e ergonômica
- [ ] Implementar assertions básicas
  - [ ] `HasHole(x, y)` - Verificar existência de furo em posição
  - [ ] `At(x, y, z)` - Filtrar por posição específica
  - [ ] `WithDiameter(diameter, tolerance)` - Filtrar por diâmetro
  - [ ] `WithDepth(depth, tolerance)` - Filtrar por profundidade
  - [ ] `HasSlot(start, end)` - Verificar ranhura
  - [ ] `HasContour(points)` - Verificar contorno
  - [ ] `NoOperationOutside(bounds)` - Verificar limites da peça
- [ ] Implementar encadeamento de assertions
  - [ ] `expect(model).HasHole(50, 50).WithDiameter(6.0)`
- [ ] Mensagens de erro claras e úteis
- [ ] Suporte a comparações com tolerância configurável
- [ ] Testes completos da API de assertions
- [ ] Documentação e exemplos de uso

**Exemplo de uso futuro:**
```go
// Validar que existe um furo de 6mm de diâmetro em (50, 50)
expect(model).HasHole(50, 50).WithDiameter(6.0, 0.01)

// Validar que não há operações fora dos limites
expect(model).NoOperationOutside(Bounds{MaxX: 100, MaxY: 100})
```

**Status:** 📋 **Planejado** (0%)

## 📋 Fase 5 — Snapshot Engine

**Objetivo:** Implementar sistema de snapshots para testes baseados em regressão.

**Entregas Planejadas:**
- [ ] Design do formato de snapshot (JSON determinístico)
- [ ] Normalização do `MachiningModel`
  - [ ] Ordenação explícita de todas as listas
  - [ ] Arredondamento consistente com tolerância fixa
  - [ ] Remoção de campos não determinísticos
- [ ] Implementar serialização JSON determinística
  - [ ] Garantir ordem de campos consistente
  - [ ] Formatar números com precisão fixa
  - [ ] Incluir metadados (versão, data, configuração)
- [ ] Modo de atualização de snapshots (`UPDATE_SNAPSHOTS=true`)
- [ ] Comparação de snapshots com diff legível
- [ ] Integração com CI/CD
  - [ ] Falhar testes se snapshots divergirem
  - [ ] Detectar mudanças não intencionais
- [ ] Armazenamento e versionamento de snapshots
- [ ] Documentação de uso e boas práticas

**Exemplo de uso futuro:**
```go
// Testar contra snapshot salvo
model, _ := machining.Analyze(trace)
snapshot.AssertMatchesSnapshot(t, model, "test-program-v1")

// Atualizar snapshot (quando esperado)
// UPDATE_SNAPSHOTS=true go test
```

**Status:** 📋 **Planejado** (0%)

## 📋 Fase 6 — UI Renderer (Opcional)

**Objetivo:** Adicionar capacidade de renderização visual para debug e inspeção.

**Entregas Planejadas:**
- [ ] Design da arquitetura de renderização
  - [ ] Separação clara entre core headless e UI
  - [ ] UI consome o mesmo `MachiningModel` que assertions
- [ ] Implementar renderer SVG
  - [ ] Renderizar movimentos e cortes
  - [ ] Visualizar furos, ranhuras e contornos
  - [ ] Suporte a zoom e pan
  - [ ] Legenda e anotações
- [ ] Exportar para formatos estáticos
  - [ ] SVG (vetorial)
  - [ ] PNG (rasterizado)
- [ ] Implementar `RenderDiff(snapshot, model)`
  - [ ] Destacar diferenças entre snapshot e modelo atual
  - [ ] Útil para investigar falhas de teste
- [ ] Flag para ativar/desativar UI (`--ui` ou `config.WithUI()`)
- [ ] WebView opcional para visualização interativa
- [ ] Documentação de uso do renderer

**Casos de Uso:**
- Debug visual de programas G-code durante desenvolvimento
- Investigação de falhas em testes de snapshot
- Documentação visual de exemplos

**Status:** 📋 **Planejado** (0%)

## 📋 Fase 7 — Tooling e Developer Experience

**Objetivo:** Melhorar ferramentas e experiência de desenvolvimento.

**Entregas Planejadas:**
- [ ] CLI completo (`gocodecheck`)
  - [ ] Validar arquivo G-code via linha de comando
  - [ ] Gerar relatórios de análise
  - [ ] Suporte a múltiplos arquivos
  - [ ] Formato de saída configurável (JSON, texto, HTML)
- [ ] Integração nativa com `go test`
  - [ ] Helpers para testes em Go
  - [ ] Suporte a table-driven tests
  - [ ] Mensagens de erro otimizadas para Go
- [ ] Modo debug (headed vs headless)
  - [ ] Fácil alternar entre modos
  - [ ] Variáveis de ambiente para configuração
  - [ ] Logging configurável
- [ ] Documentação completa
  - [ ] Guia de início rápido
  - [ ] Tutoriais step-by-step
  - [ ] Referência de API completa
  - [ ] Exemplos práticos e padrões comuns
- [ ] Templates e scaffolding
  - [ ] Templates de testes
  - [ ] Exemplos de integração
- [ ] Performance profiling e otimizações
  - [ ] Benchmarks para operações críticas
  - [ ] Otimização de parsing e análise

**Status:** 📋 **Planejado** (0%)

## 📋 Fase 8 — CI/CD e Releases

**Objetivo:** Automatizar testes, builds e releases para produção.

**Entregas Planejadas:**
- [ ] Pipeline de CI/CD completo
  - [ ] Executar linters automaticamente
  - [ ] Executar todos os testes
  - [ ] Validar snapshots em CI
  - [ ] Verificar cobertura de código
  - [ ] Build e verificação de binários
- [ ] Versionamento semântico (SemVer)
  - [ ] Tags de versão automatizadas
  - [ ] Changelog gerado automaticamente
  - [ ] Breaking changes documentadas
- [ ] Release automatizado
  - [ ] Builds para múltiplas plataformas (Linux, macOS, Windows)
  - [ ] Publicação de binários no GitHub Releases
  - [ ] Publicação de módulo Go (pkg.go.dev)
- [ ] Changelog automático
  - [ ] Geração baseada em commits convencionais
  - [ ] Agrupamento por tipo (features, fixes, breaking)
  - [ ] Links para PRs e issues
- [ ] Badges e métricas
  - [ ] Status de builds
  - [ ] Cobertura de testes
  - [ ] Versão mais recente
  - [ ] Go Report Card
- [ ] Documentação de release
  - [ ] Notas de release detalhadas
  - [ ] Guias de migração para breaking changes
  - [ ] Exemplos atualizados

**Status:** 📋 **Planejado** (0%)

---

## Próximos Passos Imediatos

1. **Fase 4** - Começar design da Assertion API
2. Coletar feedback da comunidade sobre prioridades
3. Avaliar necessidade de features adicionais

---

## Contribuindo

Interessado em contribuir com alguma fase? Veja o [README.md](README.md) para diretrizes de contribuição.

**Áreas que precisam de ajuda:**
- Testes adicionais e edge cases
- Documentação e exemplos
- Suporte a mais códigos G-code
- Performance e otimizações
