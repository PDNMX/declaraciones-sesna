<template>
	<div class="col-sm-9 col-sm-offset-3 sidecontent">
		<h2>Efectivo y metales</h2>
		<div class="row">
			<div class="col-sm-12">
				<div class="pdn_d_box" v-for="efectivo in items">
					<p class="pdn_label">Tipo de operación</p>
					<p class="pdn_data_p">{{efectivo.tipo_operacion.valor}}</p>
					
					<p class="pdn_label">Tipo de moneda</p>
					<p class="pdn_data_p">{{efectivo.tipo_moneda.moneda}}</p>
					
					
					<p class="pdn_label">Tipo de metal</p>
					<p class="pdn_data_p">{{efectivo.tipo_metal.valor}}</p>
					
					<p class="pdn_label">Unidades</p>
					<p class="pdn_data_p">{{efectivo.unidades}}</p>
					

					
					<p class="pdn_label">Forma  de adquisición</p>
					<p class="pdn_data_p">{{efectivo.forma_adquisicion.valor}}</p>
									

					<p class="pdn_label">Observaciones</p>
					<p class="pdn_data_p">{{efectivo.observaciones_comentarios}}</p>

				</div>
			</div>
		</div><!--ends row-->
	</div>
</template>

<script>
	export default {
		computed : {
			profile(){
				return this.$parent.profile;
			},

			items(){
				return this.profile.activos.efectivo_metales;
			}
		}
	}
</script>