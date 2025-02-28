# Etapa de construcción
FROM node:18 AS builder
WORKDIR /app

# Copiar archivos de dependencias e instalar
COPY package*.json ./
RUN npm install

# Copiar el código fuente
COPY . .

# Ejecutar el comando de construcción para generar archivos estáticos
RUN npm run build  # Esto genera los archivos estáticos en la carpeta 'dist/'

# Etapa de producción con Nginx
FROM nginx:alpine

# Copiar los archivos generados de la carpeta 'dist' a la carpeta de Nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Exponer el puerto de Nginx (80 por defecto)
EXPOSE 80

# Ejecutar Nginx
CMD ["nginx", "-g", "daemon off;"]
