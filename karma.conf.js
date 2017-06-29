/**
*    Karma Configuration
*    @author Patricio Ferreira <3dimentionar@gmail.com>
**/
module.exports = function(config) {
  config.set({
    basePath: '.',
    frameworks: ['systemjs', 'mocha', 'chai', 'sinon'],
    files: ['test/**/*.spec.+(ts|tsx|js)'],
    systemjs: {
        configFile: './src/js/config.js',
        useBundles: true,
        config: {
            typescriptOptions: { tsconfig: true },
            paths: {
                typescript: 'node_modules/typescript',
                ts: 'node_modules/plugin-typescript/lib/plugin.js',
                systemjs: 'node_modules/systemjs/dist/system.src.js',
                "libraries/": "src/js/libraries/",
                "pages/": "src/js/pages/"
            },
            packages: {
                typescript: {
                    main: 'lib/typescript.js',
                    meta: { 'lib/typescript.js': { exports: 'ts' } }
                }
            },
            transpiler: 'ts'
        },
        serveFiles: [
            'node_modules/typescript/lib/typescript.js',
            'node_modules/systemjs/dist/*.map',
            'src/**/*.+(ts|tsx|js|map)',
            'tsconfig.json'
        ],
        includeFiles: [
            'node_modules/bluebird/js/browser/bluebird.min.js'
        ]
    },
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
