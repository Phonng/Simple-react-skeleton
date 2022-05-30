module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    // "eslint:recommended",
    'plugin:react/recommended', // Uses the recommended rules from @eslint-plugin-react
    'plugin:security/recommended',
    'plugin:prettier/recommended',
    'prettier',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'no-console': 'warn',
  },
}
