<template>
    <view class="box">
		<view class="jrow-box">
			<input class="jrow-input" v-model="code"  placeholder="请输入短信验证码" type="text"/>
			<view class="get-code">
				<timer-btn @done="getCode"></timer-btn>
			</view>
		</view>
		
		<view class="jrow-box">
			<input class="jrow-input" v-model="password"  placeholder="6-16位字符，包含字母和数字" type="password"/>
		</view>
		
        <view class="jbtn" @tap="onRegister">注册</view>
		
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
                password: ''
            }
        },
		computed: mapState(['account']),
        methods: {
			...mapMutations(['hasRegChange', 'tokenChange', 'userIdChange']),
            async onRegister() {
                if (this.code.length < 4) {
                    uni.showToast({
                        icon: 'none',
                        title: '请输入正确的验证码'
                    });
                    return;
                }
                if (this.password.length < 6) {
                    uni.showToast({
                        icon: 'none',
                        title: '密码最短为 6 个字符'
                    });
                    return;
                }
				
				let res = await api.register(this.code, this.password);
				if(res.code == 200){
					uni.showToast({
						icon: 'none',
					    title: '注册成功'
					});
					
					this.hasRegChange(true);
					this.tokenChange(res.data.token);
					this.userIdChange(res.data.userId);
					
					uni.reLaunch({
					    url: '/pages/login/login'
					});
				}
				else{
					uni.showToast({
						icon: 'none',
					    title: res.msg
					});
					
				}
                
            },
			async getCode(){
				let res = await api.sendSms();
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
			
		}
    }
</script>

<style lang="less" scoped>
	@import url("./register.less");
</style>
