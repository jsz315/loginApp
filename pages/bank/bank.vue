<template>
	<view class="box">
		<view class="jrow-box">
			<view class="jrow-tip">持卡人姓名</view>
			<input class="jrow-input" v-model="cardHolderName"  placeholder="请输入持卡人姓名" type="text"/>
		</view>
		<view class="jrow-box">
			<view class="jrow-tip">持卡人身份证号</view>
			<input class="jrow-input" v-model="cardHolderId"  placeholder="请输入持卡人身份证号码" type="text"/>
		</view>
		<view class="space"></view>
		<view class="jrow-box">
			<view class="jrow-tip">开户银行</view>
			<view class="jrow-input">
				<picker v-if="banks.length" @change="bindPickerChange" range-key="value" :value="index" :range="banks">
					<view class="uni-input">{{banks[index].value}}</view>
				</picker>
			</view>
		</view>
		<view class="jrow-box">
			<view class="jrow-tip">银行卡卡号</view>
			<input class="jrow-input" v-model="pan"  placeholder="请输入银行卡卡号" type="text"/>
		</view>
		<view class="space"></view>
		<view class="jrow-box">
			<view class="jrow-tip">手机号</view>
			<input class="jrow-input" v-model="phoneNO"  placeholder="请输入银行预留手机号" type="text"/>
		</view>
		<view class="jrow-box">
			<view class="jrow-tip">验证码</view>
			<input class="jrow-input code" v-model="code"  placeholder="请输入验证码" type="text"/>
			<view class="get-code">
				<timer-btn @done="getCode"></timer-btn>
			</view>
		</view>
		<view class="tip1">温馨提示：</view>
		<view class="tip2">填写的银行卡须是本人名下的借记卡（储蓄卡）</view>
		<view class="jbtn" @tap="onSure">提交</view>
		
		<j-alert ref="jAlert" @close="onClose" v-if="pop"></j-alert>
		<open-vip @close="closeVip" v-if="popVip"></open-vip>
	</view>
</template>

<script>
	import {
		mapState,
	    mapMutations
	} from 'vuex'
	
	import jAlert from '../../components/j-alert/j-alert.vue';
	import openVip from '../../components/open-vip/open-vip.vue';
	import timerBtn from '../../components/timer-btn/timer-btn.vue';
	import api from '../../js/api.js';
	import init from '../../js/init.js';
	import service from '../../service.js';
	
	// let bankList = ["工商银行", "中国银行", "建设银行", "招商银行", "广发银行", "邮储银行", "农业银行", "兴业银行", "平安银行", "中信银行", "华夏银行", "光大银行", "浦发银行", "民生银行"];
	
	export default {
		data() {
			return {
				index: 0,
				pop: false,
				code: "",
				pan: "",
				popVip: false,
				phoneNO: "",
				backCode: "",
			}
		},
		computed:{
			...mapState(["banks"]),
			cardHolderName: {
				get(){
					return this.$store.state.cardHolderName;
				},
				set(val){
					this.cardHolderNameChange(val);
				}
			},
			cardHolderId: {
				get(){
					return this.$store.state.cardHolderId;
				},
				set(val){
					this.cardHolderIdChange(val);
				}
			}
		},
		components: {
		    jAlert, openVip, timerBtn
		},
		methods: {
			...mapMutations(['cardHolderNameChange', 'cardHolderIdChange']),
			bindPickerChange: function(e) {
				console.log('picker发送选择改变，携带值为', e.target.value)
				let n = e.target.value;
				console.log(this.banks[n]);
				this.index = n;
				this.backCode = this.banks[n].code;
			},
			async getCode(){
				let res = await api.bindCardSendMsg(this.cardHolderId, this.cardHolderName, this.pan, this.backCode);
				if(res.code == 200){
					if(res.data.state == 10){
						uni.showToast({
							icon: 'none',
						    title: res.msg
						});
					}
					else{
						uni.showToast({
							icon: 'none',
						    title: res.data.message
						});
					}
				}
				else{
					uni.showToast({
						icon: 'none',
					    title: res.msg
					});
				}
			},
			onClose(){
				this.pop = false;
				uni.switchTab({
				    url: '/pages/home/home'
				});
				init.initHomePage();
				
			},
			closeVip(){
				this.popVip = false;
			},
			onSure(){
				this.pop = true;
				setTimeout(()=>{
					this.$refs["jAlert"].showTip("借款申请成功，订单正在审核中，请留意短信和手机通知，谢谢！");
					// this.$refs["jAlert"].showTip("该功能正在开发中");
				}, 30)
			}
		},
		onShow(){
			if(!this.banks || this.banks.length == 0){
				init.initBank();
			}
		}
	}
</script>

<style lang="less" scoped>
	@import url("./bank.less");
</style>
