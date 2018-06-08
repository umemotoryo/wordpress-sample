const plugins = {
  'postcss-reporter': {},
  'postcss-browser-reporter': {},
  'autoprefixer': {},
  'cssnano': {
    preset: 'default',
    autoprefixer: true,
  }
}

module.exports = (context) => {
  return {
    plugins: plugins
  }
}
