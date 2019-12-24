<template>
	<view class="tab-box">
		<view class="tab-item" :class="{choosed:cur==0}" @tap="onChoose(0)">
			<image class="tab-img" mode="aspectFit"></image>
			<view class="tab-tip">文字</view>
		</view>
		<view class="tab-item" :class="{choosed:cur==1}" @tap="onChoose(0)">
			<image class="tab-img" mode="aspectFit"></image>
			<view class="tab-tip">文字</view>
		</view>
		<view class="tab-item" :class="{choosed:cur==2}" @tap="onChoose(0)">
			<image class="tab-img" mode="aspectFit"></image>
			<view class="tab-tip">文字</view>
		</view>
		<view class="tab-item" :class="{choosed:cur==3}" @tap="onChoose(0)">
			<image class="tab-img" mode="aspectFit"></image>
			<view class="tab-tip">文字</view>
		</view>
	</view>
</template>

<script>
	export default {
	    data() {
	        return {
				cur: 0
			}
	    },
		computed:{
			
		},
	    methods: {
	        onChoose(n){
				this.cur = n;
			}
	    }
	}
</script>

<style lang="less" scoped>
@import url("./tab-bar.less");
</style>
