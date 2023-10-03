<script>
	import { PRODUCTS } from '$lib/data/products';
	import { formatMoney } from '$lib/helpers/helper';
	import { lazyLoad } from '$lib/helpers/lazyload';
	import productsStore from '$lib/store/products';

	let products_showing = $productsStore;
	let search;
	function find() {
		if (search == '') {
			products_showing = PRODUCTS;
			return;
		}
		const resultados = PRODUCTS.filter((producto) => producto.name.toLowerCase().includes(search.toLowerCase()) || producto.category.toLowerCase().includes(search.toLowerCase()));
		products_showing = resultados;
	}
</script>

<svelte:head>
	<title>Tienda</title>
</svelte:head>
<br />
<br />
<br />
<br />
<section class="position-relative xs-bg-cover" style="background-image: url(assets/images/banner/banner-contact.jpg);">
	<div class="xs-overlay" />
	<div class="container">
		<div class="row">
			<div class="col-md-12">
				<div class="xs-banner-area mt-5">
					<h1 class="xs-banner-title">Productos <span>!</span></h1>
				</div>
			</div>
		</div>
	</div>
</section>
<section class="xs-section-padding" data-aos="fade-up">
	<div class="container">
		<input type="search" bind:value={search} on:input={find} class="form-control rounded-xl mb-5" placeholder="Busqueda" />
		<div class="row">
			{#each products_showing as product}
				<div class="col-lg-4 mb-5">
					<div class="xs-shop id-{product.id}">
						<div class="xs-shop-thumb h-[430px]">
							<img style="height: 430px;" class="h-[430px] object-cover" use:lazyLoad={product.image} alt={product.name} />
						</div>
						<div class="xs-shop-inner">
							<a href="/" class="btn btn-primary">Comprar ahora</a>
							<div class="xs-badge-wraper">
								<span class="xs-price-badge" style="font-size: 20px !important;">{formatMoney(product.price)}</span>
							</div>
							<h3><a href="/"> {product.name} </a></h3>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
