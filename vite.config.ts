import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/aldinezi/',
  plugins: [react(), tailwindcss()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    outDir: 'docs',
    assetsDir: 'assets',
    emptyOutDir: true,
  },
})
