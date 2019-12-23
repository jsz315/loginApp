<script>
	export default {
		onLaunch: function() {
			console.log('App Launch');
		},
		onShow: function() {
			console.log('App Show');
		},
		onHide: function() {
			console.log('App Hide');
		}
	}
</script>

<style>
	/*每个页面公共css */
	page {
		min-height: 100%;
		display: flex;
		font-size: 36upx;
		background: #f6f6f6;
		font-family: Microsoft Yahei,SimSun,Helvetica;
	}

	/* #ifdef MP-BAIDU */
	page {
		width: 100%;
		height: 100%;
		display: block;
	}

	swan-template {
		width: 100%;
		min-height: 100%;
		display: flex;
	}

	/* 原生组件模式下需要注意组件外部样式 */
	custom-component {
		width: 100%;
		min-height: 100%;
		display: flex;
	}

	/* #endif */

	/* #ifdef MP-ALIPAY */
	page {
		min-height: 100vh;
	}

	/* #endif */

	/* 原生组件模式下需要注意组件外部样式 */
	m-input {
		width: 100%;
		min-height: 100%;
		display: flex;
	}

	.content {
		display: flex;
		flex: 1;
		flex-direction: column;
		background-color: #efeff4;
		padding: 0upx;
	}

	.input-group {
		background-color: #ffffff;
		margin-top: 40upx;
		position: relative;
	}

	.input-group::before {
		position: absolute;
		right: 0;
		top: 0;
		left: 0;
		height: 1upx;
		content: '';
		-webkit-transform: scaleY(.5);
		transform: scaleY(.5);
		background-color: #c8c7cc;
	}

	.input-group::after {
		position: absolute;
		right: 0;
		bottom: 0;
		left: 0;
		height: 1upx;
		content: '';
		-webkit-transform: scaleY(.5);
		transform: scaleY(.5);
		background-color: #c8c7cc;
	}

	.input-row {
		display: flex;
		flex-direction: row;
		position: relative;
	}

	.input-row .title {
		width: 20%;
		height: 50upx;
		min-height: 50upx;
		padding: 15upx 0;
		padding-left: 30upx;
		line-height: 50upx;
	}

	.input-row.border::after {
		position: absolute;
		right: 0;
		bottom: 0;
		left: 15upx;
		height: 1upx;
		content: '';
		-webkit-transform: scaleY(.5);
		transform: scaleY(.5);
		background-color: #c8c7cc;
	}

	.btn-row {
		margin-top: 0upx;
		padding: 0upx;
	}

	button.primary {
		background-color: #0faeff;
	}
	
/* 	uni-slider .uni-slider-handle-wrapper,
	uni-slider .uni-slider-track
	{
		height: 32upx;
		border-radius: 16upx;
	}
	.uni-slider-handle
	{
		width: 54upx;
		height: 54upx;
		background: url(static/img/coin.png) no-repeat center;
		background-size: contain;
	} */
	
	.status_bar {
		height: var(--status-bar-height);
		background: #682FE9;
		width: 100%;
	}
	
	.jbtn{
		width: 690upx;
		height: 96upx;
		line-height: 96upx;
		background: #682FE9;
		color: #FFFFFF;
		text-align: center;
		margin: 20upx auto;
		font-size: 32upx;
		border-radius: 8upx;
	}
	.jarrow{
		width: 30upx;
		height: 30upx;
		margin-right: 30upx;
		background: url(static/img/r-arrow.png) no-repeat center;
		background-size: contain;
	}
	.jrow-box{
		padding: 20upx;
		border-top: solid 1upx #ededed;
		border-bottom: solid 1upx #ededed;
		background: #FFFFFF;
		position: relative;
		display: flex;
		align-items: center;
	}
	.jrow-input{
		flex: 1;
		text-align: left;
		display: block;
		box-sizing: border-box;
		padding: 0 20upx;
		font-size: 32upx;
		color: #999999;
		height: 60upx;
		line-height: 60upx;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	


/* 滑动组件样式---------------- */
.uni-slider-handle-wrapper,.uni-slider-track
{
	height: 32upx !important;
	border-radius: 16upx !important;
}
.uni-slider-handle-wrapper{
	background: #4315b5 !important;
}
.uni-slider-thumb
{
	width: 54upx;
	height: 54upx;
	background: url(static/img/coin.png) no-repeat center;
	background-size: contain;
}

.uni-slider-handle
{
	width: 54upx;
	height: 54upx;
	background: url(static/img/coin.png) no-repeat center;
	background-size: contain;
	opacity: 0;
}

.uni-slider-track{
	background: #b99df7;
}



.wx-slider-handle-wrapper,.wx-slider-track
{
	height: 32upx !important;
	border-radius: 16upx !important;
}
.wx-slider-handle-wrapper{
	background: #4315b5 !important;
}
.wx-slider-thumb
{
	width: 54upx;
	height: 54upx;
	background: url(static/img/coin.png) no-repeat center;
	background-size: contain;
}

.wx-slider-handle
{
	width: 54upx;
	height: 54upx;
	background: url(static/img/coin.png) no-repeat center;
	background-size: contain;
	opacity: 0;
}

.wx-slider-track{
	background: #b99df7;
}
</style>
