const withTypescript = require('@zeit/next-typescript');
const withSass = require('@zeit/next-sass');
const withSvgr = require('./utils/withSvgr');

module.exports = withTypescript(
  withSass(
    Object.assign({}, withSvgr(), {
        cssModules: true,
        cssLoaderOptions: {
          importLoaders: 1,
          localIdentName: '[local]___[hash:base64:5]',
        },
      },
    ),
  ),
);