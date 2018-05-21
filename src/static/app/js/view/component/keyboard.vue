<style lang="less">
	@keyLen: 38px;
	@keyLenHalf: calc(~"38px * 0.5");
	@keyLen125: calc(~"38px * 1.25 + 1.25px");
	@keyLen15: calc(~"38px * 1.50 + 1px");
	@keyLen175: calc(~"38px * 1.75 + 1.75px");
	@keyLen2: calc(~"38px * 2.00 + 2.00px");
	@keyLen225: calc(~"38px * 2.25 + 2.25px");
	@keyLen275: calc(~"38px * 2.75 + 3.75px");
	@keyLen625: calc(~"38px * 6.25 + 5.25px");
	@gary: #696e6e;
	@red: #a3201f;
	@pale: #d5d0c4;
	.keyboard{
		background-color: rgb(35,35,35);
		padding: 15px 8px;
		border-radius: 4px;
		display: flex;
		flex-wrap: nowrap;
		justify-content:space-between;
		vertical-align:top;
		font-size:0;
		width: 923px;
		.default,.tool,.number{
			display: inline-block;
		}
		.default{
			width: 600px;
		}
		.tool{
			width: 120px;
		}
		.number{
			width: 160px;
		}
		.marginLeft{
			margin-left: 40px;
		}
		.marginLeft_half{
			margin-left: 20px;
		}
		.row_2{
			margin-top: 12px;
		}
	}
	.row{
		height: 40px;
		display: flex;
		flex-wrap: nowrap;
		justify-content:space-between;
		.col{
			display: flex;
			flex-wrap: nowrap;
			justify-content:space-between;
			align-items: stretch;
			.hidden{
				visibility: hidden;
			}
			.key_y2{
				height: @keyLen2;
			}
			.key_x2{
				width: @keyLen2;
			}
			.key_x125{
				width: @keyLen125;
			}
			.key_x15{
				width: @keyLen15;
			}
			.key_x175{
				width: @keyLen175;
			}
			.key_x225{
				width: @keyLen225;
			}
			.key_x275{
				width: @keyLen275;
			}
			.key_x125{
				width: @keyLen125;
			}
			.key_x625{
				width: @keyLen625;
			}
		}
	}
	
	
</style>


<template>
	<div class="keyboard">
		<div class="default">
			<div class="row row_1">
				<div class="col">
					<Key keyName="ESC" keyColor="red"></Key>
				</div>
				<div class="col marginLeft">
					<Key keyName="F1"></Key>
					<Key keyName="F2"></Key>
					<Key keyName="F3"></Key>
					<Key keyName="F4"></Key>
				</div>
				<div class="col marginLeft_half">
					<Key keyName="F5" keyColor="gary"></Key>
					<Key keyName="F6" keyColor="gary"></Key>
					<Key keyName="F7" keyColor="gary"></Key>
					<Key keyName="F8" keyColor="gary"></Key>
				</div>
				<div class="col marginLeft_half">
					<Key keyName="F9"></Key>
					<Key keyName="F10"></Key>
					<Key keyName="F11"></Key>
					<Key keyName="F12"></Key>
				</div>
			</div>

			<div class="row row_2">
				<div class="col">
					<Key keyName="~"></Key>
					<Key keyName="1"></Key>
					<Key keyName="2"></Key>
					<Key keyName="3"></Key>
					<Key keyName="4"></Key>
					<Key keyName="5"></Key>
					<Key keyName="6"></Key>
					<Key keyName="7"></Key>
					<Key keyName="8"></Key>
					<Key keyName="9"></Key>
					<Key keyName="0"></Key>
					<Key keyName="-"></Key>
					<Key keyName="="></Key>
					<Key keyName="BackSpace" keyColor="gary" className="key_x2"></Key>
				</div>
			</div>

			<div class="row row_3">
				<div class="col">
					<Key keyName="Tab" keyColor="gary" className="key_x15"></Key>
					<Key keyName="Q"></Key>
					<Key keyName="W"></Key>
					<Key keyName="E"></Key>
					<Key keyName="R"></Key>
					<Key keyName="T"></Key>
					<Key keyName="Y"></Key>
					<Key keyName="U"></Key>
					<Key keyName="I"></Key>
					<Key keyName="O"></Key>
					<Key keyName="P"></Key>
					<Key keyName="["></Key>
					<Key keyName="]"></Key>
					<Key keyName="\" className="key_x15"></Key>
				</div>
			</div>

			<div class="row row_4">
				<div class="col">
					<Key keyName="Caps" keyColor="gary" className="key_x175"></Key>
					<Key keyName="A"></Key>
					<Key keyName="S"></Key>
					<Key keyName="D"></Key>
					<Key keyName="F"></Key>
					<Key keyName="G"></Key>
					<Key keyName="H"></Key>
					<Key keyName="J"></Key>
					<Key keyName="K"></Key>
					<Key keyName="L"></Key>
					<Key keyName=";"></Key>
					<Key keyName="'"></Key>
					<Key keyName="Enter" keyColor="red" className="key_x225"></Key>
				</div>
			</div>

			<div class="row row_5">
				<div class="col">
					<Key keyName="Shift" keyColor="gary" className="key_x225"></Key>
					<Key keyName="Z"></Key>
					<Key keyName="X"></Key>
					<Key keyName="C"></Key>
					<Key keyName="V"></Key>
					<Key keyName="B"></Key>
					<Key keyName="N"></Key>
					<Key keyName="M"></Key>
					<Key keyName=","></Key>
					<Key keyName="."></Key>
					<Key keyName="/"></Key>
					<Key keyName="Shift" keyColor="gary" className="key_x275"></Key>
				</div>
			</div>

			<div class="row row_6">
				<div class="col">
					<Key keyName="Crtl" keyColor="gary" className="key_x125"></Key>
					<Key keyName="" keyColor="gary" className="key_x125"></Key>
					<Key keyName="Alt" keyColor="gary" className="key_x125"></Key>
					<Key keyName="" className="key_x625"></Key>
					<Key keyName="Alt" keyColor="gary" className="key_x125"></Key>
					<Key keyName="" keyColor="gary" className="key_x125"></Key>
					<Key keyName="Fn" keyColor="gary" className="key_x125"></Key>
					<Key keyName="Ctrl" keyColor="gary" className="key_x125"></Key>
				</div>
			</div>
		</div>

		<div class="tool">
			<div class="row row_1">
				<div class="col">
					<Key keyColor="gary" keyName="PS"></Key>
					<Key keyColor="gary" keyName="SL"></Key>
					<Key keyColor="gary" keyName="Pa"></Key>
				</div>
			</div>
			<div class="row row_2">
				<div class="col">
					<Key keyColor="gary" keyName="Insert"></Key>
					<Key keyColor="gary" keyName="Home"></Key>
					<Key keyColor="gary" keyName="PUp"></Key>
				</div>
			</div>

			<div class="row row_3">
				<div class="col">
					<Key keyColor="gary" keyName="Delet"></Key>
					<Key keyColor="gary" keyName="End"></Key>
					<Key keyColor="gary" keyName="PDn"></Key>
				</div>
			</div>

			<div class="row row_4">
				<div class="col">
					<Key keyColor="gary" keyName="ESC" className="hidden"></Key>
					<Key keyColor="gary" keyName="ESC" className="hidden"></Key>
					<Key keyColor="gary" keyName="ESC" className="hidden"></Key>
				</div>
			</div>

			<div class="row row_5">
				<div class="col">
					<Key keyColor="red" keyName="ESC" className="hidden"></Key>
					<Key keyColor="red" keyName="↑"></Key>
					<Key keyColor="red" keyName="ESC" className="hidden"></Key>
				</div>
			</div>

			<div class="row row_6">
				<div class="col">
					<Key keyColor="red" keyName="←"></Key>
					<Key keyColor="red" keyName="↓"></Key>
					<Key keyColor="red" keyName="→"></Key>
				</div>
			</div>
		</div>

		<div class="number">
			<div class="row row_1">
				<div class="col">
					<Key keyName="ESC" className="hidden"></Key>
					<Key keyName="ESC" className="hidden"></Key>
					<Key keyName="ESC" className="hidden"></Key>
					<Key keyName="ESC" className="hidden"></Key>
				</div>
			</div>
			<div class="row row_2">
				<div class="col">
					<Key keyColor="gary" keyName="NL"></Key>
					<Key keyColor="gary" keyName="/"></Key>
					<Key keyColor="gary" keyName="×"></Key>
					<Key keyColor="gary" keyName="﹣"></Key>
				</div>
			</div>
			<div class="row row_3">
				<div class="col">
					<Key keyName="7"></Key>
					<Key keyName="8"></Key>
					<Key keyName="9"></Key>
					<Key keyName="+" keyColor="gary" className="key_y2"></Key>
				</div>
			</div>

			<div class="row row_4">
				<div class="col">
					<Key keyName="4"></Key>
					<Key keyName="5"></Key>
					<Key keyName="6"></Key>
				</div>
			</div>

			<div class="row row_5">
				<div class="col">
					<Key keyName="1"></Key>
					<Key keyName="2"></Key>
					<Key keyName="3"></Key>
					<Key keyName="Enter" keyColor="gary" className="key_y2"></Key>
				</div>
			</div>

			<div class="row row_6">
				<div class="col">
					<Key keyName="0" className="key_x2"></Key>
					<Key keyName="."></Key>
				</div>
			</div>
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
			
		},
		components: {
			'Key': require('../component/key.vue')
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