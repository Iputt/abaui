module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  globals: {
    defineEmits: 'readonly',
    defineProps: 'readonly'
  },
  extends: [
    'plugin:vue/vue3-essential', // 这里需要注意 vue2 是`plugin:vue/essential`
    'standard',
    'prettier',
    'plugin:prettier/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint', 'vue', 'prettier'],
  rules: {
    'prettier/prettier': 'error'
  }
};
