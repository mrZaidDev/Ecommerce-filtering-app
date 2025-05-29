import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/your-repo-name/', // 👈 Replace this with your GitHub repo name
  plugins: [react(), tailwindcss()],
})
