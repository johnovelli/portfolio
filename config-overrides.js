const {
  override,
  fixBabelImports,
  addLessLoader,
  addWebpackAlias,
} = require('customize-cra');
const path = require('path');

module.exports = override((config) => {
  // Disable ESLint during build
  const eslintRule = config.module.rules.find((rule) => 'oneOf' in rule);
  if (eslintRule) {
    eslintRule.oneOf.unshift({
      test: /\.(js|jsx|mjs)$/,
      loader: require.resolve('eslint-loader'),
      exclude: /node_modules/,
      options: {
        // Ignore linting errors during the build
        emitWarning: false,
        emitError: false,
      },
    });
  }
  return config;
});
