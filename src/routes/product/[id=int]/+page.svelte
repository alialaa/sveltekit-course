<script>
	import { page } from '$app/stores';
	import ProductHeader from './ProductHeader.svelte';

	$: console.log($page);
</script>

<ProductHeader />

<p>Product ID: {$page.params.id}</p>

<a href="/product/3434">Other product</a>
