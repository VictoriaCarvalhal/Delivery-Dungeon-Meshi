---
tags:
  - css
  - análise
  - roadmap
  - priorização
date: 2026-07-03
status: em-progresso
---

# 🔍 Análise CSS — Delivery Dungeon Meshi

## Diagnóstico Geral

Análise de todos os **10 arquivos CSS** do projeto, as **4 seções/páginas**, o escopo do MVP, o doc de próximos passos do header, e a lista de referências.

**O projeto tem um problema de proporção.** ~80% do esforço CSS foi investido no header e ~0% no conteúdo das páginas. Isso é como decorar a porta de um restaurante e deixar as mesas sem toalha.

---

## Inventário: O que existe hoje

| Arquivo | Linhas úteis | Estado |
|---------|:---:|--------|
| `src/main.css` | ~80 | ⚠️ Variáveis e reset importados de template, muita coisa comentada, fontes importadas mas não usadas |
| `header.module.css` | 43 | ✅ Funcional — textura, borda dupla com pseudo-elementos |
| `cartButton.module.css` | 42 | ✅ Funcional — layout, hover, badge |
| `navbar.module.css` | 33 | ✅ Funcional — small-caps, hover, EB Garamond |
| `logo.module.css` | 13 | ✅ Funcional — tamanho, hover |
| `layout.module.css` | 11 | ⚠️ Mínimo — só flex row |
| `sidebar.module.css` | 5 | 🔴 Oco — width fixo, classes `.left` e `.right` vazias |
| `sidebarImage.module.css` | 11 | ⚠️ Básico — só sizing |
| `cardapio.module.css` | 0 | 🔴 Vazio |
| `menu.module.css` | 0 | 🔴 Vazio |

> [!warning] Cards sem CSS nenhum
> Os componentes `pratoCard.jsx` e `pedidoCard.jsx` não importam nenhum CSS module. Eles renderizam `<span>` e `<button>` crus. Estes são os componentes que o **usuário mais interage** e estão completamente sem estilo.

---

## O que importa vs. O que é perfumaria

### 🟢 ESSENCIAL — O que o usuário vê e interage

Essas são as coisas que, se estiverem feias ou quebradas, fazem o projeto parecer inacabado. Um visitante julga em 3 segundos.

| Prioridade | O quê | Por quê | Arquivo afetado |
|:---:|--------|---------|-----------------| 
| **P0** | Estilizar `PratoCard` | É o componente mais repetido na tela do cardápio. Sem estilo = lista de texto puro | Novo: `pratoCard.module.css` |
| **P0** | Estilizar `PedidoCard` | Carrinho é a tela de conversão. Se parecer bagunçado, destrói confiança | Novo: `pedidoCard.module.css` |
| **P0** | Estilizar a seção Cardápio | Grid/layout dos cards, espaçamento, container | `cardapio.module.css` (vazio) |
| **P0** | Estilizar a seção Carrinho | Lista de pedidos, total, botão finalizar | Novo: `carrinho.module.css` |
| **P1** | Estilizar a Home (seção Menu) | Tipografia, espaçamento, CTA "Peça agora!" | `menu.module.css` (vazio) |
| **P1** | Estilizar Confirmação de Compra | Tela de sucesso precisa de emoção, não 3 tags `h` soltas | Novo: `confirmacao.module.css` |
| **P1** | Limpar `main.css` | Remover código morto comentado, variáveis não usadas, alinhar com a paleta real do projeto | `src/main.css` |
| **P1** | Responsividade básica | O layout com sidebar fixa de 200px vai quebrar no mobile | `layout.module.css`, sidebar |

### 🟡 VALIOSO — Eleva o visual mas não é urgente

| Prioridade | O quê | Por quê | Onde |
|:---:|--------|---------|------|
| **P2** | Sidebar com conteúdo real | Hoje mostra imagem de teste e texto "Sidebar left/right padrão". Precisa ter imagens temáticas por rota | `sidebar.jsx` + CSS |
| **P2** | Separadores `·` na navbar | Rápido de fazer, melhora a leitura | `navbar.module.css` |
| **P2** | Transições suaves | `transition` nos hovers (logo, navbar, botões). Hoje é `transform` sem `transition`, ou seja, snap instantâneo | Vários |

### 🔵 PERFUMARIA — Bonito mas pode esperar

| Prioridade | O quê | Por quê |
|:---:|--------|---------|
| **P3** | Ornamentos de canto no header | Dá trabalho, depende de assets SVG, e o header já está ok |
| **P3** | Hover dinâmico no logo (troca de imagem) | Já foi trabalhado, mas não agrega valor funcional |
| **P3** | Dark mode | O `main.css` tem variáveis dark mas nenhum componente usa. É uma feature inteira, não um detalhe |
| **P3** | Background pattern no body (checkered/textura) | Comentado no body, e por bom motivo — precisa harmonizar com o resto primeiro |
| **P3** | Animações de entrada (fade-in, slide) | Só faz sentido quando o conteúdo base está pronto |

---

## O Problema Real

Olhando o doc [[ProximosPassosHeaderCss]], 100% dele é sobre o header. Mas o header **já é a parte mais polida do projeto**. Ele já tem:
- ✅ Textura com `background-image` + `background-blend-mode`
- ✅ Borda dupla com `::before` e `::after`
- ✅ Tipografia EB Garamond com small-caps
- ✅ Hovers nos links e no logo

Enquanto isso, as **4 páginas do MVP** estão com CSS literalmente vazio ou inexistente:
- Home → `menu.module.css` = vazio
- Cardápio → `cardapio.module.css` = vazio
- Carrinho → nem tem CSS file
- Confirmação → nem tem CSS file

> [!danger] Moldura polida, quadro em branco
> **Está sendo polida a moldura de um quadro que ainda não foi pintado.** O header está no nível 7/10 de acabamento. O conteúdo está no nível 1/10. Isso cria uma dissonância visual que faz o projeto parecer *pior* do que se o header fosse mais simples e o conteúdo tivesse pelo menos um estilo básico.

---

## Roadmap CSS Sugerido

### Fase 1 — Fundação (faça ANTES de qualquer perfumaria)

> [!info] Semana 1-2: O conteúdo das páginas

- [ ] **1.1** Limpar `main.css` — remover código comentado, definir variáveis de cor reais do projeto (`#A62929`, `#F2E6DF`, `#8C1F1F`, `#0D0D0D`), definir `--font-body` e `--font-heading` com as fontes que já importa
- [ ] **1.2** Criar e estilizar `pratoCard.module.css` — card com nome, descrição, valor, e botão "Adicionar" estilizado (use a paleta medieval)
- [ ] **1.3** Criar e estilizar `pedidoCard.module.css` — card do carrinho com layout horizontal, quantidade, valores, botão "Remover"
- [ ] **1.4** Estilizar `cardapio.module.css` — grid responsivo para os cards do cardápio
- [ ] **1.5** Criar e estilizar CSS para o carrinho — lista de pedidos, total, botão "Finalizar"
- [ ] **1.6** Estilizar `menu.module.css` — tipografia da Home, espaçamento, CTA "Peça agora!" como botão real
- [ ] **1.7** Estilizar Confirmação — mensagem de sucesso com emoção (ícone, cores, espaçamento)

### Fase 2 — Coesão (conectar tudo visualmente)

> [!info] Semana 3: Fazer tudo parecer do mesmo site

- [ ] **2.1** Sidebar — implementar as imagens por rota (as referências já existem em `estiloCss/ImgensReferencias/`)
- [ ] **2.2** Responsividade — sidebar esconde no mobile, header empilha, cards viram coluna única
- [ ] **2.3** Transições — adicionar `transition: transform 0.2s ease` nos hovers existentes (mudança de 1 linha em cada arquivo)
- [ ] **2.4** Separadores na navbar (`::after` com `·`)

### Fase 3 — Polimento (só depois que Fase 1 e 2 estão feitas)

> [!info] Semana 4+: Agora sim, perfumaria com propósito

- [ ] **3.1** Ornamentos de canto no header
- [ ] **3.2** Hover dinâmico no logo (troca de imagem)
- [ ] **3.3** Background temático no body
- [ ] **3.4** Animações de entrada nas páginas
- [ ] **3.5** Dark mode

---

## Bugs de CSS encontrados

> [!bug] Typo no CSS
> Em `header.module.css` linha 17, `position: realtive` está escrito errado. Deveria ser `position: relative`. Isso faz com que o `z-index: 1` nos filhos do header **não funcione** — eles não criam um novo stacking context.

> [!info] Cursor no logo
> Em `logo.module.css` linha 8, `cursor: 'pointer'` tem aspas simples. Em CSS, o valor correto é `cursor: pointer` sem aspas. Com aspas, é ignorado pelo navegador.

---

## Resumo em uma frase

**Pare de polir o header. Pinte o quadro primeiro.**
