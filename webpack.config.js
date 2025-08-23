const defaultConfig = require('@wordpress/scripts/config/webpack.config');
const ESLintPlugin = require('eslint-webpack-plugin');

const plugins = defaultConfig.plugins.filter((p, i) => {
	if (i === 5) {
		console.log(defaultConfig.plugins[i]);
		return false;
	}

	return true;
});

module.exports = {
	...defaultConfig,
	plugins: [
		...plugins,
		new ESLintPlugin()
	],
	optimization: {}
};