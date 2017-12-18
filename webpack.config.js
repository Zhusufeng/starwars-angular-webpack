module.exports = {
  entry: './client/app.js',
  output: {
    path: __dirname + '/dist',
    filename: 'app.bundle.js'
  },
  module: {
    loaders: [
      { test: /\.html$/, loader: 'html-loader'}
    ]
  }
}