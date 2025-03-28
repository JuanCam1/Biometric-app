import { defineConfig } from "vite";
import { resolve } from "node:path";

// https://vitejs.dev/config
export default defineConfig({
  assetsInclude: ["**/*.svg", "**/*.png", "**/*.jpeg", "**/*.jpg", "**/*.webp"],
  resolve: {
    alias: [{ find: "@", replacement: resolve(__dirname, "./src") }],
  },
});
