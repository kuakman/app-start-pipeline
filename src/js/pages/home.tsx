/**
*	@module pages
**/
import $ from 'jquery';
import 'bootstrap';
import React from 'react';

interface IComponent {}

class Home extends React.Component<IComponent, object> {

	constructor(props?: object, attrs?: object) {
		super(props, attrs)
		return this;
	}

	somemethod(): string {
		return "Hello World";
	}

	/**
	*	Render Component
	**/
	render(): any {
		return (<div className = "container"></div>);
	}

}

export default Home;
