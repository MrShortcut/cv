import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths';
import { resolve } from 'path'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [ react(), tsconfigPaths() ],
  resolve: {
    alias: [
      { find: '@/*', replacement: resolve(__dirname, "src") },
      { find: '@components', replacement: resolve(__dirname, "./src/components") },
      { find: '@pages', replacement: resolve(__dirname, "./src/pages") },
      { find: '@utilities', replacement: resolve(__dirname, "./src/utilities") },
      { find: '@context', replacement: resolve(__dirname, "./src/context") },
    ]
  }
})
