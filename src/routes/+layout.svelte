<script lang="ts">
	import type { LayoutData } from './$types';
	import { page } from '$app/stores';
	import { invalidateAll } from '$app/navigation';
	import { applyAction, enhance, type SubmitFunction } from '$app/forms';
	import type { ActionData } from './login/$types';

	export let data: LayoutData;
	let isLoading = false;
	let error = '';
	let form: ActionData;

	const handleLoginEnhance: SubmitFunction = () => {
		isLoading = true;
		error = '';
		return ({ result }) => {
			isLoading = false;
			if (result.type === 'redirect') {
				form = null;
				applyAction(result);
			}
			if (result.type === 'error') {
				error = result.error.message;
			}
			if (result.type === 'failure') {
				form = result.data as ActionData;
			}
		};
	};
</script>

<svelte:head>
	<title>Website Name{$page.data.title ? ` - ${$page.data.title}` : ''}</title>
	{#if $page.data.description}
		<meta name="description" content={$page.data.description} />
	{/if}
</svelte:head>

{#if data.user}
	<p>Logged in as {data.user.name}</p>
{/if}

<nav data-sveltekit-preload-data="hover">
	<a href="/">Home</a>
	<a href="/products">Products</a>
	{#if !data.user}
		<a href="/login" data-sveltekit-preload-data="off">Login</a>
	{/if}
</nav>

{#if data.user}
	<form method="POST" action="/login?/logout&redirectTo={$page.url.pathname}" use:enhance>
		<button type="submit">Logout</button>
	</form>
{/if}

<form method="GET" action="/search">
	<input name="q" />
</form>

<slot />

{#if !data.user && $page.url.pathname !== '/login'}
	{#if error}
		<p style="color: red">{error}</p>
	{/if}
	<form
		method="POST"
		action="/login?/login&redirectTo={$page.url.pathname}"
		use:enhance={handleLoginEnhance}
	>
		<label for="username">Username</label><br />
		<input id="username" name="username" placeholder="Username" value={form?.username || ''} />
		<br />
		{#if form?.usernameMissing}
			<p style="color:red">Username is Required</p>
		{/if}
		<br /><br />

		<label for="password">Password</label><br />
		<input id="password" name="password" placeholder="Password" type="password" />
		<br />
		{#if form?.passwordMissing}
			<p style="color:red">Password is Required</p>
		{/if}
		<br /><br />

		<button type="submit" disabled={isLoading}>Login</button>
	</form>
{/if}
