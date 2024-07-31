module.exports = {
  root: true,
  extends: [
    '@react-native',
    'plugin:prettier/recommended',
    'plugin:jest/recommended',
  ],
  plugins: ['jest'],
  env: {
    'jest/globals': true,
    node: true,
  },
  rules: {
    'prettier/prettier': ['error', {endOfLine: 'auto'}],
  },
};
