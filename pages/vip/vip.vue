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
	
	let listData = [{"src":"baoxian.png","t1":"意外保险","t2":"最高50万元"},{"src":"tijian.png","t1":"双人体验套餐","t2":"限时免费"},{"src":"kefu.png","t1":"专属客服","t2":"一对一"},{"src":"aqy.png","t1":"爱奇艺VIP","t2":"畅享9个月"},{"src":"bank_account.png","t1":"办卡返现","t2":"最高180元"},{"src":"fanxian.png","t1":"推荐办卡返现","t2":"最高180元"},{"src":"hk.png","t1":"推广黑卡返现","t2":"最高300元"},{"src":"jiudian.png","t1":"酒店补贴","t2":"最高90元"},{"src":"feiji.png","t1":"机票补贴","t2":"最高30元"},{"src":"huoche.png","t1":"火车票补贴","t2":"最高30元"},{"src":"hongbao.png","t1":"返现红包","t2":"最高15元"}];
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
		}
	}
</script>

<style lang="less" scoped>
	@import url("./vip.less");
</style>
