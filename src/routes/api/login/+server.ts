import { error, json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({ request }) => {
	const data = await request.json();
	if (!data.username) {
		throw error(400, 'Username is required!');
	}
	if (!data.password) {
		throw error(400, 'Password is required!');
	}

	return json({ name: data.username, id: 1 });
};
