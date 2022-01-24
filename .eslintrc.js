module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: ['@nuxtjs/eslint-config-typescript', 'plugin:nuxt/recommended'],
  plugins: [],
  // add your custom rules here
  rules: {
    'no-debugger': 'warn',
    'no-shadow': 'error',
    'no-unused-labels': 'error',
    'no-unused-expressions': 'error',
    'no-duplicate-imports': 'error',
    'require-await': false
  }
}
