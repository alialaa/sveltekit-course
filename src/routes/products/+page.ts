import type { PageLoad } from './$types';
import { secret } from '$lib/server/secrets';

export const load: PageLoad = async ({ data, fetch, depends }) => {
	fetch('https://dummyjson.com/products');
	fetch('https://dummyjson.com/users');
	depends('app:products');
	return {
		products: data.products,
		title: 'Products List'
	};
};
