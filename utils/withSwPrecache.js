const path = require('path')
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin')

module.exports = (nextConfig = {}) => {
	return Object.assign({}, nextConfig, {
		webpack(config, { dev }) {
			/**
			 * Install and Update our Service worker
			 * on our main entry file :)
			 */
			const oldEntry = config.entry

			config.entry = () =>
				oldEntry().then(entry => {
					entry['main.js'] && entry['main.js'].push(path.resolve('./utils/offline'))
					return entry
				})

			/* Enable only in Production */
			if (!dev) {
				// Service Worker
				config.plugins.push(
					new SWPrecacheWebpackPlugin({
						cacheId: 'ilos-frontend',
						filepath: './static/sw.js',
						minify: true,
						staticFileGlobsIgnorePatterns: [/\.next\//],
						staticFileGlobs: [
							'static/**/*' // Precache all static files by default
						],
						runtimeCaching: [
							// Example with different handlers
							{
								handler: 'fastest',
								urlPattern: /[.](png|jpg|css)/
							},
							{
								handler: 'networkFirst',
								urlPattern: /^http.*/ //cache all files
							}
						]
					})
				)
			}

			return config
		}
	})
}
