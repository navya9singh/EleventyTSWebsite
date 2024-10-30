import { defineConfig } from 'vite';
const prefix = `monaco-editor/esm/vs`
export default defineConfig({
  // Base public path when served in development or production.
  // optimizeDeps: {
  //   include: [
  //     `${prefix}/language/json/json.worker`,
  //     `${prefix}/language/css/css.worker`,
  //     `${prefix}/language/html/html.worker`,
  //     `${prefix}/language/typescript/ts.worker`,
  //     `${prefix}/editor/editor.worker`
  //   ]
  // },
  // Build options
  build: {
    outDir: 'dist', // Specify the output directory
    rollupOptions: {
      input: './packages/index.ts', // Specify the entry point
    }
  },

  // Server options
  server: {
    port: 3000, // Specify the port
    open: true, // Open the browser automatically
  },

  // Plugins
  plugins: []
});