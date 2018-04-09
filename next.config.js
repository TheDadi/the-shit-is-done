const withTypescript = require('@zeit/next-typescript');
const withSass = require('@zeit/next-sass');
const { compose } = require('redux');
const webpack = require('webpack');
const path = require('path');
const withSvgr = require('./utils/withSvgr');
const withSwPrecache = require('./utils/withSwPrecache');

const enhancers = compose(
  withTypescript,
  withSass,
  withSvgr,
  withSwPrecache,
);

const env = process.env.NODE_ENV;

module.exports = enhancers({
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: '[local]___[hash:base64:5]',
  },
  webpack(config) {
    config.resolve = {
      extensions: ['.js', '.json', '.jsx', '.ts', '.tsx'],
      alias: {
        '@src': path.join(__dirname, './src'),
      },
    };

    config.plugins.push(
      new webpack.DefinePlugin({
        'process.env.ENV': JSON.stringify(env),
        'process.env.NODE_ENV': JSON.stringify(env),
      }),
    );

    if (env !== 'development') {
      config.plugins.push(
        new webpack.optimize.UglifyJsPlugin(),
      );
    }

    return config;
  },
});