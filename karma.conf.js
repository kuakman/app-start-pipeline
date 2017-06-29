/**
*    Karma Configuration
*    @author Patricio Ferreira <3dimentionar@gmail.com>
**/
module.exports = function(config) {
  config.set({
    basePath: '.',
    frameworks: ['systemjs', 'mocha', 'chai', 'sinon'],
    files: ['test/**/*.+(ts|tsx|js)'],
    systemjs: {
        configFile: './src/js/config.js',
        config: {
            typescriptOptions: { tsconfig: true },
            useBundles: true,
            paths: {
                typescript: 'node_modules/typescript',
                ts: 'node_modules/plugin-typescript/lib/plugin.js',
                systemjs: 'node_modules/systemjs/dist/system.src.js'
            },
            packages: {
                typescript: {
                    main: 'lib/typescript.js',
                    meta: { 'lib/typescript.js': { exports: 'ts' } }
                }
            },
            transpiler: 'ts'
        },
        serve: [
            'node_modules/typescript/lib/typescript.js',
            'src/**/*.+(ts|tsx)',
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
    browsers: ['PhantomJS'],
    singleRun: false,
    concurrency: Infinity
  })
}
