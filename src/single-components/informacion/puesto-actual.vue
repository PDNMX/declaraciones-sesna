<template>
	<div>
		<h3>Puesto actual</h3>
	</div>
</template>

<script>
	export default {
		computed : {
			profile(){
				return this.$parent.profile;
			},
			items(){
				return this.profile.informacion_personal.datos_encargo_actual;
			}
		}
	}
</script>