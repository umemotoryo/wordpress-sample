const ExtractTextPlugin = require('extract-text-webpack-plugin')
const { env } = require('../configuration.js')
const isProduction = (process.env.NODE_ENV === 'production')

module.exports = {
  test: /\.(scss|sass|css)$/i,
  use: ExtractTextPlugin.extract({
    fallback: 'style-loader',
    use: [
      { loader: 'css-loader', options: { minimize: env.NODE_ENV === 'production' } },
      { loader: 'postcss-loader', options: { sourceMap: isProduction, config: { path: 'config/webpack/postcss.config.js' } } },
      'resolve-url-loader',
      { loader: 'sass-loader', options: { sourceMap: true } }
    ]
  })
}
