<template>
<div>
	<div class="col-sm-9 col-sm-offset-3 sidecontent">
		<h2>Información general</h2>
		
		<div class="row">
			<div class="col-sm-7">
				<div class="pdn_d_box">
					<p class="pdn_label">Nacionalidades</p>
					<p class="pdn_data_p" v-for="nacionalidad in items.nacionalidades">
					  {{nacionalidad.valor}}
				  </p>
					<p class="pdn_label">Lugar de nacimiento</p>
					<p class="pdn_data_p">{{items.entidad_federativa_nacimiento.nom_ent}}</p>
				</div>
			</div>
			<div class="col-sm-5">
				<div class="pdn_d_box">
					<p class="pdn_label">Estado Civil</p>
					<p class="pdn_data_p">{{items.estado_civil.valor}}</p>
					<p class="pdn_label">Regimen matrimonial</p>
					<p class="pdn_data_p">{{items.regimen_matrimonial.valor}}</p>
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
				return this.profile.informacion_personal.informacion_general;
			}
		}
	}
</script>