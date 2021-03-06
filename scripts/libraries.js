/**
*	Gulp Task Libraries Bundling
*	@author kuakman <3dimentionar@gmail.com>
**/
let fs = require('fs-extra');
let _ = require('underscore');

module.exports = function(package, args) {
	let option = package.profile;
	let profile = package.environment[option].dependencies;
	return (callback) => {
		let bundlePath = `./src/js/libraries/libraries${(option !== 'prod' ? ('-' + option) : '')}.js`;
		if(fs.pathExistsSync(bundlePath)) return callback();
		let jspm = new require('jspm');
		let builder = new jspm.Builder();
		builder.config(profile.config);
		builder.bundle(profile.bundles, profile.output, profile.options)
		.then(() => { callback(); }).catch((err) => { callback(err); });
	};
};
