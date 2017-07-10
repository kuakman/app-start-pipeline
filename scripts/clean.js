/**
*	Clean Script for Profile Test, Development & Production
*	@author kuakman <3dimentionar@gmail.com>
**/
let fs = require('fs-extra');
let _ = require('underscore');
let options = ['all', 'test', 'dev', 'prod'];
let args = process.argv.slice(2);

if(_.intersection(options, args).length === 1) {
	let option = args[0];
	if(option === 'all') return fs.removeSync('./src/js/libraries')
	option = (option !== 'prod') ? `-${option}` : '';
	return fs.removeSync(`./src/js/libraries/libraries${option}.js`);
}
