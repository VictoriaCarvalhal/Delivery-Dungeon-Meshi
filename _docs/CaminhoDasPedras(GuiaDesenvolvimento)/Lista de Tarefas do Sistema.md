# 📋 Lista de Tarefas — Delivery Dungeon Meshi

> Baseada no RoadMap: `RoadMap_Delivery_Dungeon_Meshi_Introducao.md`  
> Stack: React + Vite + Zustand (Front-to-Back)

---

## 🍳 Fase 1: Preparando a Cozinha (Setup e Primeira Store)
> **Objetivo:** Entender a anatomia básica de uma Store no Zustand (State).

- [ ] Limpar o boilerplate padrão do Vite (remover CSS e componentes desnecessários)
- [ ] Instalar a dependência `zustand` via npm
- [ ] Criar a primeira Store: `useCardapioStore.js`
  - [ ] Definir o estado inicial com uma lista estática de pratos (ex: *Ensopado de Escorpião Gigante*, *Torta de Mandrágora*, etc.)

---

## 🎒 Fase 2: A Sacola do Aventureiro (Actions, Mutations e Selectors)
> **Objetivo:** Aprender a modificar o estado e ler apenas o necessário para evitar re-renders.

- [ ] Criar a Store do carrinho: `useCarrinhoStore.js`
  - [ ] Implementar a action `adicionarPrato`
  - [ ] Implementar a action `removerPrato`
  - [ ] Implementar a action `limparCarrinho`
- [ ] Construir o componente de **Lista de Pratos** (cardápio)
- [ ] Construir o componente de **Resumo do Carrinho**
- [ ] Aplicar **Selectors** para garantir que adicionar um prato ao carrinho não cause re-render na lista do cardápio

---

## ⚔️ Fase 3: A Caçada Assíncrona (Async Actions, Loading e Tratamento de Erro)
> **Objetivo:** Lidar com chamadas de API (Promises) dentro da Store, mantendo os componentes React "limpos".

- [ ] Modificar `useCardapioStore` para que o cardápio deixe de ser estático
- [ ] Criar uma **fake API** com simulação de atraso de rede para buscar o cardápio
- [ ] Adicionar estado de `carregandoCardapio` (loading) na Store
- [ ] Adicionar estado de `error` na Store
- [ ] Consumir os estados de `loading` e `error` na UI de forma enxuta

---

## 🧙 Fase 4: A Despensa Mágica (Middlewares e Persistência)
> **Objetivo:** Usar os superpoderes nativos do Zustand (middleware `persist`).

- [ ] Plugar o middleware `persist` na `useCarrinhoStore`
- [ ] Verificar que o carrinho é salvo automaticamente no `localStorage` do navegador
- [ ] Verificar que o carrinho é restaurado ao recarregar a página (sem `useEffect` manual)

---

## 🏰 Fase 5: Integração Front-to-Back (Preparação para Back-end Real)
> **Objetivo:** Estruturar as actions como no mundo real.

- [ ] Implementar a action **Finalizar Pedido** com o fluxo completo:
  - [ ] Ativar estado de `loading`
  - [ ] Simular chamada ao back-end
  - [ ] Limpar o carrinho após sucesso
  - [ ] Redirecionar o usuário para uma tela de sucesso
  - [ ] Desativar estado de `loading`
- [ ] Criar a **tela de sucesso** do pedido finalizado

---

*Bom proveito, aventureiro! 🍜*
