module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['plugin:react/recommended', 'plugin:@typescript-eslint/recommended', 'airbnb'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      tsx: true,
    },
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks'],
  rules: {
    'import/no-extraneous-dependencies': 1,
    '@typescript-eslint/ban-types': 1, // StyledComponentBase<any, {}> failed every time
    'react/jsx-filename-extension': 0, // didn't like jsx in tsx lol
    'import/no-unresolved': 1,
    'import/extensions': 1,
    'linebreak-style': 0,
    'comma-dangle': 1,
    'operator-linebreak': 1,
    'arrow-parens': 0,
    'comma-spacing': 1,
    'arrow-body-style': 0,
    'react/jsx-curly-newline': 0,
    'object-curly-newline': 0,
    'react/jsx-indent': 0,
    'implicit-arrow-linebreak': 0,
    indent: 0,
    'max-len': 0,
    quotes: 1,
    'padded-blocks': 1,
    'react/jsx-tag-spacing': 1,
    'react/prop-types': 1,
    'react/no-array-index-key': 1,
    'jsx-a11y/label-has-associated-control': 0,
    'import/prefer-default-export': 1,
    'no-case-declarations': 0,
    'no-multi-spaces': 0,
    'react/jsx-no-bind': 0,
    'no-plusplus': 0,
    'react/no-unescaped-entities': 0,
    'consistent-return': 0,
    'react/jsx-one-expression-per-line': 0,
    'react-hooks/rules-of-hooks': 1,
    'react-hooks/exhaustive-deps': 1,
  },
};
