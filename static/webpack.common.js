const webpack = require('webpack');
const utils = require('./utils');

module.exports = {
  entry: utils.resolve('src/js/index.js'),
  output: {
    path: utils.resolve('dist'),
    // filename: './js/site.js',
    publicPath: '/site_media/static/',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: utils.resolve('src/js'),
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: 'images/[name].[ext]',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.json'],
    alias: {
      jquery: 'jquery/src/jquery',
      '@': utils.resolve('src'),
    },
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
    }),
  ],
};
