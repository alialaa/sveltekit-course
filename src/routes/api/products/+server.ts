import { json, error } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async () => {
	const products = await (await import('$lib/dummy-products.json')).default;

	throw error(401, 'Not authorized!');

	// return new Response(JSON.stringify({ error: 'You are not authorized!' }), {
	// 	status: 401
	// });

	return json(products, {
		status: 200
	});

	// return new Response(JSON.stringify(products), {
	// 	status: 200
	// });
};
