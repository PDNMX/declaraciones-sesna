<template>
	<div>
		<h3>Enajenación de bienes</h3>
	</div>
</template>

<script>
	export default {
		computed : {
			profile(){
				return this.$parent.profile;
			},

			items(){
				return this.profile.ingresos.enajenacion_bienes;
			}
		}
	}
</script>