const path = require('path');

const config = {
  resolve: {
    extensions: ['.json', '.js', '.jsx'],
    modules: [
      path.resolve('./lib'),
      path.resolve('./node_modules')      
    ]
  },
  entry: ['babel-polyfill', './lib/renderers/dom.js'],
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      { 
        test: /.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  }
};

module.exports = config;