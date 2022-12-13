import type { Handle } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';

export const handle1: Handle = async ({ event, resolve }) => {
	const { locals, cookies, isDataRequest, url } = event;

	if (!isDataRequest && !url.pathname.startsWith('/api')) {
		const token = cookies.get('token');

		locals.user = token ? { name: 'John', id: 1 } : undefined;
	}

	const response = await resolve(event);

	return response;
};

export const handle = sequence(handle1);
