module.exports = {
  'parser': 'babel-eslint',
  'plugins': [
    'babel'
  ],
  'env': {
    'es6': true
  },
  'ecmaFeatures': {
    'modules': true
  },
  'rules': {
    'arrow-body-style': [2, 'as-needed'],
    'babel/arrow-parens': [2, 'as-needed'],
    'arrow-spacing': 2,
    'constructor-super': 2,
    'babel/generator-star-spacing': [2, 'after'],
    'no-class-assign': 2,
    'no-confusing-arrow': 0,
    'no-const-assign': 2,
    'no-dupe-class-members': 2,
    'no-duplicate-imports': [2, { includeExports: true }],
    'no-new-symbol': 2,
    'no-this-before-super': 2,
    'no-useless-computed-key': 2,
    'no-useless-constructor': 0,
    'no-var': 2,
    'babel/object-shorthand': [2, 'always'],
    'prefer-arrow-callback': 1,
    'prefer-const': 2,
    'prefer-reflect': 0,
    'prefer-rest-params': 2,
    'prefer-spread': 2,
    'prefer-template': 2,
    'require-yield': 2,
    'sort-imports': 0,
    'template-curly-spacing': [2, 'never'],
    'yield-star-spacing': 0
  }
};
