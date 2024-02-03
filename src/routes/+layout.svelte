<script>
	import '../app.css';
	import { preparePageTransition } from '$lib/config/page-transition';
	import 'aos/dist/aos.css';
	import { onMount } from 'svelte';
	import AOS from 'aos';
	import ButtonWhatsApp from '$lib/components/ButtonWhatsApp.svelte';
	onMount(() => {
		AOS.init();
	});
	preparePageTransition();
	function handleChange() {
		const menu = document.getElementById('main');
		const bg_menu = document.getElementById('bg_menu');
		menu.classList.remove('active');
		bg_menu.classList.remove('active');
	}
	let loader = true;
	onMount(()=>{
		setTimeout(() => {
			loader = false;
		}, 5000);
	})
</script>

{#if loader}
	<section class="w-full h-[100vh] absolute z-[99950]">
		<div class="w-full h-[100vh] flex justify-center items-center absolute z-50 imgLogo" data-aos="fade-down">
			<img src="/brand/logo-white.png" class="w-[250px] rounded-lg" alt="navbar logo" />
		</div>
		<div class="absolute bg-[#0d1524] w-full h-[100vh] layer_3" />
		<div class="absolute bg-[#FCFE03] w-full h-[100vh] layer_2" />
		<div class="absolute bg-[#000000] w-full h-[100vh] layer_1" />
	</section>
{/if}

<header class="elementskit-header xs-header-transparent bg-black text-white" style="background: #000;">
	<div class="xs-container">
		<div class="xs-navbar">
			<a class="xs-navbar-brand" href="/">
				<img src="/brand/logo-white.png" class="w-[250px] rounded-lg" alt="navbar logo" />
			</a>
			<nav class="elementskit-navbar ml-auto">
				<!--  // god menu markup start -->

				<!-- start humberger (for offcanvas toggler) -->
				<button class="elementskit-menu-hamburger elementskit-menu-toggler bg-white">
					<span class="elementskit-menu-hamburger-icon" />
					<span class="elementskit-menu-hamburger-icon" />
					<span class="elementskit-menu-hamburger-icon" />
				</button>
				<div class="elementskit-menu-container elementskit-menu-offcanvas-elements bg_image" id="main">
					<img src="/brand/logo-white.png" class="w-[250px] rounded-lg block md:hidden" alt="navbar logo" />
					<ul class="elementskit-navbar-nav nav-alignment-dynamic">
						<li>
							<a on:click={handleChange} class="text-white" href="/">Inicio</a>
						</li>
						<li>
							<a on:click={handleChange} class="text-white" href="/store">Tienda</a>
						</li>
						<li>
							<a on:click={handleChange} class="text-white" href="/contact">Contacto</a>
						</li>
					</ul>
				</div>
				<!-- end menu container -->

				<!-- start offcanvas overlay -->
				<div class="elementskit-menu-overlay elementskit-menu-offcanvas-elements elementskit-menu-toggler" id="bg_menu" />
				<!-- end offcanvas overlay -->
				<!-- // god menu markup end -->
			</nav>
			<ul class="xs-menu-tools">
				<!-- <li>
					<a href="#modal-popup-2" class="navsearch-button xs-modal-popup">
						<i class="icon icon-search"></i>
					</a>
				</li>
				<li>
					<a href="/" class="offset-side-bar xs-modal-popup">
						<i class="icon icon-cart"></i>
						<span class="xs-badge">0</span>
					</a>
				</li>
				<li>
					<a href="/" class="navSidebar-button">
						<i class="icon icon-menu"></i>
					</a>
				</li> -->
			</ul>
		</div>
	</div>
	<!-- .container END -->
</header>

<div class="zoom-anim-dialog mfp-hide modal-searchPanel" id="modal-popup-2">
	<div class="xs-search-panel">
		<form action="#" method="POST" class="xs-search-group">
			<input type="search" class="form-control" name="search" id="search" placeholder="Search" />
			<button type="submit" class="search-button"><i class="icon icon-search" /></button>
		</form>
	</div>
</div>
<div class="xs-sidebar-group cart-group">
	<div class="xs-overlay xs-bg-black" />
	<div class="xs-sidebar-widget">
		<div class="sidebar-widget-container">
			<div class="widget-heading media">
				<div class="media-body">
					<a href="/" class="close-side-widget">
						<i class="icon icon-cancel" />
					</a>
				</div>
			</div>
			<div class="xs-empty-content">
				<h3 class="widget-title">Shopping cart</h3>
				<h4 class="xs-title">No products in the cart.</h4>
				<p class="empty-cart-icon">
					<i class="icon icon-shopping-cart" />
				</p>
				<p class="xs-btn-wraper">
					<a class="btn btn-primary" href="/">Return To Shop</a>
				</p>
			</div>
		</div>
	</div>
</div>

<div class="xs-sidebar-group info-group">
	<div class="xs-overlay xs-bg-black" />
	<div class="xs-sidebar-widget">
		<div class="sidebar-widget-container">
			<div class="widget-heading">
				<a href="/" class="close-side-widget">
					<i class="icon icon-cancel" />
				</a>
			</div>
			<div class="sidebar-textwidget">
				<div class="sidebar-logo-wraper">
					<a href="/">
						<img src="/brand/logo-white.png" alt="sidebar logo" draggable="false" />
					</a>
				</div>
				<div class="xs-sidbar-getintouch">
					<h6 class="mb-3">Get in Touch</h6>
					<ul class="sideabr-list-widget">
						<li><i class="icon icon-location" /> 224 West 20th St, New York</li>
						<li><i class="icon icon-paper-plane" /> NY 10011, USA</li>
						<li><i class="icon icon-phone-call" />+1 212-255-5511</li>
						<li><i class="icon icon-email" />info@xpeedstudio.com</li>
					</ul>
				</div>
				<div class="xs-instra-feed">
					<p class="text-primary"><strong>@gemvast</strong></p>
					<ul>
						<li><img src="/assets/images/instrafeed/1.jpg" alt="" /></li>
						<li><img src="/assets/images/instrafeed/2.jpg" alt="" /></li>
						<li><img src="/assets/images/instrafeed/3.jpg" alt="" /></li>
					</ul>
				</div>
				<!-- end instra feed -->
				<div class="xs-sidebar-image">
					<img src="/assets/images/muscle_man.png" alt="muscle man" />
				</div>
			</div>
		</div>
	</div>
</div>

<ButtonWhatsApp />
<slot />

<style>
	.imgLogo {
		animation: imgLogo 0.7s ease 2s forwards, fadeout 0.7s ease 2s forwards;
	}
	.layer_1 {
		animation: slidein 0.7s ease 2s forwards, fadeout 0.7s ease 2s forwards;
	}
	.layer_2 {
		animation: slidein 0.7s ease 4s forwards, fadeout 0.7s ease 2.5s forwards;
	}
	.layer_3 {
		animation: slidein 0.7s ease 6s forwards, fadeout 0.7s ease 3s forwards;
	}

	@keyframes slidein {
		0% {
			height: 100vh;
		}
		98% {
			height: 0vh;
		}
	}

	@keyframes fadeout {
		0% {
			/* opacity: 1; */
		}
		100% {
			/* opacity: 0; */
			height: 0;
		}
	}
	@keyframes imgLogo {
		0% {
			opacity: 1;
		}
		90% {
			opacity: 1;
		}
		100% {
			opacity: 0;
		}
	}
</style>
