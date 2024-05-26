// vite.config.js

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Add other aliases as needed
    }
  },
  build: {
    commonjsOptions: {
      include: [/node_modules/], // Ensure Vite includes node_modules in commonjs transformation
    }
  }
});
