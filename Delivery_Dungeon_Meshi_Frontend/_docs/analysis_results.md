# 🧭 Direção CSS — Header Dungeon Meshi

## O que a referência tem que o seu header ainda não tem

Comparando a imagem de referência (site oficial do anime) com o seu header atual, identifiquei **5 camadas de "craft"** que separam um header "cru" de um estilizado como o da referência:

---

## 1. 🖼️ Textura no fundo — Não é uma cor chapada

O background vermelho da referência **não é um `background-color` sólido**. Ele tem uma textura sutil tipo pergaminho/papel envelhecido por cima.

**O que buscar:**
- A propriedade `background-image` aceita **múltiplas camadas**. Você pode combinar um gradiente + uma imagem de textura.
- Pesquise por: **CSS texture overlay**, **CSS noise texture**, **seamless paper texture PNG**
- Técnica-chave: `background: url('textura.png'), #A62929;` — a textura fica por cima da cor.
- Você pode controlar a opacidade da textura com um `::before` pseudo-elemento com `opacity` baixa.

---

## 2. 🔲 Borda decorativa interna (o "double border")

O elemento que mais salta aos olhos na referência é a **borda dupla ornamental** — uma moldura interna dentro do painel vermelho. Não é um simples `border: solid`.

**O que buscar:**
- Pesquise por: **CSS double border**, **CSS outline + border trick**, **CSS inset border**
- Existem duas abordagens:
  - `outline` + `outline-offset` negativo **combinado** com `border` — cria o efeito de duas bordas.
  - Um `::after` pseudo-elemento posicionado com `inset` (ou `top/right/bottom/left`) + `border` — te dá controle total.
  - `box-shadow: inset` — uma sombra interna pode simular a borda interna.
- A cor da borda na referência é tipo `#F2E6DF` (o mesmo tom creme do painel da navbar).

---

## 3. 🐉 Ornamentos de canto (corner ornaments)

Nas 4 quinas da referência tem **ilustrações decorativas** (parecem dragões/serpentes estilizados). Isso é o que mais dá o "feeling medieval/fantasy".

**O que buscar:**
- Pesquise por: **CSS corner ornaments**, **corner decorations SVG**, **medieval corner flourish PNG**
- Técnica: Posicione 4 imagens absolutamente (`position: absolute`) nas 4 quinas de um container `position: relative`.
- Use `transform: rotate()` para espelhar/rotacionar a mesma imagem nos 4 cantos.
- Alternativamente, use `border-image` com um SVG decorativo para algo mais integrado.

> **💡 Dica:** Se você não quiser adicionar ilustrações nos cantos agora, só as camadas 1, 2, 4 e 5 já vão elevar MUITO o visual.

---

## 4. ✏️ Tipografia — Small Caps e espaçamento

Os links na referência usam **small caps** (`font-variant: small-caps`), que é uma técnica tipográfica que dá um ar muito mais elegante do que simplesmente `text-transform: uppercase`.

**O que buscar:**
- A propriedade `font-variant: small-caps` — mantém a primeira letra maior e as demais em formato "caps menores". É diferente de `uppercase`.
- Aumente o `letter-spacing` nos links (você já usa `2px`, tente `3px` ou `4px`).
- Considere usar uma fonte serifada mais temática. Você já importa `Playfair Display` e `EB Garamond` no `main.css` mas **não usa nenhuma delas no header**. Essas fontes são perfeitas para o estilo medieval/fantasia.
  - `font-family: 'Playfair Display', serif` ou `'EB Garamond', serif` nos links da navbar.

---

## 5. 🎭 Separadores entre links (o "·")

Na referência, os itens do menu são separados por um **ponto central decorativo** (`·`), não apenas por espaço vazio (`gap`).

**O que buscar:**
- Pesquise por: **CSS separator between nav items**, **CSS ::after dot separator**
- Técnica: Use `::after` em cada link (exceto o último) para adicionar o caractere `·` ou `•`:
  ```css
  .navbar a:not(:last-child)::after {
      content: "·";
      margin-left: 10px; /* ajuste */
  }
  ```
- O seletor `:not(:last-child)` evita que o último link tenha o ponto.

---

## Resumo visual — Camadas de polimento

| Camada | O que é | Impacto Visual | Dificuldade |
|--------|---------|----------------|-------------|
| Textura no fundo | `background-image` com PNG de textura | ⭐⭐⭐⭐⭐ | Fácil |
| Borda dupla interna | `outline` + `border` ou pseudo-elemento | ⭐⭐⭐⭐ | Médio |
| Ornamentos de canto | Imagens SVG/PNG posicionadas absolutamente | ⭐⭐⭐⭐⭐ | Médio |
| Tipografia small-caps | `font-variant`, fonte serifada temática | ⭐⭐⭐ | Fácil |
| Separadores decorativos | `::after` com content `"·"` | ⭐⭐ | Fácil |

---

## Ordem sugerida de implementação

1. **Tipografia** — troque a fonte dos links da navbar para `Playfair Display` ou `EB Garamond`, adicione `font-variant: small-caps` e ajuste o `letter-spacing`. É a mudança mais rápida e já transforma o visual.
2. **Textura** — adicione uma imagem de textura de papel/pergaminho sutil sobre o fundo vermelho.
3. **Borda dupla** — crie a moldura interna decorativa usando pseudo-elementos ou `outline`.
4. **Separadores** — adicione os pontos entre os links.
5. **Ornamentos** — por último, se quiser ir full medieval, adicione as ilustrações nos cantos.

> **⚠️ Importante:** As propriedades CSS chave que você vai precisar pesquisar e que ainda não está usando:
> - `font-variant: small-caps`
> - `background-image` (camadas múltiplas)
> - `::before` e `::after` (pseudo-elementos)
> - `outline` + `outline-offset`
> - `position: absolute` dentro de `position: relative`
> - `box-shadow: inset`
