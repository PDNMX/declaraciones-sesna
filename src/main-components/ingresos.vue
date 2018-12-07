<template>
	<div>
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
	  	    actividad empresarial
	  	  </router-link>
	    </li>

	    <li>
	  	  <router-link :to="`/perfil/${userID}/ingresos/actividad-economica-menor`">
	  	    actividad económica menor
	  	  </router-link>
	    </li>

	    <li>
	  	  <router-link :to="`/perfil/${userID}/ingresos/arrendamiento`">
	  	    arrendamiento
	  	  </router-link>
	    </li>

	    <li>
	  	  <router-link :to="`/perfil/${userID}/ingresos/intereses`">
	  	    intereses
	  	  </router-link>
	    </li>

	    <li>
	  	  <router-link :to="`/perfil/${userID}/ingresos/premios`">
	  	    premios
	  	  </router-link>
	    </li>

	    <li>
	  	  <router-link :to="`/perfil/${userID}/ingresos/otros-ingresos`">
	  	    otros ingresos
	  	  </router-link>
	    </li>

	    <li>
	  	  <router-link :to="`/perfil/${userID}/ingresos/enajenacion`">
	  	    enajenación de bienes
	  	  </router-link>
	    </li>

	    
	    
	  </ul>
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