var path = require('path');
const Koa = require('koa');
const Router = require('koa-router');
const router = new Router();
const bodyParser = require('koa-bodyparser');
const config = require('config');
const render = require('koa-views');
const serve = require('koa-static');
const mount = require('koa-mount');


const app = new Koa();

app.use(render(path.join(__dirname, "./src/page"), { default: 'html' }))
	 .use(bodyParser());

//web
router.get('/', async (ctx)=> {
	await ctx.render('index',{
		title: "Dawn Chen"
	})
})


app.use(router.routes());


// static files
app.use(mount('/static',
    serve(path.join( __dirname, config.static_path))
 )).use(mount('/pure',
    serve(path.join( __dirname, config.pure_path))
 ));


 app.listen(config.port, () => {
	console.info(`Listening to http://localhost:${config.port}`);
});