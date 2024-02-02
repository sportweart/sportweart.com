<script>
	import { CATEGORIES, SOCIAL } from '$lib/data/info';
	// import { TOTAL_PAGES } from '$lib/data/paginator';
	// import { PRODUCTS } from '$lib/data/products';
	import { LazyImage, useLazyImage as lazyImage } from 'svelte-lazy-image';
	import { formatMoney } from '$lib/helpers/helper';
	import Loading from '$lib/components/Loading.svelte';
	let currentPage = 1;
	export let data;
	const PRODUCTS_PER_PAGE = 15;
	const PRODUCTS = data.products;

	const TOTAL_PAGES = Math.ceil(PRODUCTS.length / PRODUCTS_PER_PAGE);

	let products_showing = getProductsByPage(currentPage);
	let show_paginator = true;
	function changePage(page) {
		currentPage = page;
		paginator = generateVisiblePages();
		products_showing = getProductsByPage(currentPage);
	}
	function getProductsByPage(pageNumber) {
		const startIndex = (pageNumber - 1) * PRODUCTS_PER_PAGE;
		const endIndex = startIndex + PRODUCTS_PER_PAGE;

		return PRODUCTS.slice(startIndex, endIndex);
	}

	let paginator = generateVisiblePages();

	// Función para generar la lista de números de página visibles
	function generateVisiblePages() {
		const totalPages = TOTAL_PAGES;
		const visiblePages = [];
		const maxVisible = 5; // Puedes ajustar la cantidad máxima de números de página visibles

		if (totalPages <= maxVisible) {
			for (let i = 1; i <= totalPages; i++) {
				visiblePages.push(i);
			}
		} else {
			const leftOffset = Math.max(currentPage - Math.floor(maxVisible / 2), 1);
			const rightOffset = Math.min(leftOffset + maxVisible - 1, totalPages);

			if (leftOffset > 1) {
				visiblePages.push(1);
				if (leftOffset > 2) {
					visiblePages.push('...');
				}
			}

			for (let i = leftOffset; i <= rightOffset; i++) {
				visiblePages.push(i);
			}

			if (rightOffset < totalPages) {
				if (rightOffset < totalPages - 1) {
					visiblePages.push('...');
				}
				visiblePages.push(totalPages);
			}
		}

		return visiblePages;
	}

	let search;
	let active_search;
	let show_searching = false;

	function find() {
		show_searching = true;
		clearTimeout(active_search);
		active_search = setTimeout(() => {
			if (search == '') {
				products_showing = getProductsByPage(1);
				show_paginator = true;
				show_searching = false;
				return;
			}
			if (search.length >= 3) {
				show_searching = false;
				// || producto.category.toLowerCase().includes(search.toLowerCase())
				const resultados = PRODUCTS.filter((producto) => producto.name.toLowerCase().includes(search.toLowerCase()));
				products_showing = resultados;
				show_paginator = false;
			} else {
				show_paginator = true;
				show_searching = false;
				return;
			}
		}, 2000);
	}
</script>

<svelte:head>
	<title>Tienda</title>
</svelte:head>
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
		<div>
			<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
				<div>
					<label for="search" class="text-white">Busqueda por nombre y categoría</label>
					<input type="search" on:input={find} id="search" bind:value={search} class="form-control rounded-xl mb-5" placeholder="Busqueda" />
				</div>
				<!-- <div>
					<label for="x" class="text-white">Categorías disponibles</label>
					<div class="flex flex-wrap mb-5">
						{#each CATEGORIES as category}
							<button
								class="bg-[#FCFE03] font-bold w-[150px] text-center hover:bg-[#fe4e03] transition-all duration-200 cursor-default rounded-md mr-3 mb-3"
								on:click={() => {
									search = category;
									find();
								}}>{category}</button
							>
						{/each}
					</div>
				</div> -->
			</div>
		</div>

		{#if !show_searching}
			<div class="row">
				{#each products_showing as product}
					<a href={SOCIAL.WHATSAPP + '&text=Hola%20quiero%20adquirir%20el%20producto%20' + product.name} class="col-lg-4 mb-5 rounded-md overflow-hidden" target="_blank">
						<div>
							<div class="xs-shop id-">
								<div class="xs-shop-thumb h-[430px]">
									<!-- <img style="height: 430px;" class="h-[430px] object-cover" src={product.image} alt={product.name} /> -->
									<LazyImage src={product.image} placeholder="https://via.placeholder.com/250?text=Cargando..." alt={product.name} />
								</div>
								<div class="xs-shop-inner">
									<a href={SOCIAL.WHATSAPP + '&text=Hola%20quiero%20adquirir%20el%20producto%20' + product.name} target="_blank" class="btn btn-primary">Comprar ahora</a>
									<div class="xs-badge-wraper">
										<span class="xs-price-badge" style="font-size: 20px !important;">{formatMoney(product.price)}</span>
									</div>
									<h3 class="bg-black text-white h-[150px] p-2">{product.name}</h3>
								</div>
							</div>
						</div>
					</a>
				{:else}
					<div class="flex justify-center w-full">
						<p class="font-bold text-white text-center">No hay productos relacionados con el nombre</p>
					</div>
				{/each}
			</div>
			{#if show_paginator}
				<div class="flex justify-center">
					{#each paginator as page}
						{#if page === '...'}
							<span class="text-gray-500">...</span>
						{:else}
							<button class={`py-2 px-4 rounded-full ${currentPage === page ? 'bg-yellow-400 text-white font-semibold' : 'hover:bg-yellow-500 text-white font-semibold transition duration-300'}`} on:click={() => changePage(page)}>
								{page}
							</button>
						{/if}
					{/each}
				</div>
			{/if}
		{:else}
			<div class="flex justify-center">
				<Loading />
			</div>
		{/if}
	</div>
</section>
