import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    proxy:{
      '/users': {
        target:'http://192.168.9.111:4000',
        changeOrigin: true
      }
    }
  }
})
