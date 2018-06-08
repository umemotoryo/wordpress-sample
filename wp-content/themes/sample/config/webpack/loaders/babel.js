const { resolve } = require('path')
module.exports = {
  test: /\.js?$/,
  exclude: resolve('node_modules'),
  loader: 'babel-loader',
  options: {
    cacheDirectory: true,
  },
}
