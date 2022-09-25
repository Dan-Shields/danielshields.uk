import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import viteCompression from 'vite-plugin-compression'

export default defineConfig(() => {
    return {
        plugins: [vue(), viteCompression()],
    }
})
