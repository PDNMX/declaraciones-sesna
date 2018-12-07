<template>
	<div>
		<h3>bienes intangibles</h3>
	</div>
</template>

<script>
	export default {
		computed : {
			profile(){
				return this.$parent.profile;
			},

			items(){
				return this.profile.activos.bienes_intangibles;
			}
		}
	}
</script>