<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	$: product = data.product;
	$: console.log(data.nested);
</script>

<!-- <svelte:head>
	<title>{product.title}</title>
	<meta name="description" content={product.description} />
</svelte:head> -->

<img src={product?.thumbnail} alt={product?.title} />

<h1>{product?.title}</h1>

<p>{product?.description}</p>

{#await data.nested.comments}
	Loading...
{:then data}
	{#each data.comments as comment}
		<p>{comment.body}</p>
	{/each}
{/await}

<style>
	img {
		width: 100%;
	}
</style>
