import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/

const urlBase = "/"
export default defineConfig({
  base: urlBase,
  plugins: [react(),  tailwindcss(),],
})
