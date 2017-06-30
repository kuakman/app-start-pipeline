/**
*	@module pages
**/
import React from 'react';
import * as enzyme from 'enzyme';
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
			let wrapper = enzyme.shallow(<Home />);
		});

	});

});
