<template>
	<div class="col-sm-9 col-sm-offset-3 sidecontent">
		<h2>Cuentas por cobrar</h2>
		<div class="row">
			<div class="col-sm-12">
				<div class="pdn_d_box" v-for="cuentas in items">
					<p class="pdn_label">Número de registro</p>
					<p class="pdn_data_p">{{cuentas.numero_registro}}</p>
					
					
					<p class="pdn_label">Sector/Industria</p>
					<p class="pdn_data_p">{{cuentas.sector_industria.valor}}</p>
					
					<p class="pdn_label">Fecha de préstamo</p>
					<p class="pdn_data_p">{{cuentas.fecha_prestamo}}</p>
					
					
					<p class="pdn_label">Tasa de interés</p>
					<p class="pdn_data_p">{{cuentas.tasa_interes}}</p>
					
					
					<p class="pdn_label">Fecha de vencimiento</p>
					<p class="pdn_data_p">{{cuentas.fecha_vencimiento}}</p>
					
					<p class="pdn_label">Porcentaje de copropiedad</p>
					<p class="pdn_data_p">{{cuentas.porcentaje_copropiedad}}%</p>
					
					
				
					
									

					<p class="pdn_label">Observaciones</p>
					<p class="pdn_data_p">{{cuentas.observaciones}}</p>

					
					
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
				return this.profile.activos.cuentas_por_cobrar;
			}
		}
	}
</script>