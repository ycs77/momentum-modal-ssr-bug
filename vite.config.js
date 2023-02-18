import { defineConfig } from 'vite'
import laravel from 'laravel-vite-plugin'
import Vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [
    laravel({
      input: 'resources/js/app.js',
      ssr: 'resources/js/ssr.js',
      refresh: true,
    }),
    Vue({
      template: {
        transformAssetUrls: {
          base: null,
          includeAbsolute: false,
        },
      },
    }),
  ],
  ssr: {
    noExternal: ['@inertiajs/server'],
  },
})
