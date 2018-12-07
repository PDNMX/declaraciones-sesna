<template>
<div>
	<div class="col-sm-9 col-sm-offset-3 sidecontent">
		<h2>Información general</h2>
		
		<div class="row">
			<div class="col-sm-7">
				<div class="pdn_d_box">
					<p class="pdn_label">Nacionalidad</p>
					<p class="pdn_data_p">{{profile.informacion_personal.informacion_general.nacionalidades}}</p>
					<p class="pdn_label">Lugar de nacimiento</p>
					<p class="pdn_data_p">{{profile.informacion_personal.informacion_general.entidad_federativa_nacimiento}}</p>
				</div>
			</div>
			<div class="col-sm-5">
				<div class="pdn_d_box">
					<p class="pdn_label">Estado Civil</p>
					<p class="pdn_data_p">{{profile.informacion_personal.informacion_general.estado_civil}}</p>
					<p class="pdn_label">Regimen matrimonial</p>
					<p class="pdn_data_p">{{profile.informacion_personal.informacion_general.regimen_matrimonial}}</p>
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
			}
		}
	}
</script>