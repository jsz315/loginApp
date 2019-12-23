<template>
	<view>
		<view class="page-section swiper">
			<view class="page-section-spacing">
				<swiper class="swiper" :autoplay="autoplay" :interval="interval" :duration="duration" :vertical="vertical" :circular="circular">
					<swiper-item v-for="item in list" v-bind:key="item">
						<view class="swiper-item">
						<view class="word">{{item}}</view>
						</view>
					</swiper-item>
				</swiper>
			</view>
		</view>
	</view>
</template>

<script>
	let listData = [
		'2019-12-22: 171****2861 成功借款 24000元',
		'2019-12-22: 135****2473 成功借款 16000元',
		'2019-12-22: 156****2908 成功借款 541000元',
		'2019-12-22: 187****6344 成功借款 75000元',
		'2019-12-22: 159****4145 成功借款 882000元',
		'2019-12-22: 138****8842 成功借款 18000元',
	]
	export default {
		data() {
			return {
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500,
				vertical: true,
				circular: true,
				list: listData
			};
		}
	}
</script>

<style lang="less" scoped>
@import url("./scroll-tip.less");
</style>
