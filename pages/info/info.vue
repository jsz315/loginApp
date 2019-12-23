<template>
	<view class="box">
		<view class="tip">以下为必填资料 填写完善才能申请借款</view>
		<view class="list">
			<view class="item">
				<image class="jico" :mode="mode" src="../../static/img/g_03.png"></image>
				<view class="info" @click="jump(1)">
					<view class="tip1">身份信息</view>
					<view class="tip2">*让我们了解您的基本情况</view>
				</view>
				<text class="tip3">不完整</text>
				<view class="jarrow"></view>
			</view>
			<view class="item" @click="jump(2)">
				<image class="jico" :mode="mode" src="../../static/img/g_08.png"></image>
				<view class="info">
					<view class="tip1">资料信息</view>
					<view class="tip2">*让我们了解您的资料信息</view>
				</view>
				<text class="tip3">不完整</text>
				<view class="jarrow"></view>
			</view>
			<view class="item" @click="jump(3)">
				<image class="jico" :mode="mode" src="../../static/img/g_14.png"></image>
				<view class="info">
					<view class="tip1">收款银行卡</view>
					<view class="tip2">*我们会将钱打到该卡内</view>
				</view>
				<text class="tip3">不完整</text>
				<view class="jarrow"></view>
			</view>
		</view>
		<view class="jbtn">立即借款</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				mode: "aspectFit"
			}
		},
		methods: {
			jump(n){
				let url;
				if(n == 1){
					url = '/pages/proof/proof'
				}
				else if(n == 2){
					url = '/pages/company/company'
				}
				else if(n == 3){
					url = '/pages/bank/bank'
				}
				uni.navigateTo({
				    url: url
				});
			}
		}
	}
</script>


<style lang="less" scoped>
	@import url("./info.less");
</style>
