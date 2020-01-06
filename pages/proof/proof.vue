<template>
	<view class="box">
		<view class="tip1">*须本人身份证，且内容清晰可辨</view>
		<view class="tip2">*请您确认拍照权限已开启</view>
		<view class="photo" @click="open(0)">
			<image class="photo-img" src="../../static/img/uppic1.png" mode="aspectFit"></image>
			<view class="camera"></view>
			<view class="tip-box">
				<view class="tip2">身份证正面照扫描上传</view>
			</view>
		</view>
		<view class="photo" @click="open(1)">
			<image class="photo-img" src="../../static/img/uppic2.png" mode="aspectFit"></image>
			<view class="camera"></view>
			<view class="tip-box">
				<view class="tip2">身份证反面照扫描上传</view>
			</view>
		</view>
		<!-- <view><image v-if="src" :src="src"></image></view> -->
		<!-- <view class="photo" @click="open(3)">
			<image class="photo-img" src="../../static/img/uppic3.png" mode="aspectFit"></image>
			<view class="camera"></view>
			<view class="tip-box">
				<view class="tip2">手持身份证照扫描上传</view>
			</view>
		</view> -->
		<view class="jbtn" @click="submit">提交</view>
	</view>
</template>

<script>
	import api from '../../js/api.js';
	
	export default {
		data() {
			return {
				account: "",
				src: null,
				images: []
			}
		},
		methods: {
			async submit(){
				if(this.images.length != 2){
					uni.showToast({
					    icon: 'none',
					    title: '请选择相片'
					});
					return;
				}
				let res = await api.authentication(this.images[0], this.images[1]);
				uni.showToast({
				    icon: 'none',
				    title: res.msg
				});
			},
			open(n){
				uni.chooseImage({
				    count: 1, //默认9
				    sizeType: ['compressed'], //可以指定是原图还是压缩图，默认二者都有
				    sourceType: ['album'], //从相册选择
				    success: (res) => {
				        console.log(JSON.stringify(res.tempFilePaths));
						console.log(res);
						this.src = res.tempFilePaths[0];
						this.images[n] = res.tempFiles[0];
						console.log(this.images[n]);
				    }
				});
			}
		}
	}
</script>


<style lang="less" scoped>
	@import url("./proof.less");
</style>

