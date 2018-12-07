<template>
	<div>
		<h3>Actividad económica menor</h3>
	</div>
</template>

<script>
	export default {
		computed : {
			profile(){
				return this.$parent.profile;
			},

			items(){
				return this.profile.ingresos.actividad_economica_menor;
			}
		}
	}
</script>