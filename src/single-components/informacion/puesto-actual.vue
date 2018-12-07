<template>
<div class="col-sm-9 col-sm-offset-3 sidecontent">
		<h2>Puesto actual</h2>
		
		<div class="row">
			<div class="col-sm-8">
				<div class="pdn_d_box">
					<p class="pdn_data_p">{{profile.informacion_personal.datos_encargo_actual.empleo_cargo_comision}}</p>
					<p class="pdn_label">Área de adscripción</p>
					<p class="pdn_data_p">{{profile.informacion_personal.datos_encargo_actual.area_adscripcion}}</p>
					<p class="pdn_label">Dependencia</p>
					<p class="pdn_data_p">{{profile.informacion_personal.datos_encargo_actual.ente_publico}}</p>
					<p class="pdn_label">Nivel de gobierno</p>
					<p class="pdn_data_p">{{profile.informacion_personal.datos_encargo_actual.nivel_gobierno.valor}}</p>
					<p class="pdn_label">Poder</p>
					<p class="pdn_data_p">{{profile.informacion_personal.datos_encargo_actual.poder_juridico.valor}}</p>
					<p class="pdn_label">Sector/Industria</p>
					<p class="pdn_data_p">{{profile.informacion_personal.datos_encargo_actual.sector_industria.valor}}</p>
				</div>
			</div>
			<div class="col-sm-4">
				<div class="pdn_d_box">
					<p class="pdn_data_p" v-if="items.contratado_honorarios == false">Sin contrato por honorarios</p>
					<p class="pdn_data_p" v-else>Contrato por honorarios</p>
					<p class="pdn_label">Nivel de encargo</p>
					<p class="pdn_data_p">{{items.nivel_encargo}}</p>
					<p class="pdn_label">Funciones</p>
					<p class="pdn_data_p">{{items.funciones_principales.valor}}</p>
					<p class="pdn_label">Fecha de ingreso</p>
					<p class="pdn_data_p">{{items.fecha_posesion}}</p>
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
				return this.profile.informacion_personal.datos_encargo_actual;
			}
		}
	}
</script>