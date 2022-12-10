import { error, redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const products = await (await import('$lib/dummy-products.json')).default;
	const product = products.products.find((p) => p.id === +params.id);

	if (!product) {
		// throw redirect(301, '/products');
		throw error(404, 'Product not found!');
	}

	return {
		product,
		title: product.title,
		description: product.description
	};
};
