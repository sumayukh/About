import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/About",
  build: {
    chunkSizeWarningLimit: 1000,
    assetsDir: "assets",
  },
  server: {
    port: 5100,
  },
});
