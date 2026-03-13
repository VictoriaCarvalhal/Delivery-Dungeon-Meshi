# 🚀 Git Cheat Sheet: Guia Rápido de Referência

## 1. Iniciando um Repositório Local
Use estes comandos se você acabou de criar uma pasta no seu computador e quer que o Git comece a monitorar as alterações.

* **Criar a pasta e entrar nela:**
    `mkdir meu-projeto && cd meu-projeto`
* **Inicializar o Git:**
    `git init`
    > Isso cria uma pasta oculta `.git` onde todo o histórico será salvo.
* **Adicionar arquivos:**
    `git add .` (adiciona todos) ou `git add arquivo.txt`
* **Primeiro Commit:**
    `git commit -m "Initial commit"`

---

## 2. Conectando a um Repositório Remoto
Se você já criou o repositório no GitHub/GitLab, use estes comandos para "vincular" sua pasta local ao servidor.

| Ação | Comando |
| :--- | :--- |
| **Adicionar Remoto** | `git remote add origin https://github.com/usuario/repo.git` |
| **Verificar Remoto** | `git remote -v` |
| **Trocar de Branch** | `git branch -M main` |
| **Enviar Arquivos** | `git push -u origin main` |

---

## 3. Fluxo de Trabalho Diário
Estes são os comandos que você usará **90% do tempo**:

* **Status:** `git status` (vê o que foi alterado).
* **Add:** `git add <nome-do-arquivo>` (prepara para o commit).
* **Commit:** `git commit -m "descrição da mudança"` (salva a versão).
* **Push:** `git push` (envia para o servidor).
* **Pull:** `git pull` (traz as novidades do servidor).

---

## 4. Dicas de Ouro no Terminal

### Configurar Identidade (Uma única vez)
```bash
git config --global user.name "Seu Nome"
git config --global user.email "seuemail@exemplo.com"