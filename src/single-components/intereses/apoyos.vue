<template>
	<div class="col-sm-9 col-sm-offset-3 sidecontent">
		<h2>Apoyos</h2>
		<div class="row">
			<div class="col-sm-12">
				<div class="pdn_d_box" v-for="interes in items">
				<p class="pdn_label">Es beneficiario</p>
				<p class="pdn_data_p" v-if="interes.es_beneficiario">Sí</p>
				<p class="pdn_data_p" v-else>No</p>
				<p class="pdn_label">Programa</p>
				<p class="pdn_data_p" >{{interes.programa}}</p>
				<p class="pdn_label">Institución otorgante</p>
				<p class="pdn_data_p" >{{interes.institucion_otorgante}}</p>
				<p class="pdn_label">Nivel de Gobierno</p>
				<p class="pdn_data_p" >{{interes.nivel_orden_gobierno.valor}}</p>
				<p class="pdn_label">Tipo de Apoyo</p>
				<p class="pdn_data_p" >{{interes.tipo_apoyo.valor}}</p>
				<p class="pdn_label">Valor anual del apoyo</p>
				<p class="pdn_data_p" >{{interes.valor_anual_apoyo}}</p>
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
				return this.profile.intereses.apoyos_beneficios_publicos;
			}
		}
	}
</script>
