/**
*	@module pages
*	@author kuakman <3dimentionar@gmail.com>
**/
import $ from 'jquery';
import 'bootstrap';
import React from 'react';
import ReactDOM from 'react-dom';

/**
*	Interface IComponent
*	@interface IComponent
**/
interface IComponent {}

/**
*	Class Home
*	@class pages.Home
*	@extends React.Component
**/
class Home extends React.Component<IComponent, object> {

	/**
	*	Constructor
	*	@constructor
	*	@param {object} [props] Component Properties
	*	@param {object} [attrs] Component Attributes
	*	@return {pages.Home}
	**/
	constructor(props?: object, attrs?: object) {
		super(props, attrs)
		return this;
	}

	/**
	*	Render
	*	@public
	*	@return {any}
	**/
	render(): any {
		return (<div className = "home"></div>);
	}

	/**
	*	Bootstrap Component
	*	@static
	*	@return {Function}
	**/
	static bootstrap(): Function {
		ReactDOM.render(<Home />, $('.container')[0]);
		return this;
	}

}

export default Home;
