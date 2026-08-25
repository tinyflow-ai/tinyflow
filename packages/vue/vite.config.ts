import { defineConfig } from 'vite';
import { resolve } from 'path';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        outDir: 'dist',
        emptyOutDir: true,
        minify: true,
        sourcemap: true,
        cssCodeSplit: true,
        lib: {
            entry: resolve(__dirname, 'src/index.ts'),
            cssFileName: 'index',
            fileName: (format) => {
                return format === 'umd' ? 'index.umd.js' : 'index.js';
            },
            formats: ['es', 'umd'],
            name: 'Tinyflow'
        },
        rollupOptions: {
            external: ['vue', '@tinyflow-ai/ui'],
            output: {
                globals: {
                    vue: 'Vue',
                    '@tinyflow-ai/ui': 'Tinyflow'
                }
            }
        }
    },
    plugins: [
        vue(),
        dts({
            bundleTypes: true,
            tsconfigPath: './tsconfig.app.json'
        })
    ]
});
