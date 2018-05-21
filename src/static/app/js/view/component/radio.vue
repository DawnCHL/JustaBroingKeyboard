<style>
.D-radio {
	display: inline-block;
	text-align: center;
	margin: 0 10px;    
	color: #1f2d3d;
  position: relative;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
}
.D-radio .orginalRadio {
	opacity: 0;
  outline: none;
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 0;
}
.D-radio .D-radio-input{
	white-space: nowrap;
  cursor: pointer;
  outline: none;
  display: inline-block;
  line-height: 1;
  position: relative;
  vertical-align: middle;
}
.D-radio-input.is-checked .D-radio-inner {
	border-color: #ffc81f;
	background: #ffc81f;
}
.D-radio-inner {
  border: 1px solid #bfcbd9;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background-color: #fff;
  position: relative;
  cursor: pointer;
  display: inline-block;
  box-sizing: border-box;
}
.D-radio-inner::after {
	content: "";
	width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: #fff;
  position: absolute;
  left: 33%;
  top: 33%;
}
</style>

<template>
  <div class="D-radio">
    <span class="D-radio-input is-checked" @click="changeCheck">
			<span class="D-radio-inner"></span>
    	<input type="radio" :name="Dname" class="orginalRadio" :value="Dval" ></input>
    </span>
    <slot></slot>
  </div>
</template>

<script>
	module.exports = {
		data: function () {
			return {
				Dname: "",
				Dval: "",
				isChecked: false,
				check: false
			}
		},
		props:['name','val','checked'],
		created: function () {
			this.Dname = this.$props.name;
			this.Dval = this.$props.val;
			this.check = this.$props.checked;
		},
		mounted: function () {
			
		},
		methods: {
			changeCheck:function () {
				console.log(123)
			}
		}
	}
</script>

