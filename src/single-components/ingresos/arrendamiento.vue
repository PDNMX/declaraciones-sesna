<template>
	<div>
		<h3>Arrendamiento</h3>
	</div>
</template>

<script>
	export default {
		computed : {
			profile(){
				return this.$parent.profile;
			},

			items(){
				return this.profile.ingresos.arrendamiento;
			}
		}
	}
</script>