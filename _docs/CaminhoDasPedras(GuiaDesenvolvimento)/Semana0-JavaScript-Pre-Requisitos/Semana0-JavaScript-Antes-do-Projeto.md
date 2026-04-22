# Semana 0 — JavaScript que você precisa dominar antes do projeto

> **Projeto:** Delivery Dungeon Meshi (React + Vite + Zustand)  
> **MVP:** Cardápio → Carrinho → Confirmação de Pedido  
> **Ritmo:** 1 conceito por dia · 1 a 2 horas de estudo  
> **Duração total:** 7 dias

---

## Visão geral da trilha

| Dia | Conceito | Por que importa no projeto |
|-----|----------|---------------------------|
| 1 | Variáveis, tipos e `const`/`let` | Toda informação do cardápio e do carrinho vive em variáveis |
| 2 | Funções e Arrow Functions | Toda ação do usuário (adicionar, remover) é uma função |
| 3 | Arrays e seus métodos | O carrinho é um array de itens |
| 4 | Objetos | Cada prato é um objeto com nome, descrição e preço |
| 5 | Desestruturação e Spread | React e Zustand usam isso o tempo todo |
| 6 | Módulos (import/export) | Cada arquivo do projeto exporta/importa partes |
| 7 | Promises e Fetch (async/await) | Carregar o cardápio de uma fonte externa |

---

## Dia 1 — Variáveis, Tipos e `const`/`let`

### Conceito

JavaScript tem dois jeitos modernos de guardar informações: `const` e `let`.

- **`const`** — o "apelido" nunca pode apontar para outro valor. Use sempre que puder.  
- **`let`** — pode ser reatribuído. Use apenas quando precisar mudar o valor.  
- **`var`** — existe, mas é legado. **Ignore por enquanto.**

Os tipos básicos que vão aparecer no projeto:

```js
const nomeDoPrato = "Ramen da Masmorra";   // string — texto
const preco = 32.90;                        // number — número
const disponivel = true;                    // boolean — verdadeiro/falso
const descricao = null;                     // null — ausência intencional de valor
let quantidade = 0;                         // let porque vai mudar
```

### Exercício — Cardápio na mão

Crie um arquivo `dia1.js` e declare uma variável para **cada** campo de um prato do seu cardápio imaginário. Use nomes de pratos temáticos do seu restaurante, preencha os valores e imprima no console com `console.log`.

Execute no terminal:
```bash
node dia1.js
```

### ✅ Critério de aceite

Você pode avançar quando conseguir responder **sem consultar**:

1. Qual a diferença entre `const` e `let`?
2. Por que `const nomeDoPrato = "Ramen"` funciona, mas tentar fazer `nomeDoPrato = "Udon"` logo depois quebra?
3. O preço de um prato deve usar `const` ou `let`? Justifique.

---

## Dia 2 — Funções e Arrow Functions

### Conceito

Uma função é um bloco de código reutilizável. No projeto, **cada ação do usuário** (clicar em "Adicionar", "Remover", "Finalizar Pedido") vai chamar uma função.

Existem duas sintaxes que você vai ver em React:

```js
// Sintaxe tradicional
function adicionarAoCarrinho(prato) {
  console.log("Adicionado:", prato);
}

// Arrow function — forma moderna, usada em React e Zustand
const adicionarAoCarrinho = (prato) => {
  console.log("Adicionado:", prato);
};

// Arrow function de uma linha (retorna automaticamente)
const calcularTotal = (preco, quantidade) => preco * quantidade;
```

A diferença prática para o seu nível: **arrow functions são mais curtas** e evitam confusão com `this`. React usa quase sempre arrow functions.

### Exercício — Funções do Carrinho

Crie um arquivo `dia2.js` e implemente:

1. Uma função `exibirPrato(nome, preco)` que imprime o prato formatado com emoji e o preço em reais (use template literals e `.toFixed(2)`).
2. Uma função `calcularSubtotal(preco, quantidade)` que retorna o valor total do item.
3. Chame as duas funções com dados reais e confira o resultado no console.

Execute com:
```bash
node dia2.js
```

### ✅ Critério de aceite

1. Você consegue criar uma função `exibirMensagemFinal(total)` que imprime `"Pedido recebido, aventureiro! Total: R$ XX"` sem consultar a sintaxe?
2. Consegue explicar por que `calcularSubtotal(32.9, 3)` retorna `98.7` sem parênteses no `return`?

---

## Dia 3 — Arrays e seus métodos

### Conceito

O **carrinho de compras** é um array. Saber manipular arrays é a habilidade mais usada no projeto.

```js
const carrinho = ["Ramen", "Gyoza", "Chá Verde"];
```

Os métodos que **vão aparecer com certeza** no projeto:

| Método | O que faz | Exemplo |
|--------|-----------|---------|
| `.push()` | Adiciona item ao final | `carrinho.push("Mochi")` |
| `.filter()` | Retorna novo array sem o item | `carrinho.filter(item => item !== "Gyoza")` |
| `.map()` | Transforma cada item | `precos.map(p => p * 1.1)` |
| `.find()` | Retorna o primeiro item que bater | `carrinho.find(item => item === "Ramen")` |
| `.length` | Quantidade de itens (badge do carrinho) | `carrinho.length` |

> ⚠️ **Importante:** `.filter()` e `.map()` **nunca modificam** o array original. Eles sempre retornam um novo array. React depende disso.

### Exercício — Simular o Carrinho

Crie um arquivo `dia3.js` com um array de itens no carrinho e pratique:

1. Adicionar um item ao carrinho.
2. Remover um item específico usando `.filter()` (sem usar `.splice()` ou `delete`).
3. Exibir quantos itens estão no carrinho (o número que aparece no ícone do carrinho).
4. Verificar se um item específico está no carrinho usando `.find()`.

Execute com:
```bash
node dia3.js
```

### ✅ Critério de aceite

1. Você consegue remover um item específico do array **sem usar** `.splice()` ou `delete` — somente `.filter()`?
2. Explique por que React prefere `.filter()` ao invés de `.splice()` para remover itens.
3. Crie uma função `contarItens(carrinho)` que retorna o total de itens (para o badge).

---

## Dia 4 — Objetos

### Conceito

Cada prato do cardápio é um **objeto**: uma coleção de propriedades relacionadas.

```js
const prato = {
  id: 1,
  nome: "Ramen da Masmorra",
  descricao: "Caldo rico, ovo marinado e cogumelos encantados.",
  preco: 32.90,
  disponivel: true,
};

// Acessar propriedades
console.log(prato.nome);        // notação de ponto
console.log(prato["preco"]);    // notação de colchetes (menos comum)
```

No carrinho, cada item tem ainda uma **quantidade**:

```js
const itemNoCarrinho = {
  id: 1,
  nome: "Ramen da Masmorra",
  preco: 32.90,
  quantidade: 2,
};
```

### Exercício — Cardápio como objetos

Crie um arquivo `dia4.js` e monte um array `cardapio` com pelo menos 3 pratos, cada um sendo um objeto com `id`, `nome`, `descricao` e `preco`. Em seguida:

1. Imprima o nome e preço formatado de cada prato usando `.forEach()`.
2. Use `.find()` para encontrar e exibir um prato pelo seu `id`.

Execute com:
```bash
node dia4.js
```

### ✅ Critério de aceite

1. Crie um objeto `itemNoCarrinho` para o "Ramen da Masmorra" com quantidade `2` e calcule o subtotal (`preco * quantidade`).
2. Qual a diferença entre um array de strings `["Ramen", "Gyoza"]` e um array de objetos como o cardápio acima? Quando usar cada um?

---

## Dia 5 — Desestruturação e Spread

### Conceito

Dois recursos que aparecem **em todo arquivo React e Zustand**. Vale dominar bem.

### Desestruturação — extrair valores de objetos e arrays

```js
const prato = { id: 1, nome: "Ramen da Masmorra", preco: 32.90 };

// Sem desestruturação (verboso)
const nome  = prato.nome;
const preco = prato.preco;

// Com desestruturação (forma React)
const { nome, preco } = prato;
console.log(nome, preco);

// Em arrays
const [primeiro, segundo] = ["Ramen", "Gyoza"];
console.log(primeiro); // "Ramen"
```

### Spread — copiar e mesclar objetos/arrays

```js
const carrinho = [
  { id: 1, nome: "Ramen", quantidade: 1 }
];

// Adicionar item ao carrinho SEM mutar o original
const novoCarrinho = [...carrinho, { id: 2, nome: "Gyoza", quantidade: 1 }];

// Atualizar uma propriedade de um objeto SEM mutar o original
const itemAtualizado = { ...carrinho[0], quantidade: 3 };
console.log(itemAtualizado); // { id: 1, nome: "Ramen", quantidade: 3 }
```

> ⚠️ React e Zustand **proíbem** mutação direta do estado. Spread é a ferramenta para criar cópias atualizadas.

### Exercício — Atualizar quantidade no carrinho

Crie um arquivo `dia5.js` com um array `carrinho` contendo dois itens (objetos com `id`, `nome`, `preco` e `quantidade`). Em seguida:

1. Use spread para adicionar um novo item ao carrinho sem modificar o array original.
2. Use `.map()` + spread para incrementar em 1 a quantidade de um item específico pelo `id`.
3. Verifique no console que o item foi atualizado e os demais permanecem iguais.

Execute com:
```bash
node dia5.js
```

### ✅ Critério de aceite

1. Sem consultar, escreva a linha que adiciona um novo prato ao array `carrinho` usando spread.
2. Escreva a linha que aumenta em 1 a quantidade de um item específico no carrinho usando `.map()` + spread.
3. Por que `{ ...item, quantidade: 5 }` é preferível a `item.quantidade = 5`?

---

## Dia 6 — Módulos (import / export)

### Conceito

Em projetos React/Vite, **cada arquivo é um módulo**. Você exporta o que quer compartilhar e importa o que precisa usar.

```js
// arquivo: cardapio.js
export const pratos = [
  { id: 1, nome: "Ramen da Masmorra", preco: 32.90 },
  { id: 2, nome: "Gyoza Sombrio",     preco: 18.50 },
];

export function calcularTotal(carrinho) {
  return carrinho.reduce((acc, item) => acc + item.preco * item.quantidade, 0);
}
```

```js
// arquivo: main.js
import { pratos, calcularTotal } from "./cardapio.js";

console.log(pratos[0].nome);
```

**Export default** — quando o arquivo exporta uma coisa só:

```js
// componente React no futuro
export default function CartaoDoCardapio({ prato }) { ... }

// importação (sem chaves)
import CartaoDoCardapio from "./CartaoDoCardapio";
```

### Exercício — Separar responsabilidades

Crie dois arquivos:

**`dados.js`** — exporte um array `cardapio` com pelo menos 3 pratos (objetos com `id`, `nome` e `preco`).

**`main.js`** — importe o `cardapio` de `dados.js` e use `.forEach()` com desestruturação para imprimir o nome e preço formatado de cada prato.

Execute com:
```bash
node --experimental-vm-modules main.js
# ou use o Vite que já configura isso por você
```

### ✅ Critério de aceite

1. Qual a diferença entre `export` (named) e `export default`?
2. Se você tem `export default function App()`, como importa no outro arquivo?
3. Por que separar `dados.js` de `main.js` é uma boa prática mesmo num projeto pequeno?

---

## Dia 7 — Promises e Async/Await

### Conceito

O cardápio virá de uma fonte externa (um arquivo JSON ou API futura). Buscar dados é uma operação **assíncrona** — você pede, e a resposta chega *depois*. `async/await` é a forma moderna de lidar com isso.

```js
// Sem async/await (Promise crua — mais difícil de ler)
fetch("https://api.exemplo.com/cardapio")
  .then(resposta => resposta.json())
  .then(dados => console.log(dados))
  .catch(erro => console.error(erro));

// Com async/await (forma que o projeto vai usar)
async function carregarCardapio() {
  try {
    const resposta = await fetch("https://api.exemplo.com/cardapio");
    const dados    = await resposta.json();
    console.log(dados);
  } catch (erro) {
    console.error("Erro ao carregar cardápio:", erro);
  }
}

carregarCardapio();
```

A palavra `await` só pode ser usada dentro de funções marcadas com `async`.  
O `try/catch` captura erros de rede, servidor fora do ar, etc.

### Exercício — Simular carga do cardápio

Crie um arquivo `dia7.js` e implemente:

1. Uma função `buscarCardapio()` que retorna uma `Promise` e simula 1 segundo de espera de rede com `setTimeout`. Ao resolver, ela deve retornar um array com pelo menos 2 pratos.
2. Uma função `async main()` que chama `buscarCardapio()` com `await`, exibe uma mensagem antes e depois do carregamento, e imprime cada prato com nome e preço formatado.

Execute com:
```bash
node dia7.js
```

### ✅ Critério de aceite

1. O que acontece se você remover o `await` antes de `buscarCardapio()`? Por que o resultado muda?
2. Para que serve o bloco `try/catch` no contexto de chamadas de rede?
3. Você consegue criar uma função `async` que busca o cardápio e imprime apenas os pratos com preço abaixo de R$ 20,00?

---

## Checklist geral de passagem para a Semana 1

Antes de começar a escrever React, confirme que você consegue, **sem consultar**:

- [ ] Declarar variáveis com `const` e `let` e saber quando usar cada uma
- [ ] Escrever arrow functions com e sem `return` explícito
- [ ] Usar `.map()`, `.filter()`, `.find()` e `.length` em arrays
- [ ] Criar e acessar propriedades de objetos literais
- [ ] Usar desestruturação `{ nome, preco }` e spread `{ ...item, quantidade: 2 }`
- [ ] Exportar e importar funções e dados entre arquivos
- [ ] Escrever uma função `async/await` com `try/catch`

Se todos os boxes estiverem marcados, você está pronto para a **Semana 1 — Estrutura do projeto e primeiro componente React**.

---

> *"Todo herói começa aprendendo a segurar a espada antes de enfrentar o dragão."*  
> — Manual do Dungeon Meshi, pág. 0
