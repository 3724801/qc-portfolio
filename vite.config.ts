import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/qc-portfolio/',
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
