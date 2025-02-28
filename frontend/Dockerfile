# Etapa de construcción
FROM node:18 AS builder
WORKDIR /app

# Copiar los archivos de configuración de dependencias
COPY package*.json ./

# Instalar las dependencias necesarias
RUN npm install

# Copiar todo el código fuente
COPY . .

# Ejecutar el comando para construir la aplicación (si es necesario)
# RUN npm run build  # Esto puede ser innecesario si solo ejecutamos `npm run dev`

# Exponer el puerto en el que la aplicación de desarrollo se ejecuta
EXPOSE 8080

# Etapa de producción
# Usar Node.js para desarrollo, ya que Nginx es para producción estática
FROM node:18

WORKDIR /app

# Copiar archivos de dependencias e instalar
COPY --from=builder /app /app

# Exponer el puerto de la aplicación frontend (8080 es común para el desarrollo)
EXPOSE 8080

# Comando para ejecutar el frontend en modo desarrollo
CMD ["npm", "run", "dev"]
