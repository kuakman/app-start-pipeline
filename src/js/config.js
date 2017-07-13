/**
*	SystemJS Configuration - Profile Production
*	@author kuakman <3dimentionar@gmail.com>
**/
System.config({
	baseURL: '/js',
	defaultJSExtensions: false,
	transpiler: false,
	packages: {
		"pages": { meta: { "/*": { format: "register" } } },
		"ui": { meta: { "/*": { format: "register" } } },
		"store": { meta: { "/*": { format: "register" } } },
		"service": { meta: { "/*": { format: "register" } } },
		"util": { meta: { "/*": { format: "register" } } }
	},
	map: {
		"bluebird": "npm:bluebird@3.5.0.js",
		"bootstrap": "github:twbs/bootstrap@3.3.7.js",
		"jquery": "npm:jquery@3.2.1.js",
		"less": "npm:systemjs-less-plugin@2.0.0.js",
		"react": "npm:react@15.6.1.js",
		"react-dom": "npm:react-dom@15.6.1.js",
		"redux": "npm:redux@3.7.1.js",
		"immutable": "npm:immutable@3.8.1.js",
		"redux-actions": "npm:redux-actions@2.2.1.js",
		"redux-promise": "npm:redux-promise@0.5.3.js",
		"redux-socket.io": "npm:redux-socket.io@1.4.0.js",
		"socket.io-client": "npm:socket.io-client@2.0.3.js",
		"@hot": "@empty"
	},
	bundles: {
		"libraries/libraries.js": [
			"bluebird",
			"bootstrap",
			"jquery",
			"less",
			"react",
			"react-dom",
			"redux",
			"immutable",
			"redux-actions",
			"redux-promise",
			"redux-socket.io",
			"socket.io-client"
		]
	}
});
