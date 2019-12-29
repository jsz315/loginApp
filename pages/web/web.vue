<template>
	<view class="box">
		<web-view :src="src"></web-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				src: ""
			}
		},
		methods: {
			
		},
		onLoad(options){
			this.src = decodeURIComponent(options.src);
		}
	}
</script>

<style lang="less" scoped>
	@import url("./web.less");
</style>

