// webpack.config.js
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  // ...otras configuraciones
  plugins: [
    new ESLintPlugin({
      extensions: ['js', 'vue'],
    }),
  ],
};
