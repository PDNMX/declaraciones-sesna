<template>
	<div class="col-sm-9 col-sm-offset-3 sidecontent">
		<h2>Bienes intangibles</h2>
		<div class="row">
			<div class="col-sm-12">
				<div class="pdn_d_box" v-for="bienes in items">
					<p class="pdn_label">Tipo de operación</p>
					<p class="pdn_data_p">{{bienes.tipo_operacion.valor}}</p>
					
					<p class="pdn_label">Propietario registrado</p>
					<p class="pdn_data_p">{{bienes.propietario_registrado}}</p>
					
					
					<p class="pdn_label">Descripción</p>
					<p class="pdn_data_p">{{bienes.descripcion}}</p>
					
					<!--
					<p class="pdn_label">Ente público encargado</p>
					<p class="pdn_data_p">{{bienes.ente_publico_encargado}}</p>-->
					
					<p class="pdn_label">Número de registro</p>
					<p class="pdn_data_p">{{bienes.numero_registro}}</p>
					
					
					<p class="pdn_label">Fecha de registro</p>
					<p class="pdn_data_p">{{bienes.fecha_registro}}</p>
					
					<p class="pdn_label">Sector/Industria</p>
					<p class="pdn_data_p">{{bienes.sector_industria.valor}}</p>
					
					<p class="pdn_label">Precio de adquisición</p>
					<p class="pdn_data_p">${{bienes.precio_adquisicion.valor}} {{bienes.precio_adquisicion.moneda.codigo}} ({{bienes.precio_adquisicion.moneda.moneda}})</p>
					
					<p class="pdn_label">Forma  de adquisición</p>
					<p class="pdn_data_p">{{bienes.forma_adquisicion.valor}}</p>
					
					<p class="pdn_label">Fecha de vencimiento</p>
					<p class="pdn_data_p">{{bienes.fecha_vencimiento}}</p>
					
					<p class="pdn_label">Porcentaje de Propiedad en Caso de Copropiedad</p>
					<p class="pdn_data_p">{{bienes.porcentaje_copropiedad}}%</p>
					
					
					<p class="pdn_label">Precio total de adquisición si es copropiedad</p>
					<p class="pdn_data_p">${{bienes.precio_total_copropiedad.valor}} {{bienes.precio_total_copropiedad.moneda.codigo}} ({{bienes.precio_total_copropiedad.moneda.moneda}})</p>
					
									

					<p class="pdn_label">Observaciones</p>
					<p class="pdn_data_p">{{bienes.observaciones}}</p>

					
					
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
				return this.profile.activos.bienes_intangibles;
			}
		}
	}
</script>