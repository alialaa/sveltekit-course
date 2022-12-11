import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = ({ cookies }) => {
	const token = cookies.get('token');
	console.log(`token ${token}`);
	// get the user from the token
	const user = { name: 'John', id: 1 };
	return {
		user: token ? user : null
	};
};
