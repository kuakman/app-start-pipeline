/**
 *   Karma Configuration
 *   @author Patricio Ferreira <3dimentionar@gmail.com>
 **/
let path = require('path');

module.exports = function (config) {
	config.set({
		basePath: '.',
		frameworks: ['systemjs', 'mocha', 'chai', 'sinon'],
		plugins: [
			'karma-systemjs',
			'karma-mocha',
			'karma-chai',
			'karma-sinon',
			'karma-coverage',
			'karma-phantomjs-launcher',
			'karma-chrome-launcher',
			'karma-spec-reporter',
			require('./test/plugins/systemjs-coverage')
		],
		files: ['test/**/*.spec.+(ts|tsx|js)'],
		systemjs: {
			configFile: "./test/js/config-test.js",
			useBundles: true,
			serveFiles: [
				{ pattern: path.resolve("src/js/jspm/*.+(map)"), watched: false, included: false, served: true },
				{ pattern: path.resolve("src/js/jspm/**/*.+(json|map)"), watched: false, included: false, served: true },
				{ pattern: path.resolve("test/js/*.js"), watched: true, included: false, served: false },
				"src/js/!(jspm)/**/*.+(ts|tsx|js|json|less)",
				"node_modules/typescript/lib/typescript.js",
				"tsconfig.json"
			],
			includeFiles: [
				"src/js/jspm/npm/bluebird@3.5.0/js/browser/bluebird.min.js",
				"src/js/jspm/npm/systemjs-less-plugin@2.0.0/less.browser.js",
				"test/js/commons.js"
			]
		},
		exclude: [],
		preprocessors: {
			'src/js/!(libraries|jspm)/**/*.+(ts|tsx)': ['systemjs-typescript', 'coverage']
		},
		reporters: ['spec', 'systemjs-coverage', 'coverage'],
		coverageReporter: {
			dir: './coverage',
			reporters: [
				{ type: 'html', subdir: 'html' },
				{ type: 'lcovonly', subdir: '.' }
			]
		},
		client: {
			mocha: { timeout: 3000 },
			environment: { environment: 'test' }
		},
		port: 9876,
		colors: true,
		logLevel: config.LOG_INFO,
		autoWatch: true,
		browsers: ['PhantomJS'],
		singleRun: false,
		concurrency: Infinity
	});
}
