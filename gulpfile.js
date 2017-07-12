/**
*	Gulp Tasks
*	@author kuakman <3dimentionar@gmail.com>
**/
let extend = require('extend');
let parser = require('argsparser');
let gulp = require('gulp');
let sync = require('run-sequence');

/** Package & Arguments **/
let pkg = extend(true, { profile: (process.env.profile || "dev") }, require('./package.json'));
let args = parser.parse(process.argv.slice(3));

/** Tasks **/
gulp.task('clean', [], require('./scripts/clean')(pkg, args));
gulp.task('libraries', [], require('./scripts/libraries')(pkg, args));
gulp.task('html', [], require('./scripts/html')(pkg, args));
gulp.task('karma', [], require('./scripts/karma')(pkg, args));
gulp.task('server', [], require('./scripts/server')(pkg, args));

/** Master Tasks **/
gulp.task('test', function(callback) { sync('clean', 'libraries', 'karma', callback); });
gulp.task('dev', function(callback) { sync('clean', 'libraries', 'html', 'server', callback); });
gulp.task('prod', function(callback) { sync('clean', 'libraries', 'html', 'release', callback); });
gulp.task('release', [], require('./scripts/release')(pkg, args));

/** Default Task **/
gulp.task('default', function(callback) { sync('dev', callback); });
