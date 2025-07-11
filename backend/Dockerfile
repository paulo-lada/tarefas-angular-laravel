FROM php:8.3-fpm

# Argumentos para não interação durante instalação
ARG DEBIAN_FRONTEND=noninteractive

# Instalar dependências
RUN apt-get update && apt-get install -y \
    git \
    curl \
    libpng-dev \
    libonig-dev \
    libxml2-dev \
    zip \
    unzip \
    libzip-dev \
    && docker-php-ext-install pdo_mysql mbstring exif pcntl bcmath gd zip

# Limpar cache
RUN apt-get clean && rm -rf /var/lib/apt/lists/*

# Instalar Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Definir diretório de trabalho
WORKDIR /var/www/html

# Copiar arquivos de configuração personalizados, se necessário
# COPY php.ini /usr/local/etc/php/conf.d/app.ini
RUN composer create-project laravel/laravel:^11.0 app

# Expor porta 8000
EXPOSE 8000