import { json, error } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { API_URL } from '$env/static/private';

export const GET: RequestHandler = async ({ fetch }) => {
	const response = await fetch(`${API_URL}/products?limit=6`);

	if (response.ok) {
		const resJSON = await response.json();
		return json(resJSON, {
			status: 200
		});
	}
	throw error(response.status, response.statusText);
};

// export const POST: RequestHandler = async ({ request }) => {
// 	const product = await request.json();

// 	if (!product.title) {
// 		throw error(400, 'Product title is required!');
// 	}

// 	return json({ id: 1313, title: product.title });
// };
