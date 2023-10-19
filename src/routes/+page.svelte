<script>
	import Video from '$lib/components/Video.svelte';
	import { changeText } from '$lib/helpers/helper.js';
	import { onMount } from 'svelte';

	let weight = null,
		height = null;
	var bmi = 0;
	function calculeBMI() {
		if (weight == '' || height == '') {
			// alert('Please enter valid numbers for weight and height.');
			return;
		} else {
			bmi = weight / (height * height);
		}
	}

	$: if (weight || height) {
		calculeBMI();
	}
	let pos_video = 1;
	let source = `/assets/home/1.mp4`;
	onMount(() => {
		setInterval(() => {
			pos_video = pos_video + 1;
			pos_video = pos_video > 3 ? 1 : pos_video;
			source = `/assets/home/${pos_video}.mp4`;
		}, 5000);
	});
	const variations = ['LLEVA TU CUERP0 AL LIMITE', 'Desafía tus límites físicos al máximo.', 'rompe las barreras de tu cuerpo'];
	onMount(() => {
		changeText(variations);
	});
</script>


<section id="bannerxx" class="flex justify-center items-center relative object-cover" data-aos="fade-up">
	
	<div class="w-full h-[100vh] sectionx pt-[25px]">

		<div class="absolute h-full w-full z-50 flex flex-wrap">
			<div class=" h-full w-full p-10 flex justify-center flex-wrap items-center">
				<h1 class="text-3xl text-center w-full font-bold tracking-tighter sm:text-5xl xl:text-[4rem]/none bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500"><span class="main_small" /></h1>
				<br />
		
			</div>

		</div>
		<Video {source} />
	</div>
	<!-- <img src="/assets/images/home/main.jpg" alt="main" class="" style="height: 95vh;" /> -->
	<!-- <div class="container xs-clips-wraper">
		<div class="xs-clips">
			<img src="assets/images/shape/banner-light-clips.png" alt="clip">
		</div>
	</div>
	<div class="owl-carousel owl-theme xs-slider-light-owl">
		<div class="xs-slide-inner">
			<div class="container">
				<div class="banner-inner-wraper">
					<h2 class="xs-before-text" data-text="FITN">Fitn</h2>
					<div class="xs-light-slide-img3 xs-fadeInRight">
						<img src="assets/images/slider-light/slide-3.png" alt="shape">
					</div>
					<h2 class="xs-after-text" data-text="ESS">ess</h2>
				</div>
			</div>
			<div class="xs-shape xs-banner-light-left" data-scrollax="properties: { translateY: '-250px' }"
				style="background-image: url(assets/images/shape/banner-light-left.png);"></div>
			<img src="assets/images/shape/banner-light-clips-right.png" class="banner_right_shape"
				data-scrollax="properties: { translateY: '250px' }" alt="">
		</div>
	</div> -->
</section>
<section class="xs-light-bg xs-section-padding xs-pb-sm bg_image" data-scrollax-parent="true" id="training">
	<div class="xs-team-wraper">
		<div class="xs-shape xs-team-shape" data-scrollax={"properties: { translateY: '-100%' }"} style="background-image: url(/assets/images/shape/dot.png);" />
		<div class="xs-shape xs-team-right-shape" data-scrollax={"properties: { translateY: '100%' }"} style="background-image: url(/assets/images/shape/memphis.png);" />
		<div class="container">
			<div class="row">
				<div class="col-lg-8 mx-auto">
					<div class="xs-section-heading text-center">
						<h2 class="text-4xl font-extrabold border-text">¿Qué te <span>ofrecemos?</span></h2>
						<p />
					</div>
				</div>
			</div>
			<div class="xs-classes-light">
				<div class="row">
					<div class="col-lg-4 col-md-6">
						<div class="xs-service">
							<img src="/assets/images/classes/classes-item-1.jpg" alt="case" />
							<div class="xs-overlay d-flex align-items-center">
								<div class="xs-service-content">
									<div class="xs-icon-wraper">
										<i class="icon icon-dumble" />
									</div>
									<h3>Calidad</h3>
									<p>La excelencia es nuestra prioridad. Cada uno de nuestros suplementos y elementos deportivos se selecciona cuidadosamente para asegurar la máxima calidad.</p>
									<a href="/store" class="btn btn-primary">
										<i class="icon icon-arrow" />
									</a>
								</div>
							</div>
						</div>
					</div>
					<div class="col-lg-4 col-md-6">
						<div class="xs-service">
							<img src="/assets/images/classes/classes-item-5.jpg" alt="case" />
							<div class="xs-overlay d-flex align-items-center">
								<div class="xs-service-content">
									<div class="xs-icon-wraper">
										<i class="icon icon-climbing" />
									</div>
									<h3>Economía</h3>
									<p>Sabemos lo importante que es cuidar de tu bolsillo mientras te mantienes en forma.</p>
									<a href="/store" class="btn btn-primary">
										<i class="icon icon-arrow" />
									</a>
								</div>
							</div>
						</div>
					</div>
					<div class="col-lg-4 col-md-6">
						<div class="xs-service">
							<img src="/assets/images/classes/classes-item-6.jpg" alt="case" />
							<div class="xs-overlay d-flex align-items-center">
								<div class="xs-service-content">
									<div class="xs-icon-wraper">
										<i class="icon icon-punch" />
									</div>
									<h3>Variedad</h3>
									<p>ofrecemos una impresionante variedad de suplementos y elementos deportivos para satisfacer todas tus necesidades y preferencias</p>
									<a href="/store" class="btn btn-primary">
										<i class="icon icon-arrow" />
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<section class="xs-section-padding-lg xs-bg-cover parallaxie" style="background-image: url(/assets/images/help-light-img.jpg)">
	<div class="container">
		<div class="xs-help xs-help-light">
			<div class="row">
				<div class="col-lg-6">
					<div class="xs-section-heading">
						<h2 class="text-4xl font-extrabold border-text">
							Estamos aquí para ayudarte, fortaleciendo tu <br />
							<span>día a día.</span>
						</h2>
					</div>
					<p>En nuestro compromiso de servirte, trabajamos incansablemente para fortalecer tu día a día. Nuestra amplia gama de suplementos y elementos deportivos de calidad superior está diseñada para ayudarte a alcanzar tus metas y mantener un estilo de vida activo y saludable. Confía en nosotros para brindarte el apoyo que necesitas en cada paso de tu camino hacia el bienestar y el rendimiento óptimo.</p>
					<a href="/store" class="btn btn-primary">Ver productos <span class="icon icon-plus" /></a>
				</div>
			</div>
		</div>
	</div>
</section>

<section class="xs-pt-50 xs-pb-sm parallaxie" style="background-image: url(/assets/images/bmi-bg.png);">
	<div class="container">
		<div class="xs-bmi">
			<div class="row">
				<div class="col-lg-6 col-md-12">
					<div class="xs-colummn-heading2">
						<h2>BMI <span>Chart</span></h2>
					</div>
					<div class="table-responsive xs-bmi-table">
						<table class="table table-bordered">
							<thead>
								<tr>
									<th scope="col">BMI</th>
									<th scope="col">ESTADO DE PESO</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>Debajo de 18.5</td>
									<td>Bajo peso</td>
								</tr>
								<tr>
									<td>18.5 - 24.9</td>
									<td>Saludable</td>
								</tr>
								<tr>
									<td>25.0 - 29.9</td>
									<td>Exceso de peso</td>
								</tr>
								<tr>
									<td>30 en adelante</td>
									<td>Obeso</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="col-lg-6 col-md-12">
					<div class="xs-colummn-heading2">
						<h2>Calcula tu <span>BMI</span></h2>
						<p>Mi índice de masa corporal (IMC) o (IBM) es una medida que calcula la relación entre mi peso y mi altura. Se utiliza para evaluar si tengo un peso saludable en función de mi estatura.</p>
					</div>
					<div class="xs-form xs-form-dark">
						<div class="row">
							<div class="col-md-6">
								<div id="" class="form-group xs-form-anim">
									<label class="input-label mb-5" for="xs-height">Altura / cm</label>
									<input type="number" bind:value={height} min="1" max="500" id="xs-height" class="form-control border border-white mt-4" />
								</div>
							</div>
							<div class="col-md-6">
								<div id="" class="form-group xs-form-anim">
									<label class="input-label mb-5" for="xs-height">Peso / kg</label>
									<input type="number" bind:value={weight} min="1" max="500" id="xs-height" class="form-control border border-white mt-4" />
								</div>
							</div>
						</div>

						<div class="xs-colummn-heading2">
							<h2>Tú <span>BMI </span>Es: {bmi}</h2>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.sectionx::after {
		content: '';
		background: rgba(0, 0, 0, 0.493);
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 1;
	}

	
	
	
</style>
