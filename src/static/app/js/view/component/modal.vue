<style>
	.D-modal{
		top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    position: fixed;
    overflow: auto;
	}
	.D-modal .modalShade {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: .5;
    background: #000;
    z-index: 999;
	overflow-y: hidden;
	}
	.D-modal .modalBox {
		z-index: 1000;
		width: 800px;
		position: absolute;
    left: 50%;
    top: 10%;
    margin-top: 45px;
    transform: translateX(-50%);
    background: #fff;
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(0,0,0,.3);
    box-sizing: border-box;
    margin-bottom: 50px;
	}
	.D-modal .modalBox .modalHead{
		height: 25%;
		margin: 10px;
		padding: 5px;
		font-size: 24px;
		font-weight: bold;
	}
	.D-modal .modalBox .modalContext{
		height: 45%;
		margin: 10px;
		padding: 5px;
	}
	.D-modal .modalBox .modalFooter{
		height: 25%;
		margin: 10px;
		padding: 5px;
		font-size: 16px;
	}
</style>

<template>

	<div class="D-modal">
		<div class="modalShade"></div>
		<div class="modalBox">
			<div class="modalHead">{{Dtitle}}</div>
			<div class="modalContext">
				<slot name="context"></slot>
			</div>
			<div class="modalFooter">
				<slot name="footer"></slot>
			</div>
		</div>
	</div>

</template>

<script>
	module.exports = {
		data: function () {
			return {
				Dtitle: ""
			}
		},
		props:['title'],
		created: function () {
			this.Dtitle = this.$props.title;
		},
		mounted: function () {
			
		},
		methods: {
			
		}
	}
</script>