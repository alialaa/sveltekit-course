import { error, json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({ request, cookies }) => {
	const data = await request.json();
	if (!data.username) {
		throw error(400, 'Username is required!');
	}
	if (!data.password) {
		throw error(400, 'Password is required!');
	}

	cookies.set('token', 'token_value', {
		path: '/'
	});

	return json({ name: data.username, id: 1 });
};
