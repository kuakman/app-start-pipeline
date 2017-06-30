/**
*	Jspm Dependencies Bundle
*	@author Patricio Ferreira <3dimentionar@gmail.com>
**/
let extend = require('extend');
let pkg = extend(true, { profile: (process.env.profile || "development") }, require('./package.json'));
let profile = pkg.environment[pkg.profile];
let jspm = new require('jspm');
let builder = new jspm.Builder();

builder.config(profile.config);
builder.bundle(profile.bundles, profile.output, profile.options);
