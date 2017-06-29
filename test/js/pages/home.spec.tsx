/**
*	@module pages
*	@author Patricio Ferreira <3dimentionar@gmail.com>
**/
import Home from 'pages/home';

describe('Home', function() {

	before(() => {
		this.sandbox = sinon.sandbox.create();
	});

	beforeEach(() => {});

	afterEach(() => {});

	after(() => {
		delete this.sandbox;
	});

	describe('test', () => {

		it('Should do something', () => {
			console.log(Home);
		});

	});

});
