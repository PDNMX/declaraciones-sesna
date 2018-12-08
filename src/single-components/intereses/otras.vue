<template>
	<div class="col-sm-9 col-sm-offset-3 sidecontent">
		<h3>otras partes relacionadas</h3>
		<div class="row">
			<div class="col-sm-12">
				<div class="pdn_d_box" v-for="interes in items">
				<p class="pdn_label">Tipo de relación</p>
				<p class="pdn_data_p">{{interes.tipo_relacion.valor}}</p>
				<p class="pdn_label">Fecha de inicio de relación</p>
				<p class="pdn_data_p">{{interes.fecha_inicio_relacion}}</p>
				<p class="pdn_label">Ocupación</p>
				<p class="pdn_data_p">{{interes.ocupacion}}</p>
				<p class="pdn_label">Tiene interés</p>
				<p class="pdn_data_p" v-if="interes.tiene_interes">Sí</p>
				<p class="pdn_data_p" v-else>No</p>
				<p class="pdn_label">Sector o industria</p>
				<p class="pdn_data_p">{{interes.sector_industria.valor}}</p>
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
				return this.profile.intereses.otras_partes;
			}
		}
	}
</script>
