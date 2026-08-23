# Deploy: GitHub Pages (Frontend) + Render (Backend + PostgreSQL)

Configurar deploy completo do Delivery Dungeon Meshi, com o frontend React/Vite no GitHub Pages e o backend Express/Prisma no Render (incluindo banco PostgreSQL gratuito).

## Decisões Tomadas

- **HashRouter**: Usado no lugar do `BrowserRouter` para compatibilidade com GitHub Pages (que não suporta client-side routing). As URLs ficam com `#` (ex: `/#/cardapio`).
- **GitHub Actions**: Deploy automático do frontend a cada push na `main`.

## Pré-requisitos

> **Nome do repositório**: O `base` do GitHub Pages depende do nome do repositório no GitHub. O plano assume que o repositório se chama `Delivery-Dungeon-Meshi`. Se for diferente, o `base` no `vite.config.js` precisa ser ajustado.

> **Conta no Render**: Você precisa criar uma conta gratuita em [render.com](https://render.com) e fazer o setup manual do banco PostgreSQL e do Web Service (detalhado na seção de verificação).

---

## Mudanças no Código

### Backend — Configuração para Render

#### [NEW] `DDM-Backend/render.yaml`

Arquivo de "Infrastructure as Code" do Render. Define o Web Service e o banco PostgreSQL automaticamente. Isso permite fazer deploy com um clique via "Blueprint" no Render.

```yaml
services:
  - type: web
    name: ddm-backend
    runtime: node
    region: oregon
    rootDir: DDM-Backend
    buildCommand: npm install && npx prisma generate
    startCommand: npx prisma migrate deploy && node src/index.js
    envVars:
      - key: NODE_ENV
        value: production
      - key: FRONTEND_URL
        value: https://<USUARIO>.github.io
      - key: DATABASE_URL
        fromDatabase:
          name: ddm-database
          property: connectionString

databases:
  - name: ddm-database
    plan: free
    region: oregon
```

---

#### `DDM-Backend/src/index.js` — Nenhuma alteração necessária

O backend já:
- Lê `PORT` do env (Render define automaticamente)
- Lê `FRONTEND_URL` do env para CORS
- Lê `DATABASE_URL` do env para conexão com o banco
- Tem rota `/health` para health check

O código já está pronto para produção. ✅

---

#### `DDM-Backend/entrypoint.sh` — Nenhuma alteração necessária

Esse arquivo é usado somente pelo Docker local. O Render não usa Docker no plano free — ele executa os comandos de build/start diretamente.

---

### Frontend — GitHub Pages

#### [MODIFY] `DDM-Frontend/my-app/vite.config.js`

Adicionar o `base` para que os assets sejam servidos corretamente no GitHub Pages (subpath `/Delivery-Dungeon-Meshi/`).

```diff
 export default defineConfig({
+  base: '/Delivery-Dungeon-Meshi/',
   plugins: [
     react(),
```

---

#### [MODIFY] `DDM-Frontend/my-app/src/main.jsx`

Trocar `BrowserRouter` por `HashRouter` para compatibilidade com GitHub Pages (que não suporta rotas no server-side).

```diff
-import { BrowserRouter, Routes, Route } from 'react-router-dom'
+import { HashRouter, Routes, Route } from 'react-router-dom'

-      <BrowserRouter>
+      <HashRouter>
         <Routes>
           ...
         </Routes>
-      </BrowserRouter>
+      </HashRouter>
```

---

#### [NEW] `DDM-Frontend/my-app/.env.production`

Variável de ambiente que aponta para o backend no Render (substituída durante o build no GitHub Actions).

```env
VITE_API_URL=https://ddm-backend.onrender.com
```

> **Nota:** A URL exata (`ddm-backend.onrender.com`) será definida quando você criar o serviço no Render. Será necessário atualizar esse valor depois.

---

#### [NEW] `.github/workflows/deploy.yml`

GitHub Actions workflow que faz build do frontend e publica no GitHub Pages automaticamente a cada push na `main`.

```yaml
name: Deploy Frontend to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: true

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-node@v4
        with:
          node-version: 22
          cache: npm
          cache-dependency-path: DDM-Frontend/my-app/package-lock.json

      - name: Install dependencies
        working-directory: DDM-Frontend/my-app
        run: npm ci

      - name: Build
        working-directory: DDM-Frontend/my-app
        run: npm run build

      - uses: actions/configure-pages@v5

      - uses: actions/upload-pages-artifact@v3
        with:
          path: DDM-Frontend/my-app/dist

      - id: deployment
        uses: actions/deploy-pages@v4
```

---

## Verificação

### Deploy do Backend (Render) — Setup Manual

1. Criar conta em [render.com](https://render.com) (login com GitHub)
2. **Opção A (Blueprint):** Ir em "Blueprints" → "New Blueprint Instance" → selecionar o repositório → o Render lê o `render.yaml` e cria tudo automaticamente
3. **Opção B (Manual):**
   - Criar um "PostgreSQL" (plano Free) → copiar a **Internal Database URL**
   - Criar um "Web Service" → conectar ao repo GitHub → configurar:
     - **Root Directory:** `DDM-Backend`
     - **Build Command:** `npm install && npx prisma generate`
     - **Start Command:** `npx prisma migrate deploy && node src/index.js`
     - **Environment Variables:**
       - `DATABASE_URL` = (URL do banco criado acima)
       - `NODE_ENV` = `production`
       - `FRONTEND_URL` = `https://<USUARIO>.github.io`
4. Após deploy, anotar a URL do serviço (ex: `https://ddm-backend.onrender.com`)
5. Testar: `GET https://ddm-backend.onrender.com/health` → deve retornar `{ "status": "ok" }`
6. Popular o banco: rodar o seed via Render Shell ou conectar ao banco remoto

### Deploy do Frontend (GitHub Pages)

1. No repositório GitHub, ir em **Settings → Pages → Source → GitHub Actions**
2. Atualizar a URL do backend em `.env.production` com a URL real do Render
3. Fazer push na `main` → o workflow roda automaticamente
4. Verificar em `https://<USUARIO>.github.io/Delivery-Dungeon-Meshi/`

### Testes de Integração

- [ ] Frontend carrega a página inicial
- [ ] Cardápio lista os pratos vindos da API
- [ ] Adicionar item ao carrinho funciona
- [ ] Carrinho exibe itens e total corretamente
