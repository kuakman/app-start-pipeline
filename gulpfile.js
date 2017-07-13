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

/** SubTasks **/
gulp.task('clean', [], require('./scripts/clean')(pkg, args));
gulp.task('libraries', [], require('./scripts/libraries')(pkg, args));
gulp.task('html', [], require('./scripts/html')(pkg, args));
gulp.task('karma', [], require('./scripts/karma')(pkg, args));
gulp.task('server', [], require('./scripts/server')(pkg, args));
gulp.task('build', [], require('./scripts/build')(pkg, args));

/** Master Tasks **/
gulp.task('test', function(callback) { sync('clean', 'libraries', 'karma', callback); });
gulp.task('dev', function(callback) { sync('clean', 'libraries', 'html', 'server', callback); });
gulp.task('prod', function(callback) { sync('release', 'server', callback); });

/** Mostly used by CI Server to deployment production code**/
gulp.task('release', function(callback) { sync('clean', 'libraries', 'html', 'build', callback); });

/** Default Task **/
gulp.task('default', function(callback) { sync('dev', callback); });
