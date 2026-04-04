import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    base: '/Plastic-Pollution-Report-Frontend/',
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
