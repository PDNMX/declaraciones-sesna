<template>
	<div>
		<h3>bienes inmuebles</h3>
	</div>
</template>

<script>
	export default {
		computed : {
			profile(){
				return this.$parent.profile;
			},

			items(){
				return this.profile.activos.bienes_inmuebles;
			}
		}
	}
</script>