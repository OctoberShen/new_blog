import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            // 如果报错__dirname找不到，需要安装node,执行yarn add @types/node --save-dev
            "@": resolve(__dirname, "src"),
            "__ROOT__": resolve(__dirname, ""),
            "components": resolve(__dirname, "src/components"),
        }
    },
    server: {
        proxy: {
            // 选项写法
            '/api': {
                target: 'http://api.apishop.net/',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, '')
            },
            // Proxying websockets or socket.io
            '/socket.io': {
                target: 'ws://localhost:3000',
                ws: true
            }
        }
    },
    base: "/"
})
