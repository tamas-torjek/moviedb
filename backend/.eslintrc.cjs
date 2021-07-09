module.exports = {
  env: {
    node: true,
    es2021: true
  },
  plugins: ['security', 'prettier', 'import'],
  extends: [
    'airbnb-base',
    'eslint:recommended',
    'plugin:node/recommended',
    'plugin:security/recommended',
    'plugin:import/recommended',
    'prettier'
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  rules: {
    'prettier/prettier': 'error',
    'arrow-body-style': 'off',
    'prefer-arrow-callback': 'off',
    'import/extensions': [
      1,
      {
        js: 'always'
      }
    ],
    // ignore node aliases (package.json -> imports)
    'import/no-unresolved': [
      2,
      {
        ignore: ['^#[a-z]+']
      }
    ],
    // todo: keep for now to make errors go away, but this might not be a good idea...
    'node/no-missing-import': 0,
    // enable imports
    'node/no-unsupported-features/es-syntax': [
      0,
      {
        version: '>=14.17.0',
        ignores: []
      }
    ],
    'no-useless-escape': 0
  }
};
