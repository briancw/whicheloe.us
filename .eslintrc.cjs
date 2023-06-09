module.exports = {
    extends: ['brian', 'prettier', 'plugin:svelte/recommended'],
    env: {
        browser: true,
    },
    rules: {
        // Fixes a bug with svelte eslint plugin
        'no-multiple-empty-lines': ['error', {max: 1, maxBOF: 2, maxEOF: 0}],
        // This rule is incompatibile with Svelte-Preprocessor
        'import/namespace': 'off',
        'import/no-unresolved': 'off',
    },
}
