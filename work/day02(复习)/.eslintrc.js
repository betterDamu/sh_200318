module.exports = {
  env: {
    browser: true,
    es2020: true
  },
  extends: [
    'plugin:vue.md/essential',
    'standard'
  ],
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module'
  },
  plugins: [
    'vue'
  ],
  rules: {
    "object-shorthand":2,
     "prefer-arrow-callback":1
  }
}
