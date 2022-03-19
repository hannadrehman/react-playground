module.exports = {
  env: {
    browser: true,
  },
  extends: ['airbnb', 'prettier', 'plugin:react-hooks/recommended'],
  plugins: ['prettier', 'react'],
  rules: {
    'prettier/prettier': ['error'],
    'react/react-in-jsx-scope': 'off',
  },
};
