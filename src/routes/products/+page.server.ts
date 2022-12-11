import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({
	parent,
	url,
	route,
	params,
	fetch,
	depends,
	cookies,
	getClientAddress,
	locals,
	platform,
	setHeaders
}) => {
	console.log('Products Load Function.');
	const products = await (await import('$lib/dummy-products.json')).default;
	const parentData = await parent();
	console.log(parentData);
	return {
		products
	};
};
