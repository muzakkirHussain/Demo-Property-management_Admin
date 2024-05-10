module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: ['airbnb', 'airbnb/hooks'],
  ignorePatterns: ['dist', '.eslintrc.cjs', 'plugin:prettier/recommended'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'react/no-unstable-nested-components': 'off',
    'operator-linebreak': 'off',
    'react/jsx-no-target-blank': 'off',
    'implicit-arrow-linebreak': 'off'
    'comma-dangle': 'off',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
};
