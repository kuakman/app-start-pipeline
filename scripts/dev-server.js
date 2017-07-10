/**
*	Dev Server Configuration
*	@author kuakman <3dimentionar@gmail.com>
**/
module.exports = {
	port: 3002,
	open: false,
	logLevel: 'warn',
	files: ['**/*.{html,css,js,json,map}'],
	server: { baseDir: ['./', './src', './dist'] }
};
