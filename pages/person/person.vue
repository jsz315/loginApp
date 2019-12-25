<template>
	<view class="box">
		<view class="tip">以下为必填资料 填写完善才能申请借款</view>
		<view class="jrow-box">
			<view class="jrow-tip">姓名</view>
			<input class="jrow-input" v-model="account"  placeholder="6-16位字符，包含字母和数字 " type="text"/>
		</view>
		<view class="jrow-box">
			<view class="jrow-tip">身份证号</view>
			<input class="jrow-input" v-model="account"  placeholder="6-16位字符，包含字母和数字 " type="text"/>
		</view>
		
		<view class="jbtn">提交</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				account: ""
			}
		},
		methods: {
			open(n){
				uni.chooseImage({
				    count: 1, //默认9
				    sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
				    sourceType: ['album'], //从相册选择
				    success: function (res) {
				        console.log(JSON.stringify(res.tempFilePaths));
				    }
				});
			}
		}
	}
</script>


<style lang="less" scoped>
	@import url("./person.less");
</style>

