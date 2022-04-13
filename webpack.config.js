const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

const plugins = [
  new HtmlWebpackPlugin({
    template: 'public/index.html',
  }),
];

const tsLoaders = [{ loader: 'ts-loader', options: { allowTsInNodeModules: true } }];
const jsLoaders = [];

const config = {
  entry: ['./src/index.ts'],
  mode: 'development',
  output: {
    path: path.resolve(__dirname, '../../dist'),
  },
  devServer: {
    open: true,
    host: '0.0.0.0',
  },
  plugins,
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/i,
        exclude: ['/node_modules/'],
        use: tsLoaders,
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: jsLoaders,
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: 'asset',
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
};

module.exports = config