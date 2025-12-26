import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Eko/', // ⚠️ Case-sensitive, must match repo name
})

