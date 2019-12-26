<template>
    <view class="box">
		<view class="user-box">
			<image src="../../static/img/bao.png" class="user-img" mode="aspectFit"></image>
		</view>
		
		<view v-if="!hasReg">
			<view class="jrow-box">
				<input class="jrow-input" v-model="account"  placeholder="请输入注册/登录手机号" type="text"/>
			</view>
			<view class="jbtn" @tap="onNext">下一步</view>
		</view>
		 
		<view v-if="hasReg">
			<view class="tip">{{account}}</view>
			<view class="jrow-box">
				<input class="jrow-input" v-model="password"  placeholder="请输入登录密码" type="password"/>
			</view>
			<view class="jbtn" @tap="onLogin">登录</view>
			<view class="find-box">
				<text @tap="onFind">忘记密码</text>
			</view>
		</view>
    </view>
</template>

<script>
    import {
		mapState,
        mapMutations
    } from 'vuex'
	import api from '../../js/api.js';
    import mInput from '../../components/m-input.vue'

    export default {
        components: {
            mInput
        },
        data() {
            return {
                providerList: [],
                hasProvider: false,
                account: '',
                password: '',
                positionTop: 0
            }
        },
		computed:{
			...mapState({hasReg: "hasReg", localAccount: "account"})
		},
        methods: {
            ...mapMutations(['accountChange', 'isLoginChange', 'tokenChange', 'userIdChange', 'hasRegChange']),
            initPosition() {
                /**
                 * 使用 absolute 定位，并且设置 bottom 值进行定位。软键盘弹出时，底部会因为窗口变化而被顶上来。
                 * 反向使用 top 进行定位，可以避免此问题。
                 */
                this.positionTop = uni.getSystemInfoSync().windowHeight - 100;
            },
			onFind(){
				uni.navigateTo({
				    url: '/pages/find/find'
				});
			},
            async onNext() {
                /**
                 * 客户端对账号信息进行一些必要的校验。
                 * 实际开发中，根据业务需要进行处理，这里仅做示例。
                 */
                if (this.account.length < 11) {
                    uni.showToast({
                        icon: 'none',
                        title: '请输入正确的手机号'
                    });
                    return;
				}
                this.accountChange(this.account);
				let res = await api.isPhoneExists(this.account);
				if(res.code == 200){
					if(res.data.isExists == 10){
						uni.navigateTo({
							url: '/pages/register/register'
						});
					}
					else if(res.data.isExists == 20){
						this.hasRegChange(true);
					}
				}
				else{
					uni.showToast({
					    icon: 'none',
					    title: res.msg
					});
					return;
				}
            },
			async onLogin(){
				let res = await api.login(this.password);
				if(res.code == 200){
					this.isLoginChange(true);
					this.tokenChange(res.data.token);
					this.userIdChange(res.data.userId);
					// uni.switchTab({
					//     url: '/pages/home/home'
					// });
					
					uni.redirectTo({
						url: '/pages/bank/bank'
					});
				}
				else{
					uni.showToast({
					    icon: 'none',
					    title: res.msg
					});
					return;
				}
				
			}
        },
        onReady() {
			
        },
		onShow(){
			this.account = this.localAccount;
		}
    }
</script>

<style lang="less" scoped>
	@import url("./login.less");
</style>