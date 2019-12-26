<template>
	<view class="box">
		<web-view :src="src"></web-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				src: "https://service.vipsave.cn/vip-html/#/serviceProtocol?productName=%E6%84%BF%E6%9C%9B%E9%92%B1%E5%8C%85&companyName=%E6%B4%8B%E5%BE%B7%E7%A7%91%E6%8A%80&companyFullName=%E5%B9%BF%E5%B7%9E%E6%B4%8B%E5%BE%B7%E7%BD%91%E7%BB%9C%E7%A7%91%E6%8A%80%E6%9C%89%E9%99%90"
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

