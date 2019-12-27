import store from "../store/index.js";

let view;

function vip() {
	let sw = store.state.systemInfo.screenWidth;
	let sh = store.state.systemInfo.screenHeight;
	let imgw = 646;
	let imgh = 764;
	let dw = sw * 0.8;
	let dh = imgh * (dw / imgw);
	let left = (sw - dw) / 2;
	let top = (sh - dh) / 2;

	view = new plus.nativeObj.View('Mask', {
		top: '0px',
		left: '0px',
		height: '100%',
		width: '100%',
		opacity: 1
	});
	view.draw([{
			tag: 'rect',
			id: 'bg',
			rectStyles: {
				color: 'rgba(0,0,0,0.5)',
				opacity: 0.1
			},
			position: {
				top: '0px',
				left: '0px',
				width: '100%',
				height: '100%'
			}
		},
		{
			tag: 'img',
			id: 'img',
			src: '/static/img/pop-bg.png',
			position: {
				top: top + 'px',
				left: left + 'px',
				width: dw + 'px',
				height: dh + 'px'
			}
		},
	]);

	view.setTouchEventRect({
		top: '0px',
		left: '0px',
		width: '100%',
		height: '100%'
	});
	view.addEventListener("click", function(e) {
		console.log("点击原生控件：" + JSON.stringify(e));
		if (e.clientX > left && e.clientX < dw + left) {
			if (e.clientY > top && e.clientY < dh + top) {
				if (e.clientY - top > dh * 5 / 7) {
					console.log("点击按钮");
					hide(true);
				} else {
					console.log("点击面板内部");
				}
			} else {
				hide(false);
			}
		} else {
			hide(false);
		}
	}, false);
	view.show();
}

function hide(inBtn){
	view.close();
	view = null;
	store.commit("isPopVipChange", false);
	if(inBtn){
		uni.navigateTo({
			url: "/pages/buy/buy"
		})
	}
}

export default {
	vip
}