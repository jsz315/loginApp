<template>
	<view>
		<j-pop :hasBtns="hasBtns">
			<template v-slot:tip>
			    {{tip}}
			</template>
			<template v-slot:btns>
			    <view class="alert-btn" @tap="onClose">{{label}}</view>
			</template>
		</j-pop>
	</view>
</template>

<script>
	import jPop from '@/components/j-pop/j-pop.vue'
	export default {
		data() {
		    return {
				tip: ''
		    }
		},
		props:{
			label: {
				default: "确定"
			},
			hasBtns: {
				default: true
			}
		},
		components: {
		    jPop
		},
		methods: {
			onClose() {
				this.$emit('close');
			},
			showTip(tip){
				this.tip = tip;
			}
		}
	}
</script>

<style lang="less" scoped>
	@import url("./j-alert.less");
</style>