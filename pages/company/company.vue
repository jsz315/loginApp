<template>
	<view class="company">
		<view class="tip">以下为必填资料 填写完善才能申请借款</view>
		<view class="jrow-box">
			<view class="jrow-tip">单位名称</view>
			<input class="jrow-input" v-model="code"  placeholder="请输入单位名称" type="text"/>
		</view>
		<view class="jrow-box">
			<view class="jrow-tip">职位</view>
			<input class="jrow-input" v-model="code"  placeholder="请输入职位" type="text"/>
		</view>
		<view class="jrow-box">
			<view class="jrow-tip">单位电话</view>
			<input class="jrow-input" v-model="code"  placeholder="请输入单位电话" type="text"/>
		</view>
		<view class="jrow-box">
			<view class="jrow-tip">工作年龄</view>
			<input class="jrow-input" v-model="code"  placeholder="请输入工作年龄" type="text"/>
		</view>
		<view class="jrow-box">
			<view class="jrow-tip">单位地址</view>
			<input class="jrow-input" v-model="code"  placeholder="请输入单位地址" type="text"/>
		</view>
		<view class="jrow-box">
			<view class="jrow-tip">详细地址</view>
			<view class="jrow-input" @tap="openAddres">{{pickerText}}</view>
		</view>
		<view class="jrow-box">
			<view class="jrow-tip">月收入</view>
			<input class="jrow-input" v-model="code"  placeholder="请输入月收入" type="text"/>
		</view>
		<view class="jrow-box">
			<view class="jrow-tip">现居住地址</view>
			<input class="jrow-input" v-model="code"  placeholder="请输入现居住地址" type="text"/>
		</view>
		<view class="jrow-box">
			<view class="jrow-tip">详细地址</view>
			<input class="jrow-input" v-model="code"  placeholder="请输入详细地址" type="text"/>
		</view>
		
		<view class="tip">直系亲属联系人</view>
		
		<view class="jrow-box">
			<view class="jrow-tip">姓名</view>
			<input class="jrow-input" v-model="code"  placeholder="请输入姓名" type="text"/>
		</view>
		<view class="jrow-box">
			<view class="jrow-tip">手机号</view>
			<input class="jrow-input" v-model="code"  placeholder="请输入手机号" type="text"/>
		</view>
		<view class="jrow-box">
			<view class="jrow-tip">关系</view>
			<view class="jrow-input">
				<view class="jinput-data">
					<view class="uni-list-cell-db">
						<picker @change="bindPickerChange" :value="index" :range="array">
							<view class="uni-input">{{array[index]}}</view>
						</picker>
					</view>
				</view>
			</view>
		</view>
		
		<view class="tip">其他联系人</view>
		
		<view class="jrow-box">
			<view class="jrow-tip">姓名</view>
			<input class="jrow-input" v-model="code"  placeholder="请输入姓名" type="text"/>
		</view>
		<view class="jrow-box">
			<view class="jrow-tip">手机号</view>
			<input class="jrow-input" v-model="code"  placeholder="请输入手机号" type="text"/>
		</view>
		<view class="jrow-box">
			<view class="jrow-tip">关系</view>
			<view class="jrow-input">
				<view class="jinput-data">
					<view class="uni-list-cell-db">
						<picker @change="bindPickerChange" :value="index" :range="array">
							<view class="uni-input">{{array[index]}}</view>
						</picker>
					</view>
				</view>
			</view>
		</view>
		
		<view class="jbtn">提交</view>
		<simple-address ref="simpleAddress" :pickerValueDefault="cityPickerValueDefault" @onConfirm="onConfirm" themeColor='#007AFF'></simple-address>
	</view>
</template>

<script>
	import simpleAddress from "@/components/simple-address/simple-address.nvue"
	
	export default {
		data() {
			return {
				code: "",
				cityPickerValueDefault: [0, 0, 1],
				pickerText: '请选择地区',
				array: ['父母', '同事', '兄妹', '朋友'],
				index: 0
			}
		},
		components: {
		    simpleAddress
		},
		methods: {
			openAddres() {
				this.$refs.simpleAddress.open();
			},
			onConfirm(e) {
				this.pickerText = e.label;
				console.log(e);
			},
			bindPickerChange: function(e) {
				console.log('picker发送选择改变，携带值为', e.target.value)
				this.index = e.target.value
			},
		}
	}
</script>

<style lang="less" scoped>
	@import url("./company.less");
</style>
