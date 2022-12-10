<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	$: products = data.products.products;
</script>
