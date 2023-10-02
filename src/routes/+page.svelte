<script>
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

	$:if (weight || height) {
		calculeBMI();
	}
</script>

<section class="xs-light-bg xs-section-padding xs-pb-sm" data-scrollax-parent="true" id="training">
	<div class="xs-team-wraper">
		<div class="xs-shape xs-team-shape" data-scrollax={"properties: { translateY: '-100%' }"} style="background-image: url(/assets/images/shape/dot.png);" />
		<div class="xs-shape xs-team-right-shape" data-scrollax={"properties: { translateY: '100%' }"} style="background-image: url(/assets/images/shape/memphis.png);" />
		<div class="container">
			<div class="row">
				<div class="col-lg-8 mx-auto">
					<div class="xs-section-heading text-center">
						<h2 class="text-4xl font-extrabold border-text">Nuestros <span>Servicios</span></h2>
						<p>World is committed to making participation in the event a harassment free experience for everyone, regardless of level of experience.</p>
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
							<h2>Tú <span>BMI </span>Es:  {bmi}</h2>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
