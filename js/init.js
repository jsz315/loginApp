import api from './api.js';
import store from "../store/index.js";
import pop from './pop.js'

async function initBank(){
	let res = await api.list();
	if(res.code == 200){
		store.commit("banksChange", res.data.bankTypeList);
	}
}

async function initAuth(){
	let res = await api.getUserAuth();
	if(res.code == 200){
		store.commit("userAuthChange", res.data);
	}
}

async function initHomePage(){
	let res = await api.homePage();
	if(res.code == 200){
		store.commit("isVipChange", res.data.member == 1);
		
		if(res.data.member != 1){
			doPopVip()
		}
	}
}

function doPopVip(){
	setTimeout(()=>{
		if(!store.state.isVip && !store.state.isPopVip){
			store.commit("isPopVipChange", true);
			pop.vip();
			doPopVip();
		}
	}, 10000)
}

export default {
	initBank,
	initAuth,
	initHomePage
}