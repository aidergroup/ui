module.exports = {
  extends: ['airbnb', 'prettier'],
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 2018,
    ecmaFeatures: {
      impliedStrict: true,
      jsx: true,
    },
    sourceType: 'module',
    useJSXTextNode: true,
  },
  plugins: ['react', 'react-hooks', 'import'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx'],
      },
    },
  },
  env: {
    browser: true,
    es6: true,
  },
  rules: {
    'import/prefer-default-export': 0,
    'react/jsx-filename-extension': 0,
    'import/no-extraneous-dependencies': 0,
    'react/destructuring-assignment': 0,
    'react/prop-types': 0,
    'prefer-destructuring': 0,
    'react/jsx-props-no-spreading': 0,
    'react-hooks/rules-of-hooks': 2,
    'react-hooks/exhaustive-deps': 1,
    'no-underscore-dangle': 0,
    'react/jsx-fragments': 0,
    'no-alert': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-static-element-interactions': 0,
  },
  // overrides: {
  //   files: 'src/**/*.stories.js',
  //   rules: {
  //     'import/no-extraneous-dependencies': 0,
  //     'import/no-unresolved': 0,
  //   },
  // },
}
