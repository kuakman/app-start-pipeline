/**
*	Gulp Task HTML
*	@author kuakman <3dimentionar@gmail.com>
**/
let fs = require('fs-extra');
let _ = require('underscore');
let spawnSync = require('child_process').spawnSync;

module.exports = function(package, args) {
	return () => {
		return spawnSync('./node_modules/.bin/pug', [
			'--path', './src/html',
			'--out', './dist',
			'--obj', `\'${JSON.stringify(_.pick(package, 'name', 'version', 'profile'))}\'`, '--pretty', './src/html'
		], {
			cwd: process.cwd(),
			stdio: 'inherit',
			shell: true
		});
	};
};
