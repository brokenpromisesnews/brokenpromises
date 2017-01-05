const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    styles: path.join(__dirname, 'static', 'styles'),
  },
  resolve: {
    extensions: ['', '.scss'],
  },
  output: {
    path: path.join(__dirname, 'static', 'dist'),
    filename: '[name].css'
  },
  plugins: [
    new ExtractTextPlugin('[name].css')
  ],
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader?minimize!sass-loader')
      }
    ]
  },
  sassLoader: {
    outputStyle: 'compressed'
  }
};