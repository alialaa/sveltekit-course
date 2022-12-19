import type { Actions } from '@sveltejs/kit';

export const actions: Actions = {
	default: async ({ request }) => {
		const form = await request.formData();
		console.log(form.get('username'));
		console.log(form.get('password'));
	}
};
