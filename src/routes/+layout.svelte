<script lang="ts">
	import type { LayoutData } from './$types';
	import { page } from '$app/stores';
	import { invalidateAll } from '$app/navigation';

	export let data: LayoutData;
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
	<button
		on:click={async () => {
			const response = await fetch('/api/logout', { method: 'POST' });
			if (response.ok) {
				invalidateAll();
			}
		}}
	>
		Logout
	</button>
{/if}

<slot />

{#if !data.user && $page.url.pathname !== '/login'}
	<form method="POST" action="/login">
		<label for="username">Username</label><br />
		<input id="username" name="username" placeholder="Username" />
		<br /><br />

		<label for="password">Password</label><br />
		<input id="password" name="password" placeholder="Password" type="password" />

		<br /><br />

		<button type="submit">Login</button>
	</form>
{/if}
