<template>
	<div>
		<h3>clientes</h3>
	</div>
</template>

<script>
	export default {
		computed : {
			profile(){
				return this.$parent.profile;
			},

			items(){
				return this.profile.intereses.clientes_principales;
			}
		}
	}
</script>