import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { env } from '$env/dynamic/private';
import { env as publicEnv } from '$env/dynamic/public';
import { API_KEY, TEST } from '$env/static/private';
import { PUBLIC_KEY, PUBLIC_TEST } from '$env/static/public';

// Evaluated dynamically at run time
console.log('$env/dynamic/private from process.env', env.TEST);
console.log('$env/dynamic/private from .env', env.API_KEY);
console.log('$env/dynamic/public from process.env', publicEnv.PUBLIC_TEST);
console.log('$env/dynamic/public from .env', publicEnv.PUBLIC_KEY);

// Evaluated at build and injected in your code
console.log('$env/static/private API_KEY', API_KEY);
console.log('$env/static/private TEST', TEST);
console.log('$env/static/public PUBLIC_KEY', PUBLIC_KEY);
console.log('$env/static/public PUBLIC_TEST', PUBLIC_TEST);

export const load: PageServerLoad = async ({ fetch, depends, locals }) => {
	console.log('/products load function', locals);
	const response = await fetch('/api/products');
	depends('app:productsServerLoad');
	if (response.ok) {
		return {
			products: response.json()
		};
	}
	const errorJSON = await response.json();
	throw error(response.status, errorJSON.message);
};
