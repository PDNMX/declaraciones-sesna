<template>
	<div>
		<h3>Puesto actual</h3>
	</div>
</template>

<script>
	export default {
		computed : {
			profile(){
				return this.$parent.profile;
			}
		}
	}
</script>