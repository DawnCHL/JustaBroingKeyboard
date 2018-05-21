<style style lang="less">
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
  @pale: #ece6dc;
  .pale{
    &::before{
    content: '';
    background-color: @pale;
		border-radius: 2px;
		display: inline-block;
		width: calc(~"100% - 12px");
    height: 80%;
    text-align: center;
		position: absolute;
		top: 5%;
		right: 6px;
		box-shadow:0 0 1px 1px rgba(255,255,255,0.4);
  }}
  .red{
    background-color: @red !important;
    span{
      color: rgba(255,255,255,0.6) !important;
    }
    &::before{
      content: '';
      background-color: @red;
		  border-radius: 2px;
		  display: inline-block;
		  width: calc(~"100% - 12px");
      height: 80%;
      text-align: center;
		  position: absolute;
		  top: 5%;
		  right: 6px;
      box-shadow:0 0 1px 1px rgba(255,255,255,0.4);
    }
  }
  .gary{
    span{
      color: rgba(255,255,255,0.7) !important;
    }
    &::before{
    content: '';
    background-color: @gary;
		border-radius: 2px;
		display: inline-block;
		width: calc(~"100% - 12px");
    height: 80%;
    text-align: center;
		position: absolute;
		top: 5%;
		right: 6px;
		box-shadow:0 0 1px 1px rgba(255,255,255,0.4);}
  }
  .key{
		width: @keyLen;
		height: @keyLen;
		display: inline-block;
		vertical-align:top;
		border: 1px solid;
		border-radius: 2px;
		background-color: #5c5b60;
    position: relative;
		span {
			color: black;
      font-size: 10px;
      font-weight: bold;
      position: absolute;
      width: 100%;
      height: 80%;
      line-height: 100%;
      top: 30%;
      text-align: center;
    }
	}
</style>

<template>

	<div :class="`${className} key ${keyColor}`">
    <span>{{key}}</span>
  </div>

</template>

<script>
	module.exports = {
		data: function () {
			return {
				key: ""
			}
		},
		props:['keyName','className','keyColor'],
		created: function () {
			this.key = this.$props.keyName;
      this.className = this.$props.className || '';
      this.keyColor = this.$props.keyColor || 'pale';
    },
		mounted: function () {
			
		},
		methods: {
			
		}
	}
</script>