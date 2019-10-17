const path = require('path')

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        // The ? in the regex just means "optional"
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.scss$/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }, { loader: 'sass-loader' }],
      },
      {
        test: /\.(png|gif|jpg|svg)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 50000,
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.scss', '.js', '.jsx', '.json', '.png', '.gif', '.jpg', '.svg'],
  },
  output: {
    path: path.resolve(__dirname, 'dist/'),
    publicPath: '',

    filename: 'sample.js',
    // https://webpack.js.org/configuration/output/#output-librarytarget
    libraryTarget: 'umd',
  },
}
