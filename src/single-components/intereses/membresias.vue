<template>
	<div>
		<h3>membresías</h3>
	</div>
</template>

<script>
	export default {
		computed : {
			profile(){
				return this.$parent.profile;
			},

			items(){
				return this.profile.intereses.membresias;
			}
		}
	}
</script>