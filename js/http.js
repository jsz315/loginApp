import store from "../store/index.js"
const md5 = require('./js-md5');

const baseHost = "http://47.96.117.210:8080";
let baseParam = {
	versionNumber: "1.1.0"
	// client: store.state.info.platform,
}
console.log(baseParam)

function toSearch(param){
	let list = [];
	for(let i in baseParam){
		param[i] = baseParam[i];
	}
	for(let i in param){
		list.push(i + "=" + param[i]);
	}
	
	let signMsg = md5(store.state.appKey + store.state.token + list.join("|"));
	list.push("signMsg=" + signMsg);
	param.signMsg = signMsg;
	let aim = list.join("&");
	return [aim, signMsg];
}

function get(url, param){
	return new Promise(resolve => {
		// let allData = Object.assign(baseParam, param);
		// console.log(allData);
		if(url.substr(0, 4) != "http"){
			url = baseHost + url;
		}
		let search = toSearch(param);
		uni.request({
			url: url + "?" + search[0],
			method: 'GET',
			dataType: 'json',
			responseType: 'text',
			header:{
				token: store.state.token,
				signMsg: search[1]
			},
			success: (res) => {
				console.log(res);
				resolve(res);
			}
		})
	})
}

function post(url, param){
	return new Promise(resolve => {
		// let allData = Object.assign(baseParam, param);
		// console.log(allData);
		if(url.substr(0, 4) != "http"){
			url = baseHost + url;
		}
		let search = toSearch(param);
		uni.request({
			url: url,
			data: param,
			method: 'POST',
			dataType: 'json',
			responseType: 'text',
			header:{
				token: store.state.token,
				signMsg: search[1],
				'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
			},
			success: (res) => {
				console.log(res);
				resolve(res);
			}
		})
	})
}

export default {
	get, post
}