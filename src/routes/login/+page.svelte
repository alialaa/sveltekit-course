<script lang="ts">
	import type { ActionData } from './$types';
	import { page } from '$app/stores';
	import { enhance, applyAction } from '$app/forms';

	let isLoading = false;
	let error = '';

	export let form: ActionData;
	$: console.log($page.form, $page.status);
</script>

{#if error}
	<p style="color: red">{error}</p>
{/if}
<form
	method="POST"
	action="?/login"
	use:enhance={({ form, data, action, cancel }) => {
		isLoading = true;

		return ({ result, update }) => {
			isLoading = false;
			if (result.type === 'failure' || result.type === 'redirect') {
				applyAction(result);
			}
			if (result.type === 'error') {
				error = result.error.message;
			}
			// update();
		};
	}}
>
	<label for="username">Username</label><br />
	<input id="username" name="username" placeholder="Username" value={form?.username || ''} />
	<br />
	{#if form?.usernameMissing}
		<p style="color: red; margin-bottom: 0">Username is Required!</p>
	{/if}
	<br /><br />

	<label for="password">Password</label><br />
	<input id="password" name="password" placeholder="Password" type="password" />
	<br />
	{#if form?.passwordMissing}
		<p style="color: red; margin-bottom: 0">Password is Required!</p>
	{/if}

	<br /><br />

	<button type="submit" disabled={isLoading}>Login</button>
</form>
