<template>
	<div>
		<h3>Actividad empresarial</h3>
	</div>
</template>

<script>
	export default {
		computed : {
			profile(){
				return this.$parent.profile;
			},

			items(){
				return this.profile.ingresos.actividad_empresarial;
			}
		}
	}
</script>