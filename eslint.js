module.exports = {
    extends: 'airbnb',
    env: {
        browser: true,
        es6: true,
        node: true,
    },
    rules: {
        'import/no-unresolved': 0, // ignore webpack alias
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
        'no-param-reassign': 0,
        'no-underscore-dangle': 0,
    },
};
