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
	</view>
</template>

<script>

	import sliderBar from "@/components/slider-bar/slider-bar.vue"
	import scrollTip from '@/components/scroll-tip/scroll-tip.vue'
	import vipGoods from '@/components/vip-goods/vip-goods.vue'
	import agreement from '@/components/agreement/agreement.vue';
	
	export default {
		data() {
			return {
				popAgree: false,
				src: '../../static/img/chose1.png',
				check: false,
				curWord: 1,
				curTitle: ""
			}
		},
		components: {
		    sliderBar, scrollTip, vipGoods, agreement
		},
		methods: {
			jump(){
				uni.navigateTo({
				    url: '/pages/company/company'
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
		}
	}
</script>

<style lang="less" scoped>
	@import url("./home.less");
</style>
