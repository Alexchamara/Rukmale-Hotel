import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    // Increase chunk size warning limit (in kB) to suppress Vercel warning.
    // Adjust as needed; default is 500 kB. Here we set it to 1500 kB (1.5 MB).
    chunkSizeWarningLimit: 1500,
  },
})