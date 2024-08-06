import { createHooks } from '@wordpress/hooks';

if ( ! window.wkHooks ) {
	let wkHooks = createHooks();
	window.wkHooks = wkHooks;
}

export const {
	filters,
	addFilter,
	applyFilters,
	removeFilter,
	removeAllFilters,
	actions,
	addAction,
	doAction,
	removeAction,
	removeAllActions
} = window.wkHooks;

export default window.wkHooks;