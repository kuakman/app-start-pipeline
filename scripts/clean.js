/**
*	Gulp Task Clean
*	@author kuakman <3dimentionar@gmail.com>
**/
let fs = require('fs-extra');
let _ = require('underscore');
let options = ['test', 'dev', 'prod'];

module.exports = function(package, args) {
	let input = _.pick(args, '-clean');
	return () => {
		if(_.isEmpty(input)) return; // no action.
		let option = input['-clean'];
		if(_.isBoolean(option) && option) return fs.removeSync('./src/js/libraries');
		if(_.intersection(options, [option]).length === 1) {
			return fs.removeSync(`./src/js/libraries/libraries${(option !== 'prod' ? ('-' + option) : '')}.js`);
		}
	};
};
