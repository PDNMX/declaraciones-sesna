<template>
	<div class="col-sm-9 col-sm-offset-3 sidecontent">
		<h2>Inversiones, cuentas y valores</h2>
		<div class="row">
			<div class="col-sm-12">
				<div class="pdn_d_box" v-for="inversion in items">
					<p class="pdn_label">Tipo de operación</p>
					<p class="pdn_data_p">{{inversion.tipo_operacion.valor}}</p>
					
					<p class="pdn_label">Tipo de bien</p>
					<p class="pdn_data_p">{{inversion.tipo_inversion.valor}}</p>
					
					
					<p class="pdn_label">Tipo especifico de inversión</p>
					<p class="pdn_data_p">{{inversion.tipo_especifico_inversion.valor}}</p>
					
					<p class="pdn_label">Inversión Nacional o Extranjera</p>
					<p class="pdn_data_p">{{inversion.nacional_extranjero.valor}}</p>
					
					<p class="pdn_label">Tipo de moneda</p>
					<p class="pdn_data_p">{{inversion.tipo_moneda.moneda}}</p>
					
					
					<p class="pdn_label">Nombre de la Institución</p>
					<p class="pdn_data_p">{{inversion.nombre_institucion}}</p>
					
					<p class="pdn_label">Forma  de adquisición</p>
					<p class="pdn_data_p">{{inversion.forma_adquisicion.valor}}</p>
					
					<p class="pdn_label">Titular del bien</p>
					<p class="pdn_data_p">{{inversion.titular_bien.valor}}</p>
					
					<p class="pdn_label">Porcentaje  de inversión del funcionario</p>
					<p class="pdn_data_p">{{inversion.porcentaje_inversion}}%</p>
				
					<p class="pdn_label">Sector</p>
					<p class="pdn_data_p">{{inversion.sector_industria.valor}}</p>					

					<p class="pdn_label">Observaciones</p>
					<p class="pdn_data_p">{{inversion.observaciones}}</p>

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
				return this.profile.activos.inversiones_cuentas_valores;
			}
		}
	}
</script>