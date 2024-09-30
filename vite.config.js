import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { VitePWA } from 'vite-plugin-pwa';
import path from 'path'; // Importer le module 'path'

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // Ajouter l'alias ici
    },
  },
  plugins: [
    vue(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'SpirulineStore',
        short_name: 'SpiruStore',
        start_url: '/',
        display: 'standalone',
        background_color: '#42B883',
        theme_color: '#4DBA87',
        icons: [
          {
            src: './img/icons/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: './img/icons/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
});
