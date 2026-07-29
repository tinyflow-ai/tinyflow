import js from '@eslint/js';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import prettier from 'eslint-config-prettier';
import turbo from 'eslint-config-turbo/flat';
import svelte from 'eslint-plugin-svelte';
import globals from 'globals';

export default [
    { ignores: ['**/dist/**', '**/.svelte-kit/**'] },
    js.configs.recommended,
    ...tsPlugin.configs['flat/recommended'],
    ...svelte.configs['flat/recommended'],
    ...turbo,
    {
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node
            }
        }
    },
    {
        files: ['**/*.svelte'],
        languageOptions: {
            parserOptions: {
                parser: tsParser
            }
        }
    },
    {
        files: ['**/*.{ts,tsx}', '**/*.svelte.{js,ts}'],
        languageOptions: {
            parser: tsParser
        }
    },
    { rules: prettier.rules }
];
