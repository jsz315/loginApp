<template>
    <view class="box">
		<view class="jrow-box">
			<input class="jrow-input" v-model="account"  placeholder="请输入你的手机号" type="text"/>
		</view>
		
		<view class="jrow-box">
			<input class="jrow-input" v-model="code"  placeholder="请输入短信验证码 " type="text"/>
			
			<view class="get-code">
				<timer-btn @done="getCode"></timer-btn>
			</view>
		</view>
		
        <view class="jbtn" @tap="onNext">提交</view>
    </view>
</template>

<script>
	import {
		mapState,
	    mapMutations
	} from 'vuex'
    import api from '../../js/api.js';
    import mInput from '../../components/m-input.vue';
	import timerBtn from '../../components/timer-btn/timer-btn.vue';
	
    export default {
        components: {
            mInput, timerBtn
        },
        data() {
            return {
                code: '',
                password: '',
				account: ''
            }
        },
		computed: mapState({hasReg: "hasReg", localAccount: "account"}),
        methods: {
			...mapMutations(['accountChange', 'isLoginChange', 'tokenChange', 'userIdChange']),
            async onNext() {
				if (this.code.length < 4) {
				    uni.showToast({
				        icon: 'none',
				        title: '请输入正确的验证码'
				    });
				    return;
				}
				uni.showToast({
					icon: 'none',
					title: "提交成功"
				});
            },
			async getCode(){
				if (this.account.length < 11) {
				    uni.showToast({
				        icon: 'none',
				        title: '请输入正确的手机号'
				    });
				    return;
				}
				this.accountChange(this.account);
				let res = await api.sendSms(true);
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
			}
        },
		onShow(){
			this.account = this.localAccount
		}
    }
</script>

<style lang="less" scoped>
	@import url("./phone.less");
</style>
