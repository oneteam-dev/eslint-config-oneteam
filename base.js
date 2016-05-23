module.exports = {
  extends: [
    'eslint-config-oneteam/rules/best-practices',
    'eslint-config-oneteam/rules/nodejs-commonjs',
    'eslint-config-oneteam/rules/possible-errors',
    'eslint-config-oneteam/rules/stylistic',
    'eslint-config-oneteam/rules/variables'
  ],
  env: {
    browser: true,
    node: true,
    commonjs: true,
    mocha: true,
    jest: true
  }
};
