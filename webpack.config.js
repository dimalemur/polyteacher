const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
var nodeExternals = require('webpack-node-externals');

const serverConfig = {
  mode: process.env.NODE_ENV || 'development',
  entry: './src/server/app.ts',
  module: {
      rules: [
          {
              test: /\.tsx?$/,
              loader: 'ts-loader',
              exclude: /node_modules/,
          }
      ]
  },
  resolve: {
      extensions: ['.tsx', '.ts', '.js']
  },
  output: {
      filename: 'app.js',
      path: path.resolve(__dirname, 'dist')
  },
  target: 'node',
  node: {
      __dirname: false
  },
  externals: [nodeExternals()]
};

const clientConfig = {
  mode: process.env.NODE_ENV || 'development',
  context: path.join(__dirname, '/src/client'),
  entry: {
    main: './index.tsx',
  },
  output: {
    path: path.join(__dirname, '/public/build'),
    filename: '[name].js',
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
      maxInitialRequests: Infinity,
      minSize: 0,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name(module) {
            const packageName = module.context.match(
              /[\\/]node_modules[\\/](.*?)([\\/]|$)/,
            )[1];
            return `npm.${packageName.replace('@', '')}`;
          },
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.(pcss|css)$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          },
          {
            loader: 'postcss-loader',
          },
        ],
      },
      {
        test: /\.(png|jpg|svg|gif)$/,
        use: 'file-loader',
      },
      {
        test: /\.(otf|ttf|eot)$/,
        use: 'file-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
    new HtmlWebpackPlugin({
      template: '../resources/index.html',
      favicon: "../resources/icons/favicons/favicon_auth.png"
    }),
    // new CleanWebpackPlugin()
  ],
};

module.exports = [clientConfig,serverConfig]
