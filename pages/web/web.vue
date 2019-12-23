<template>
	<view>
		<web-view :src="src"></web-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				src: "https://uniapp.dcloud.io/static/web-view.html"
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
