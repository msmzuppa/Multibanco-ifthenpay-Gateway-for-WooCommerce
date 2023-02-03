// webpack.config.js
const defaultConfig = require('@wordpress/scripts/config/webpack.config');
const WooCommerceDependencyExtractionWebpackPlugin = require( '@woocommerce/dependency-extraction-webpack-plugin' );

module.exports = {
	...defaultConfig,
	// …snip
	plugins: [ new WooCommerceDependencyExtractionWebpackPlugin() ],
};