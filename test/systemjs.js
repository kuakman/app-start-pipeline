/**
*	Karma SystemJS Configuration
*	@author Patricio Ferreira <3dimentionar@gmail.com>
**/
let path = require('path');

module.exports = function() {
	return {
		configFile: "./src/js/config.js",
		useBundles: true,
		config: {
			typescriptOptions: { tsconfig: true },
			paths: {
				typescript: "node_modules/typescript",
				ts: "node_modules/plugin-typescript/lib/plugin.js",
				systemjs: "src/jspm/system.src.js",
				"libraries/": "src/js/libraries/",
				"pages/": "src/js/pages/"
			},
			packages: {
				typescript: {
					main: "lib/typescript.js",
					meta: { "lib/typescript.js": { exports: "ts" } }
				},
				"test/js/pages": { defaultExtension: "tsx" }
			},
			bundles: {
				"libraries/libraries-test.js": [
				  "jquery",
				  "bootstrap",
				  "react",
				  "react-dom",
				  "redux",
				  "redux-logger",
				  "enzyme"
				]
			},
			transpiler: "ts"
		},
		serveFiles: [
			{ pattern: path.resolve("src/jspm/*.+(js|json|map)"), watched: false, included: false, served: true },
			{ pattern: path.resolve("src/jspm/**/*.+(js|json)"), watched: false, included: false, served: true },
			"src/js/**/*.+(ts|tsx|js|json)",
			"node_modules/typescript/lib/typescript.js",
			"tsconfig.json"
		],
		includeFiles: [
			"node_modules/phantomjs-polyfill/bind-polyfill.js",
			"src/jspm/npm/bluebird@3.5.0/js/browser/bluebird.min.js"
		]
	};
};
