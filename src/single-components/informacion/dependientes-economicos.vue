<template>
	<div>
		<h3>Dependientes económicos</h3>
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