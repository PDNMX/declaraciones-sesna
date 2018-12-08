<template>
<div>
	<div class="col-sm-3 sidebar">
		<h2>Activos</h2>
		<ul>
			
			<li>
	  	  <router-link :to="`/perfil/${userID}/activos`">
	  	    Bienes inmuebles
	  	  </router-link>
	    </li>
	    
	    <li>
	  	  <router-link :to="`/perfil/${userID}/activos/bienes-muebles`">
	  	    Bienes muebles registrables
	  	  </router-link>
	    </li>

	    <li>
	  	  <router-link :to="`/perfil/${userID}/activos/bienes-muebles-no-registrables`">
	  	    Bienes muebles no registrables
	  	  </router-link>
	    </li>

	    <li>
	  	  <router-link :to="`/perfil/${userID}/activos/inversiones`">
	  	    Inversiones
	  	  </router-link>
	    </li>

	    <li>
	  	  <router-link :to="`/perfil/${userID}/activos/efectivo-y-metales`">
	  	    Efectivo y metales
	  	  </router-link>
	    </li>

	    <li>
	  	  <router-link :to="`/perfil/${userID}/activos/fideicomisos`">
	  	    Fideicomisos
	  	  </router-link>
	    </li>

	    <li>
	  	  <router-link :to="`/perfil/${userID}/activos/bienes-intangibles`">
	  	    Bienes intangibles
	  	  </router-link>
	    </li>

	    <li>
	  	  <router-link :to="`/perfil/${userID}/activos/cuentas-por-cobrar`">
	  	    Cuentas por cobrar
	  	  </router-link>
	    </li>

	    <li>
	  	  <router-link :to="`/perfil/${userID}/activos/beneficios-en-especie`">
	  	    Uso o Beneficios en Especie Propiedad de un Tercero
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