# Docker para Laravel 11 e Angular 17

Este projeto configura um ambiente Docker com Laravel 11 no backend, Angular 17 no frontend, PHP 8.3, Composer e Yarn.

## Estrutura do Projeto

```
laravel-angular-docker/
├── backend/              # Aplicação Laravel
│   └── Dockerfile        # Configuração Docker para Laravel
├── frontend/             # Aplicação Angular
│   ├── Dockerfile        # Configuração Docker para Angular
│   └── init-angular.sh   # Script de inicialização do Angular
├── docker-compose.yml    # Configuração dos serviços Docker
└── README.md             # Este arquivo
```

## Requisitos

- Docker
- Docker Compose

## Como Usar

1. Clone este repositório
2. Execute o comando para construir e iniciar os contêineres:

```bash
docker-compose up -d
```

3. Acesse as aplicações:
   - Laravel: http://localhost:8000
   - Angular: http://localhost:4200

## Serviços Disponíveis

- **backend**: Servidor Laravel 11 com PHP 8.3
- **frontend**: Servidor Angular 17
- **db**: Banco de dados MySQL 8.0

## Banco de Dados

- **Host**: localhost
- **Porta**: 3306
- **Nome do banco**: laravel
- **Usuário**: laravel
- **Senha**: secret

## Comandos Úteis

### Laravel (Backend)

```bash
# Acessar o contêiner Laravel
docker-compose exec backend bash

# Executar migrações
docker-compose exec backend php artisan migrate

# Criar um controller
docker-compose exec backend php artisan make:controller NomeController
```

### Angular (Frontend)

```bash
# Acessar o contêiner Angular
docker-compose exec frontend sh

# Gerar um componente
docker-compose exec frontend ng generate component nome-componente

# Gerar um serviço
docker-compose exec frontend ng generate service nome-servico
```
