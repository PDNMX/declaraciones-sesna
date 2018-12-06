<template>
	<div>
		<h3>Datos curriculares</h3>
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