module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
        'react-native/react-native': true,
        jest: true,
    },
    settings: {
        react: { version: 'detect' },
        'import/resolver': {
            typescript: {},
        },
    },
    extends: [
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'standard-with-typescript',
        'standard',
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier',
        'plugin:prettier/recommended',
        'prettier',
    ],

    parserOptions: {
        ecmafeatures: { jsx: true },
        ecmaVersion: 'latest',
        project: ['./tsconfig.json', './packages/*/tsconfig.json'],
        tsconfigRootDir: __dirname,
        sourceType: 'module',
    },
    plugins: ['react', '@typescript-eslint', 'react-native', 'prettier'],
    rules: {
        'react/react-in-jsx-scope': 'off',
        'react/jsx-filename-extension': [
            'error',
            { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
        ],
        'no-use-before-define': [
            'error',
            { functions: true, classes: true, variables: false },
        ],
        'react-native/no-unused-styles': 'error',
        'react-native/split-platform-components': 'off',
        'react-native/no-inline-styles': 'error',
        'react-native/no-color-literals': 'error',
        'react-native/no-raw-text': 'error',
        'react-native/no-single-element-style-arrays': 'error',
    },
};
