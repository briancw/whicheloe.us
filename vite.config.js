import {defineConfig} from 'vite'
// import {resolve} from 'node:path'
import {svelte} from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
    server: {
        host: '0.0.0.0',
    },
    plugins: [
        svelte(),
    ],
    // build: {
    //     outDir: resolve('./dist/'),
    //     emptyOutDir: true,
    //     rollupOptions: {
    //         input: {
    //             app: 'src/index.html',
    //         },
    //     },
    // },
})
