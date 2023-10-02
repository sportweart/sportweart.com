<script>
	import { INFO_COMPANY } from '$lib/data/info';
</script>

<svelte:head>
	<title>Contácatnos</title>
</svelte:head>
<br>
<br>
<br>
<br>
<section class="position-relative xs-bg-cover" style="background-image: url(assets/images/banner/banner-contact.jpg);">
	<div class="xs-overlay" />
	<div class="container">
		<div class="row">
			<div class="col-md-12">
				<div class="xs-banner-area mt-5">
					<h1 class="xs-banner-title">Contactanos <span>!</span></h1>
				</div>
			</div>
		</div>
	</div>
</section>

<section class="xs-section-padding xs-pb-sm">
	<div class="container">
		<div class="row">
			<div class="col-lg-6 col-md-8 mx-auto">
				<div class="xs-section-heading text-center">
					<h2 class="text-4xl font-extrabold border-text">Encuentranos</h2>
				</div>
			</div>
		</div>
		<!-- .row END -->

		<div class="row flex justify-center">
			<div class="col-md-4">
				<div class="xs-contact-list">
					<h3><i class="icon icon-location" /> {INFO_COMPANY.ADDRESS}</h3>
					<ul>
						<li><span>PHONE:</span> <a href="tel:{INFO_COMPANY.COUNTRY_CODE}{INFO_COMPANY.PHONE}"> {INFO_COMPANY.PHONE} </a></li>
						<li>
							<span>EMAIL:</span>
							<p><a href="mailto:contact@gymvast.com"> {INFO_COMPANY.EMAIL} </a></p>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</section>

<iframe class="w-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7966.697735975389!2d-76.54605812201649!3d3.2632739246273883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e309eb749343cb7%3A0x1183a13d80e11eb6!2sCA%C3%91A%20DULCE%20CENTRO%20COMERCIAL!5e0!3m2!1sen!2sco!4v1696254233278!5m2!1sen!2sco" width="600" height="450" style="border:0;" allowfullscreen={true} title="s" loading="lazy" referrerpolicy="no-referrer-when-downgrade" />
<section class="xs-pb-sm">
	<div class="container">
		<div class="xs-contact-form">
			<div class="row">
				<div class="col-lg-7 col-md-8 mx-auto">
					<div class="xs-section-heading text-center">
						<h2 class="text-4xl font-extrabold border-text">Déjanos un mensaje</h2>
						<p>Nos pondremos en contacto contigo lo más pronto posible</p>
					</div>
				</div>
			</div>
			<form action="#" class="xs-form" id="xs-contact-form">
				<div class="row">
					<div class="col-md-6">
						<div class="form-group xs-form-anim">
							<label class="input-label" for="xs-name">Tú nombre</label>
							<input type="text" id="xs-name" class="form-control" />
						</div>
						<div class="form-group xs-form-anim">
							<label class="input-label" for="xs-email">Tú dirección de correo</label>
							<input type="text" id="xs-email" class="form-control" />
						</div>
						<div class="form-group xs-form-anim">
							<label class="input-label" for="xs-phone">Número de teléfono</label>
							<input type="text" id="xs-phone" class="form-control" />
						</div>
					</div>
					<div class="col-md-6">
						<div class="form-group xs-form-anim xs-message-box">
							<label class="input-label" for="xs-message">Mensaje</label>
							<textarea id="xs-message" placeholder="...." class="form-control" />
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-md-6">
						<p class="form-text text-muted xs-mt-50">No vendemos, compartimos ni intercambiamos su información con nadie por ningún motivo. No daremos correos spam.</p>
					</div>
					<div class="col-md-6">
						<div class="form-group xs-mt-60 text-right">
							<a href="/" class="btn btn-primary text-black">Enviar</a>
						</div>
					</div>
				</div>
			</form>
		</div>
	</div>
</section>
<div class="xs-cyan-bg xs-section-padding-xs" />
