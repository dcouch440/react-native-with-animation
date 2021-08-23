module.exports = {
  root: true,
  extends: [
    '@react-native-community/eslint-config',
    'standard-with-typescript',
    'eslint-config-prettier'
  ],
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'react',
    'react-native'
  ],
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true
    },
    'project': './tsconfig.json'
  },
  'env': {
    'react-native/react-native': true
  },
  'rules': {
    'prettier/prettier': 'off',
    'react-native/no-unused-styles': 'warn',
    'react-native/no-inline-styles': 'off',
    'react-native/no-raw-text': ['warn', {
      skip: ['CustomText']
    }],
    'react-native/no-single-element-style-arrays': 'warn',
    'object-curly-spacing': 'error',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/no-floating-promises': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'react/jsx-curly-spacing': ['error', {
      when: 'never',
      allowMultiline: true,
      children: true
    }],
    'eol-last': ['error', 'always'],
    'no-multiple-empty-lines': 'error',
    'semi': ['error', 'always'],
    'react/jsx-sort-props': ['error', {
      'callbacksLast': true,
      'shorthandFirst': true,
      'shorthandLast': false,
      'ignoreCase': true,
      'noSortAlphabetically': false,
      'reservedFirst': false
    }],
    'react/jsx-wrap-multilines': ['error', {
      'declaration': 'parens-new-line',
      'assignment': 'parens-new-line',
      'return': 'parens-new-line',
      'arrow': 'parens-new-line',
      'condition': 'ignore',
      'logical': 'ignore',
      'prop': 'ignore'
    }],
    'arrow-parens': ['error', 'as-needed'],
    'no-trailing-spaces': ['error', { 'skipBlankLines': true, 'ignoreComments': true }],
    'react/jsx-closing-bracket-location': [
      1,
      'line-aligned'
    ],
    'react/jsx-max-props-per-line': ['error', {
      'max-len': 1
    }],
    'react/jsx-first-prop-new-line': [1, 'multiline-multiprop'],
    'react/jsx-tag-spacing': ['error', {
      'closingSlash': 'never',
      'beforeSelfClosing': 'always',
      'afterOpening': 'never',
      'beforeClosing': 'allow'
    }],
    'react/jsx-equals-spacing': [0, 'always'],
    'semi-spacing': 'error',
    'indent': ['error', 2],
    'no-unused-vars': 'warn',
    'keyword-spacing': 'error',
    'space-before-function-paren': 'error',
    'react/react-in-jsx-scope': 'off',
    'eqeqeq': 'error',
    'curly': 'error',
    'block-spacing': ['error', 'always'],
    'brace-style': ['error', '1tbs'],
  }
};
