// TODO: make base to reuse between node and react config files
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:jest/recommended',
    'plugin:prettier/recommended',
    'airbnb-typescript',
    'airbnb',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/no-use-before-define': 'error',
    'arrow-body-style': ['error', 'as-needed'],
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      { devDependencies: ['**/*.test.tsx', '**/*.test.ts'] },
    ],
    'sort-keys': ['error', 'asc'],
    'import/prefer-default-export': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'no-restricted-exports': 'off',
    'no-unused-vars': 'off',
    'no-use-before-define': 'off',
    'prettier/prettier': ['error', { singleQuote: true }],
    'react/function-component-definition': 'off',
    'react/jsx-filename-extension': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/require-default-props': 'off',
    '@typescript-eslint/comma-dangle': 'error',
    '@typescript-eslint/comma-dangle': 'off',
    'comma-dangle': 'off',
    'sort-keys': 'off',
    "no-confusing-arrow": 'off',
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        "pathGroups": [
          {
            pattern: '@rrios-dev/**',
            group: 'internal',
            position: 'after'
          }
        ],
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
          'object',
          'type',
        ],
      },
    ],
    quotes: [2, 'single', { avoidEscape: true }],
  },
};
