<template>
	<div class="col-sm-9 col-sm-offset-3 sidecontent">
		<h2>Intereses</h2>
		<div class="row">
			<div class="col-sm-12">
				<div class="pdn_d_box" v-for="sueldo in items">
					<p class="pdn_label">Sector o industria</p>
					<p class="pdn_data_p">{{sueldo.sector_industria.valor}}</p>
					<p class="pdn_label">Tipo de actividad o servicio</p>
					<p class="pdn_data_p">{{sueldo.tipo_actividad_servicio.valor}}</p>
					<p class="pdn_label">Descripción de actividad o servicio</p>
					<p class="pdn_data_p">{{sueldo.descripcion_actividad_servicio}}</p>
					<p class="pdn_label">Ingreso bruto anual</p>
					<p class="pdn_data_p">{{sueldo.ingreso_bruto_anual.valor}} {{sueldo.ingreso_bruto_anual.moneda.codigo}}</p>
					<p class="pdn_label">Moneda</p>
					<p class="pdn_data_p">{{sueldo.ingreso_bruto_anual.moneda.moneda}}</p>
					<p class="pdn_label">Unidad temporal</p>
					<p class="pdn_data_p">{{sueldo.ingreso_bruto_anual.unidad_temporal.valor}}</p>
					<p class="pdn_label">Duración frecuencia</p>
					<p class="pdn_data_p">{{sueldo.ingreso_bruto_anual.duracion_frecuencia}}</p>
					<p class="pdn_label">Fecha de transacción</p>
					<p class="pdn_data_p">{{sueldo.ingreso_bruto_anual.fecha_transaccion}}</p>
					<p class="pdn_label">Observaciones</p>
					<p class="pdn_data_p">{{sueldo.observaciones}}</p>


				

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
				return this.profile.ingresos.intereses;
			}
		}
	}
</script>
