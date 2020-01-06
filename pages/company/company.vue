<template>
	<view class="company">
		<view class="tip">以下为必填资料 填写完善才能申请借款</view>
		<view class="jrow-box">
			<view class="jrow-tip">单位名称</view>
			<input class="jrow-input" v-model="companyName"  placeholder="请输入单位名称" type="text"/>
		</view>
		<view class="jrow-box">
			<view class="jrow-tip">职位</view>
			<input class="jrow-input" v-model="companyStaff"  placeholder="请输入职位" type="text"/>
		</view>
		<view class="jrow-box">
			<view class="jrow-tip">单位电话</view>
			<input class="jrow-input" v-model="companyPhone"  placeholder="请输入单位电话" type="text"/>
		</view>
		<view class="jrow-box">
			<view class="jrow-tip">工作年龄</view>
			<input class="jrow-input" v-model="workYears"  placeholder="请输入工作年龄" type="text"/>
		</view>
		<view class="jrow-box">
			<view class="jrow-tip">单位地址</view>
			<view class="jrow-input" @tap="openAddres(0)">{{companyAddress}}</view>
		</view>
		<view class="jrow-box">
			<view class="jrow-tip">详细地址</view>
			<input class="jrow-input" v-model="companyDetailAddr"  placeholder="请输入单位地址" type="text"/>
		</view>
		<view class="jrow-box">
			<view class="jrow-tip">月收入</view>
			<input class="jrow-input" v-model="inCome"  placeholder="请输入月收入" type="text"/>
		</view>
		<view class="jrow-box">
			<view class="jrow-tip">现居住地址</view>
			<view class="jrow-input" @tap="openAddres(1)">{{liveAddr}}</view>
		</view>
		<view class="jrow-box">
			<view class="jrow-tip">详细地址</view>
			<input class="jrow-input" v-model="detailAddr"  placeholder="请输入详细地址" type="text"/>
		</view>
		
		<view class="tip">直系亲属联系人</view>
		
		<view class="jrow-box">
			<view class="jrow-tip">姓名</view>
			<input class="jrow-input" v-model="familyName"  placeholder="请输入姓名" type="text"/>
		</view>
		<view class="jrow-box">
			<view class="jrow-tip">手机号</view>
			<input class="jrow-input" v-model="familyPhone"  placeholder="请输入手机号" type="text"/>
		</view>
		<view class="jrow-box">
			<view class="jrow-tip">关系</view>
			<view class="jrow-input">
				<view class="jinput-data">
					<view class="uni-list-cell-db">
						<picker @change="familyPickerChange" :value="findex" :range="array">
							<view class="uni-input">{{array[findex]}}</view>
						</picker>
					</view>
				</view>
			</view>
		</view>
		
		<view class="tip">其他联系人</view>
		
		<view class="jrow-box">
			<view class="jrow-tip">姓名</view>
			<input class="jrow-input" v-model="otherName"  placeholder="请输入姓名" type="text"/>
		</view>
		<view class="jrow-box">
			<view class="jrow-tip">手机号</view>
			<input class="jrow-input" v-model="otherPhone"  placeholder="请输入手机号" type="text"/>
		</view>
		<view class="jrow-box">
			<view class="jrow-tip">关系</view>
			<view class="jrow-input">
				<view class="jinput-data">
					<view class="uni-list-cell-db">
						<picker @change="otherPickerChange" :value="aindex" :range="array">
							<view class="uni-input">{{array[aindex]}}</view>
						</picker>
					</view>
				</view>
			</view>
		</view>
		
		<view class="jbtn" @tap="submit">提交</view>
		<simple-address ref="simpleAddress" :pickerValueDefault="cityPickerValueDefault" @onConfirm="onConfirm" themeColor='#007AFF'></simple-address>
	</view>
</template>

<script>
	import simpleAddress from "@/components/simple-address/simple-address.nvue"
	import api from '../../js/api.js';
	
	export default {
		data() {
			return {
				companyName: "",
				companyStaff: "",
				companyPhone: "",
				workYears: "",
				companyAddress: "",
				companyDetailAddr: "",
				inCome: "",
				liveAddr: "",
				detailAddr: "",
				code: "",
				familyName: "",
				familyPhone: "",
				otherName: "",
				otherPhone: "",
				cityPickerValueDefault: [0, 0, 1],
				pickerText: '请选择地区',
				array: ['父母', '同事', '兄妹', '朋友'],
				findex: 0,
				aindex: 0,
				openType: 0,
				companyCode: "",
				liveCode: "",
			}
		},
		components: {
		    simpleAddress
		},
		methods: {
			openAddres(n) {
				this.openType = n;
				this.$refs.simpleAddress.open();
			},
			onConfirm(e) {
				console.log(e);
				if(this.openType == 0){
					this.companyAddress = e.label;
					this.companyCode = e.areaCode;
				}
				else{
					this.liveAddr = e.label;
					this.liveCode = e.areaCode;
				}
				console.log(e);
			},
			familyPickerChange: function(e) {
				console.log('picker发送选择改变，携带值为', e.target.value)
				this.findex = e.target.value
			},
			otherPickerChange: function(e) {
				console.log('picker发送选择改变，携带值为', e.target.value)
				this.aindex = e.target.value
			},
			async submit(){
				let param = {
					code: [this.companyCode, this.liveCode].join(","),
					codeName: [this.companyAddress, this.liveAddr].join(","),
					detailAddr: this.detailAddr,
					liveAddr: this.liveAddr,
					relation: [this.array[this.findex], this.array[this.aindex]].join(","),
					name: [this.familyName, this.otherName].join(","),
					phone: [this.familyPhone, this.otherPhone].join(","),
				}
				let res = await api.mineSave(param);
				uni.showToast({
					icon: 'none',
					title: res.msg
				});
			}
		}
	}
</script>

<style lang="less" scoped>
	@import url("./company.less");
</style>
