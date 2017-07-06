/**
*	@module pages
**/
import React from 'react';
import * as enzyme from 'enzyme';
import Home from 'pages/home';

describe('Home', function() {

	let sandbox = sinon.sandbox.create();

	before(() => {});

	beforeEach(() => {});

	afterEach(() => {});

	after(() => {});

	describe('test', () => {

		it('Should do something', () => {
			let wrapper = enzyme.shallow(<Home />);
		});

	});

});
