/**
*	Gulp Task Clean
*	@author kuakman <3dimentionar@gmail.com>
**/
let fs = require('fs-extra');
let _ = require('underscore');
let options = ['test', 'dev', 'prod'];

module.exports = function(package, args) {
	let input = _.pick(args, '-clean');
	let all = _.pick(args, '-all');

	return () => {
		if(_.isEmpty(input)) return;
		let option = input['-clean'];
		if(_.isBoolean(option) && option || !_.isEmpty(all)) return fs.removeSync('./src/js/libraries');
		if(_.intersection(options, [option]).length === 1) {
			return fs.removeSync(`./src/js/libraries/libraries${(option !== 'prod' ? ('-' + option) : '')}.js`);
		}
	};
};
