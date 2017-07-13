/**
*	SystemJS Configuration - Profile Test
*	@author kuakman <3dimentionar@gmail.com>
**/
System.config({
	baseURL: '/',
	defaultJSExtensions: false,
	transpiler: "ts",
	typescriptOptions: { tsconfig: true },
	meta: {
		"styles/*.less": { loader: "less" },
		'pages/*': { format: 'register' },
		'store/*': { format: 'register' },
		'service/*': { format: 'register' },
		'ui/*': { format: 'register' },
		'util/*': { format: 'register' }
	},
	paths: {
		typescript: "node_modules/typescript",
		ts: "node_modules/plugin-typescript/lib/plugin.js",
		systemjs: "src/js/jspm/system.src.js",
		"github:*": "src/js/jspm/github/*",
		"npm:*": "src/js/jspm/npm/*",
		"libraries/": "src/js/libraries/",
		"styles/": "src/js/styles/",
		"pages/": "src/js/pages/",
		"ui/": "src/js/ui/",
		"store/": "src/js/store/",
		"service/": "src/js/service/",
		"util/": "src/js/util/"
	},
	packages: {
		typescript: {
			main: "lib/typescript.js",
			meta: { "lib/typescript.js": { exports: "ts" } }
		},
		"pages": { "defaultExtension": "tsx" },
		"ui": { "defaultExtension": "tsx" },
		"store": { "defaultExtension": "ts" },
		"service": { "defaultExtension": "ts" },
		"util": { "defaultExtension": "ts" },
		"test/js/pages": { "defaultExtension": "tsx" }
	},
	map: {
		"bluebird": "npm:bluebird@3.5.0.js",
		"bootstrap": "github:twbs/bootstrap@3.3.7.js",
		"enzyme": "npm:enzyme@2.9.1.js",
		"jquery": "npm:jquery@3.2.1.js",
		"less": "npm:systemjs-less-plugin@2.0.0.js",
		"react": "npm:react@15.6.1.js",
		"react-addons-test-utils": "npm:react-addons-test-utils@15.6.0.js",
		"react-dom": "npm:react-dom@15.6.1.js",
		"react-test-renderer": "npm:react-test-renderer@15.6.1.js",
		"redux": "npm:redux@3.7.1.js",
		"immutable": "npm:immutable@3.8.1.js",
		"redux-actions": "npm:redux-actions@2.2.1.js",
		"redux-logger": "npm:redux-logger@3.0.6.js",
		"redux-promise": "npm:redux-promise@0.5.3.js",
		"redux-socket.io": "npm:redux-socket.io@1.4.0.js",
		"socket.io-client": "npm:socket.io-client@2.0.3.js",
		"@hot": "@empty"
	},
	bundles: {
		"libraries/libraries-test.js": [
			"bluebird",
			"bootstrap",
			"jquery",
			"less",
			"react",
			"react-dom",
			"redux",
			"immutable",
			"redux-logger",
			"redux-actions",
			"redux-promise",
			"redux-socket.io",
			"socket.io-client",
			"enzyme"
		]
	}
});
