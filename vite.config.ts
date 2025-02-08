import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath, URL } from "url";
// https://vite.dev/config/
export default defineConfig({
  server: {
    host: true,
   allowedHosts: undefined,
  },
  base: "/wedding-invitation-1",
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  plugins: [react(),  tailwindcss(),],
})
