module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: ['@nuxtjs/eslint-config-typescript', 'plugin:nuxt/recommended'],
  plugins: [],
  rules: {
    'no-debugger': 'warn',
    'no-shadow': 'error',
    'no-unused-labels': 'error',
    'no-unused-expressions': 'error',
    'no-duplicate-imports': 'error'
  }
}
