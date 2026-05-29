# 🐳 Planejamento: Dockerizando o Delivery Dungeon Meshi

## Contexto do Projeto

Você tem um projeto **React 19 + Vite 8** em:
```
Delivery-Dungeon-Meshi/
└── Delivery_Dungeon_Meshi_Frontend/
    └── my-app/          ← sua aplicação Vite + React
        ├── package.json
        ├── vite.config.js
        ├── index.html
        ├── src/
        └── public/
```

O objetivo é criar uma configuração Docker que, com **um único comando**, suba o ambiente de desenvolvimento completo — instalando dependências e rodando o servidor local, sem precisar de `npm install` manual.

---

## Pré-requisitos (O que você já precisa ter)

- **Docker Desktop** instalado e funcionando no Windows
- Conhecimento básico de terminal/PowerShell

> **💡 Dica:** Se ainda não tem o Docker Desktop, baixe em [docker.com/products/docker-desktop](https://www.docker.com/products/docker-desktop/). Ele inclui o Docker Engine + Docker Compose.

---

## Etapa 1 — Entender os Conceitos Fundamentais

Antes de escrever qualquer arquivo, estude estes conceitos:

### 1.1 Dockerfile vs Docker Compose

| Conceito | O que faz | Analogia |
|---|---|---|
| **Dockerfile** | Define como construir **uma imagem** (um "molde" do ambiente) | É a receita de um prato |
| **Docker Compose** | Orquestra **um ou mais containers** a partir de imagens | É o chef que segue a receita e monta o prato |

**Perguntas para se fazer:**
- Qual é a diferença entre uma *imagem* e um *container*?
- Por que preciso de um Dockerfile SE o Docker Compose já existe?

**Leitura recomendada:**
- [Docker overview (docs oficiais)](https://docs.docker.com/get-started/docker-overview/)
- [Dockerfile reference](https://docs.docker.com/reference/dockerfile/)
- [Docker Compose overview](https://docs.docker.com/compose/)

### 1.2 Conceitos-chave que você vai usar

Pesquise e entenda o que significam estes termos:

- **`FROM`** — Qual imagem base usar (ex: `node:22-alpine`)
- **`WORKDIR`** — Diretório de trabalho dentro do container
- **`COPY`** — Copiar arquivos do host para o container
- **`RUN`** — Executar um comando durante o *build* da imagem
- **`CMD`** — Comando padrão quando o container *sobe*
- **`EXPOSE`** — Declarar portas que o container usa
- **`volumes`** (no Compose) — Sincronizar arquivos entre host e container
- **`ports`** (no Compose) — Mapear portas do container para o host

---

## Etapa 2 — Criar o Dockerfile

Este é o primeiro arquivo que você vai criar. Ele fica dentro de `my-app/`.

### O que o Dockerfile precisa fazer:

1. **Escolher uma imagem base** com Node.js
   - Pesquise: o que é `node:22-alpine`? Por que `alpine`?
   - Dica: versões "alpine" são mais leves (~50 MB vs ~350 MB)

2. **Definir um diretório de trabalho** dentro do container
   - Ex: `/app`

3. **Copiar os arquivos de dependência primeiro** (`package.json` e `package-lock.json`)
   - Por que copiar esses arquivos *antes* do resto do código?
   - Pesquise: **Docker layer caching** — isso é fundamental para builds rápidos!

4. **Instalar as dependências** com `npm install`

5. **Copiar o resto do código-fonte**

6. **Expor a porta** que o Vite usa (por padrão, qual porta é essa?)

7. **Definir o comando de inicialização** (`npm run dev`)

### Perguntas-guia:
- O que acontece se você copiar TUDO antes do `npm install`? Por que isso é ruim?
- Qual a diferença entre `CMD` e `ENTRYPOINT`?
- Por que usar `RUN npm install` e não `RUN npm run dev`?

### Arquivo a criar:
- `my-app/Dockerfile`

---

## Etapa 3 — Criar o `.dockerignore`

### Por que isso importa:
O `.dockerignore` funciona como o `.gitignore`, mas para o Docker. Ele diz quais arquivos **NÃO** devem ser copiados para dentro da imagem.

### O que excluir:
Pense nos arquivos/pastas que:
- São gerados automaticamente (ex: `node_modules/`)
- São específicos do seu editor/IDE
- São logs ou arquivos temporários

> **⚠️ Importante:** Se você não ignorar `node_modules`, o Docker vai copiar a pasta inteira (que pode ter centenas de MB) para dentro da imagem, e depois instalar tudo de novo com `npm install`. Isso torna o build **muito mais lento** e a imagem **muito mais pesada**.

### Perguntas-guia:
- Qual é a diferença entre `.gitignore` e `.dockerignore`?
- Por que `node_modules` deve estar nos dois arquivos?

### Arquivo a criar:
- `my-app/.dockerignore`

---

## Etapa 4 — Criar o `docker-compose.yml`

Este arquivo fica na pasta `Delivery_Dungeon_Meshi_Frontend/`, acima de `my-app/`.

### O que o Compose precisa configurar:

1. **Definir um serviço** (ex: `frontend`)

2. **Apontar o build** para o diretório onde está o Dockerfile
   - Pesquise: a propriedade `build` com `context` e `dockerfile`

3. **Mapear portas** — conectar a porta do container à porta do host
   - Ex: `"5173:5173"` — por que essa porta? (Veja qual porta o Vite usa)

4. **Montar volumes** — isso é CRUCIAL para desenvolvimento
   - Pesquise: `bind mount` vs `named volume`
   - Você quer que as mudanças no código no seu editor apareçam **imediatamente** no container
   - Mas cuidado: o `node_modules` do container não deve ser sobrescrito pelo host!
   - Pesquise: o truque do **volume anônimo** para proteger `node_modules`

5. **Variáveis de ambiente** (opcional por enquanto)
   - Exemplo: `NODE_ENV=development`

### Perguntas-guia:
- O que acontece se você não montar o volume do código? Precisaria rebuildar a cada mudança?
- Por que existe o truque `- /app/node_modules` nos volumes?
- Qual a diferença entre `docker-compose up` e `docker-compose up --build`?

### Arquivo a criar:
- `Delivery_Dungeon_Meshi_Frontend/docker-compose.yml`

---

## Etapa 5 — Configurar o Vite para funcionar dentro do Docker

> **🚨 Atenção:** Este passo é fácil de esquecer e causa o erro mais comum: "funciona no Docker, mas não abre no navegador".

### O problema:
Por padrão, o Vite escuta apenas em `localhost` (127.0.0.1). Dentro de um container Docker, `localhost` se refere ao container, não à sua máquina Windows.

### O que pesquisar:
- No `vite.config.js`, como configurar `server.host` para aceitar conexões externas?
- Pesquise: qual valor de `host` faz o Vite escutar em todas as interfaces?
- Pesquise também: `server.watch.usePolling` — por que isso pode ser necessário no Docker com volumes?

### Perguntas-guia:
- Qual a diferença entre `host: 'localhost'` e `host: '0.0.0.0'`?
- O que é "polling" e por que o hot-reload pode não funcionar sem ele?

### Arquivo a modificar:
- `my-app/vite.config.js`

---

## Etapa 6 — Testar!

### Comandos que você vai usar:

| Comando | O que faz |
|---|---|
| `docker compose build` | Constrói a(s) imagem(ns) |
| `docker compose up` | Sobe o(s) container(s) |
| `docker compose up --build` | Build + up em um só comando |
| `docker compose down` | Para e remove os containers |
| `docker compose logs -f frontend` | Acompanha os logs em tempo real |

### Checklist de validação:
- [ ] O comando `docker compose up --build` roda sem erros?
- [ ] O terminal mostra o Vite iniciando na porta correta?
- [ ] Ao abrir `http://localhost:5173` no navegador, a página carrega?
- [ ] Ao editar um arquivo `.jsx`, a mudança aparece no navegador automaticamente (hot-reload)?
- [ ] Após parar o container e rodar `docker compose up` de novo (sem `--build`), ele sobe rápido?

---

## Etapa 7 — Problemas Comuns (Troubleshooting)

Ao longo do caminho, você provavelmente vai encontrar estes problemas. Tente resolver antes de buscar ajuda:

| Problema | Pista |
|---|---|
| `ERR! enoent package.json` | Verifique o `WORKDIR` e os caminhos no `COPY` |
| Página não abre no navegador | Verifique `server.host` no `vite.config.js` e o mapeamento de `ports` |
| Hot-reload não funciona | Pesquise `usePolling` para Vite com Docker |
| Build muito lento | Verifique se `node_modules` está no `.dockerignore` |
| Erros de permissão no Windows | Verifique se o Docker Desktop tem acesso à pasta do projeto nas Settings > Resources > File Sharing |

---

## Resumo Visual da Estrutura Final

```
Delivery-Dungeon-Meshi/
└── Delivery_Dungeon_Meshi_Frontend/
    ├── docker-compose.yml        ← (NOVO) orquestra os serviços
    └── my-app/
        ├── .dockerignore         ← (NOVO) exclui arquivos do build
        ├── Dockerfile            ← (NOVO) define a imagem
        ├── vite.config.js        ← (MODIFICADO) ajustar host/polling
        ├── package.json
        ├── index.html
        ├── src/
        └── public/
```

---

## 📚 Referências para Estudo

| Recurso | Link |
|---|---|
| Docker: Conceitos Fundamentais | [docs.docker.com/get-started](https://docs.docker.com/get-started/) |
| Dockerfile Reference | [docs.docker.com/reference/dockerfile](https://docs.docker.com/reference/dockerfile/) |
| Docker Compose Reference | [docs.docker.com/compose/compose-file](https://docs.docker.com/compose/compose-file/) |
| Vite Server Options | [vite.dev/config/server-options](https://vite.dev/config/server-options) |
| Docker + Node.js Best Practices | [github.com/nodejs/docker-node/blob/main/docs/BestPractices.md](https://github.com/nodejs/docker-node/blob/main/docs/BestPractices.md) |

---

> **💡 Dica:** Quando estiver implementando e travar em alguma etapa, me chame que te dou dicas sem entregar a resposta pronta. O aprendizado está no processo! 💪
