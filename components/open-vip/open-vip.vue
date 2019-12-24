<template>
	<view class="box">
		<view class="pop-box">
			<view class="pop-txt">恭喜您!</view>
			<view class="pop-btn" @tap="onClose">去开通</view>
		</view>
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
			
		},
		components: {
		    jPop
		},
		methods: {
			onClose() {
				this.$emit('close');
			}
		}
	}
</script>

<style lang="less" scoped>
	@import url("./open-vip.less");
</style>