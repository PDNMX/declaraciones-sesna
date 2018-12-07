<template>
	<div>
		<h3>Otros ingresos</h3>
	</div>
</template>

<script>
	export default {
		computed : {
			profile(){
				return this.$parent.profile;
			},

			items(){
				return this.profile.ingresos.otros_ingresos;
			}
		}
	}
</script>