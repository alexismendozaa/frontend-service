# Etapa de construcción
FROM node:18 AS builder
WORKDIR /app

# Copiar archivos de dependencias e instalar
COPY package*.json ./
RUN npm install

# Copiar el código fuente y construir la aplicación
COPY . .
RUN npm run build  # Esto genera los archivos estáticos

# Etapa de producción con Nginx
FROM nginx:alpine

# Copiar los archivos generados a la carpeta adecuada de Nginx
COPY --from=builder /app/build /usr/share/nginx/html

# Exponer el puerto de Nginx (80 por defecto)
EXPOSE 80

# Ejecutar Nginx
CMD ["nginx", "-g", "daemon off;"]
