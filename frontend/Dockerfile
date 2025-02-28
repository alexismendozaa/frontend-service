# Etapa de construcción
FROM node:18 AS builder
WORKDIR /app

# Copiar archivos de dependencias e instalar
COPY package*.json ./
RUN npm install

# Copiar el código fuente
COPY . .

# Exponer el puerto de desarrollo (puerto de Vite)
EXPOSE 5173

# Ejecutar el servidor de desarrollo
CMD ["npm", "run", "dev"]
