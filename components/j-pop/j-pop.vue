<template>
	<view class="box">
		<view class="content">
			<view class="tip">
			    <slot name="tip"></slot>
			</view>
			<view class="btns" v-if="hasBtns">
				<slot name="btns"></slot>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
		    return {
				
		    }
		},
		props:{
			hasBtns: {
				default: true
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="less" scoped>
	@import url("./j-pop.less");
</style>