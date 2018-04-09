module.exports = (nextConfig = {}) => {
  return Object.assign({}, nextConfig, {
    webpack(config, options) {
      if(!options.defaultLoaders) {
        throw new Error('This plugin is not compatible with Next.js versions below 5.0.0 https://err.sh/next-plugins/upgrade')
      }

      const { dir, defaultLoaders } = options

      config.resolve.extensions.push('.svg')
      config.module.rules.push({
        test: /\.+(svg)$/,
        include: [dir],
        exclude: /node_modules/,
        use: [
          defaultLoaders.babel,
          {
            loader: 'svgr/webpack',
          }
        ]
      })

      if (typeof nextConfig.webpack === 'function') {
        return nextConfig.webpack(config, options)
      }

      return config
    }
  })
}
