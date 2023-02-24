import { error, redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params, fetch }) => {
	const productRes = await fetch(`https://dummyjson.com/products/${params.id}`);

	if (!productRes.ok) {
		throw error(productRes.status, 'Failed to load product!');
	}

	const product = await productRes.json();

	const comments = fetch('https://dummyjson.com/comments').then((res) => res.json());

	return {
		product,
		title: product.title,
		description: product.description,
		nested: {
			comments
		}
	};
};
