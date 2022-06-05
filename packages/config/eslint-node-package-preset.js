module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
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
  plugins: ['@typescript-eslint'],
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
    '@typescript-eslint/comma-dangle': 'error',
    '@typescript-eslint/comma-dangle': 'off',
    'comma-dangle': 'off',
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        pathGroups: [
          {
            pattern: '@rrios-dev/**',
            group: 'internal',
            position: 'after',
          },
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
