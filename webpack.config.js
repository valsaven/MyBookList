/**
 * Created by val on 9/24/16.
 */

'use strict';

var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './server/index.js',
  output: {
    path: __dirname + '/dist',
    filename: '[name].bundle.js'
  },
  loaders: [
    {
      test: /.js$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['es2015']
      }
    }
  ]
};
