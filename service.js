const USERS_KEY = 'USERS_KEY';
const USERS_INFO = 'USERS_INFO';

const getInfo = function(){
	let ret = '';
	ret = uni.getStorageSync(USERS_INFO);
	if (!ret) {
	    ret = '{}';
	}
	return JSON.parse(ret);
}


const setInfo = function (info) {
    uni.setStorageSync(USERS_INFO, JSON.stringify(info));
}


const getUser = function () {
    let ret = '';
    ret = uni.getStorageSync(USERS_KEY);
    if (!ret) {
        ret = '{}';
    }
    return JSON.parse(ret);
}

const setUser = function (userInfo) {
	let user = getUser();
	
	if(userInfo.hasReg){
		user.hasReg = userInfo.hasReg;
	}
	if(userInfo.account){
		user.account = userInfo.account;
	}
	if(userInfo.password){
		user.password = userInfo.password;
	}
	if(userInfo.isLogin){
		user.isLogin = userInfo.isLogin;
	}
	if(userInfo.isVip){
		user.isVip = userInfo.isVip;
	}
	if(userInfo.inPro){
		user.inPro = userInfo.inPro;
	}
	if(userInfo.userId){
		user.userId = userInfo.userId;
	}
	if(userInfo.token){
		user.token = userInfo.token;
	}
	if(userInfo.userAuth){
		user.userAuth = userInfo.userAuth;
	}
	if(userInfo.vipPopTimes){
		user.vipPopTimes = userInfo.vipPopTimes;
	}
	if(userInfo.cardHolderName){
		user.cardHolderName = userInfo.cardHolderName;
	}
	if(userInfo.cardHolderId){
		user.cardHolderId = userInfo.cardHolderId;
	}
	
    uni.setStorageSync(USERS_KEY, JSON.stringify(user));
}

export default {
	getInfo,
	setInfo,
    getUser,
    setUser
}
