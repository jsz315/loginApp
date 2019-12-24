<template>
	<view class="box">
		<view class="status_bar"></view>
		
		<view class="my-box">
			<image class="img" src="../../static/img/haner.png" mode="aspectFit"></image>
			<view class="tip" @click="login" v-if="!isLogin">登录/注册</view>
			<view class="tip" v-if="isLogin">{{account}}</view>
		</view>
		
		<view class="list">
			<view class="item" @click="jump(1)">
				<image class="jico" :mode="mode" src="../../static/img/custom1.png"></image>
				<text class="jtip">我的客服</text>
				<view class="jarrow"></view>
			</view>
			<view class="item" @click="jump(2)">
				<image class="jico" :mode="mode" src="../../static/img/info1.png"></image>
				<text class="jtip">我的资料</text>
				<view class="jarrow"></view>
			</view>
			<view class="item" @click="jump(3)">
				<image class="jico" :mode="mode" src="../../static/img/bank1.png"></image>
				<text class="jtip">绑定银行卡</text>
				<view class="jarrow"></view>
			</view>
			<view class="space"></view>
			<view class="item" @click="jump(4)" v-if="isLogin">
				<image class="jico" :mode="mode" src="../../static/img/psw1.png"></image>
				<text class="jtip">修改密码</text>
				<view class="jarrow"></view>
			</view>
			<view class="item" @click="jump(5)" v-if="isLogin">
				<image class="jico" :mode="mode" src="../../static/img/out1.png"></image>
				<text class="jtip">退出登录</text>
				<view class="jarrow"></view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		mapState,
	    mapMutations
	} from 'vuex'
	
	export default {
		data() {
			return {
				mode: "aspectFit",
				arrow: "../../static/img/r-arrow.png",
			}
		},
		computed:{
			...mapState(["isLogin", "account"])
		},
		methods: {
			...mapMutations(['isLoginChange']),
			login(){
				uni.navigateTo({
				    url: '/pages/login/login'
				});
			},
			jump(n){
				let url;
				if(n == 1){
					url = '/pages/custom/custom'
				}
				else if(n == 2){
					url = '/pages/info/info'
				}
				else if(n == 3){
					url = '/pages/bank/bank'
				}
				else if(n == 4){
					url = '/pages/find/find'
				}
				else if(n == 5){
					this.isLoginChange(false);
					url = '/pages/login/login'
				}
				
				uni.navigateTo({
				    url: url
				});
			}
		},
		onTabItemTap(t){
			console.log(t);
		},
		onShow(){
			// uni.showTabBar();
		}
	}
</script>

<style lang="less" scoped>
	@import url("./mine.less");
</style>
