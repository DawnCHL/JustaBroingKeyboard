const Router = require('koa-router');
const router = new Router();

const hello = require('../controller/testCtrler.js')

router.get('/hello', hello.PrintHello);


module.exports = router