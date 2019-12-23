<template>
    <view class="box">
		<view class="jrow-box">
			<input class="jrow-input" v-model="password1"  placeholder="请输入新密码" type="text"/>
		</view>
		
		<view class="jrow-box">
			<input class="jrow-input" v-model="password2"  placeholder="请确认新密码" type="text"/>
		</view>
		
		<view class="tip">密码为6-16位字符，包含字母和数字</view>
		
        <view class="jbtn" @tap="onNext">完成</view>
		<j-alert ref="jAlert" @close="onClose" v-if="pop"></j-alert>
    </view>
</template>

<script>
	import {
		mapState,
	    mapMutations
	} from 'vuex'
    import api from '../../js/api.js';
    import mInput from '../../components/m-input.vue';
	import jAlert from '../../components/j-alert/j-alert.vue';

    export default {
        components: {
            mInput, jAlert
        },
        data() {
            return {
                password1: '',
				password2: '',
				pop: false,
				code: ""
            }
        },
		computed: mapState([]),
        methods: {
			onClose(){
				this.pop = false;
				uni.navigateTo({
				    url: '/pages/login/login'
				});
			},
            async onNext() {
                /**
                 * 客户端对账号信息进行一些必要的校验。
                 * 实际开发中，根据业务需要进行处理，这里仅做示例。
                 */
                if (this.password1 < 6) {
                    uni.showToast({
                        icon: 'none',
                        title: '密码最短为 6 个字符'
                    });
                    return;
                }
				if (this.password1 != this.password2) {
				    uni.showToast({
				        icon: 'none',
				        title: '密码不一致'
				    });
				    return;
				}
				
				let res = await api.forgetPwd(this.code, this.password1);
				if(res.code == 200){
					this.pop = true;
					setTimeout(()=>{
						this.$refs["jAlert"].showTip("密码修改成功");
					}, 90)
				}
				else{
					uni.showToast({
					    icon: 'none',
					    title: res.msg
					});
				}
            }
        },
		onLoad(options){
			this.code = options.code;
		}
    }
</script>

<style lang="less" scoped>
	@import url("./reset.less");
</style>
