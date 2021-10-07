module.exports = {
  components: './src/components/',
  snippets: './src/snippets/',
  outputPath: './dist/playroom',
  openBrowser: false,
  widths: [768],
  webpackConfig: () => ({
    module: {
      rules: [
        {
          test: /\.png$/,
          exclude: /node_modules/,
          use: [{ loader: 'file-loader' }]
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: [{
            loader: 'babel-loader',
            options: { presets: ['@babel/preset-react'] }
          }]
        }
      ]
    }
  })
}

