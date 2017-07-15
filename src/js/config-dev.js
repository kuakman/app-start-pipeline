/**
*	SystemJS Configuration - Profile Dev
*	@author kuakman <3dimentionar@gmail.com>
**/
System.config({
	baseURL: '/js',
	defaultJSExtensions: false,
	transpiler: "ts",
	typescriptOptions: { tsconfig: true },
	meta: {
		"styles/*.less": { loader: "less" },
		'bootstrap-css/*.css': { loader: "css" },
		'pages/*': { format: 'register', loader: "ts" },
		'store/*': { format: 'register', loader: "ts" },
		'service/*': { format: 'register', loader: "ts" },
		'ui/*': { format: 'register', loader: "ts" },
		'util/*': { format: 'register', loader: "ts" }
	},
	paths: {
		typescript: "../node_modules/typescript",
		ts: "../node_modules/plugin-typescript/lib/plugin.js",
		"tsconfig.json": "../tsconfig.json",
		"bootstrap-css/": "jspm/github/twbs/bootstrap@3.3.7/css/",
		"github:*": "jspm/github/*",
		"npm:*": "jspm/npm/*",
		"libraries/": "libraries/",
		"styles/": "styles/",
		"pages/": "pages/",
		"ui/": "ui/",
		"store/": "store/",
		"service/": "service/",
		"util/": "util/"
	},
	packages: {
		typescript: {
			main: "lib/typescript.js",
			meta: { "lib/typescript.js": { exports: "ts" } }
		},
		"css": { main: "css.js" },
		"pages": { "defaultExtension": "tsx" },
		"ui": { "defaultExtension": "tsx" },
		"store": { "defaultExtension": "ts" },
		"service": { "defaultExtension": "ts" },
		"util": { "defaultExtension": "ts" }
	},
	map: {
		"bluebird": "npm:bluebird@3.5.0.js",
		"bootstrap": "github:twbs/bootstrap@3.3.7.js",
		"jquery": "npm:jquery@3.2.1.js",
		"less": "npm:systemjs-less-plugin@2.0.0.js",
		"css": "github:systemjs/plugin-css@0.1.35",
		"react": "npm:react@15.6.1.js",
		"react-dom": "npm:react-dom@15.6.1.js",
		"redux": "npm:redux@3.7.1.js",
		"immutable": "npm:immutable@3.8.1.js",
		"redux-actions": "npm:redux-actions@2.2.1.js",
		"redux-logger": "npm:redux-logger@3.0.6.js",
		"redux-promise": "npm:redux-promise@0.5.3.js",
		"redux-socket.io": "npm:redux-socket.io@1.4.0.js",
		"socket.io-client": "npm:socket.io-client@2.0.3.js",
		"systemjs-hot-reloader": "npm:systemjs-hot-reloader@1.1.0.js",
		"systemjs-hmr": "npm:systemjs-hmr@2.0.9.js",
		"@hot": "@empty"
	},
	bundles: {
		"libraries/libraries-dev.js": [
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
			"systemjs-hot-reloader"
		]
	}
});
