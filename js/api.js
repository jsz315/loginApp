import http from './http.js';
import store from "../store/index.js";
const md5 = require('./js-md5');

// let str = md5('BCFFE4852D42A12318C907B20A491EA618657160693register');
// console.log("md5");
// console.log(str);

async function homePage(){
	let param = {
		mobileType: 2,
		token: store.state.token,
		userId: store.state.userId
	}
	let res = await http.get("/api/index/homePage.htm", param);
	return res.data;
}

async function isPhoneExists(phone){
	let param = {
		mobileType: 2,
		phone: phone
	}
	let res = await http.get("/api/user/isPhoneExists.htm", param);
	return res.data;
}

async function sendSms(isFind) {
	let param = {
		mobileType: 2,
		phone: store.state.account,
		type: isFind ? "findReg" : "register"
	}
	let res = await http.get("/api/user/sendSms.htm", param);
	return res.data;
}

async function register(code, password) {
	let param = {
		agree: 1,
		client: store.state.systemInfo.platform,
		loginName: store.state.account,
		loginPwd: md5(password),
		mobileType: 2,
		// registerAddr: "",
		// registerCoordinate: "",
		vcode: code
	}
	let res = await http.get("/api/user/register.htm", param);
	return res.data;
}

async function login(password) {
	let param = {
		mobileType: 2,
		loginName: store.state.account,
		loginPwd: md5(password),
	}
	
	let res = await http.get("/api/user/login.htm", param);
	// let res = await http.get("http://122.51.176.36/txt", param);
	return res.data;
}

async function verifySms(code) {
	let param = {
		// client: store.state.systemInfo.platform,
		mobileType: 2,
		phone: store.state.account,
		type: "findReg",
		// registerAddr: "",
		vcode: code
	}
	let res = await http.get("/api/user/verifySms.htm", param);
	return res.data;
}

async function forgetPwd(code, password) {
	let param = {
		// client: store.state.systemInfo.platform,
		mobileType: 2,
		phone: store.state.account,
		newPwd: md5(password),
		// type: "findReg",
		// registerAddr: "",
		vcode: code
	}
	let res = await http.get("/api/user/login/forgetPwd", param);
	return res.data;
}

async function getUserAuth() {
	let param = {
		mobileType: 2,
		token: store.state.token,
		userId: store.state.userId
	}
	let res = await http.get("/api/act/mine/userAuth/getUserAuth.htm", param);
	return res.data;
}

async function list() {
	let param = {
		mobileType: 2,
		type: 'BANK_TYPE',
		token: store.state.token,
		userId: store.state.userId
	}
	let res = await http.get("/api/act/dict/list.htm", param);
	return res.data;
}

async function bindCardSendMsg(id, name, pan, backCode) {
	let param = {
		mobileType: 2,
		cardHolderId: id || "342921198810100029",
		cardHolderName: encodeURIComponent("刘伟"),
		customerId: "300044",
		pan: pan || "6225800624985628",
		backCode: backCode || "ICBC",
		externalRefNumber: "88650a986521482298126bb4a892bf78",
		phoneNO: store.state.account || "18667175692",
		token: store.state.token,
		userId: store.state.userId
	}
	let res = await http.post("/api/pay/CJ/bindCardSendMsg.htm", param);
	return res.data;
}

async function realNameSave(idNo, name){
	let param = {
		idNo: idNo,
		name: encodeURIComponent(name),
		mobileType: 2,
		token: store.state.token,
		userId: store.state.userId
	}
	let res = await http.post("/api/act/mine/userInfo/realName/saveOrUpdate.htm", param);
	return res.data;
}

async function mineSave(data) {
	let param = {
		code: data.code,
		codeName: data.codeName,
		detailAddr: data.detailAddr,
		liveAddr: data.liveAddr,
		relation: data.relation,
		name: data.name,
		phone: data.phone,
		education: "初中及小学以下",
		email: "Hh@11.com",
		id: "0,0",
		liveCoordinate: "120.082479,30.271490",
		mac: "88:36:5F:B9:2D:AD",
		marryState: 1,
		operatingSystem: 0,
		phoneBrand: "google",
		phoneMark: "-1",
		phoneType: "Pixel 2 XL",
		systemVersions: 0,
		type: 0,
		versionCode: 0,
		versionName: 0,
		mobileType: 2,
		token: store.state.token,
		userId: store.state.userId
	}
	let res = await http.post("/api/act/mine/contact/saveOrUpdate.htm", param);
	return res.data;
}


async function product(current) {
	let param = {
		current: current,
		pageSize: 20,
		search: "",
		mobileType: 2,
		token: store.state.token,
		userId: store.state.userId
	}
	let res = await http.get("/api/vip/loan/product.htm", param);
	return res.data;
}

async function authentication(frontImg, backImg) {
	let param = {
		frontImg: frontImg,
		backImg: backImg,
		userId: store.state.userId
	}
	let res = await http.post("/api/ocr/glad/authentication.htm", param);
	return res.data;
}

async function rightPostage(){
	let param = {
		
	};
	
	let res = await http.get('/api/vip/act/right/postage.htm', param);
	return res.data;
}

async function rightOpen(day){
	let param = {
		day
	};
	
	let res = await http.get('/api/vip/act/right/open.htm', param);
	return res.data;
}

async function rightConfirm(orderId, smsSendNo, smsVerifyCode){
	let param = {
		orderId: orderId,
		smsSendNo: smsSendNo,
		smsVerifyCode: smsVerifyCode,
	};
	
	let res = await http.get('/api/vip/act/right/confirm.htm', param);
	return res.data;
}


export default {
	homePage,
	isPhoneExists,
	sendSms,
	register,
	login,
	verifySms,
	forgetPwd,
	getUserAuth,
	list,
	bindCardSendMsg,
	realNameSave,
	mineSave,
	product,
	authentication,
	rightPostage,
	rightOpen,
	rightConfirm
}