/**
*	Server Configuration
*	@author kuakman <3dimentionar@gmail.com>
**/
let extend = require('extend');
let compression = require('compression');
let pkg = extend(true, { profile: (process.env.profile || "dev") }, require('./package.json'));
let config = pkg.environment[pkg.profile].server;
if(pkg.profile === 'prod') config.server.middleware = [compression()];
module.exports = config;
