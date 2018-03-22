const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const utils = require('./utils');

const env = {
  NODE_ENV: '"production"',
};
const extractCss = new MiniCssExtractPlugin({
  'filename': '[name].css',
  'chunkFilename': '[id].css'
});

module.exports = merge(common, {
  mode: 'production',
  devtool: '#source-map',
  module: {
    rules: utils.styleLoaders({extractor: MiniCssExtractPlugin})
  },
  optimization: {
    minimize: true
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': env,
    }),
    extractCss,
  ],
});
