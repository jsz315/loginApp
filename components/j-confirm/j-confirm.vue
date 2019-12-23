<template>
	<view>
		<j-pop>
			<template v-slot:tip>
				<view class="row-tip"><image class="row-ico" :src="ico" mode="aspectFit"></image>{{tip}}</view>
				<view class="sub-tip">{{subTip}}</view>
			</template>
			<template v-slot:btns>
			    <view class="btn" @tap="onClose(0)">{{label1}}</view>
				<view class="btn sure" @tap="onClose(1)">{{label2}}</view>
			</template>
		</j-pop>
	</view>
</template>

<script>
	import jPop from '@/components/j-pop/j-pop.vue'
	export default {
		data() {
		    return {
				
		    }
		},
		props:{
			label1: {
				default: "取消"
			},
			label2: {
				default: "确定"
			},
			tip: {
				default: "提示"
			},
			subTip: {
				default: ""
			},
			ico: {
				default: "../../static/img/1.png"
			}
		},
		components: {
		    jPop
		},
		methods: {
			onClose(n) {
				this.$emit('close', n);
			}
		}
	}
</script>

<style lang="less" scoped>
	@import url("./j-confirm.less");
</style>