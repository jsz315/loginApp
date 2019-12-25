<template>
    <view class="box">
		<view class="other-box">
			<view class="tip">
				汽车行驶证， 房产证，工作证明、收入证明、社保、公积金
			</view>
			<view class="jbtn add-btn" @tap="open">添加资料</view>
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
			open(){
				uni.chooseImage({
					count: 1, //默认9
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album'], //从相册选择
					success: function (res) {
						console.log(JSON.stringify(res.tempFilePaths));
					}
				});
			},
            async onNext() {
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
	@import url("./other.less");
</style>
