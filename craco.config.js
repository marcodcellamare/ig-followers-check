const CracoAlias = require('craco-alias');
const { PurgeCSSPlugin } = require('purgecss-webpack-plugin');
const glob = require('glob-all');

module.exports = {
	plugins: [
		{
			plugin: CracoAlias,
			options: {
				source: 'tsconfig',
				baseUrl: '.',
				tsConfigPath: './tsconfig.paths.json',
			},
		},
	],
	webpack: {
		mode: process.env.NODE_ENV,
		devtool: process.env.NODE_ENV !== 'production' ? 'eval' : '',
		configure: (webpackConfig, { env, paths }) => {
			webpackConfig = {
				...webpackConfig,
				mode: env,
				devtool: 'source-map',
				resolve: {
					...webpackConfig.resolve,
					extensions: ['.js', '.jsx', '.ts', '.tsx']
				},
				performance: {
					...webpackConfig.performance,
					hints: false,
					maxEntrypointSize: 512000,
					maxAssetSize: 512000
				},
				optimization: {
					...webpackConfig.optimization,
					minimize: true,
					runtimeChunk: env === 'production'
						? 'single'
						: false,
					splitChunks: env === 'production'
						? {
							...webpackConfig.splitChunks,
							chunks: 'all',
							maxInitialRequests: Infinity,
							minSize: 20000,
							maxSize: 200000,
							cacheGroups: {
								styles: {
									test: /\.scss$$/,
									chunks: 'all',
									name: 'styles',
									enforce: true
								}
							}
						}
						: {}
				},
				plugins: [
					...webpackConfig.plugins,
					new PurgeCSSPlugin({
						paths: [
							paths.appHtml,
							...glob.sync(`${paths.appSrc}/**/*`, { nodir: true })
						],
						safelist: {
							standard: [
								/-primary$/,
								/-secondary$/,
								/-success$/,
								/-info$/,
								/-warning$/,
								/-careful$/,
								/-danger$/,
								/-emotion$/,
								/-light$/,
								/-dark$/,
								/^col$|^col-/,
								/^p-|^p.-/,
								/^m-|^m./,
								/^g-|^g./,
								/^object-fit-/,
								/^text-/,
								/^flex-/,
								/^justify-content-/,
								/^sticky-/,
								/^table/
							],
							keyframes: true,
							variables: true,
						}
					})
				]
			};
			return webpackConfig;
		}
	}
};