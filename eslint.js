module.exports = {
    extends: 'airbnb',
    env: {
        browser: true,
        es6: true,
        node: true,
    },
    rules: {
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
        // react
        'react/jsx-indent-props': ['error', 4],
        'react/jsx-indent': ['error', 4],
    },
    plugins: ['import', 'promise', 'jsx-a11y', 'react'],
};
