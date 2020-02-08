module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@vue/airbnb',
    'plugin:vue/recommended'
  ],
  plugins: [
    'prettier'
  ],
  rules: {
    'comma-dangle': ['error', 'never'],
    'import/extensions': ['error', 'never', {
      js: 'never',
      vue: 'never'
    }],
    'import/no-unresolved': 0,
    'import/no-dynamic-require': 0,
    'space-before-function-paren': ['error', 'never'],
    'vue/attributes-order': ['error', 'always'],
    'import/no-extraneous-dependencies': 1,
    'arrow-parens': ['error', 'as-needed'],
    'no-param-reassign': ['error', { props: false }],
    'max-len': ['error', {
      code: 120, ignoreStrings: true, ignoreUrls: true, ignoreComments: true, ignoreTemplateLiterals: true
    }]

  },
  settings: {
    'import/core-modules': ['vue'],
    'import/resolver': {
      alias: [
        ['@', './'],
        ['~', './']
      ]
    }
  }
};
