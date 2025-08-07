# ✅ Projeto Angular + Laravel

Aplicação fullstack para gerenciamento de tarefas, construída com:

- 🎨 **Frontend**: Angular
- ⚙️ **Backend**: Laravel 11 + SQLite
- 🔁 Integração via REST API com CORS configurado

---

## 📁 Estrutura do Projeto

```
starian-checklist/
├── backend/       # Laravel
└── frontend/      # Angular
```

---

## 🚀 Requisitos

- Node.js 18+
- NPM 9+ ou Yarn
- PHP 8.1+ (XAMPP ou nativo)
- Composer 2+
- Git (opcional)

---

## ⚙️ Como Rodar o Projeto

### 🔹 Backend (Laravel)

```bash
cd backend

# Instalar dependências
composer install

# Criar arquivo .env
copy .env.example .env
# ou crie manualmente com o conteúdo:
# DB_CONNECTION=sqlite
# DB_DATABASE=storage/database.sqlite

# Criar banco SQLite
mkdir storage
type nul > storage/database.sqlite  # No Windows
# ou
touch storage/database.sqlite       # No Linux/macOS

# Rodar migrations
php artisan migrate

# Subir servidor local
php artisan serve
# => http://localhost:8000
```

> ⚠️ A API está acessível em `/api/tarefas`

---

### 🔹 Frontend (Angular)

```bash
cd frontend

# Instalar dependências
npm install

# Rodar servidor Angular
ng serve

# => http://localhost:4200
```

---

## 🔗 Comunicação Front ↔ Back

- O Angular faz requisições para `http://localhost:8000/api/tarefas`
- O backend está com CORS habilitado apenas para `http://localhost:4200`

---

## 📡 API Endpoints

| Método | Rota                     | Descrição               |
|--------|--------------------------|-------------------------|
| GET    | `/api/tarefas`           | Listar tarefas          |
| POST   | `/api/tarefas`           | Criar nova tarefa       |
| DELETE | `/api/tarefas/{id}`      | Deletar tarefa por ID   |