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
            external: ['react', 'react-dom', '@tinyflow-ai/ui'],
            output: {
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM',
                    '@tinyflow-ai/ui': 'Tinyflow'
                }
            }
        }
    },
    plugins: [
        react({ jsxRuntime: 'classic' }),
        dts({
            bundleTypes: true,
            tsconfigPath: './tsconfig.app.json'
        })
    ]
});
