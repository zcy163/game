import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  server: {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    // host: '127.0.0.1',
    host: true,
    port: 5173,
    proxy: {
      '/rest': {
        target: 'http://127.0.0.1:8000/', // 请求服务器根路径
        // target: 'http://nftmall.blhlm.com:8000/',
        changeOrigin: true, // 是否跨域
      },
      '/media': {
        target: 'http://127.0.0.1:8000/', // 请求服务器根路径
        // target: 'http://nftmall.blhlm.com:8000/',
        changeOrigin: true, // 是否跨域
      },
    },
  },
  resolve:{
    alias:{
      '@': resolve('src'),
      vue: resolve('node_modules/vue'),
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "./src/assets/style/main.scss";'
      }
    }
  },
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
      },
    },
  },
})
