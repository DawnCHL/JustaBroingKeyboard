<style>
h2 {
	text-align: center;
}
.blockBtn {
	width: 50%;
	height: 50px;
	background-color: #1874CD;
	margin: 20px auto;
	text-align: center;
	cursor: pointer;
}
.blockBtn :hover {
	background-color: #1E90FF;
}
.blockBtn .btnFont {
	text-decoration: none;
	line-height: 50px;
	color: #F5FFFA;
}
.disable{
	cursor: not-allowed;
}
</style>


<template>

	<div class="content">
		<h2>TITLE</h2>
		<div class="body">
			<p>asdfasdf</p>
		</div>
		<div class="foot">
			<a href="https://github.com/DawnCHL"><i class="iconfont icon-cloud_download"></i> https://github.com/DawnCHL</a>
		</div>
	</div>

</template>


<script>

	module.exports = {
		data: function () {
			return {
				status: 0
			}
		},
		mounted: function () {
			console.log('gua')
		},
		methods: {
			test: function () {
				console.log('!')
			},
			testagin: function () {
				console.log('?')
			},
		}
	}
</script>