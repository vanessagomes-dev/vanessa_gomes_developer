// ARQUIVO: vite.config.ts
/// <reference types="node" /> // Adicione para ajudar o TS a encontrar os tipos do Node.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})