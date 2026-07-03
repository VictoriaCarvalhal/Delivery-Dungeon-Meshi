# Coisas que faltam fazer
## 18/06/2026
- ~~ Colocar em algum lugar o atualizar valores da conta (Talvez toda vez que você coloca no carrinho atualiza? É possível colocar dois event handelers num mesmo botão? Nao sei ainda)~~
- ~~Fazer com que quando um item é completamente removido o seu card desaparece~~
-~~ Mostrar na tela do carrinho a conta que ele terá que pagar ~~
- ~~Colocar o botão para confirmar a compra ~~
- ~~ Criar a tela de Compra Feita ~~

## 19/06/2026
- ~~ Adicionar uma trava no botão de finalizar compra, que checa se o carrinho está vazio ou não. Se estiver ele não deixa o usuário fazer nada. Se estiver cheio, ele deixa o usuário ir para a pagina de compra concluida. ~~ 
- Resumo dos itens pedidos e valor total
- Estilizar paginas com css (EU MESMA, SEM AI. Ou com ajuda minima de AI)
- Fazer backend

## 01/07/2026

- Apaguei uma pasta duplicada do nodemodule e estou apenas escrevendo aqui para dar commit

## 03/07/2026

### Feito Hoje:
- ~~Renomear toda a infraestrutura do projeto (Docker, pastas, convenções para DDM-)~~
- ~~Consolidar componentes redundantes (Cart + CarrinhoButton)~~
- ~~Implementar efeitos interativos de hover no logo (troca de imagem)~~
- ~~Fazer avaliação crítica da complexidade do design e gerar o AnaliseCssRoadmap~~
- ~~Corrigir typo em `header.module.css`: mudar `position: realtive` para `position: relative`~~
- ~~Corrigir typo em `logo.module.css`: remover aspas de `cursor: 'pointer'` para `cursor: pointer`~~

### Próximos Passos (Baseado no AnaliseCssRoadmap.md):
#### Fase 1 — Fundação (Conteúdo das Páginas)
- [ ] Limpar `main.css` (remover código morto, definir variáveis de cor reais e fontes)
- [ ] Criar e estilizar `pratoCard.module.css` (card com nome, descrição, valor e botão "Adicionar")
- [ ] Criar e estilizar `pedidoCard.module.css` (card do carrinho com quantidade, valores, botão "Remover")
- [ ] Estilizar `cardapio.module.css` (grid responsivo)
- [ ] Criar e estilizar CSS para o carrinho (lista, total, botão finalizar)
- [ ] Estilizar `menu.module.css` (tipografia, espaçamento, CTA)
- [ ] Estilizar Confirmação (mensagem de sucesso com estilo)