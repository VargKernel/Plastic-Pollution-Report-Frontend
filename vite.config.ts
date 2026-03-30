import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    base: '/Plastic-Pollution-Report-2026/',
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});