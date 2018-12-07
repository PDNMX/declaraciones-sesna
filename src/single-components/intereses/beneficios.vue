<template>
	<div>
		<h3>beneficios</h3>
	</div>
</template>

<script>
	export default {
		computed : {
			profile(){
				return this.$parent.profile;
			},

			items(){
				return this.profile.intereses.beneficios_gratuitos;
			}
		}
	}
</script>