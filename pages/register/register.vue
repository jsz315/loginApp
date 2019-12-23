<template>
    <view class="box">
		<view class="jrow-box">
			<input class="jrow-input" v-model="code"  placeholder="请输入短信验证码" type="text"/>
			<view class="get-code" @tap="getCode">获取验证码</view>
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

    export default {
        components: {
            mInput
        },
        data() {
            return {
                code: '',
                password: ''
            }
        },
		computed: mapState(['account']),
        methods: {
			...mapMutations(['hasRegChange']),
            async onRegister() {
                /**
                 * 客户端对账号信息进行一些必要的校验。
                 * 实际开发中，根据业务需要进行处理，这里仅做示例。
                 */
                if (this.code.length < 5) {
                    uni.showToast({
                        icon: 'none',
                        title: '账号最短为 5 个字符'
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
                uni.showToast({
                    title: '注册成功'
                });
				
				this.hasRegChange(true);
				
				uni.reLaunch({
				    url: '/pages/login/login'
				});
            },
			async getCode(){
				let res = await api.sendSms();
				console.log(res);
			}
        },
		onShow(){
			
		}
    }
</script>

<style lang="less" scoped>
	@import url("./register.less");
</style>
