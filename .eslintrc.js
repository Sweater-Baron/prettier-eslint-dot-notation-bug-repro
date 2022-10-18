module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
    node: true,
  },
  extends: [
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  root: true,
  overrides: [
    {
      // Keeping typescript-specific stuff in here keeps eslint from crashing or doing weird stuff
      // in js files
      files: ['*.ts', '*.tsx'],

      // You should extend TypeScript plugins here,
      // instead of extending them outside the `overrides`.
      extends: [
        'airbnb-typescript',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
      ],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        tsconfigRootDir: __dirname,
        project: ['./tsconfig.json'], // Specify it only for TypeScript files
      },
      plugins: ['@typescript-eslint'],
    },
  ],
};
