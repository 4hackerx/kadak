import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { viteStaticCopy } from "vite-plugin-static-copy";

export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: "public/manifest.json",
          dest: "../dist",
        },
      ],
    }),
  ],
  root: "src",
  publicDir: false,
  build: {
    outDir: "../dist",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        "interface/index": "src/interface/index.html", // Entry point for the main React app
        "scripts/sw": "src/background/index.ts", // Entry point for the background script
        "scripts/content-script": "src/content-scripts/index.ts", // Entry point for the content script
        "offscreen/index": "src/offscreen/index.html",
      },
      output: {
        entryFileNames: (_) => {
          return `[name].js`;
        },
        chunkFileNames: (_) => {
          return `[name].js`;
        },
        assetFileNames: (_) => {
          return `assets/[name].[ext]`;
        },
      },
    },
  },
});
