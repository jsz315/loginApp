<template>
	<view class="box">
		<image class="title-img" src="../../static/img/push.png" mode="aspectFill"></image>
		<view class="tip">请选择以下平台进行借款</view>
		<view class="list">
			<view class="item" v-for="item in list" v-bind:key="item" @tap="jump(item)">
				<image class="jico" :mode="mode" src="../../static/img/g_03.png"></image>
				<view class="info">
					<view class="tip1">用钱宝</view>
					<view class="tip2">利率超低，3小时极速放款</view>
				</view>
				<text class="tip3">不完整</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				mode: "aspectFit",
				list: [1, 2, 3, 4, 5]
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
	@import url("./push.less");
</style>
