import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // Optional: Change port if needed
  },
  build: {
    outDir: 'dist',
  },
  base: '/', // Ensures routing works correctly
});
