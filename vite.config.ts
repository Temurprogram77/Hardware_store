import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [tailwindcss(),react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://144.91.98.115:8084',
        changeOrigin: true,
      },
    },
  },
})
