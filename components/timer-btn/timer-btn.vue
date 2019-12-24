<template>
	<view class="code-box" :class="{none:second>0}" @tap="onClick">
		<text v-if="second>0">({{second}})</text>
		获取验证码
	</view>
</template>

<script>
	import {
		mapState,
	    mapMutations
	} from 'vuex'
	
	export default {
	    data() {
	        return {
				
			}
	    },
		computed: mapState(["second"]),
	    methods: {
			...mapMutations(['secondChange']),
			onClick(){
				if(this.second > 0){
					uni.showToast({
					    icon: 'none',
					    title: '请等待倒计时结束'
					});
					return;
				}
				this.secondChange(30);
				this.$emit('done');
			},
			onStart(){
				// clearInterval(timerId);
				// timerId = setInterval(()=>{
				// 	if(--this.second == 0){
				// 		clearInterval(timerId);
				// 		uni.showToast({
				// 		    icon: 'none',
				// 		    title: '倒计时结束'
				// 		});
				// 	}
				// }, 1000)
			}
	    },
		mounted(){
			// this.onStart();
		}
	}
</script>

<style lang="less" scoped>
@import url("./timer-btn.less");
</style>
