import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vuetify from 'vite-plugin-vuetify'
import { fileURLToPath, URL } from 'node:url'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [
    vue(),
    vuetify({
      autoImport: true,
      theme: {
        defaultTheme: 'light'
      }
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  // Use relative paths for GitHub Pages
  base: command === 'serve' ? '/' : './',
  server: {
    port: 4200,
    host: true
  },
  build: {
    outDir: 'docs',
    assetsDir: 'assets'
  }
}))