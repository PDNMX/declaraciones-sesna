<template>
	<div class="col-sm-9 col-sm-offset-3 sidecontent">
		<h2>Membresías</h2>
		<div class="row">
			<div class="col-sm-12">
				<div class="pdn_d_box" v-for="interes in items">
				<p class="pdn_label">Tipo de institución</p>
				<p class="pdn_data_p">{{interes.tipo_institucion.valor}}</p>
				<p class="pdn_label">Nombre de institución</p>
				<p class="pdn_data_p">{{interes.nombre_institucion}}</p>
				<p class="pdn_label">Naturaleza de membresía</p>
				<p class="pdn_data_p">{{interes.naturaleza_membresia}}</p>
				<p class="pdn_label">Domicilio</p>
				<p class="pdn_data_p">{{interes.domicilio.vialidad.tipo_vial+' '+interes.domicilio.vialidad.nom_vial+' No.' +interes.domicilio.numExt+ ' No. Int.'+interes.domicilio.numInt
				+ ' '+interes.domicilio.localidad.nom_loc+', '+interes.domicilio.municipio.nom_mun+', '+interes.domicilio.entidad_federativa.nom_ent+', '+interes.domicilio.pais.valor+' C.P. '+interes.domicilio.cp }}</p>
				<p class="pdn_label">Sector o industria</p>
				<p class="pdn_data_p">{{interes.sector_industria.valor}}</p>
				<p class="pdn_label">Puesto o rol</p>
				<p class="pdn_data_p">{{interes.puesto_rol}}</p>
				<p class="pdn_label">Fecha de inicio</p>
				<p class="pdn_data_p">{{interes.fecha_inicio}}</p>
				<p class="pdn_label">Pagado</p>
				<p class="pdn_data_p" v-if="interes.pagado">Sí</p>
				<p class="pdn_data_p" v-else>No</p>
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
				return this.profile.intereses.membresias;
			}
		}
	}
</script>
