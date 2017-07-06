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
			map: {
                "bluebird": "npm:bluebird@3.5.0.js",
                "bootstrap": "github:twbs/bootstrap@3.3.7.js",
                "enzyme": "npm:enzyme@2.9.1.js",
                "jquery": "npm:jquery@3.2.1.js",
                "plugin-babel": "npm:systemjs-plugin-babel@0.0.25.js",
                "react": "npm:react@15.6.1.js",
                "react-addons-test-utils": "npm:react-addons-test-utils@15.6.0.js",
                "react-dom": "npm:react-dom@15.6.1.js",
                "react-test-renderer": "npm:react-test-renderer@15.6.1.js",
                "redux": "npm:redux@3.7.1.js",
                "redux-actions": "npm:redux-actions@2.2.1.js",
                "redux-logger": "npm:redux-logger@3.0.6.js",
                "redux-promise": "npm:redux-promise@0.5.3.js",
                "redux-socket.io": "npm:redux-socket.io@1.4.0.js",
                "socket.io-client": "npm:socket.io-client@2.0.3.js"
			},
			bundles: {
				"libraries/libraries-test.js": [
                  "bluebird",
				  "jquery",
				  "bootstrap",
				  "react",
				  "react-dom",
				  "redux",
				  "redux-logger",
				  "redux-actions",
				  "redux-promise",
				  "redux-socket.io",
				  "socket.io-client",
				  "enzyme"
				]
			},
			transpiler: "ts"
		},
		serveFiles: [
			{ pattern: path.resolve("src/jspm/*.+(map)"), watched: false, included: false, served: true },
			{ pattern: path.resolve("src/jspm/**/*.+(json|map)"), watched: false, included: false, served: true },
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
