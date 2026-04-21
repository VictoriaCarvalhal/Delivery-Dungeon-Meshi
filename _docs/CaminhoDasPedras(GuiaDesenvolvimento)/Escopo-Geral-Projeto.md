# Delivery Dungeon Meshi — Escopo Geral 21/04/2026 15:47

## Escopo
O MVP cobre uma única jornada: **ver o cardápio → montar o carrinho → confirmar o pedido.**
Sem autenticação, sem pagamento, sem histórico, sem perfil de usuário.

## Telas

### Cabeçalho (global)
- Logo do restaurante à esquerda
- Dois botões de navegação: Início e Cardápio
- Ícone de carrinho à direita com badge numérico mostrando a quantidade de itens

### Início
- Texto simples apresentando o restaurante
- Botão "Ver Cardápio" levando para a tela de Cardápio

### Cardápio
- Lista de pratos em cards simples (nome + descrição curta + botão "Adicionar")
- Ao clicar em "Adicionar", o item vai direto ao carrinho sem abrir diálogo
- Sem categorias, sem fotos, sem controle de quantidade nesta tela

### Carrinho
- Lista dos itens adicionados com nome e quantidade
- Botão "Remover" por item
- Controle de quantidade por item (+/-)
- Valor total calculado automaticamente
- Botão "Finalizar Pedido" levando para a tela de Confirmação

### Confirmação
- Mensagem de sucesso: "Pedido recebido, aventureiro!"
- Resumo dos itens pedidos e valor total
- Botão "Novo Pedido" que limpa o carrinho e volta para o Cardápio

## Rodapé
- Vazio por enquanto

## O que fica de fora do MVP (backlog para depois)
- Login, cadastro e sessão de usuário
- Diálogo com detalhes e foto do prato
- Categorias e filtros no cardápio
- Formas de pagamento
- Gestão de endereço
- Histórico de pedidos
- Cupons e promoções
- Carrossel de promoções na Home