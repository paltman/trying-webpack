const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const utils = require('./utils');

const env = {
  NODE_ENV: '"production"',
};
const extractCss = new MiniCssExtractPlugin({
  filename: 'css/app.css'
});

module.exports = merge(common, {
  mode: 'production',
  devtool: '#source-map',
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'postcss-loader'
          },
          {
            loader: 'sass-loader'
          }
        ],
        include: utils.resolve('src/scss')
      },
    ]
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
