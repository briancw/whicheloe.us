module.exports = {
    extends: 'brian',
    plugins: [
        'svelte3',
    ],
    overrides: [{
        // Enable eslint in svelte components
        files: ['*.svelte'],
        processor: 'svelte3/svelte3',
    }],
    env: {
        browser: true,
    },
    rules: {
        // Fixes a bug with svelte eslint plugin
        'no-multiple-empty-lines': ['error', {max: 1, maxBOF: 2, maxEOF: 0}],
        // This rule is incompatibile with Svelte-Preprocessor
        'import/namespace': 'off',
    },
}
