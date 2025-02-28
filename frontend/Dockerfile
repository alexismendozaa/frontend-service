# Etapa de construcción
FROM node:18 AS builder
WORKDIR /app

# Copiar archivos de dependencias e instalar
COPY package*.json ./
RUN npm install

# Copiar el código fuente
COPY . .

# Exponer el puerto en el que se ejecutará el servidor de desarrollo (usualmente 3000 o 8080)
EXPOSE 8080

# Comando para ejecutar el servidor de desarrollo de Vite (o Webpack)
CMD ["npm", "run", "dev"]
