/**
*	@module pages.home
*	@author kuakman <3dimentionar@gmail.com>
**/
import React from 'react';
import * as enzyme from 'enzyme';
import HomePage from 'pages/home/home';

describe('pages.home.HomePage', function() {

	let assert = chai.assert;
	let sandbox = sinon.sandbox.create();

	before(() => {});
	beforeEach(() => {});
	afterEach(() => {});
	after(() => {});

	describe('render()', () => {

		it('Should Shallow render', () => {
			let wrapper = enzyme.shallow(<HomePage />);
			let result = wrapper.find('div');
			assert.equal(result.length, 1);
		});

	});

	describe('static#bootstrap()', () => {

		it('Should Bootstrap Component', () => {
			assert.strictEqual(HomePage.bootstrap(), HomePage);
		});

	});

});
