/**
*	@module store.home
*	@author kuakman <3dimentionar@gmail.com>
**/
interface HomeStoreInterface {
	props?: object;
};

/**
*	Class HomeStore
*	@class HomeStore
*	@implements {store.home.HomeStoreInterface}
**/
class HomeStore implements HomeStoreInterface {

	/**
	*	Constructor
	*	@constructor
	*	@return {store.home.HomeStore}
	**/
	constructor(...args: any[]) {
		return this;
	}

	/**
	*	Static Constructor
	*	@static
	*	@param {any[]} [args] Constructor argumnents
	*	@return {store.home.HomeStore}
	**/
	static create(...args: any[]): HomeStoreInterface {
		return new HomeStore(...args);
	}

};

export default HomeStore;
