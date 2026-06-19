# Roadmap: Construindo o Cabeçalho com Base de JavaScript

É super normal sentir tédio ao tentar aprender JavaScript "no papel" antes de partir para o React. A melhor forma de aprender é **aplicando aos poucos no seu projeto real**. O "Delivery Dungeon Meshi" é perfeito para isso!

Este roadmap foi feito para você construir a lógica do seu Header (Cabeçalho) aos poucos, aprendendo fundamentos do JavaScript ao longo do caminho, sem precisar decorar manuais.

---

## O Que Tem em um Cabeçalho de Delivery?
Antes de escrever código, pense no que um Cabeçalho faz. Normalmente, ele tem:
1. A **Logomarca** (clicável, leva para a Home).
2. Uma **Barra de Pesquisa** de produtos.
3. Um **Menu de Navegação** (Categorias, Sobre nós).
4. O **Carrinho de Compras** (com o número de itens mostrando).
5. Um botão de **Login / Perfil do Usuário**.

---

## Fase 1: O Esqueleto Visual (HTML/JSX Básico)
Na primeira fase, nós não nos preocupamos com lógicas complexas de JavaScript. A sua missão é colocar coisas na tela e organizar o esqueleto.

**O que você vai estudar de JavaScript aqui:**
*   `functions` e `arrow functions` sintaxe básica do React (`const Cabecalho = () => {}`)
*   Como retornar (`return`) múltiplos elementos de uma vez usando Fragmentos (`<>`).

**Sua Tarefa (Sem PrimeReact):** 
1. Crie a estrutura usando as tags HTML nativas: `<header>`, `<nav>`, `<ul>`, `<li>` para listas de menus, e `<button>` e `<input>`.
2. Mostre os itens do menu digitados diretamente ali (`<li>Pizzas</li>`, `<li>Bebidas</li>`).

---

## Fase 2: Estrutura de Dados (Lidando com Arrays e Objetos em JS)
Agora vem o JavaScript real. Ao invés de digitar todos os itens de menu um por um e copiar/colar tag HTML, vamos automatizar.

**O que você vai estudar de JavaScript aqui:**
*   **Arrays (`[]`) e Objetos (`{}`):** Como guardar informações variadas.
*   **`Array.map()`:** A função mais importante que você vai usar no React para gerar listas na tela de forma automática a partir dos seus dados.

**Sua Tarefa:**
1. Crie uma variável simples: `const itensDeMenu = [{ label: 'Pizzas', link: '/pizzas' }, { label: 'Bebidas', link: '/bebidas' }]`.
2. Pegue esse Array e utilize o método `.map()` do JS para injetar as várias tags `<li>` magicamente no seu JSX.

---

## Fase 3: Interatividade Física (Eventos e Funções)
Um cabeçalho precisa reagir ao usuário. Se eu digito algo na barra de pesquisa, ele precisa ler. Se clico no menu do celular ("Hambúrguer"), ele precisa abrir as opções.

**O que você vai estudar de JavaScript aqui:**
*   **Eventos em JS:** `onClick`, `onChange`.
*   **Declaração de funções e console.log():** Como criar um pedaço de código que só recita quando ativado. 

**Sua Tarefa:**
1. Adicione um evento `onClick` em botões como "Login" do seu Cabeçalho, que dispare uma função JavaScript simples na tela. Exemplo: `function lidarComLogin() { console.log("O usuario quer logar!") }`.
2. O mesmo no campo de buscar usando `onChange`. Tente fazer o terminal do *DevTools* imprimir o que o usuário digita na barra.

---

## Fase 4: Lidando com a Memória e "O Que" Mostrar (Estado e Condições)
Um cabeçalho, muitas vezes, é exibido de uma forma no celular e de outra forma no desktop, ou então mostra botões diferentes se o cara estiver "Logado" ou "Não Logado".

**O que você vai estudar de JavaScript aqui:**
*   **Destructuring `const { algo } = objeto`:** Muito útil com as `props` do React.
*   **Operador Ternário (`condição ? se_verdadeiro : se_falso`):** Como escrever `if/else` no React de forma chique.
*   **Condicionais Lógicas (`&&` e `||`).**

**Sua Tarefa:**
1. Crie uma propriedade falsa JS `const usuarioLogado = true;`. 
2. Usando o operador ternário do Javascript no fundo de todo JSX, faça a lógica para o Cabeçalho mostrar a foto do usuário (se `usuarioLogado` for verdadeiro) ou o botão "Cadastre-se" (se for falso).

---

## Fase 5: Integração com o PrimeReact
Depois de você construir essa pequena maravilha que funciona à base das suas teorias Javascript, o PrimeReact vai parecer moleza.

A diferença é que, ao invés de usar `<ul>` e `<nav>`, você vai descobrir na documentação do PrimeReact o componente **`Menubar`**. Ao invés do `<input>`, vai usar o **`InputText`**. Você perceberá que as props (como `model={itensDeMenu}`) que eles pedem nada mais são do que aqueles Arrays/Objetos que você acabou de aprender a fazer!

### Resumo: O segredo para não cansar é aprender "O Contexto" ao invés da "Teoria Pura". Quando ler a documentação do JavaScript, ao ver "Map", logo pense "Ah! É assim que renderizo meu menu do Cabeçalho!". Isso faz tudo fazer sentido.
