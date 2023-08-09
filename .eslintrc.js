module.exports = {
  parser: '@typescript-eslint/parser',
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'prettier',
    'plugin:react-hooks/recommended',
  ],
  rules: {
    'no-console': 0,
    'import/no-unresolved': 'off',
    'import/newline-after-import': ['error', { count: 1 }],
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        groups: [
          'builtin',
          'external',
          'parent',
          'sibling',
          'object',
          'type',
          'index',
        ],
      },
    ],
    curly: ['error', 'all'],
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/consistent-type-definitions': 'off',
    'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
    'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies
  },
};
