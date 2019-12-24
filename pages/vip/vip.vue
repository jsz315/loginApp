<template>
	<view class="vip">
		<view class="status_bar"></view>
		<image class="title-img" :src="src" mode="aspectFill"></image>
		<view class="title-tip">特权</view>
		<view class="list">
			<view class="item" v-for="(item, index) in list" v-bind:key="index">
				<view class="img-box">
					<image class="item-img" :src="'../../static/img/' + item.src" mode="aspectFill"></image>
				</view>
				<view class="tip1">{{item.t1}}</view>
				<view class="tip2">{{item.t2}}</view>
			</view>
		</view>
		<vip-goods></vip-goods>
		<view class="jbtn" @tap="jump">立即成为优享黑卡￥168</view>
	</view>
</template>

<script>
	import vipGoods from '@/components/vip-goods/vip-goods.vue'
	
	let listData = [{"src":"1-1.png","t1":"开卡礼包","t2":"爱奇艺月卡限时送"},{"src":"1-7.png","t1":"话费流量","t2":"9折起减5元"},{"src":"1-3.png","t1":"淘宝优惠","t2":"免费领优惠券"},{"src":"1-4.png","t1":"5折追剧","t2":"海量视频会员"},{"src":"1-6.png","t1":"半价咖啡","t2":"星巴克/CoCo"},{"src":"1-3.png","t1":"8折餐饮","t2":"肯德基/必胜客"},{"src":"1-2.png","t1":"8折商超","t2":"屈臣氏/百果园"},{"src":"1-8.png","t1":"会员网赚","t2":"赚钱特权"}];
	export default {
		data() {
			return {
				src: "../../static/img/timg.jpg",
				list: listData
			}
		},
		components: {
		    vipGoods
		},
		methods: {
			jump(){
				uni.navigateTo({
					url: "/pages/buy/buy"
				})
			}
		},
		onShow(){
			// uni.hideTabBar();
		}
	}
</script>

<style lang="less" scoped>
	@import url("./vip.less");
</style>
