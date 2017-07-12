/**
*	Gulp Task Release
*	@author kuakman <3dimentionar@gmail.com>
**/
let resolve = require('path').resolve;
let fs = require('fs-extra');
let _ = require('underscore');
let _s = require('underscore.string');
let extend = require('extend');
let glob = require('glob');
let Builder = require('systemjs-builder');
let builder = new Builder('src/js', './src/js/config.js');

var output = function(file) {
	return _s.strLeftBack(`./dist/js/${file}`, '.tsx') + '.js';
};

var normalize = function(files) {
	return _.reduce(files, (memo, file) => {
		memo.push(_s.strRight(file, './src/js/'));
		return memo;
	}, []);
};

var bundle = function(profile, file, ix, files) {
	let diff = _.without(files, file).join(' & ');
	builder.bundle(`${file} - (${diff})`, output(file), profile.options);
};

var bundles = function(files, profile) {
	return _.map(normalize(files), _.bind(bundle, this, profile));
};

/**
*	SystemJS Production
**/
var systemjs = function(package) {
	const { packages, baseURL } = package.jspm.directories;
	fs.copySync(`${packages}/system-csp-production.js`, './dist/js/libraries/system-csp-production.js');
	fs.copySync(`${baseURL}/config.js`, './dist/js/config.js');
};

/**
*	Copy Dependencies
**/
var dependencies = function(package, profile) {
	fs.copySync(profile.output, './dist/js/libraries/libraries.js');
};

module.exports = function(package, args) {
	let option = package.profile;
	let profile = package.environment[option];

	return (callback) => {
		builder.config(profile.code.config);
		glob("./src/js/**/*-bundle.tsx", { nodir: true, cwd: process.cwd(), realpath: false }, (err, files) => {
			if(err) return callback(err);
			try {
				bundles(files, profile.code);
				dependencies(package, profile.dependencies);
				systemjs(package);
				callback();
			} catch(ex) {
				callback(ex);
			}
		});
	};
};
