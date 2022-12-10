import type { PageLoad } from './$types';

export const load: PageLoad = ({ data }) => {
	return {
		products: data.products,
		title: 'Products List'
	};
};
