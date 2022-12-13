import type { Handle } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';

export const handle1: Handle = async ({ event, resolve }) => {
	const { url, locals } = event;
	// if (url.pathname === '/products') {
	// 	return new Response('Custom response');
	// }

	const response = await resolve(event);

	// response.headers.set('x-custom-header', 'value');

	return response;
};

export const handle = sequence(handle1);
