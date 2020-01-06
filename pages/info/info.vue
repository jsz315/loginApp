<template>
	<view class="box">
		
		<view class="list">
			<view class="tip">
			以下为必填资料 填写完善才能申请借款
			</view>
			
			<view class="item">
				<image class="jico" :mode="mode" src="../../static/img/g_03.png"></image>
				<view class="info" @click="jump(0)">
					<view class="tip1">实名认证</view>
					<view class="tip2">*请进行身份实名认证</view>
				</view>
				<text class="tip3">{{getStateTip(userAuth.realNameState)}}</text>
				<view class="jarrow"></view>
			</view>
			<view class="item">
				<image class="jico" :mode="mode" src="../../static/img/g_03.png"></image>
				<view class="info" @click="jump(1)">
					<view class="tip1">身份信息</view>
					<view class="tip2">*请进行身份证认证</view>
				</view>
				<text class="tip3">{{getStateTip(userAuth.idState)}}</text>
				<view class="jarrow"></view>
			</view>
			<view class="item" @click="jump(2)">
				<image class="jico" :mode="mode" src="../../static/img/g_08.png"></image>
				<view class="info">
					<view class="tip1">资料信息</view>
					<view class="tip2">*让我们了解您的资料信息</view>
				</view>
				<text class="tip3">{{getStateTip(userAuth.workInfoState)}}</text>
				<view class="jarrow"></view>
			</view>
			<view class="item" @click="jump(3)">
				<image class="jico" :mode="mode" src="../../static/img/g_14.png"></image>
				<view class="info">
					<view class="tip1">收款银行卡</view>
					<view class="tip2">*我们会将钱打到该卡内</view>
				</view>
				<text class="tip3">{{getStateTip(userAuth.bankCardState)}}</text>
				<view class="jarrow"></view>
			</view>
			
			<view class="item" @click="jump(4)">
				<image class="jico" :mode="mode" src="../../static/img/g_12.png"></image>
				<view class="info">
					<view class="tip1">手机号认证</view>
					<view class="tip2">*认证您本人的手机号</view>
				</view>
				<text class="tip3">{{getStateTip(userAuth.phoneState)}}</text>
				<view class="jarrow"></view>
			</view>
			
			<view class="tip">
			以下为选填 补充资料可增加额度和审核通过几率
			</view>
			
			<view class="item" @click="jump(5)">
				<image class="jico" :mode="mode" src="../../static/img/g_08.png"></image>
				<view class="info">
					<view class="tip1">补充资料</view>
					<view class="tip2">*增加您的审核通过几率</view>
				</view>
				<text class="tip3">不完整</text>
				<view class="jarrow"></view>
			</view>
			
		</view>
		<view class="jbtn">立即借款</view>
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
				mode: "aspectFit"
			}
		},
		computed:{
			...mapState(["isLogin", "isVip", "inPro", "userAuth"])
		},
		methods: {
			getStateTip(n){
				if(n == 20){
					return "认证中"
				}
				else if(n == 30){
					return "已完善"
				}
				return "未完善"
			},
			jump(n){
				let url;
				if(n == 0){
					url = '/pages/person/person'
				}
				else if(n == 1){
					url = '/pages/proof/proof'
				}
				else if(n == 2){
					url = '/pages/company/company'
				}
				else if(n == 3){
					url = '/pages/bank/bank'
				}
				else if(n == 4){
					url = '/pages/phone/phone'
				}
				else if(n == 5){
					url = '/pages/other/other'
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
