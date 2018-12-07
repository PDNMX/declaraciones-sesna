<template>
<div>
<div v-if="profile">
	<!--info declarante-->
	<div class="row pdn_card_m_info">
		<div class="col-sm-5">
			<div class="row">
				<div class="col-sm-4">
					<img src="/img/user.svg">
				</div>
				<div class="col-sm-8">
					<h1>{{profile.informacion_personal.informacion_general.nombres}} {{profile.informacion_personal.informacion_general.primer_apellido}} {{profile.informacion_personal.informacion_general.segundo_apellido}}</h1>
					<p>{{profile.informacion_personal.informacion_general.correo_electronico.laboral}}</p>
				</div>					
			</div>
		</div>
		<div class="col-sm-4">
			<h3>{{profile.informacion_personal.datos_encargo_actual.empleo_cargo_comision}}</h3>
			<p>{{profile.informacion_personal.datos_encargo_actual.area_adscripcion}}<br>
				<strong>{{profile.informacion_personal.datos_encargo_actual.ente_publico}}</strong></p>
		</div>
		<div class="col-sm-3">
				<h3><span class="pdn_score">${{profile.ingresos.sueldos_salarios_publicos.ingreso_bruto_anual}}</span></h3>
				<p>Ingresos anuales netos</p>
				<p><small>Actualización: {{profile.informacion_personal.informacion_general.fecha_declaracion}} </small></p>
		</div>
	</div>
	<!--nav-->
	<div class="row">
		<div class="col-sm-12">
			<nav class="pdn_main_nav">
				<ul>
					<li>
						<router-link :to="`/perfil/${userID}/informacion`">Información</router-link>
					</li>
				
					<li>
						<router-link :to="`/perfil/${userID}/intereses`">Intereses</router-link>
					</li>
				
					<li>
						<router-link :to="`/perfil/${userID}/ingresos`">Ingresos</router-link>
					</li>
				
					<li>
						<router-link :to="`/perfil/${userID}/activos`">Activos</router-link>
					</li>
				
					<li>
						<router-link :to="`/perfil/${userID}/pasivos`">Pasivos</router-link>
					</li>
				</ul>
			</nav>
	  	</div>
	</div>
	
	<!--pnd_box-->

	<div class="row pnd_box">
		<router-view></router-view>
	</div>
		
			
</div>

</div>
</template>

<script>
	export default {
		data(){
			return {
			};
		},
		mounted(){
			//console.log("yoh", this.userID, this.$parent.profile);
			//console.log(this.profile);
			if(!this.profile) this.$parent.getProfile(this.userID);
		},

		computed: {
			userID(){
			  return this.$parent.$route.params.id;
		  },

		  profile(){
		  	return this.$parent.profile;
		  }
		}
	}
</script>