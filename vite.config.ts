// Vite
import { defineConfig } from 'vite'

// Vite React
import react from '@vitejs/plugin-react-swc'
import * as path from 'path'

// Eslint
import eslint from 'vite-plugin-eslint'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslint()],
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  },
})
