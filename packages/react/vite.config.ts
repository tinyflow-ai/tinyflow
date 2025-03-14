import { defineConfig } from 'vite';
import { resolve } from 'path';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        outDir: 'dist',
        emptyOutDir: true,
        minify: true,
        sourcemap: true,
        lib: {
            entry: resolve(__dirname, 'src/index.ts'),
            cssFileName: 'index',
            fileName: (format) => {
                return format === 'umd' ? 'index.umd.js' : 'index.js';
            },
            formats: ['es', 'umd'],
            name: 'tinyflow'
        },
        rollupOptions: {
            external: ['react', 'react-dom']
        }
    },
    plugins: [
        react(),
        dts({
            rollupTypes: true,
            tsconfigPath: './tsconfig.app.json'
        })
    ]
});
