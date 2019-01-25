<template>
	<div class="col-sm-9 col-sm-offset-3 sidecontent">
		<h2>Fideicomisos</h2>
		<div class="row">
			<div class="col-sm-12">
				<div class="pdn_d_box" v-for="fideicomiso in items">
					<p class="pdn_label">Tipo de operación</p>
					<p class="pdn_data_p">{{fideicomiso.tipo_operacion.valor}}</p>
					
					<p class="pdn_label">Identificador del fideicomiso</p>
					<p class="pdn_data_p">{{fideicomiso.identificador_fideicomiso}}</p>
					
					
					<p class="pdn_label">Tipo de fideicomiso</p>
					<p class="pdn_data_p">{{fideicomiso.tipo_fideicomiso.valor}}</p>
					
					<p class="pdn_label">Objetivo del fideicomiso</p>
					<p class="pdn_data_p">{{fideicomiso.objetivo}}</p>
					
					<p class="pdn_label">Fecha de creación</p>
					<p class="pdn_data_p">{{fideicomiso.fecha_creacion}}</p>
					
					
					<p class="pdn_label">Vigencia</p>
					<p class="pdn_data_p">{{fideicomiso.vigencia}}</p>
					
					<p class="pdn_label">Residencia (México/Extranjero)</p>
					<p class="pdn_data_p">{{fideicomiso.residencia.valor}}</p>
					
					<p class="pdn_label">Moneda</p>
					<p class="pdn_data_p">{{fideicomiso.moneda.moneda}}</p>
					
					<p class="pdn_label">Porcentaje de Propiedad</p>
					<p class="pdn_data_p">{{fideicomiso.porcentaje_propiedad_derechos_fiduciarios}}%</p>
					
					
					<p class="pdn_label">Ingreso monetario obtenido</p>
					<p class="pdn_data_p">${{fideicomiso.ingreso_monetario_obtenido}}</p>
					
					<p class="pdn_label">Institución Fiduciaria</p>
					<p class="pdn_data_p">{{fideicomiso.institucion_fiduciaria}}</p>
					
					<p class="pdn_label">RFC Fideicomisario</p>
					<p class="pdn_data_p">{{fideicomiso.rfc_fideicomsario}}</p>				

					<p class="pdn_label">Observaciones</p>
					<p class="pdn_data_p">{{fideicomiso.observaciones}}</p>


					
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
				return this.profile.activos.fideicomisos;
			}
		}
	}
</script>