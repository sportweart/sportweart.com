<script>
	import '../app.css';
	import { preparePageTransition } from '$lib/config/page-transition';
	import 'aos/dist/aos.css';
	import { onMount } from 'svelte';
	import AOS from "aos";
    onMount(() => {
        AOS.init();
    });
	preparePageTransition();
</script>
<slot />