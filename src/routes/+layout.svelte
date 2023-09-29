<script>
	import '../app.css';
	import { preparePageTransition } from '$lib/config/page-transition';
	import 'aos/dist/aos.css';
	import AOS from 'aos';
	import { onMount } from 'svelte';
	onMount(() => {
		AOS.init();
	});
	preparePageTransition();
</script>

<main class="text-slate-700 max-w-4xl m-auto">
	<div class="flex-col items-center justify-center py-4 px-4">
		<h1 class="text-4xl font-bold mt-4">Template SvelteKit Mazter</h1>
		<slot />
	</div>
</main>
