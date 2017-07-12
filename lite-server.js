/**
*	Server Configuration
*	@author kuakman <3dimentionar@gmail.com>
**/
let extend = require('extend');
let pkg = extend(true, { profile: (process.env.profile || "dev") }, require('./package.json'));
module.exports = pkg.environment[pkg.profile].server;
