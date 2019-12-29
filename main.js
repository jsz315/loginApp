import Vue from 'vue'
import App from './App'

import store from './store'

import api from './js/api.js'
import init from './js/init.js'

Vue.config.productionTip = false

Vue.prototype.$store = store

App.mpType = 'app'

init.initBank();
init.initAuth();
init.initHomePage();

const app = new Vue({
    store,
    ...App
})
app.$mount()

// async function test(){
// 	let res = await api.getCode();
// 	console.log(res);
// }

// test();
// console.log(store.state);
// store.commit("login", "223344");
// console.log(store.state);

/*
function getData(){
	var list = $(".privilegeList a");
	var aim = [];
	for(var i = 0; i < list.length; i++){
		var src = $(list[i]).find("div img").attr("src").split("/").pop();
		var t = $(list[i]).find("p");
		var t1 = $.trim($(t[0]).html());
		var t2 = $.trim($(t[1]).html());
		aim.push({src, t1, t2});
	}
	console.log(JSON.stringify(aim));
}
getData();
*/



