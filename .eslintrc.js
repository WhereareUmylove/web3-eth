module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-parser',
    sourceType: 'module',
    "ecmaFeatures": {
      "legacyDecorators": true
    }
  },
  env: {
    browser: true,
    node: true,
    es6: true
  },
  extends: ['plugin:vue/recommended', 'eslint:recommended'],

  // add your custom rules here
  // it is base on https://github.com/vuejs/eslint-config-vue
  rules:{
    "no-unused-vars": 0,
    "vue/html-self-closing": 0,
    "vue/max-attributes-per-line": 0,
    "vue/singleline-html-element-content-newline": [0, {
      "ignoreWhenNoAttributes": true,
      "ignoreWhenEmpty": true,
      "ignores": ["pre", "textarea", ...INLINE_ELEMENTS]
    }]
  }
}
