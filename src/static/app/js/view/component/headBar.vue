<style>
#headBar {
	position: fixed;
	top: 0px;
	left: 0px;
	height: 45px;
	width: 100%;
	background-color: #ffc81f;
	color: #222;
	overflow: hidden;
	z-index: 888;
}
#headBar div {
	height: 1em;
	display: inline-block;
}
#headBar .meun {
	text-align: center;
	font-size: 45px;
	line-height: 45px;
	cursor: pointer;
}
#headBar .meun .icon {
	font-size: 35px !important;
	line-height: 20px;
	font-weight: bold;
}
#headBar .tab{
	height: 35px;
	width: 10%;
	background-color: #444;
	color: #FFFFF0;
	line-height: 40px;
	text-align: center;
	cursor: pointer;
	border-radius: 4px 4px 0 0 ;
	vertical-align: bottom;
}

#headBar .checkTab{
	background-color: #222;
	color: #ffc81f;
	font-weight: bolder;
}
#headBar .tab.sm-tab{
	width: 3%;
}
#headBar .add-icon{
	font-weight: bolder;
	font-size: 25px;
}

</style>

<template>

	<div id="headBar">

		<router-link class="meun" tag="div" to="/index">
			<div><i class="icon iconfont icon-menu_icon"></i></div>
		</router-link>
		<router-link class="tab" :class="tab=='home'? 'checkTab':''" tag="div"  to="/home">
			<div>Apis List</div>
		</router-link>
		<router-link class="tab" :class="tab=='service'? 'checkTab':''" tag="div"  to="/service">
			<div>Service</div>
		</router-link>
		<router-link class="tab sm-tab" :class="tab=='add'? 'checkTab':''" tag="div"  to="/add">
			<div class="add-icon">+</div>
		</router-link>
			<!--<div class="d_m" >Da MocK</div>-->
		
	</div>

</template>

<script>
	module.exports = {
		data: function () {
			return {
				tab: true
			}
		},
		mounted: function () {
			
		},
		props:["checkTab"],
		created: function () {
			this.tab = this.$props.checkTab;
		},
		methods: {
			toIndex: () => {

			}
		}
	}
</script>