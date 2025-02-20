import { defineConfig } from 'vite';
import { resolve } from 'path';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        outDir: 'dist',
        emptyOutDir: true,
        minify: true,
        sourcemap: false,
        lib: {
            entry: resolve(__dirname, 'src/index.ts'),
            // formats: ['es'],
            name: 'Tinyflow',
            fileName: 'tinyflow'
        }
    },
    plugins: [svelte({ emitCss: false }), dts({
        rollupTypes: true ,
        // tsconfigPath: './tsconfig.app.json'
    })],

});
