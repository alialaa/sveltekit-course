import type { PageLoad } from './$types';
import { env as publicEnv } from '$env/dynamic/public';
import { PUBLIC_KEY, PUBLIC_TEST } from '$env/static/public';

console.log(publicEnv);
console.log(PUBLIC_KEY, PUBLIC_TEST);

export const load: PageLoad = async ({ data, fetch, depends }) => {
	fetch('https://dummyjson.com/products');
	fetch('https://dummyjson.com/users');
	depends('app:products');
	return {
		products: data.products,
		title: 'Products List'
	};
};
