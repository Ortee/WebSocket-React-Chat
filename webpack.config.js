var webpack = require('webpack');
var path = require('path');

module.exports = {
  node: { fs: 'empty' },
  context: path.join(__dirname),
  devtool: 'inline-sourcemap',
  entry: './frontend/app.js',
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015'],
          plugins: ['react-html-attrs', 'transform-decorators-legacy'],
        }
      }
    ]
  },
  output: {
    path: path.join(__dirname, '/public'),
    filename: '/bundle.js'
  }
};
