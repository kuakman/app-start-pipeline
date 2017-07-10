/**
*	Build Script for Profiles Test, Development & Production
*	@author Patricio Ferreira <3dimentionar@gmail.com>
**/
let fs = require('fs-extra');
let _ = require('underscore');
let extend = require('extend');
let spawnSync = require('child_process').spawnSync;

let pkg = extend(true, { profile: (process.env.profile || "dev") }, require('../package.json'));
let profile = pkg.environment[pkg.profile];
let args = process.argv.slice(2);

/**
*	Third Party Bundling
**/
if(!fs.pathExistsSync(profile.output) || _.contains(args, 'clean')) {
	let jspm = new require('jspm');
	let builder = new jspm.Builder('/', '../src/jspm.js');

	builder.config(profile.config);
	builder.bundle(profile.bundles, profile.output, profile.options);
}

/**
*	Compile Pug/HTML for Dev & Production Profile
**/
if(_.contains(['dev', 'prod'], pkg.profile)) {
	let result = spawnSync('./node_modules/.bin/pug',
		['--path', './src/html', '--out', './dist', '--obj',
			`\'${JSON.stringify(_.pick(pkg, 'name', 'version', 'profile'))}\'`, '--pretty', './src/html'],
		{ cwd: process.cwd(), stdio: 'inherit', shell: true });
}

/**
*	Bundle & Optimize to production
**/
if(_.contains(['prod'], pkg.profile)) {
	console.log('Production...');
}
