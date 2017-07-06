/**
 *   Karma Configuration
 *   @author Patricio Ferreira <3dimentionar@gmail.com>
 **/
let extend = require('extend');
let path = require('path');

module.exports = function (config) {
	config.set({
		basePath: '.',
		frameworks: ['systemjs', 'mocha', 'chai', 'sinon'],
		files: ['test/**/*.spec.+(ts|tsx|js)'],
		systemjs: {
			configFile: "./test/config-test.js",
			useBundles: true,
			serveFiles: [
				{pattern: path.resolve("src/jspm/*.+(map)"), watched: false, included: false, served: true},
				{pattern: path.resolve("src/jspm/**/*.+(json|map)"), watched: false, included: false, served: true},
				"src/js/**/*.+(ts|tsx|js|json)",
				"node_modules/typescript/lib/typescript.js",
				"tsconfig.json"
			],
			includeFiles: [
				"src/jspm/npm/bluebird@3.5.0/js/browser/bluebird.min.js"
			]
		},
		exclude: [],
		preprocessors: {},
		reporters: ['spec'],
		client: {
			mocha: {timeout: 3000},
			environment: {environment: 'test'}
		},
		port: 9876,
		colors: true,
		logLevel: config.LOG_DEBUG,
		autoWatch: true,
		browsers: ['PhantomJS'],
		singleRun: false,
		concurrency: Infinity
	});
}
