let tid = 0;
function delay(callback, time){
	clearTimeout(tid);
	tid = setTimeout(()=>{
		console.log("延迟执行");
		callback();
	}, time);
}

export default{
	delay
}