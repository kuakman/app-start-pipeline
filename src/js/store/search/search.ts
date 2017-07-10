/**
*	@module store.search
*	@author kuakman <3dimentionar@gmail.com>
**/
interface SearchStoreInterface {
	props?: object;
};

/**
*	Class SearchStore
*	@class SearchStore
*	@implements {store.search.SearchStoreInterface}
**/
class SearchStore implements SearchStoreInterface {

	/**
	*	Constructor
	*	@constructor
	*	@return {store.search.SearchStore}
	**/
	constructor(...args: any[]) {
		return this;
	}

	/**
	*	Static Constructor
	*	@static
	*	@param {any[]} [args] Constructor argumnents
	*	@return {store.search.SearchStore}
	**/
	static create(...args: any[]): SearchStoreInterface {
		return new SearchStore(...args);
	}

};

export default SearchStore;
