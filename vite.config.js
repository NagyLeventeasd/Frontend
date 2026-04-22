import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    proxy:{
      '/users': {
<<<<<<< HEAD
        target:'https://nodejs212.dszcbaross.edu.hu',
=======
        target:'http://127.0.0.1:4000',
>>>>>>> master
        changeOrigin: true
      }
    }
  }
})
