/**
*	Build Process
*	@author Patricio Ferreira <3dimentionar@gmail.com>
**/
let path = require('path');
let Builder = require('systemjs-builder');
let builder = new Builder('.', './src/js/config.js');

builder.config({
	map: {
		jquery: 'node_modules/jquery/dist/jquery.js',
		bootstrap: 'node_modules/bootstrap/dist/js/bootstrap.js'
	}
});

builder.bundle('./src/js/libraries.js',
	'./src/js/libraries/test.js',
	{ minify: false, mangle: false, sourceMaps: true });
