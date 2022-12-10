export const load = async () => {
	console.log('Products Load Function.');
	const products = await (await import('$lib/dummy-products.json')).default;
	return {
		products
	};
};
