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

async function bindCardSendMsg(id, name) {
	let param = {
		mobileType: 2,
		cardHolderId: id,
		cardHolderName: encodeURIComponent(name),
		customerId: 1,
		externalRefNumber: 1,
		phoneNO: store.state.account,
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
		code: 0,
		codeName: 0,
		detailAddr: 0,
		education: 0,
		email: 0,
		id: 0,
		liveAddr: 0,
		liveCoordinate: 0,
		mac: 0,
		marryState: 0,
		name: 0,
		operatingSystem: 0,
		phone: 0,
		phoneBrand: 0,
		phoneMark: 0,
		phoneType: 0,
		relation: 0,
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
	product
}