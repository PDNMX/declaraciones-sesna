<template>
	<div class="col-sm-9 col-sm-offset-3 sidecontent">
		<h2>Socios comerciales</h2>
		<div class="row">
			<div class="col-sm-12">
				<div class="pdn_d_box" v-for="interes in items">
				<p class="pdn_label">Nombre de actividad</p>
				<p class="pdn_data_p">{{interes.nombre_actividad}}</p>
				<p class="pdn_label">Tipo de vínculo</p>
				<p class="pdn_data_p">{{interes.tipo_vinculo}}</p>
				<p class="pdn_label">Antigüedad de vínculo</p>
				<p class="pdn_data_p">{{interes.antiguedad_vinculo}}</p>
				<p class="pdn_label">R.F.C</p>
				<p class="pdn_data_p">{{interes.rfc_entidad}}</p>
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
				return this.profile.intereses.socios_comerciales;
			}
		}
	}
</script>
