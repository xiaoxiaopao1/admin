var app = require('koa')();
var router = require('koa-router')();

// 页面通用List
var list = require('./list/list.js');
router.get('/api/list',function *(next){
	this.body = list
})

// 开始服务并生成路由
app.use(router.routes())
   .use(router.allowedMethods());
app.listen(3000);
