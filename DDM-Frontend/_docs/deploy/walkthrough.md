# Walkthrough — Deploy do Delivery Dungeon Meshi

## Mudanças realizadas

### Arquivos criados (3)

| Arquivo | Propósito |
|---|---|
| `DDM-Backend/render.yaml` | Infrastructure as Code do Render — define o Web Service + PostgreSQL |
| `DDM-Frontend/my-app/.env.production` | URL do backend para o build de produção |
| `.github/workflows/deploy.yml` | GitHub Actions workflow — build e deploy automático no GitHub Pages |

### Arquivos modificados (2)

#### `DDM-Frontend/my-app/vite.config.js`
```diff
 export default defineConfig({
+  base: '/Delivery-Dungeon-Meshi/',
   plugins: [
```

#### `DDM-Frontend/my-app/src/main.jsx`
```diff
-import { BrowserRouter, Routes, Route } from 'react-router-dom'
+import { HashRouter, Routes, Route } from 'react-router-dom'
 ...
-      <BrowserRouter>
+      <HashRouter>
         <Routes>
           ...
         </Routes>
-      </BrowserRouter>
+      </HashRouter>
```

## Próximos passos manuais (após aprovar o código)

### 1. Backend (Render)
1. Criar conta em [render.com](https://render.com)
2. Ir em **Blueprints → New Blueprint Instance** → selecionar o repositório
3. O Render lê o `render.yaml` e cria o Web Service + PostgreSQL automaticamente
4. Anotar a URL do serviço (ex: `https://ddm-backend.onrender.com`)
5. Atualizar `FRONTEND_URL` no painel do Render para a URL do GitHub Pages
6. Rodar o seed para popular o banco (via Render Shell: `node prisma/seed.js`)

### 2. Frontend (GitHub Pages)
1. Atualizar a URL em `.env.production` com a URL real do Render
2. No repositório GitHub: **Settings → Pages → Source → GitHub Actions**
3. Fazer merge da `dev` na `main` → o workflow roda automaticamente
4. Acessar `https://<USUARIO>.github.io/Delivery-Dungeon-Meshi/`
