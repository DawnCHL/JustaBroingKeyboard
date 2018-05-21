<style lang="less">
	
	
	
</style>


<template>
	<div >
		<Keyboard></Keyboard>
	</div>
	
</template>


<script>

	module.exports = {
		data: function () {
			return {
				status: 0
			}
		},
		mounted: function () {
			
		},
		components: {
			'Keyboard': require('../component/keyboard.vue')
		},
		methods: {
			test: function () {
				console.log('!')
			},
			testagin: function () {
				console.log('?')
			},
		}
	}
</script>