import Vue from 'vue'
import Vuex from 'vuex'
import service from '../service.js'

Vue.use(Vuex)

let user = service.getUser();
let info = uni.getSystemInfoSync();
let timerId = 0;

const store = new Vuex.Store({
    state: {
		hasReg: !!user.hasReg,
        account: user.account,
		password: user.password,
		isLogin: !!user.isLogin,
		isVip: !!user.isVip,
		inPro: !!user.inPro,
		info: info,
		appKey: "BCFFE4852D42A12318C907B20A491EA6",
		userId: user.userId,
		token: "",
		second: 0
    },
    mutations: {
		hasRegChange(state, hasReg){
			state.hasReg = hasReg;
			updateLocalData(state);
		},
		accountChange(state, account){
			state.account = account;
			updateLocalData(state);
		},
		passwordChange(state, password){
			state.password = password;
			updateLocalData(state);
		},
		isLoginChange(state, isLogin){
			state.isLogin = isLogin;
			updateLocalData(state);
		},
		isVipChange(state, isVip){
			state.isVip = isVip;
			updateLocalData(state);
		},
		inProChange(state, inPro){
			state.inPro = inPro;
			updateLocalData(state);
		},
		appKeyChange(state, appKey){
			state.appKey = appKey;
		},
		tokenChange(state, token){
			state.token = token;
		},
		userIdChange(state, userId){
			state.userId = userId;
			updateLocalData(state);
		},
		secondChange(state, second){
			state.second = second;
			timerId = setInterval(()=>{
				if(--state.second <= 0){
					clearTimeout(timerId)
				}
			}, 1000)
		}
    }
})

function updateLocalData(info){
	service.setUser(info);
}

export default store
