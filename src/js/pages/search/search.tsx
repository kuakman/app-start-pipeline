/**
*	@module pages.search
*	@author kuakman <3dimentionar@gmail.com>
**/
import $ from 'jquery';
import 'bootstrap';
import React from 'react';
import ReactDOM from 'react-dom';
import SearchStore from 'store/search/search';
import * as hot from '@hot';

/**
*	Interface IComponent
*	@interface IComponent
**/
interface IComponent {
	message?: string;
}

/**
*	Class SearchPage
*	@class pages.search.SearchPage
*	@extends React.Component
**/
class SearchPage extends React.Component<IComponent, object> {

	/**
	*	Constructor
	*	@constructor
	*	@param {object} [props] Component Properties
	*	@param {object} [attrs] Component Attributes
	*	@return {pages.search.SearchPage}
	**/
	constructor(props?: object, attrs?: object) {
		this.store = new SearchStore();
		return super(props, attrs);
	}

	/**
	*	Component Will Mount Handler
	*	@public
	*	@return {pages.search.SearchPage}
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
		return (<div className = "search">{this.props.message}</div>);
	}

	/**
	*	Default Properties
	*	@static
	*	@property defaultProps
	*	@type {object}
	**/
	static defaultProps: object = {
		message: "Hello World"
	};

	/**
	*	Bootstrap Component
	*	@static
	*	@param {object} [props] Component Properties
	*	@param {object} [attrs] Component Attributes
	*	@return {Function}
	**/
	static bootstrap(props?: object, attrs?: object): Function {
		ReactDOM.render(<SearchPage {...props} />, $('.container')[0]);
		return this;
	}

}

/**
*	HMR Hot Reload
**/
export function __reload(SearchPage) {
	ReactDOM.unmountComponentAtNode($('.container')[0]);
    SearchPage.default.bootstrap(hot._state);
}

export default SearchPage;
