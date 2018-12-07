<template>
	<div class="col-sm-9 col-sm-offset-3 sidecontent">
		<h2>Datos curriculares</h2>
		
		<div class="row">
			<div class="col-sm-12">
				<div class="pdn_d_box"  v-for="grado in items.grados_academicos">
					<p class="pdn_data_p">{{grado.grado_obtenido}} en {{grado.carrera}}</p>
					<p class="pdn_label">Institución Educativa </p>
					<p class="pdn_data_p">{{grado.institucion_educativa}}<br>
						{{grado.lugar_institucion_educativa.entidad.nom_ent}}, {{grado.lugar_institucion_educativa.pais.valor}}
					</p>
					<div class="row">
						<div class="col-sm-6">
							<p class="pdn_label">Estatus</p>
							<p class="pdn_data_p">{{grado.estatus.valor}}</p>
							<p class="pdn_label">Documento obtenido</p>
							<p class="pdn_data_p">{{grado.documento_obtenido.valor}}</p>
						</div>
						<div class="col-sm-6">
							<p class="pdn_label">Año de conclusión</p>
							<p class="pdn_data_p">{{profile.informacion_personal.datos_encargo_actual.nivel_gobierno.valor}}</p>
							<p class="pdn_label">Cédula Profesional</p>
							<p class="pdn_data_p">{{grado.cedula_profesional}}</p>
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
				return this.profile.informacion_personal.datos_curriculares;
			}
		}
	}
</script>