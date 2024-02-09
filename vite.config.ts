import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import Checker from "vite-plugin-checker"

import vuetify from 'vite-plugin-vuetify'

export default defineConfig({
  resolve: {
    alias: {
      "@": "/src"
    }
  },
  plugins: [
		vue(),
		Checker({ typescript: true,
		overlay: true }),
		vuetify({ autoImport: true }),
	],
  server: {
    port: 3000,
    watch: {
      usePolling: true,
    },
  },
})
