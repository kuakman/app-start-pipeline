/**
*	@module pages
**/
import React from 'react';
import * as enzyme from 'enzyme';
import Home from 'pages/home';

describe('Home', function() {

	let assert = chai.assert;
	let sandbox = sinon.sandbox.create();

	before(() => {});

	beforeEach(() => {});

	afterEach(() => {});

	after(() => {});

	describe('test', () => {

		it('Should do something', () => {
			let wrapper = enzyme.shallow(<Home />);
			let result = wrapper.find('div');
			assert.equal(result.length, 1);
		});

		it('Should call method somemethod()', () => {
			let home = new Home();
			assert.equal(home.somemethod(), "Hello World");
		});

	});

});
