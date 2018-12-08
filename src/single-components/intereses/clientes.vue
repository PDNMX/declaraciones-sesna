<template>
	<div  class="col-sm-9 col-sm-offset-3 sidecontent">
		<h3>clientes</h3>
		<div class="row">
			<div class="col-sm-12">
				<div class="pdn_d_box" v-for="interes in items">
				<p class="pdn_label">Nombre del negocio</p>
				<p class="pdn_data_p">{{interes.nombre_negocio}}</p>
				<p class="pdn_label">Número de registro</p>
				<p class="pdn_data_p">{{interes.numero_registro}}</p>
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
				return this.profile.intereses.clientes_principales;
			}
		}
	}
</script>
