import store from "../store/index.js"
const md5 = require('./js-md5');

const baseHost = "http://47.96.117.210:8080";
let baseParam = {
	appName: "well",
	versionNumber: "1.1.0",
	client: store.state.info.platform,
}
console.log(baseParam)

function toSearch(param){
	let list = [];
	for(var i in param){
		list.push(i + "=" + param[i]);
	}
	let signMsg = md5(store.state.appKey + store.state.token + list.join("|"));
	list.push("signMsg=" + signMsg);
	return list.join("&");
}

function get(url, param){
	return new Promise(resolve => {
		let allData = Object.assign(baseParam, param);
		if(url.substr(0, 4) != "http"){
			url = baseHost + url;
		}
		uni.request({
			url: url + "?" + toSearch(allData),
			method: 'GET',
			dataType: 'json',
			responseType: 'text',
			header:{
				token: store.state.token,
				signMsg: param.signMsg
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
		let allData = Object.assign(baseParam, param);
		uni.request({
			url: baseHost + url,
			data: JSON.stringify(allData),
			method: 'POST',
			dataType: 'json',
			responseType: 'text',
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