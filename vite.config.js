import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import ElementPlus from 'unplugin-element-plus/vite'

export default defineConfig(() => { 
    return {
        plugins: [
            vue(),
            ElementPlus()
        ]
    }
})
