var Vue = require("vue");
var VueRouter = require("vue-router");
var fastclick = require("fastclick")

Vue.use(VueRouter);
var routes = require("./route");

var router = new VueRouter({
	routes: routes
});

var app = require("./app.vue");

require('../css/iconfont/iconfont.css')
require('../css/main.css')
// require('../css/tomorrow-night-eighties.css')
// require('../css/dark.css')

new fastclick(document.body)

new Vue({
	router: router,
	el: "#main",
	render: function (h) {
		return h(app)
	}
})