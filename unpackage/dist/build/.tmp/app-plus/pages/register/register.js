(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/register/register"],{1126:function(t,e,n){"use strict";n.r(e);var r=n("9f67"),o=n.n(r);for(var a in r)"default"!==a&&function(t){n.d(e,t,function(){return r[t]})}(a);e["default"]=o.a},"39db":function(t,e,n){"use strict";(function(t){n("c099"),n("921b");r(n("66fd"));var e=r(n("90b5"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"5ab6":function(t,e,n){},"90b5":function(t,e,n){"use strict";n.r(e);var r=n("cb4a"),o=n("1126");for(var a in o)"default"!==a&&function(t){n.d(e,t,function(){return o[t]})}(a);n("bd89");var u=n("2877"),i=Object(u["a"])(o["default"],r["a"],r["b"],!1,null,"35c94a56",null);e["default"]=i.exports},"9f67":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=u(n("a34a")),o=n("2f62"),a=u(n("1c49"));function u(t){return t&&t.__esModule?t:{default:t}}function i(t,e,n,r,o,a,u){try{var i=t[a](u),c=i.value}catch(s){return void n(s)}i.done?e(c):Promise.resolve(c).then(r,o)}function c(t){return function(){var e=this,n=arguments;return new Promise(function(r,o){var a=t.apply(e,n);function u(t){i(a,r,o,u,c,"next",t)}function c(t){i(a,r,o,u,c,"throw",t)}u(void 0)})}}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),r.forEach(function(e){f(t,e,n[e])})}return t}function f(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var l=function(){return n.e("components/m-input").then(n.bind(null,"ddcd"))},d=function(){return n.e("components/timer-btn/timer-btn").then(n.bind(null,"7ee0"))},h={components:{mInput:l,timerBtn:d},data:function(){return{code:"",password:""}},computed:(0,o.mapState)(["account"]),methods:s({},(0,o.mapMutations)(["hasRegChange","tokenChange","userIdChange"]),{onRegister:function(){var e=c(r.default.mark(function e(){var n;return r.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(!(this.code.length<4)){e.next=3;break}return t.showToast({icon:"none",title:"请输入正确的验证码"}),e.abrupt("return");case 3:if(!(this.password.length<6)){e.next=6;break}return t.showToast({icon:"none",title:"密码最短为 6 个字符"}),e.abrupt("return");case 6:return e.next=8,a.default.register(this.code,this.password);case 8:n=e.sent,200==n.code?(t.showToast({icon:"none",title:"注册成功"}),this.hasRegChange(!0),this.tokenChange(n.data.token),this.userIdChange(n.data.userId),t.reLaunch({url:"/pages/login/login"})):t.showToast({icon:"none",title:n.msg});case 10:case"end":return e.stop()}},e,this)}));function n(){return e.apply(this,arguments)}return n}(),getCode:function(){var e=c(r.default.mark(function e(){var n;return r.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,a.default.sendSms();case 2:n=e.sent,200==n.code?10==n.data.state?t.showToast({icon:"none",title:n.msg}):t.showToast({icon:"none",title:n.data.message}):t.showToast({icon:"none",title:n.msg});case 4:case"end":return e.stop()}},e,this)}));function n(){return e.apply(this,arguments)}return n}()}),onShow:function(){}};e.default=h}).call(this,n("6e42")["default"])},bd89:function(t,e,n){"use strict";var r=n("5ab6"),o=n.n(r);o.a},cb4a:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement;t._self._c},o=[];n.d(e,"a",function(){return r}),n.d(e,"b",function(){return o})}},[["39db","common/runtime","common/vendor"]]]);