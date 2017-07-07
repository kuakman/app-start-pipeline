/**
*	@module pages
*	@author kuakman <3dimentionar@gmail.com>
**/
import $ from 'jquery';
import 'bootstrap';
import React from 'react';
import ReactDOM from 'react-dom';

interface IComponent {}

class Home extends React.Component<IComponent, object> {

	constructor(props?: object, attrs?: object) {
		super(props, attrs)
		return this;
	}

	render(): any {
		return (<div className = "home"></div>);
	}

	static bootstrap() {
		ReactDOM.render(<Home />, $('.container')[0]);
		return this;
	}

}

export default Home;
