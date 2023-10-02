<script>
	import '../app.css';
	import { preparePageTransition } from '$lib/config/page-transition';
	import 'aos/dist/aos.css';
	import AOS from 'aos';
	import { afterUpdate, onMount } from 'svelte';
	import { INFO_COMPANY, SOCIAL } from '$lib/data/info';
	onMount(() => {
		AOS.init();
	});
	preparePageTransition();
	let current_url;
	let text_menu_c ='text-page-main'
	afterUpdate(() => {
		current_url = window.location.pathname;
		if (current_url == '/') {
			text_menu_c = 'text-black'
		}else{
			text_menu_c = 'text-page-main'
		}
	});
</script>
<header class="elementskit-header xs-header-transparent">
	<div class="xs-container">
		<div class="xs-navbar">
			<a class="xs-navbar-brand" href="index.html">
				<img src="/assets/images/logo/logo-black.png" alt="navbar logo">
			</a>
			<nav class="elementskit-navbar ml-auto">
				<!--  // god menu markup start -->

				<!-- start humberger (for offcanvas toggler) -->
				<button class="elementskit-menu-hamburger elementskit-menu-toggler">
					<span class="elementskit-menu-hamburger-icon"></span>
					<span class="elementskit-menu-hamburger-icon"></span>
					<span class="elementskit-menu-hamburger-icon"></span>
				</button>
				<!-- end humberger -->

				<!-- start menu container -->
				<div class="elementskit-menu-container elementskit-menu-offcanvas-elements">
					<!-- start menu item list -->
					<ul class="elementskit-navbar-nav nav-alignment-dynamic">
						<li>
							<a href="/">Inicio</a>
						</li>
						<li>
							<a href="/store">Tienda</a>
						</li>
						<li>
							<a href="/contact">Contacto</a>
						</li>
					</ul><!-- end menu item list -->

					<!-- start menu logo and close button (for mobile offcanvas menu) -->
					<div class="elementskit-nav-identity-panel">
						<h1 class="elementskit-site-title">
							<a class="elementskit-nav-logo" href="index.html">
								<img src="/assets/images/logo/logo-black.png" alt="navbar logo">
							</a>
						</h1>
						<button class="elementskit-menu-close elementskit-menu-toggler" type="button">
							<i class="icon icon-cancel"></i>
						</button>
					</div>
					<!-- end menu logo and close button -->
				</div>
				<!-- end menu container -->

				<!-- start offcanvas overlay -->
				<div class="elementskit-menu-overlay elementskit-menu-offcanvas-elements elementskit-menu-toggler">
				</div>
				<!-- end offcanvas overlay -->
				<!-- // god menu markup end -->
			</nav>
			<ul class="xs-menu-tools">
				<li>
					<a href="#modal-popup-2" class="navsearch-button xs-modal-popup">
						<i class="icon icon-search"></i>
					</a>
				</li>
				<li>
					<a href="#" class="offset-side-bar xs-modal-popup">
						<i class="icon icon-cart"></i>
						<span class="xs-badge">0</span>
					</a>
				</li>
				<li>
					<a href="#" class="navSidebar-button">
						<i class="icon icon-menu"></i>
					</a>
				</li>
			</ul>
		</div>
	</div><!-- .container END -->
</header>
<slot />
<!-- <footer class="footer-1">
	<div class="xs-footer-top">
		<div class="container">
			<div class="row">
				<div class="col-lg-4 col-md-6">
					<div class="footer-widget xs-mr-35">
						<div class="xs-footer-logo">
							<img src="assets/images/logo/logo-white.png" class="w-32" alt="logo" />
						</div>
						<p>Tenemos un montón de piezas divertidas de equipos construidos en cada parte de tu cuerpo y desde boty en constructores para que los ejecuten..</p>
						<ul class="xs-footer-contact-info">
							<li>
								<i class="icon icon-location" />
								<p>{INFO_COMPANY.ADDRESS}</p>
							</li>
							<li>
								<i class="icon icon-phone" />
								<p>
									<a class="xs-phone-number" href="tel:+65-094-778-622"> {INFO_COMPANY.PHONE} </a>
								</p>
							</li>
						</ul>
					</div>
				</div>
				<div class="col-lg-4 col-md-6">
					<div class="footer-widget">
						<h3 class="widget-title">Páginas</h3>
						<div class="media">
							<div class="media-body">
								<ul class="list-unstyled">
									<li><a href="/">Inicio</a></li>
									<li><a href="/store">Tienda</a></li>
									<li><a href="/contact">Contacto</a></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div class="xs-footer-bottom">
		<div class="container">
			<div class="row">
				<div class="col-md-6 align-self-center">
					<p>©Copyright SPORTWEART Todos los derechos reservados.</p>
				</div>
				<div class="col-md-6">
					<ul class="list-inline text-center text-md-right">
						<li><a target="_blank" href={SOCIAL.FACEBOOK} class="icon icon-facebook" /></li>
						<li><a target="_blank" href={SOCIAL.WHATSAPP} class="icon icon-phone" /></li>
						<li><a target="_blank" href={SOCIAL.INSTAGRAM} class="icon icon-instagram" /></li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</footer> -->
