import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // Relative asset paths so the built dist/ works when opened from any
  // subfolder (IDE built-in server, static hosting in a subpath, etc.),
  // not only from the domain root.
  base: './',
  plugins: [react()],
})
