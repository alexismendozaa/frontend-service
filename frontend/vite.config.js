import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    open: false,  // Para evitar que intente abrir el navegador automáticamente
    host: '0.0.0.0',  // Esto permitirá que Vite escuche en todas las interfaces
    port: 5173,  // El puerto en el que Vite estará escuchando
  },
});
