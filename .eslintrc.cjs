module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'airbnb',
    'airbnb-typescript'
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    '@typescript-eslint/indent': ['error', 4],
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-shadow': 'off',

    'arrow-body-style': ['off', 'never'],
    'consistent-return': 'off',
    'max-len': ['error', 150, 4, {
      ignoreUrls: true,
      ignoreComments: false,
      ignoreRegExpLiterals: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
    }],
    'no-continue': 'off',
    'no-console': 'off',
    'no-param-reassign': 'off',
    'no-restricted-syntax': [
      'off',
      {
        'selector': "BinaryExpression[operator='in']",
      },
    ],
    'no-shadow': 'off',

    'import/extensions': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off',
  },
}
