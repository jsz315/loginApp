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
	import api from '../../js/api.js';
	export default {
		data() {
			return {
				mode: "aspectFit",
				current: 1,
				list: []
			}
		},
		methods: {
			jump(n){
				let src = "https://www.baidu.com/";
				uni.navigateTo({
				    url: '/pages/web/web?src=' + encodeURIComponent(src)
				});
			},
			async loadPage(){
				// let res = await api.product(this.current++);
				// if(res.code == 200){
				// 	this.list = this.list.concat(res.data);
				// }
				for(var i = 0; i < 10; i++){
					this.list.push(this.list.length);
				}
			}
		},
		mounted(){
			this.loadPage();
		},
		onReachBottom(){
			this.loadPage();
		}
	}
</script>


<style lang="less" scoped>
	@import url("./push.less");
</style>
