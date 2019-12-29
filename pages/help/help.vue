<template>
	<view class="box">
		<view class="status_bar"></view>
		<image class="img" src="../../static/img/help.png" mode="aspectFit"></image>
		<view class="bar"></view>
		<view class="row">
			<view class="tip1">
				<image class="ico-img" src="../../static/img/help1.png" mode="aspectFit"></image>
				<view class="tip-title">问题解答</view>
				<view class="tip-more" @tap="jump(-1)">更多</view>
			</view>
			<view class="list">
				<!-- <view class="tip2" @tap="jump(0)">申请人需要具备什么条件？</view>
				<view class="tip2" @tap="jump(1)">为什么我有额度，不能借款？</view>
				<view class="tip2" @tap="jump(2)">我能申请多少金额？分多少期？</view> -->
				
				<view class="tip2" @tap="jump(0)">成为VIP需要具备什么条件？</view>
				<view class="tip2" @tap="jump(1)">成为VIP可以享受哪些特权？</view>
				<view class="tip2" @tap="jump(2)">VIP特权有效期多久？</view>
			</view>
		</view>
		<view class="row">
			<view class="tip1">
				<image class="ico-img" src="../../static/img/help2.png" mode="aspectFit"></image>
				<view class="tip-title">测试栏目</view>
				<view class="tip-more">更多</view>
			</view>
			<view class="list">
				<view class="tip2"></view>
				<view class="tip2"></view>
				<view class="tip2"></view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			jump(n){
				uni.navigateTo({
					url: "/pages/answers/answers?index=" + n
				})
			}
		}
	}
</script>

<style lang="less" scoped>
	@import url("./help.less");
</style>

