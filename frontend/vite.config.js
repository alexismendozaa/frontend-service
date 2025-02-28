import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    open: false, // Cambiado a 'false' para evitar que Vite intente abrir el navegador
  },
});