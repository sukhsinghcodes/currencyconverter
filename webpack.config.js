const webpack = require('webpack');
const path = require('path');

const SRC_DIR = path.resolve(__dirname, 'src');
const DIST_DIR = path.resolve(__dirname, 'dist');

const loaders = [{
    test: /\.jsx?$/,
    include: SRC_DIR,
    exclude: path.resolve(__dirname, 'node_modules'),
    loader: 'babel',
    query: {
      presets: ['es2015', 'react', 'react-hmre'],
      plugins: ["transform-object-rest-spread"]
    }
}];

module.exports = {
  name: 'app',
  target: 'web',
  context: SRC_DIR,
  entry: './index.js',
  output: {
    path: DIST_DIR,
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  module: {
    loaders: loaders
  }
};