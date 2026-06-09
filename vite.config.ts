import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages sert ce repo sous /tondos/ en production.
// En développement local, on garde / pour conserver http://localhost:5173/.
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/tondos/' : '/',
  plugins: [react()],
}))
