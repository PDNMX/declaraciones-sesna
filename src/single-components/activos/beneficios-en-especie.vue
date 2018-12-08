<template>
	<div class="col-sm-9 col-sm-offset-3 sidecontent">
		<h2>Uso o Beneficios en Especie Propiedad de un Tercero</h2>
		<div class="row">
			<div class="col-sm-12">
				<div class="pdn_d_box" v-for="beneficio in items">
					<p class="pdn_label">Tipo de bien</p>
					<p class="pdn_data_p">{{beneficio.tipo_bien.valor}}</p>
					
					
					<p class="pdn_label">Valor del mercado</p>
					<p class="pdn_data_p">${{beneficio.valor_mercado.valor}} {{beneficio.valor_mercado.moneda.codigo}} ({{beneficio.valor_mercado.moneda.moneda}})</p>
					
					<p class="pdn_label">Relación con Propietario del Bien</p>
					<p class="pdn_data_p">{{beneficio.relacion_persona.valor}}</p>
					
					
					<p class="pdn_label">Sector/Industria</p>
					<p class="pdn_data_p">{{beneficio.sector_industria.valor}}</p>
					
					
					<p class="pdn_label">Fecha de inicio</p>
					<p class="pdn_data_p">{{beneficio.fecha_inicio}}</p>
					


					<p class="pdn_label">Observaciones</p>
					<p class="pdn_data_p">{{beneficio.observaciones}}</p>
					
				
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
				return this.profile.activos.uso_especie_propiedad_tercero;
			}
		}
	}
</script>