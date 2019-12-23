<template>
	<view class="all">
		<view class="box">
			<view class="tip1">申请金额（元）</view>
			<view class="tip2">￥{{num1}}</view>
			<view class="bar">
				<view class="nbtn cut"></view>
				<view class="line">
					<slider value="3000" min="3000" max="200000" @changing="sliderChange" activeColor="#FFCC33" backgroundColor="#000000" block-color="#8A6DE9"
					 block-size="20" />
				</view>
				<view class="nbtn add"></view>
			</view>
			<view class="tip3">3000元</view>
			<view class="tip4">200000元</view>
		</view>
		<view class="tip5">借款期限</view>
		<view class="date-list">
			<view class="date-item" @tap="onChose(item)" v-for="item in list" v-bind:key="item" :class="{cur:cur==item}">
				{{item}}月
			</view>
		</view>
		<view class="tip5 bline">
			每期还款：
			<text class="day">{{num2}}元 </text>
			<text class="tip6">(日利率{{0.03}}% 月利息￥{{num3}}元)</text>
		</view>
	</view>
</template>

<script>
	export default {
	    data() {
	        return {
				num: 3000,
				cur: 1,
				list: [1, 3, 6, 9, 12, 24, 36]
			}
	    },
		computed:{
			num1(){
				return this.num + ".00";
			},
			num2(){
				return Math.floor((this.num3 + this.num / this.cur) * 100) / 100;
			},
			num3(){
				return Math.floor(this.num * 0.03 * 30) / 100;
			}
		},
	    methods: {
	        sliderChange(e) {
	            console.log('value 发生变化：' + e.detail.value)
				this.num = e.detail.value;
	        },
			onChose(n){
				this.cur = n;
			}
	    }
	}
</script>

<style lang="less" scoped>
@import url("./slider-bar.less");
</style>
