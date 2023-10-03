<script>
	import '../app.css';
	import { preparePageTransition } from '$lib/config/page-transition';
	import 'aos/dist/aos.css';
	import { onMount } from 'svelte';
	import AOS from "aos";
	import ButtonWhatsApp from '$lib/components/ButtonWhatsApp.svelte';
    onMount(() => {
        AOS.init();
    });
	preparePageTransition();
</script>
<ButtonWhatsApp/>
<slot />