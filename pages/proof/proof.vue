<template>
	<view class="box">
		<view class="tip1">*须本人身份证，且内容清晰可辨</view>
		<view class="tip2">*请您确认拍照权限已开启</view>
		<view class="photo" @click="open(1)">
			<image class="photo-img" src="../../static/img/uppic1.png" mode="aspectFit"></image>
			<view class="camera"></view>
			<view class="tip-box">
				<view class="tip2">身份证正面照扫描上传</view>
			</view>
		</view>
		<view class="photo" @click="open(2)">
			<image class="photo-img" src="../../static/img/uppic2.png" mode="aspectFit"></image>
			<view class="camera"></view>
			<view class="tip-box">
				<view class="tip2">身份证反面照扫描上传</view>
			</view>
		</view>
		<view class="photo" @click="open(3)">
			<image class="photo-img" src="../../static/img/uppic3.png" mode="aspectFit"></image>
			<view class="camera"></view>
			<view class="tip-box">
				<view class="tip2">手持身份证照扫描上传</view>
			</view>
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
	@import url("./proof.less");
</style>

