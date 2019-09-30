module.exports = {
    parser: '@typescript-eslint/parser',
    extends: 'airbnb-base',
    env: {
        browser: true,
        es6: true,
        node: true,
    },
    globals: {},
    plugins: ['@typescript-eslint', 'import', 'promise'],
    rules: {
        'comma-dangle': [
            'error', {
                arrays: 'always-multiline',
                objects: 'always-multiline',
                imports: 'always-multiline',
                exports: 'always-multiline',
                functions: 'never',
            }],
        indent: [2, 4],
        'max-len': [
            'error', 120, 2, {
                ignoreUrls: true,
                ignoreComments: true,
                ignoreRegExpLiterals: true,
                ignoreStrings: true,
                ignoreTemplateLiterals: true,
            },
        ],
        'no-console': 0, // console to be removed by terser-webpack-plugin
        // import
        'import/no-unresolved': 0, // ignore webpack alias
        // promise
        'promise/param-names': 'error',
        'promise/always-return': 'error',
        'promise/catch-or-return': 'error',
        'promise/no-native': 'off',
        // typescript
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': 'error',
        'no-useless-constructor': 'off',
        '@typescript-eslint/no-useless-constructor': 'error',
    },
    settings: {
        'import/extensions': ['.js', '.ts'],
        'import/parsers': {
            '@typescript-eslint/parser': ['.ts'],
        },
        'import/resolver': {
            node: {
                extensions: ['.js', '.ts'],
            },
        },
    },
};
