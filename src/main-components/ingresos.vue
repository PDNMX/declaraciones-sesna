<template>
<div>
	<div class="col-sm-3 sidebar">
		<h2>Ingresos</h2>
		<ul>
			<li>
	  	  <router-link :to="`/perfil/${userID}/ingresos`">
	  	    Sueldos y Salarios por el Encargo Público
	  	  </router-link>
	    </li>

	    <li>
	  	  <router-link :to="`/perfil/${userID}/ingresos/sueldos-otros`">
	  	    Sueldos y Salarios por otros empleos
	  	  </router-link>
	    </li>

	    <li>
	  	  <router-link :to="`/perfil/${userID}/ingresos/actividad-profesional`">
	  	    Actividad profesional
	  	  </router-link>
	    </li>

	    <li>
	  	  <router-link :to="`/perfil/${userID}/ingresos/actividad-empresarial`">
	  	    Actividad empresarial
	  	  </router-link>
	    </li>

	    <li>
	  	  <router-link :to="`/perfil/${userID}/ingresos/actividad-economica-menor`">
	  	    Actividad económica menor
	  	  </router-link>
	    </li>

	    <li>
	  	  <router-link :to="`/perfil/${userID}/ingresos/arrendamiento`">
	  	    Arrendamiento
	  	  </router-link>
	    </li>

	    <li>
	  	  <router-link :to="`/perfil/${userID}/ingresos/intereses`">
	  	    Intereses
	  	  </router-link>
	    </li>

	    <li>
	  	  <router-link :to="`/perfil/${userID}/ingresos/premios`">
	  	    Premios
	  	  </router-link>
	    </li>

	    <li>
	  	  <router-link :to="`/perfil/${userID}/ingresos/otros-ingresos`">
	  	    Otros ingresos
	  	  </router-link>
	    </li>

	    <li>
	  	  <router-link :to="`/perfil/${userID}/ingresos/enajenacion`">
	  	    Enajenación de bienes
	  	  </router-link>
	    </li>

	    
	    
	  </ul>
	 </div>
		<router-view></router-view>
	</div>
</template>

<script>
	export default {
		computed : {
			userID(){
				return this.$parent.userID;
			},
			profile(){
		  	return this.$parent.profile;
		  }
		}
	}
</script>