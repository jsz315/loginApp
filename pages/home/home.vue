<template>
	<view class="home">
		<view class="status_bar"></view>
		<slider-bar></slider-bar>
		
		<view class="check-box">
			<view class="hit-ico" @tap="onCheck">
				<image :src="src" class="ico" mode="aspectFit" ></image>
			</view>
			阅读并同意
			<view class="hit-txt"  @tap="showAgree(0)">《借款合同》</view>
			<view class="hit-txt"  @tap="showAgree(1)">《平台服务协议》</view>
		</view>
		
		<view class="jbtn" @click="jump">立即借款</view>
		<view class="space"></view>
		<scroll-tip></scroll-tip>
		<vip-goods></vip-goods>
		
		<agreement v-if="popAgree" @close="closeAgree" :cur="curWord" :title="curTitle"></agreement>
		<open-vip v-if="popBuy" @close="closeBuy"></open-vip>
	</view>
</template>

<script>
	import {
		mapState,
	    mapMutations
	} from 'vuex'
	
	import sliderBar from "@/components/slider-bar/slider-bar.vue"
	import scrollTip from '@/components/scroll-tip/scroll-tip.vue'
	import vipGoods from '@/components/vip-goods/vip-goods.vue'
	import agreement from '@/components/agreement/agreement.vue';
	import openVip from '@/components/open-vip/open-vip.vue';
	import api from '../../js/api.js';
	
	export default {
		data() {
			return {
				popAgree: false,
				src: '../../static/img/chose2.png',
				check: true,
				curWord: 1,
				curTitle: "",
				popBuy: false
			}
		},
		components: {
		    sliderBar, scrollTip, vipGoods, agreement, openVip
		},
		computed:{
			...mapState(["isLogin", "isVip", "inPro", "userAuth", "authentication"])
		},
		methods: {
			...mapMutations(['userAuthChange']),
			jump(){
				if(!this.check){
					uni.showToast({
					    icon: 'none',
					    title: '请先同意相关条款'
					});
					return;
				}
				let url = "";
				if(this.isLogin){
					if(!this.inPro){
						url = '/pages/info/info'
					}
					else{
						if(this.authentication){
							if(this.isVip){
								url = '/pages/push/push'
							}
							else{
								this.popBuy = true;
								return;
							}
						}
						else{
							url = '/pages/info/info'
						}
					}
				}
				else{
					url = '/pages/login/login'
				}
				uni.navigateTo({
				    url: url
				});
			},
			closeBuy(){
				this.popBuy = false;
				uni.navigateTo({
				    url: '/pages/buy/buy'
				});
			},
			onCheck(){
				this.check = !this.check;
				this.src = this.check ? '../../static/img/chose2.png' : '../../static/img/chose1.png';
			},
			showAgree(n){
				if(n == 0){
					this.curTitle = "借款合同";
				}
				else{
					this.curTitle = "平台服务协议";
				}
				
				this.curWord = n;
				this.popAgree = true;
			},
			closeAgree(){
				this.popAgree = false;
			}
		},
		onTabItemTap(t){
			console.log(t);
		},
		async mounted(){
			// let res = await api.getUserAuth(this.password);
			// if(res.code == 200){
			// 	this.userAuthChange(res.data);
			// }
		}
	}
</script>

<style lang="less" scoped>
	@import url("./home.less");
</style>
