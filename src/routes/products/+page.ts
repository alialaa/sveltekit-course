import type { PageLoad } from './$types';

export const load: PageLoad = async ({
	data,
	url,
	route,
	params,
	parent,
	fetch,
	depends,
	setHeaders
}) => {
	console.log(data);
	console.log(url);
	console.log(route);
	console.log(params);
	console.log(await parent());
	setHeaders({
		age: '100',
		'cache-control': 'max-age=604800'
	});
	return {
		products: data.products,
		title: 'Products List'
	};
};
