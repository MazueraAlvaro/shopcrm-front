// next.config.js
module.exports = {
	// ... rest of the configuration.
	experimental: {
		outputStandalone: true,
	},
	webpackDevMiddleware: (config) => {
		config.watchOptions = {
			poll: 1000,
			aggregateTimeout: 300,
		};
		return config;
	},
};
