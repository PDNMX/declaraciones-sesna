<template>
	<div class="col-sm-9 col-sm-offset-3 sidecontent">
		<h2>Experiencia laboral</h2>
		
		<div class="row">
			<div class="col-sm-12">
				<div class="pdn_d_box"  v-for="job in items">
					<div class="row">
						<div class="col-sm-6">
							<p class="pdn_data_p">Del {{job.fecha_ingreso}} al {{job.fecha_salida}}</p>
						</div>
						<div class="col-sm-6">
							<p class="pdn_data_p">Ámbito {{job.ambito.valor}}</p>
						</div>
					</div>
					<p class="pdn_data_p">{{job.cargo_puesto}}</p>
					<div class="row">
						<div class="col-sm-6">
							<p class="pdn_label">Institución</p>
							<p class="pdn_data_p">{{job.nombre_institucion}}</p>
						</div>
						<div class="col-sm-6">
							<p class="pdn_label">Unidad Administrativa / Área</p>
							<p class="pdn_data_p">{{job.unidad_administrativa}}</p>
						</div>
						<div class="col-sm-6">
							<p class="pdn_label">Nivel de gobierno</p>
							<p class="pdn_data_p">{{job.nivel_gobierno.valor}}</p>
						</div>
						<div class="col-sm-6">
							<p class="pdn_label">Poder</p>
							<p class="pdn_data_p">{{job.poder_ente.valor}}</p>
						</div>
						<div class="col-sm-6">
							<p class="pdn_label">Sector/Industria</p>
							<p class="pdn_data_p">{{job.sector_industria.valor}}</p>
						</div>
						<div class="col-sm-6">
							<p class="pdn_label">Nivel del encargo</p>
							<p class="pdn_data_p">{{job.poder_ente.valor}}</p>
						</div>
					</div>
					<p class="pdn_label">Funciones principales</p>
					<p class="pdn_data_p" v-for="funciones in job.funciones_principales">
					  {{funciones.valor}}
				    </p>
				</div>
			</div>
	
		</div>
	</div>
</template>

<script>
	export default {
		computed : {
			profile(){
				return this.$parent.profile;
			},
			items(){
				return this.profile.informacion_personal.experiencia_laboral;
			}
		}
	}
</script>