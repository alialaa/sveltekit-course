import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	console.log('Products Load Function.');
	const products = await (await import('$lib/dummy-products.json')).default;
	return {
		products
	};
};
