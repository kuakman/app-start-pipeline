/**
 * Karma Typescript Coverage Plugin
 * @author Patricio Ferreira <3dimentionar@gmail.com>
 */
var path = require('path');
var _ = require('underscore');
var remapIstanbul = require('remap-istanbul');
var ts = require('typescript');

/** Reporter **/

var onBrowserComplete = function(browser, result) {
	if(result.coverage) result.coverage = remap(result.coverage);
};

var onSpecComplete = function(browser, result) {
	if(result.coverage) result.coverage = remap(result.coverage);
};

var remapping = function(basePath, servedFiles) {
	return {
		basePath: basePath,
		readFile: function(filePath) {
			var comparePath = filePath.replace(/\\/g, '/');
			var file = servedFiles.find(function(file) { return file.path == comparePath; });
			if(!file) throw new Error('Unable to lookup source for ' + filePath);
			return file._preprocessedSource + (file._preprocessedSourceMap ? '\n//# sourceMappingURL=' + filePath.split(path.sep).pop() + '.map' : '')
		},
		readJSON: function(filePath) {
			filePath = filePath.substr(0, filePath.length - 4);
			var comparePath = filePath.replace(/\\/g, '/');
			var file = servedFiles.find(function(file) { return file.path == comparePath; });
			if(!file) throw new Error('Unable to lookup source map for ' + filePath);
			file._preprocessedSourceMap.sources = file._preprocessedSourceMap.sources.map(function(file) {
				return path.relative(basePath, path.resolve(path.dirname(filePath), file));
			});
			return file._preprocessedSourceMap;
		}
	};
};

var remap = function(basePath, fileList, coverage) {
	var servedFiles = fileList.files.served;
	var collector = remapIstanbul.remap(coverage, remapping(basePath, servedFiles));
	var coverage = collector.getFinalCoverage();
	Object.keys(coverage).forEach(function(key) { coverage[key].code = [coverage[key].code]; });
	return coverage;
};

var TypescriptCoverage = function(basePath, fileList) {
	remap = _.bind(remap, this, basePath, fileList);
	this.onBrowserComplete = _.bind(onBrowserComplete, this);
	this.onSpecComplete = _.bind(onSpecComplete, this);
};

TypescriptCoverage.$inject = ['config.basePath', 'fileList'];

/** Preprocessor **/

var process = function(tsconfig, log, content, file, done) {
	let result = ts.transpileModule(content, tsconfig);
	let sourceMap = JSON.parse(result.sourceMapText);

	sourceMap.sources[0] = path.basename(file.originalPath);
	sourceMap.sourcesContent = [content];
	sourceMap.file = file.path;
	file._preprocessedSourceMap = sourceMap;
	file._preprocessedSource = result.outputText;

	let datauri = 'data:application/json;charset=utf-8;base64,' + new Buffer(JSON.stringify(sourceMap)).toString('base64');
	done(null, result.outputText + '\n//# sourceMappingURL=' + datauri + '\n');
};

var SystemJSTypescript = function(logger, basePath, systemjs, files) {
	var log = logger.create('preprocessor.systemjs-typescript');
	var tsconfig = require(path.resolve(basePath, 'tsconfig.json'));
	return _.bind(process, this, tsconfig, log);
};

SystemJSTypescript.$inject = ['logger', 'config.basePath', 'config.systemjs', 'config.files'];

module.exports = {
	'preprocessor:systemjs-typescript': ['factory', SystemJSTypescript],
	'reporter:systemjs-coverage': ['type', TypescriptCoverage]
};
