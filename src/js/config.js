/**
*	SystemJS Configuration - Profile Development / Production
*	@author Patricio Ferreira <3dimentionar@gmail.com>
**/
System.config({
	baseURL: '/',
	paths: {},
	packages: {
		"pages": { "defaultExtension": "tsx" }
	},
	bundles: {
		'libraires/test.js': [
			'jquery',
			'bootstrap'
		]
	}
});
