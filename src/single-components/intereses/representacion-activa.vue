<template>
	<div  class="col-sm-9 col-sm-offset-3 sidecontent">
		<h3>Representación activa</h3>
		<div class="row">
			<div class="col-sm-12">
				<div class="pdn_d_box" v-for="interes in items">
				<p class="pdn_label">Tipo de representación</p>
				<p class="pdn_data_p">{{interes.tipo_representacion.valor}}</p>
				<p class="pdn_label">Sector o industria</p>
				<p class="pdn_data_p">{{interes.sector_industria.valor}}</p>
				<p class="pdn_label">Fecha de inicio</p>
				<p class="pdn_data_p">{{interes.fecha_inicio}}</p>
				<p class="pdn_label">Pagado</p>
				<p class="pdn_data_p" v-if="interes.pagado">Sí</p>
				<p class="pdn_data_p" v-else>No</p>
				<p class="pdn_label">Observaciones</p>
				<p class="pdn_data_p">{{interes.observaciones}}</p>
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
				return this.profile.intereses.representacion_activa;
			}
		}
	}
</script>
