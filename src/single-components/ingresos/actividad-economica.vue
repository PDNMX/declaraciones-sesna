<template>
	<div class="col-sm-9 col-sm-offset-3 sidecontent">
		<h2>Actividad económica menor</h2>
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