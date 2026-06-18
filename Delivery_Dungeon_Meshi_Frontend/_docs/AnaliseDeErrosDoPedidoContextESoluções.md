# Análise v2 — pedidoContext.jsx

## ✅ O que foi corrigido desde a primeira análise

- ~~Import morto de `MockPedidos`~~ → Removido ✅
- ~~`useContext(ItemContext)`~~ → Corrigido para `useContext(PedidoContext)` ✅
- ~~`export` dentro do componente~~ → Removido ✅
- ~~`useState` no escopo do módulo~~ → Movido para dentro do `PedidoProvider` ✅
- ~~`newName` inexistente~~ → Corrigido para `Prato.name` ✅
- ~~`Comanda` com C maiúsculo~~ → Corrigido para `comanda` ✅

Bom progresso! Agora vamos aos problemas que ainda restam:

---

## 🔴 Erros Críticos (3)

---

### 1. `useState` dentro de funções de evento (Linhas 21-23, 64)

**Problema:** Hooks do React (`useState`) só podem ser chamados **diretamente no corpo** de um componente ou custom hook. Não podem ser chamados dentro de funções de evento, condicionais, ou loops.

```jsx
// ❌ Linha 20-23 — useState dentro de handler
function onAdicionarPedidoNaComanda(Prato) {
    const [novo, setNovo] = useState(true)
    const [achar, setAchar] = useState(undefined)
    const [novaComanda, setNovaComanda] = useState([])
```

```jsx
// ❌ Linha 63-64 — useState dentro de handler
function onCalcularConta() {
    const [novaComanda, setNovaComanda] = useState([]);
```

**Como corrigir:** Use variáveis locais normais (`let`/`const`). Essas variáveis são temporárias — existem só durante a execução da função — e é exatamente o que você precisa aqui. Você não precisa de "estado React" para valores que só vivem durante uma chamada de função.

```jsx
// ✅ Correção para onAdicionarPedidoNaComanda
function onAdicionarPedidoNaComanda(Prato) {
    const achar = comanda.find(pedido => pedido.name === Prato.name);
    
    if (achar !== undefined) {
        // prato já existe na comanda — incrementa quantidade
        setComanda(
            comanda.map((pedido) => {
                if (pedido.name === Prato.name) {
                    return { ...pedido, quant: pedido.quant + 1 };
                }
                return pedido;
            })
        );
        alert("Prato adicionado no carrinho");
    } else {
        // prato novo — adiciona à comanda
        const novoPedido = {
            id: Date.now(),
            name: Prato.name,
            des: Prato.desc,
            quant: 1,
            valueUni: Prato.valor,
            valueTotal: Prato.valor,
        };
        setPedido(novoPedido);
        setComanda(prevComanda => [...prevComanda, novoPedido]);
    }
}
```

```jsx
// ✅ Correção para onCalcularConta
function onCalcularConta() {
    const comandaAtualizada = comanda.map((pedido) => ({
        ...pedido,
        valueTotal: pedido.valueUni * pedido.quant,
    }));
    setComanda(comandaAtualizada);

    const novaConta = comandaAtualizada.reduce(
        (total, pedido) => total + pedido.valueTotal,
        0
    );
    setConta(novaConta);
}
```

> [!IMPORTANT]
> Esta é a regra mais fundamental de React Hooks: **eles devem ser chamados sempre na mesma ordem, sempre no topo do componente**. Nunca dentro de `if`, `for`, ou funções internas.

---

### 2. Operador `=` ao invés de `===` (Linha 24)

**Problema:** O `=` é **atribuição**, não comparação. Isso **sobrescreve** o valor de `comanda.Pedido.name` ao invés de compará-lo.

```jsx
// ❌ Atribuição acidental
setAchar(comanda.find(comanda => comanda.Pedido.name = Prato.name))
//                                                  ^ atribuição!
```

**Como corrigir:** Usar `===` para comparação estrita. Além disso, os objetos na comanda **não têm** propriedade `.Pedido` — eles são pedidos diretamente, então é `.name`:

```jsx
// ✅ 
const achar = comanda.find(pedido => pedido.name === Prato.name);
//                         ^^^^^^ nome diferente para evitar shadowing
//                                        ^^^^^ direto, sem .Pedido
//                                              ^^^ comparação estrita
```

---

### 3. Variável `pedido` (minúsculo) no Provider não existe (Linha 82)

**Problema:** O estado é declarado como `Pedido` com P maiúsculo (linha 10), mas no `value` do Provider você passa `pedido` com p minúsculo.

```jsx
// ❌ pedido (minúsculo) nunca foi declarado
<PedidoContext.Provider value={{ pedido, comanda, conta, ... }}>
//                               ^^^^^^ ReferenceError!
```

**Como corrigir:**

```jsx
// ✅ Usar o mesmo nome da declaração
<PedidoContext.Provider value={{ Pedido, comanda, conta, onAdicionarPedidoNaComanda, onRemoverPedidoDaComanda, onCalcularConta }}>
```

Ou, se preferir que os consumidores recebam `pedido` minúsculo:

```jsx
// ✅ Alternativa com alias
<PedidoContext.Provider value={{ pedido: Pedido, comanda, conta, onAdicionarPedidoNaComanda, onRemoverPedidoDaComanda, onCalcularConta }}>
```

---

## 🟠 Erros de Lógica (4)

---

### 4. Shadowing da variável `comanda` no `.find()` (Linha 24)

**Problema:** O parâmetro do callback do `.find()` tem o **mesmo nome** que a variável de estado `comanda`, mascarando-a:

```jsx
comanda.find(comanda => comanda.Pedido.name = Prato.name)
//           ^^^^^^^ este "comanda" esconde o estado "comanda"
```

**Como corrigir:** Usar um nome diferente no callback:

```jsx
comanda.find(pedido => pedido.name === Prato.name)
```

---

### 5. Leitura síncrona de estado após `setState` (Linhas 24-28)

**Problema:** `setState` no React é **assíncrono**. O valor do estado não atualiza na mesma execução. Portanto:

```jsx
setAchar(...)      // atualiza estado de forma assíncrona
if (achar != undefined) {  // ❌ achar AINDA é undefined aqui
    setNovo(false)         // mesmo que entrasse, novo continuaria true na leitura abaixo
}
if (novo) { ... }          // ❌ novo AINDA é true aqui
```

**Como corrigir:** Isso já está resolvido na correção do item 1 acima — usando variáveis locais (`const achar = ...`) ao invés de `useState`, o valor fica disponível imediatamente.

---

### 6. `novaComanda` vazia como fonte do `.map()` (Linhas 43-51, 65-71)

**Problema em `onAdicionarPedidoNaComanda`:**
```jsx
const [novaComanda, setNovaComanda] = useState([])  // começa como []
// ...
setNovaComanda(
    novaComanda.map(...)  // ❌ map de [] = [], não faz nada
);
setComanda(novaComanda);  // ❌ novaComanda ainda é [] (setState é assíncrono)
```

**Problema em `onCalcularConta`:**
```jsx
const [novaComanda, setNovaComanda] = useState([]);  // começa como []
setNovaComanda(
    novaComanda.map(...)  // ❌ map de [] = []
);
setComanda(novaComanda);  // ❌ novaComanda ainda é []
```

**Como corrigir:** Ambos estão resolvidos nas correções do item 1. A ideia é: use `comanda` (o estado atual real) como fonte dos dados, opere sobre ele com variáveis locais, e depois chame `setComanda()` com o resultado final.

---

### 7. Mutação direta do estado `conta` e `return` morto (Linhas 68, 74-76)

**Problema 1 — `return` morto (linha 68-69):**
```jsx
novaComanda.map((pedido) => {
    return { ...pedido, valueTotal: (pedido.valueUni * pedido.quant) };
    return pedido; // ❌ nunca executa — código morto
})
```

**Problema 2 — mutação direta (linha 75):**
```jsx
comanda.map((pedido) => {
    conta += pedido.valueTotal; // ❌ não se pode fazer += em estado React
})
```

**Como corrigir:** Ambos já estão resolvidos na correção do `onCalcularConta` no item 1, usando `.reduce()` e `setConta()`.

---

## 🟡 Problemas de Boas Práticas (2)

| # | Problema | Linha | Correção |
|---|---------|-------|----------|
| 8 | `!=` ao invés de `!==` (comparação não-estrita) | 25, 59 | Usar `!==` sempre |
| 9 | `.map()` usado para efeito colateral (sem usar o retorno) | 74 | Usar `.reduce()` ou `.forEach()` |

---

## 📊 Resumo Comparativo

| Categoria | Análise v1 | Análise v2 | Progresso |
|-----------|-----------|-----------|-----------|
| 🔴 Críticos | 5 | **3** | -2 ✅ |
| 🟠 Lógica | 7 | **4** | -3 ✅ |
| 🟡 Boas Práticas | 5 | **2** | -3 ✅ |
| **Total** | **17** | **9** | **-8** ✅ |

> [!TIP]
> A maioria dos problemas restantes se resolve com **uma única mudança conceitual**: trocar os `useState` dentro das funções de evento por variáveis locais (`let`/`const`). Isso elimina os itens 1, 5 e 6 de uma vez. As correções completas para `onAdicionarPedidoNaComanda` e `onCalcularConta` estão no item 1 acima — basta substituir as funções inteiras.
