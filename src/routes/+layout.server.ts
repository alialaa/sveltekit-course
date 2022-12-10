import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = () => {
	const user = { name: 'John', id: 1 };
	return {
		user
	};
};
