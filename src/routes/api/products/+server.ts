import { json, error } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async () => {
	const products = await (await import('$lib/dummy-products.json')).default;

	return json(products, {
		status: 200
	});
};

export const POST: RequestHandler = async ({ request }) => {
	const product = await request.json();

	if (!product.title) {
		throw error(400, 'Product title is required!');
	}

	return json({ id: 1313, title: product.title });
};
