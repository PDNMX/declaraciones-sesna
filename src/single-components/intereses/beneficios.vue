<template>
	<div class="col-sm-9 col-sm-offset-3 sidecontent">
		<h3>beneficios</h3>
		<div class="row">
			<div class="col-sm-12">
				<div class="pdn_d_box" v-for="interes in items">
				<p class="pdn_label">Tipo de beneficio</p>
				<p class="pdn_data_p">{{interes.tipo_beneficio.valor}}</p>
				<p class="pdn_label">Sector o industria</p>
				<p class="pdn_data_p">{{interes.sector_industria.valor}}</p>
				<p class="pdn_label">Valor de beneficio</p>
				<p class="pdn_data_p">{{interes.valor_beneficio}}</p>
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
				return this.profile.intereses.beneficios_gratuitos;
			}
		}
	}
</script>
