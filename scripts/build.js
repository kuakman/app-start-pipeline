/**
*	Gulp Task Build
*	This is bad! SystemJS & JSPM are not helping much with production pipeline
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

var systemBundles = {};

var toJS = function(file) {
	return _s.strLeftBack(file, '.') + '.js';
};

var listToJS = function(files) {
	return _.map(files, toJS);
};

var saveBundles = function() {
	let template = _.template(fs.readFileSync('./scripts/bundles.tpl', { encoding: 'utf8' }));
	return fs.outputFileSync('./dist/js/bundles.js', template({
		bundles: JSON.stringify(systemBundles, null, 4)
	}));
};

var output = function(file) {
	return `./dist/js/bundles/${toJS(file)}`;
};

var normalizePath = function(files) {
	return _.reduce(files, (memo, file) => {
		memo.push(_s.strRight(file, './src/js/'));
		return memo;
	}, []);
};

var bundle = function(profile, file, ix, files) {
	let diff = _.without(files, file).join(' & ');
	return builder.bundle(`${file} - (${diff})`, output(file), profile.options);
};

var bundles = function(files, profile) {
	return Promise.all(_.map(normalizePath(files), _.bind(bundle, this, profile))).then((results) => {
		_.map(results, (output) => {
			var normalized = output.modules;
			systemBundles[toJS(`bundles/${normalized[0]}`)] = _.rest(normalized);
			return output;
		});
	});
};

/**
*	SystemJS Production
**/
var systemjs = function(package) {
	const { packages, baseURL } = package.jspm.directories;
	fs.copySync(`${packages}/system-csp-production.js`, './dist/js/libraries/system-csp-production.js');
	fs.copySync(`${packages}/system-csp-production.js.map`, './dist/js/libraries/system-csp-production.js.map');
	fs.copySync(`${packages}/system-csp-production.src.js`, './dist/js/libraries/system-csp-production.src.js');
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
				bundles(files, profile.code).then(() => {
					saveBundles();
					dependencies(package, profile.dependencies);
					systemjs(package);
					callback();
				});
			} catch(ex) {
				callback(ex);
			}
		});
	};
};
