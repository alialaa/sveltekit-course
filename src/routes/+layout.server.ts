import { error } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = ({ locals }) => {
	const user = locals.user;
	return {
		user
	};
};

export const ssr = true;
export const csr = true;
export const trailingSlash = 'never';
