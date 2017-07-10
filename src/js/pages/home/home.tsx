/**
*	@module pages.home
*	@author kuakman <3dimentionar@gmail.com>
**/
import $ from 'jquery';
import 'bootstrap';
import React from 'react';
import ReactDOM from 'react-dom';
import * as hot from '@hot';

/**
*	Interface IComponent
*	@interface IComponent
**/
interface IComponent {
	message?: string;
}

/**
*	Class Home
*	@class pages.home.HomePage
*	@extends React.Component
**/
class HomePage extends React.Component<IComponent, object> {

	/**
	*	Constructor
	*	@constructor
	*	@param {object} [props] Component Properties
	*	@param {object} [attrs] Component Attributes
	*	@return {pages.home.HomePage}
	**/
	constructor(props?: object, attrs?: object) {
		return super(props, attrs);
	}

	/**
	*	Component Will Mount Handler
	*	@public
	*	@return {pages.home.HomePage}
	**/
	componentWillMount() {
		return this;
	}

	/**
	*	Render
	*	@public
	*	@return {any}
	**/
	render(): any {
		return (<div className = "home">{this.props.message}</div>);
	}

	/**
	*	Default Properties
	*	@static
	*	@property defaultProps
	*	@type {object}
	**/
	static defaultProps: object = {
		message: "Hello World!"
	};

	/**
	*	Bootstrap Component
	*	@static
	*	@param {object} [props] Component Properties
	*	@param {object} [attrs] Component Attributes
	*	@return {Function}
	**/
	static bootstrap(props?: object, attrs?: object): Function {
		ReactDOM.render(<HomePage {...props} />, $('.container')[0]);
		return this;
	}

}

/**
*	HMR Hot Reload
**/
export function __reload(HomePage) {
	ReactDOM.unmountComponentAtNode($('.container')[0]);
    HomePage.default.bootstrap(hot._state);
}

export default HomePage;
