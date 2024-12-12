import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// Configuración de Vite
export default defineConfig({
  plugins: [react()], // Plugin para React
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // Alias para facilitar las importaciones
    },
  },
  server: {
    port: 3000, // Puerto para el servidor de desarrollo
  },
  build: {
    outDir: 'dist', // Directorio de salida para la compilación
  },
});

