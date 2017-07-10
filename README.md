# Application Pipeline Starter

![forthebadge](http://forthebadge.com/images/badges/makes-people-smile.svg)

Boilerplate code that setups test - dev and production pipelines for web application development using the following technology stack:

**Front End**
* SystemJS
* Bluebird
* Bootstrap
* jQuery
* React
* ReactDOM
* React-Logger
* Redux
* ImmutableJs
* Redux-Actions
* Redux-Promise
* Redux Socket.io
* Socket.io
* SystemJS Hot Reloader (HMR)

**Transpiler**
* Typescript

**Template engine**
* Pug

**Bundler**
* SystemJS Builder
* JSPM

**Unit Testing**
* Karma
* Mocha
* Chai
* Sinon
* Enzyme

---

## Usage

1. ```npm install``` NPM | Initial Dependencies Installation
* ```npm run jspm -- install``` JSPM | Initial Dependencies Installation
* ```npm run <command>``` Have Fun!


## Commands

* ```npm run jspm``` Access to the local jspm command line to perform common tasks such us: *install*, *uninstall*, etc...)
* ```npm run watch``` Spin Up HMR Watch service for development
* ```npm run clean [-- <env>]``` Clean up files for the given environment.
* ```npm run test [-- <options>]``` Run Unit Test and Code Coverage in watch mode.
* ```npm run dev [-- <options>]``` Compiles and Spin up a development server.
Please consider running the watcher service in a separated terminal to use **Dynamic State Hydration** (Hot Reload).
* ```npm run prod [-- <options>]``` Build, Optimize and Spins up a production server to test the release.
* ```npm run release [-- <options>]``` Mostly used by CI Servers to package all your code for deployment.
**As a developer, you may never need to run this.**

**Options** (test, dev and production tasks):
* ```-clean``` This will force to clean up libraries bundles for the given environment.

```TODO: More documentation```

---

[![forthebadge](http://forthebadge.com/images/badges/built-with-love.svg)](http://nahuel.io)
