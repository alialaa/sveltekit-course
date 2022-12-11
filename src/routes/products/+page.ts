import type { PageLoad } from './$types';

export const load: PageLoad = async ({ data }) => {
	return {
		products: data.products,
		title: 'Products List'
	};
};
