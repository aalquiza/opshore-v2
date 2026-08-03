import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: '/opshore-v2/',
  server: {
    port: 5174,
  },
});
