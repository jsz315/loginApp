import http from './http.js';
import store from "../store/index.js";
const md5 = require('./js-md5');

let str = md5('BCFFE4852D42A12318C907B20A491EA618657160693register');
console.log("md5");
console.log(str);

async function sendSms() {
	let param = {
		mobileType: 2,
		phone: "18667175699",
		type: "register"
	}
	let res = await http.get("/api/user/sendSms.htm", param);
	return res.data;
}

async function register(code, password) {
	let param = {
		agree: 1,
		client: "android",
		mobileType: 2,
		loginName: store.state.account,
		loginPwd: password,
		type: "register",
		registerAddr: "",
		vcode: code
	}
	let res = await http.get("/api/user/register.htm", param);
	return res.data;
}

async function login(password) {
	let param = {
		agree: 1,
		client: "android",
		mobileType: 2,
		loginName: store.state.account,
		loginPwd: password,
		registerAddr: ""
	}
	
	let res = await http.get("/api/user/login.htm", param);
	// let res = await http.get("http://122.51.176.36/txt", param);
	return res.data;
}

async function verifySms(code) {
	let param = {
		agree: 1,
		client: "android",
		mobileType: 2,
		phone: store.state.account,
		type: "findReg",
		registerAddr: "",
		vcode: code
	}
	let res = await http.get("/api/user/verifySms.htm", param);
	return res.data;
}

async function forgetPwd(code, password) {
	let param = {
		client: "android",
		mobileType: 2,
		phone: store.state.account,
		newPwd: password,
		type: "findReg",
		registerAddr: "",
		vcode: code
	}
	let res = await http.get("/api/user/forgetPwd.htm", param);
	return res.data;
}

export default {
	sendSms,
	register,
	login,
	verifySms,
	forgetPwd
}