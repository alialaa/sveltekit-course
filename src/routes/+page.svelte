<script lang="ts">
	import { goto, preloadCode, preloadData } from '$app/navigation';
</script>

<h1>Home</h1>

<button
	on:focus={() => {}}
	on:mouseover={async () => {
		await preloadCode('/products');
	}}
	on:click={() => {
		goto('/products', {
			noScroll: true
		});
	}}
	>Products
</button>
