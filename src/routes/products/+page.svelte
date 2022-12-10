<script>
	export let data;

	$: products = data.products.products;
	$: console.log(products);
</script>
