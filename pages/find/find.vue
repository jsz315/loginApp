<template>
    <view class="box">
		<view class="jrow-box">
			<input class="jrow-input" v-model="account"  placeholder="6-16位字符，包含字母和数字" type="text"/>
		</view>
		
		<view class="jrow-box">
			<input class="jrow-input" v-model="code"  placeholder="请输入短信验证码 " type="text"/>
			<view class="get-code" @tap="getCode">获取验证码</view>
		</view>
		
        <view class="jbtn" @tap="onNext">下一步</view>
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
                password: '',
				account: ''
            }
        },
		computed: mapState([]),
        methods: {
            async onNext() {
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
				
				let res = await api.verifySms(this.code)
				if(res.code == 200){
					uni.navigateTo({
					    url: '/pages/reset/reset?code=' + this.code
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
			}
        },
		onShow(){
			
		}
    }
</script>

<style lang="less" scoped>
	@import url("./find.less");
</style>
