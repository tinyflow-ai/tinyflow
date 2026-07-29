import config from '@tinyflow-ai/eslint-config/flat.mjs';

export default [
    ...config,
    {
        rules: {
            '@typescript-eslint/no-explicit-any': 'off',
            '@typescript-eslint/no-empty-object-type': 'off',
            'no-useless-assignment': 'off',
            'svelte/custom_element_props_identifier': 'off',
            'svelte/no-at-html-tags': 'off',
            'svelte/no-dom-manipulating': 'off',
            'svelte/prefer-svelte-reactivity': 'off',
            'svelte/require-each-key': 'off'
        }
    }
];
