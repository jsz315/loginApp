import http from './http.js';
import store from "../store/index.js";
const md5 = require('./js-md5');

// let str = md5('BCFFE4852D42A12318C907B20A491EA618657160693register');
// console.log("md5");
// console.log(str);

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
		client: store.state.info.platform,
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
		// client: store.state.info.platform,
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
		// client: store.state.info.platform,
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

export default {
	isPhoneExists,
	sendSms,
	register,
	login,
	verifySms,
	forgetPwd
}