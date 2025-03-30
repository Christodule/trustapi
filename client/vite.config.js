import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'https://trustapi-q9gmj25gy-christodules-projects.vercel.app',
        changeOrigin: true,
        secure: true,
        rewrite: (path) => path.replace(/^\/api/, ''), // Supprime "/api" si nécessaire
      },
    },
  },
  base: './',
  build: {
    outDir: 'dist', // Dossier de sortie
  },
  plugins: [react()],
});
