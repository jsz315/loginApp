<template>
	<view class="box">
		<view class="title-tip">精选会员权益</view>
		<view class="row-img">
			<image @tap="onClick" class="row1-img" :mode="mode" src="../../static/img/1.png"></image>
			<image @tap="onClick" class="row1-img" :mode="mode" src="../../static/img/2.png"></image>
		</view>
		<view class="row-img">
			<image @tap="onClick" class="row2-img" :mode="mode" src="../../static/img/3.png"></image>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				mode: "aspectFit",
				src1: "../../static/img/1.png",
				src2: "../../static/img/2.png",
				src3: "../../static/img/3.png"
			}
		},
		methods:{
			onClick(){
				this.$emit("jump");
			}
		}
	}
</script>

<style lang="less" scoped>
@import url("./vip-goods.less");
</style>