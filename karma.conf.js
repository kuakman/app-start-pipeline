/**
*   Karma Configuration
*   @author Patricio Ferreira <3dimentionar@gmail.com>
**/
let extend = require('extend');
let systemjs = require('./test/systemjs');

module.exports = function(config) {
  config.set({
    basePath: '.',
    frameworks: ['systemjs', 'mocha', 'chai', 'sinon'],
    files: ['test/**/*.spec.+(ts|tsx|js)'],
    systemjs: systemjs(),
    exclude: [],
    preprocessors: {},
    reporters: ['spec'],
    client: {
        mocha: { timeout: 3000 },
        environment: { environment: 'test' }
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    concurrency: Infinity
  })
}
