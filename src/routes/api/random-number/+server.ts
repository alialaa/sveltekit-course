import type { RequestHandler } from './$types';

export const GET: RequestHandler = () => {
	return new Response(String(Math.random() * 10));
};

export const prerender = true;
