import {resolve} from 'node:path'
import {defineConfig} from 'vite'
import {svelte} from '@sveltejs/vite-plugin-svelte'
import preprocess from 'svelte-preprocess'

// https://vitejs.dev/config/
export default defineConfig({
    // Enable other devices on the network to connect to dev. Useful for testing on real devices.
    server: {
        host: '0.0.0.0',
    },
    plugins: [
        svelte({
            preprocess: preprocess(),
        }),
    ],
    publicDir: 'public',
    build: {
        outDir: resolve('./dist/'),
        emptyOutDir: true,
    },
})
