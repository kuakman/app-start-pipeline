/**
*	@module pages
*	@author kuakman <3dimentionar@gmail.com>
**/
import React from 'react';
import * as enzyme from 'enzyme';
import Home from 'pages/home';

describe('pages.Home', function() {

	let assert = chai.assert;
	let sandbox = sinon.sandbox.create();

	before(() => {});
	beforeEach(() => {});
	afterEach(() => {});
	after(() => {});

	describe('render()', () => {

		it('Should Shallow render', () => {
			let wrapper = enzyme.shallow(<Home />);
			let result = wrapper.find('div');
			assert.equal(result.length, 1);
		});

	});

	describe('static#bootstrap()', () => {

		it('Should Bootstrap Component', () => {
			assert.strictEqual(Home.bootstrap(), Home);
		});

	});

});
