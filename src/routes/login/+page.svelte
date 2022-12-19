<script lang="ts">
	import type { ActionData } from './$types';
	import { page } from '$app/stores';

	export let form: ActionData;
	$: console.log($page.form, $page.status);
</script>

<form method="POST">
	<label for="username">Username</label><br />
	<input id="username" name="username" placeholder="Username" />
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

	<button type="submit">Login</button>
</form>
