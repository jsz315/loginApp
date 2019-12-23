<template>
	<view class="box">
		<image class="img" src="../../static/img/custom2.png" mode="aspectFill"></image>
		<view class="jrow-box">
			<view class="jrow-tip">客服电话(9:30-18:30)</view>
			<view class="jrow-input" @tap="callPhone">400-991-6799</view>
		</view>
	</view>
</template>

<script>
	import {
		mapState,
		mapMutations
	} from 'vuex'
	import service from '../../service.js';

	export default {
		components: {

		},
		data() {
			return {

			}
		},
		computed: mapState([]),
		methods: {
			callPhone() {
				uni.makePhoneCall({
					phoneNumber: '4009916799',
					success: (res) => {
						console.log('调用成功!')
					},
					fail: (res) => {
						console.log('调用失败!')
					}
				});
			}
		}
	}
</script>

<style lang="less" scoped>
	@import url("./custom.less");
</style>
