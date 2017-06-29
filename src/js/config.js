/**
*	SystemJS Configuration - Profile Development / Production
*	@author Patricio Ferreira <3dimentionar@gmail.com>
**/
System.config({
	baseURL: '/',
	paths: {
		"pages/": "js/pages/"
	},
	packages: {
		"pages": { "defaultExtension": "tsx" }
	},
	bundles: {
		'libraries/test.js': [
			'jquery',
			'bootstrap'
		]
	}
});
