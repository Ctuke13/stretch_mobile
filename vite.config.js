import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import react from "@vitejs/plugin-react-swc";
import swc from "vite-plugin-swc";
import { VitePWA } from "vite-plugin-pwa";
import tailwindcss from "tailwindcss";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), reactRefresh(), swc, VitePWA(), tailwindcss()],
  server: {
    port: 3000,
  },
});
