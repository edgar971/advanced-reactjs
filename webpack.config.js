const path = require('path');

const config = {
  entry: ['babel-polyfill', './lib/components/index.js'],
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.json', '.js', '.jsx']
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