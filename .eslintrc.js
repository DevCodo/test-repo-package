module.exports = {
  extends: ['airbnb-typescript/base'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  plugins: ['@typescript-eslint', 'import'],
  rules: {
    'no-console': 'warn',
    'import/no-anonymous-default-export': [0],
    'spaced-comment': [0],
    'no-underscore-dangle': [0],
    'object-curly-spacing': ['error', 'always'],

    semi: 'off',
    '@typescript-eslint/semi': [0],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        args: 'none',
      },
    ],
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['warn'],
    'import/order': ['error'],
    '@typescript-eslint/no-explicit-any': ['warn'],
    'max-len': [
      'warn',
      {
        code: 100,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreComments: true,
      },
    ],
    'no-plusplus': [
      'warn',
      {
        allowForLoopAfterthoughts: true,
      },
    ],
  },
}
