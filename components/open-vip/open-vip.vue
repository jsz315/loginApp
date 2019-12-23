<template>
	<view class="box">
		<view class="pop-box">
			<view class="pop-btn" @tap="onClose"></view>
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