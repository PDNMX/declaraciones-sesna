<template>
	<div class="col-sm-9 col-sm-offset-3 sidecontent">
		<h2>Empresas sociedades asociaciones</h2>
		<div class="row">
			<div class="col-sm-12">
				<div class="pdn_d_box" v-for="interes in items">
				<p class="pdn_label">Nombre de la empresa, sociedad o asociación</p>
				<p class="pdn_data_p">{{interes.nombre_empresa_sociedad_asociacion}}</p>
				<p class="pdn_label">País</p>
				<p class="pdn_data_p">{{interes.pais_registro.valor}}</p>
				<p class="pdn_label">Fecha de constitución</p>
				<p class="pdn_data_p">{{interes.fecha_constitucion}}</p>
				<p class="pdn_label">Número de registro</p>
				<p class="pdn_data_p">{{interes.numero_registro}}</p>
				<p class="pdn_label">R.F.C</p>
				<p class="pdn_data_p">{{interes.rfc}}</p>
				<p class="pdn_label">Domicilio</p>
				<p class="pdn_data_p">{{interes.domicilio.vialidad.tipo_vial+' '+interes.domicilio.vialidad.nom_vial+' No.' +interes.domicilio.numExt+ ' No. Int.'+interes.domicilio.numInt
				+ ' '+interes.domicilio.localidad.nom_loc+', '+interes.domicilio.municipio.nom_mun+', '+interes.domicilio.entidad_federativa.nom_ent+', '+interes.domicilio.pais.valor+' C.P. '+interes.domicilio.cp }}</p>
				<p class="pdn_label">Rol</p>
				<p class="pdn_data_p">{{interes.rol}}</p>
				<p class="pdn_label">Actividad económica</p>
				<p class="pdn_data_p" v-if="interes.actividad_economica">Sí</p>
				<p class="pdn_data_p" v-else>No</p>
				<p class="pdn_label">Sector o industria</p>
				<p class="pdn_data_p">{{interes.sector_industria.valor}}</p>
				<p class="pdn_label">Porcentaje de participación</p>
				<p class="pdn_data_p">{{interes.porcentaje_participacion}}%</p>
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
				return this.profile.intereses.empresas_sociedades_asociaciones;
			}
		}
	}
</script>
