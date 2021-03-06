module.exports = {
  'plugins': [
    'react'
  ],
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true
    }
  },
  'rules': {
    'jsx-quotes': [2, 'prefer-single'],
    'react/jsx-boolean-value': 2,
    'react/jsx-closing-bracket-location': [1, { selfClosing: 'after-props', nonEmpty: 'after-props' }],
    'react/jsx-curly-spacing': 2,
    'react/jsx-equals-spacing': [2, 'never'],
    'react/jsx-first-prop-new-line': 0,
    'react/jsx-handler-names': 0,
    'react/jsx-indent': [2, 2],
    'react/jsx-indent-props': [2, 2],
    'react/jsx-key': 2,
    'react/jsx-max-props-per-line': 0,
    'react/jsx-no-bind': 0,
    'react/jsx-no-duplicate-props': 2,
    'react/jsx-no-literals': 0,
    'react/jsx-no-target-blank': 0,
    'react/jsx-no-undef': 2,
    'react/jsx-pascal-case': 2,
    'react/jsx-sort-props': 0,
    'react/jsx-space-before-closing': [2, 'always'],
    'react/jsx-uses-react': 2,
    'react/jsx-uses-vars': 2,
    'react/display-name': 2,
    'react/forbid-prop-types': 2,
    'react/no-danger': 0,
    'react/no-deprecated': [2, { 'react': '0.14.0' }],
    'react/no-did-mount-set-state': [2, 'allow-in-func'],
    'react/no-did-update-set-state': 2,
    'react/no-direct-mutation-state': 2,
    'react/no-is-mounted': 2,
    'react/no-multi-comp': 2,
    'react/no-set-state': 0,
    'react/no-string-refs': 0,
    'react/no-unknown-property': 2,
    'react/prefer-es6-class': 2,
    'react/prefer-stateless-function': 1,
    'react/prop-types': 2,
    'react/react-in-jsx-scope': 2,
    'react/require-extension': 0,
    'react/require-render-return': 2,
    'react/self-closing-comp': 2,
    'react/wrap-multilines': 2
  }
};
