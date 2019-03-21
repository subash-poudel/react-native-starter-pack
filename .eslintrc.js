module.exports = {
    parser: 'babel-eslint',
    extends: ['airbnb', 'plugin:jest/recommended'],
    env: {
        browser: true,
        es6: true,
        'jest/globals': true
    },
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    plugins: ['react', 'jest'],
    rules: {
    },
}
