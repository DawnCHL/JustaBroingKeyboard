const indexView = require('./view/index/index.vue')

module.exports =  [
	{	path: '/',
		component: indexView,
		name: 'index'
	},
	{
		path: '/index',
		component: indexView,
		name: 'index'
	}
]