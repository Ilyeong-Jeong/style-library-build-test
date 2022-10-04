import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import macrosPlugin from 'vite-plugin-babel-macros';
import path from 'path';

export default defineConfig({
  server: {
    port: 5501,
    host: '0.0.0.0',
  },
  plugins: [
    react(),
    macrosPlugin()
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
})
