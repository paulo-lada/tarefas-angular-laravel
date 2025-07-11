FROM node:20-alpine

# Instalar dependências globais
RUN npm install -g @angular/cli@17

# Configurar diretório de trabalho
WORKDIR /app

# Copiar o script de inicialização
COPY init-angular.sh /app/init-angular.sh
RUN chmod +x /app/init-angular.sh

# Expor porta 4200
EXPOSE 4200

# Iniciar script de inicialização
CMD ["/app/init-angular.sh"]