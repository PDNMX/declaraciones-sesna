<template>
	<div class="col-sm-9 col-sm-offset-3 sidecontent">
		<h2>Dependientes económicos</h2>
		
		<div class="row">
			<div class="col-sm-12">
				<div class="pdn_d_box"  v-for="dependiente in items">
					<p class="pdn_data_p right">{{dependiente.tipo_relacion.valor}}</p>
					<div class="row">
						<div class="col-sm-6">
							<p class="pdn_label">Sector / Industria</p>
							<p class="pdn_data_p">{{dependiente.sector_industria.valor}}</p>
						</div>
						<div class="col-sm-6">
							<p class="pdn_label">Proveedor o Contratista de Gobierno</p>
							<p class="pdn_data_p"  v-if="dependiente.proveedor_contratista_gobierno == false">No</p>
							<p class="pdn_data_p"  v-else>Sí</p>
						</div>
					</div>
					<div class="pdn_divider"></div>
					
					<div class="row">
						<div class="col-sm-6">
							<p class="pdn_label">Intereses en el mismo Sector/Industria</p>
							<p class="pdn_data_p"  v-if="dependiente.tiene_intereses_mismo_sector_declarante == false">No</p>
							<p class="pdn_data_p"  v-else>Sí</p>
						</div>
						<div class="col-sm-6">
							<p class="pdn_label">Desarrolla actividades de cabildeo en el mismo Sector/Industria</p>
							<p class="pdn_data_p"  v-if="dependiente.desarrolla_cabildeo_sector_declarante == false">No</p>
							<p class="pdn_data_p"  v-else>Sí</p>
						</div>
					</div>
					<div class="pdn_divider"></div>
					
					<p class="pdn_label">Observaciones</p>
					<p class="pdn_data_p right">{{dependiente.observaciones}}</p>
					
					<!--- programas beneficiario-->
					<div class="row" v-for="programa in dependiente.beneficiario_programa_publico">
						<div class="col-sm-6">
							<p class="pdn_label">Beneficiaro de programa</p>
							<p class="pdn_data_p">{{programa.nombre_programa}}</p>
						</div>
						<div class="col-sm-6">
							<p class="pdn_label">Orden de Gobierno que otorga el apoyo</p>
							<p class="pdn_data_p">{{programa.institucion_otorga_apoyo}}</p>
						</div>
						<div class="col-sm-6">
							<p class="pdn_label">Tipo de apoyo</p>
							<p class="pdn_data_p">{{programa.tipo_apoyo}}</p>
						</div>
						<div class="col-sm-6">
							<p class="pdn_label">Valor del Apoyoo</p>
							<p class="pdn_data_p">${{programa.valor_apoyo}}</p>
						</div>
					</div>

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
				return this.profile.informacion_personal.datos_dependientes_economicos;
			}
		}
	}
</script>