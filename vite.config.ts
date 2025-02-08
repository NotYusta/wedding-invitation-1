import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath, URL } from "url";
// https://vite.dev/config/

const urlBase = "/wedding-invitation-1"
export default defineConfig({
  base: urlBase,
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  plugins: [react(),  tailwindcss(),],
})
