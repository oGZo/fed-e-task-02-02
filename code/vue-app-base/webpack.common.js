const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const projectPathRoot = process.cwd()
module.exports = {
  entry: './src/main.js',
  module: {
    rules: [
      {
        test: /.vue$/,
        use: 'vue-loader',
      },
      {
        test: /.js$/,
        include: [path.join(__dirname, 'src')],
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /.(js)$/,
        use: 'eslint-loader',
        enforce: 'pre',
      },
      {
        test: /.(less|css)$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'less-loader'],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)(\?.*)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 5000,
              esModule: false,
              name: '[name].[hash:8].[ext]',
            },
          },
        ],
      },
      {
        test: /.(ejs)$/,
        use: [
          {
            loader: 'ejs-loader',
            options: {
              esModule: false,
            },
          },
        ],
      },
    ],
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'dist'),
  },
  plugins: [
    new webpack.DefinePlugin({
      BASE_URL: '"./"',
    }),
    new HtmlWebpackPlugin({
      title: 'test',
      name: 'index.html',
      template: 'src/index.html',
    }),
    new VueLoaderPlugin(),
  ],
  resolve: {
    alias: {
      '@': `${projectPathRoot}/src`,
    },
    extensions: ['.ts', '.js', '.css', '.less', '.json', '.vue'],
  },
}
