<template>
	<div class="col-sm-9 col-sm-offset-3 sidecontent">
		<h3>Representación pasiva</h3>
		<div class="row">
			<div class="col-sm-12">
				<div class="pdn_d_box" v-for="interes in items">
				<p class="pdn_label">Tipo de representación</p>
				<p class="pdn_data_p">{{interes.tipo_representacion.valor}}</p>
				<p class="pdn_label">Nombre del representante</p>
				<p class="pdn_data_p">{{interes.nombre_representante}}</p>
				<p class="pdn_label">Ocupación o profesión</p>
				<p class="pdn_data_p">{{interes.ocupacion_profesion}}</p>
				<p class="pdn_label">Fecha de inicio de representación</p>
				<p class="pdn_data_p">{{interes.fecha_inicio_representacion}}</p>
				<p class="pdn_label">Sector o industria</p>
				<p class="pdn_data_p">{{interes.sector_industria.valor}}</p>
				<p class="pdn_label">Tiene intereses</p>
				<p class="pdn_data_p" v-if="interes.tiene_intereses">Sí</p>
				<p class="pdn_data_p" v-else>No</p>
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
				return this.profile.intereses.representacion_pasiva;
			}
		}
	}
</script>
