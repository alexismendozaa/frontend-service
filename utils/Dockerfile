# Base image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package files
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy application code
COPY . .

# Expose the backend port
EXPOSE 3000

# Command to run the backend server
CMD ["node", "src/server.js"]
