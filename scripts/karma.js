/**
*	Gulp Task Karma
*	@author kuakman <3dimentionar@gmail.com>
**/
let fs = require('fs-extra');
let _ = require('underscore');
let spawnSync = require('child_process').spawnSync;

module.exports = function(package, args) {
	return () => {
		return spawnSync('./node_modules/.bin/karma', ['start'], {
			cwd: process.cwd(),
			stdio: 'inherit',
			shell: true
		});
	};
};
