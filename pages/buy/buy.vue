<template>
    <view class="box">
		<image class="img" src="../../static/img/buy.png" mode="aspectFill"></image>
		<view class="jrow-box">
			<view class="jrow-tip">银行卡卡号</view>
			<input class="jrow-input" v-model="account"  placeholder="请输入银行卡卡号" type="text"/>
		</view>
		
		<view class="jrow-box">
			<view class="jrow-tip">付款验证码</view>
			<input class="jrow-input" v-model="code"  placeholder="请输入短信验证码" type="text"/>
			<view class="get-code">
				<timer-btn @done="getCode"></timer-btn>
			</view>
		</view>
		
        <view class="jbtn" @tap="onNext">立即开通</view>
		
		<view class="check-box">
			<view class="hit-ico" @tap="onCheck">
				<image :src="src" class="ico" mode="aspectFit" ></image>
			</view>
			<view class="hit-txt"  @tap="showAgree">阅读并同意《会员服务协议》</view>
		</view>
		
		<j-confirm ref="jConfirm" :ico="ico" :tip="tip" :subTip="subTip" @close="onClose" v-if="pop" :label1="label1" :label2="label2"></j-confirm>
		<j-pop ref="jPop" v-if="loading" :hasBtns="false">
			<template v-slot:tip>
				<view class="pay-tip">
					<image class="pay-ico" src="../../static/img/loading.png" mode="aspectFit"></image>
					<view class="paying">支付处理中...</view>
				</view>
			</template>
		</j-pop>
		
		<agreement v-if="popAgree" @close="closeAgree" cur="0" title="会员服务协议"></agreement>
    </view>
</template>

<script>
	import {
		mapState,
	    mapMutations
	} from 'vuex'
    import service from '../../service.js';
    import mInput from '../../components/m-input.vue';
	
	import jPop from '@/components/j-pop/j-pop.vue';
	import jConfirm from '@/components/j-confirm/j-confirm.vue';
	import agreement from '@/components/agreement/agreement.vue';
	import timerBtn from '../../components/timer-btn/timer-btn.vue';
	
    export default {
        components: {
            mInput, jPop, jConfirm, agreement, timerBtn
        },
        data() {
            return {
				loading: false,
				pop: false,
				popAgree: false,
				ico: '../../static/img/success.png',
                src: '../../static/img/chose2.png',
				check: true,
                code: '',
				account: '',
				tip: "",
				subTip: "",
				label1: "取消",
				label2: "重新绑定"
            }
        },
		computed: mapState([]),
        methods: {
			onCheck(){
				this.check = !this.check;
				this.src = this.check ? '../../static/img/chose2.png' : '../../static/img/chose1.png';
			},
			getCode(){
				
			},
            onNext() {
                /**
                 * 客户端对账号信息进行一些必要的校验。
                 * 实际开发中，根据业务需要进行处理，这里仅做示例。
                 */
				if(!this.check){
					uni.showToast({
					    icon: 'none',
					    title: '请先同意会员服务协议'
					});
					return;
				}
                if (this.code.length < 4) {
                    uni.showToast({
                        icon: 'none',
                        title: '请输入正确的验证码'
                    });
                    return;
                }
				
    //             service.setUser({
				// 	account: this.account,
				// 	password: this.password,
				// 	hasReg: true
				// });
				this.loading = true;
				
				setTimeout(() => {
					this.paySuccess(true);
				}, 1800)
            },
			paySuccess(n){
				this.loading = false;
				if(n){
					this.ico = "../../static/img/success.png";
					this.tip = "支付成功";
					this.subTip = "您可以在会员页面查看我的权益！";
					this.label1 = "立即体验";
					this.label2 = "马上领钱";
				}
				else{
					this.ico = "../../static/img/fail.png";
					this.tip = "支付失败";
					this.subTip = "";
					this.label1 = "取消";
					this.label2 = "重新绑定";
				}
				this.pop = true;
			},
			onClose(n){
				this.pop = false;
				if(n == 1){
					if(this.tip == "支付成功"){
						uni.navigateTo({
						    url: '/pages/bank/bank'
						});
					}
					else{
						uni.navigateTo({
						    url: '/pages/bank/bank'
						});
					}
				}
			},
			closeAgree(){
				this.popAgree = false;
			},
			showAgree(){
				let src = "https://service.vipsave.cn/vip-html/#/serviceProtocol?productName=愿望钱包&companyName=洋德科技&companyFullName=广州洋德网络科技有限"
				uni.navigateTo({
					url: "/pages/web/web?src=" + encodeURIComponent(src)
				})
			}
        },
		onShow(){
			
		}
    }
</script>

<style lang="less" scoped>
	@import url("./buy.less");
</style>
