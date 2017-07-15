/**
*	@module pages.home
*	@author kuakman <3dimentionar@gmail.com>
**/
import $ from 'jquery';
import 'styles/pages/home/home.less!';
import React from 'react';
import ReactDOM from 'react-dom';
import HomeStore from 'store/home/home';

/**
*	Interface IComponent
*	@interface IComponent
**/
interface IComponent {
	message?: string;
}

/**
*	Class HomePage
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
	constructor(props?: object) {
		return super(props);
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
		return (<div className = "home-page">
			{this.state ? this.state.message : this.props.message}
			<button onClick = {this.onClick.bind(this)}>Click Me!</button>
		</div>);
	}

	onClick() {
		this.setState({ message: 'State has changed!' });
	}

	static defaultProps: object = {
		message: "Hello World"
	};

	/**
	*	Bootstrap Component
	*	@static
	*	@param {object} [props] Component Properties
	*	@param {object} [attrs] Component Attributes
	*	@return {pages.home.HomePage}
	**/
	static bootstrap(props?: object, attrs?: object): HomePage {
		return ReactDOM.render(<HomePage {...props} />, $('.container')[0]);
	}

}

/**
*	HMR Unload Hook
**/
export const __unload = () => {
	ReactDOM.unmountComponentAtNode($('.container')[0]);
};

export default HomePage;
