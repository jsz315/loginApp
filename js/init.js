import api from './api.js';
import store from "../store/index.js";

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

export default {
	initBank,
	initAuth
}