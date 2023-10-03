<!-- WhatsAppButton.svelte -->
<script>
	import { INFO_COMPANY, SOCIAL } from "$lib/data/info";
	const whatsappUrl = SOCIAL.WHATSAPP;
	function abrirWhatsApp() {
		window.open(whatsappUrl, '_blank');
	}
</script>

<button class="whatsapp-button" on:click={abrirWhatsApp}>
	<img class="whatsapp-icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/598px-WhatsApp.svg.png" alt="WhatsApp" width="30" height="30" />
	Escríbenos
</button>

<style>
	.whatsapp-button {
		z-index: 50;
		position: fixed;
		bottom: 20px;
		left: 20px;
		background-color: #25d366;
		color: #fff;
		padding: 10px 20px;
		border: none;
		border-radius: 5px;
		cursor: pointer;
		font-size: 16px;
		display: flex; 
		align-items: center;
		transition: all 0.5s;
	}
	.whatsapp-button:hover {
		transform: translateY(-5px);
	}

	.whatsapp-icon {
		margin-right: 10px;
	}
</style>
