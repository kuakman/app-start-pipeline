/**
*	JSPM Dependencies Bundling
*	@author Patricio Ferreira <3dimentionar@gmail.com>
**/
let fs = require('fs-extra');
let _ = require('underscore');
let extend = require('extend');
let pkg = extend(true, { profile: (process.env.profile || "development") }, require('../package.json'));
let profile = pkg.environment[pkg.profile];
let jspm = new require('jspm');
let builder = new jspm.Builder('/', '../src/jspm.js');
let args = process.argv.slice(2);

if(fs.pathExistsSync(profile.output) && !_.contains(args, 'clean'))
	process.exit(0);

builder.config(profile.config);
builder.bundle(profile.bundles, profile.output, profile.options);
