var app = require('koa')();
var router = require('koa-router')();

// 页面通用List


// 开始服务并生成路由
app.use(router.routes())
   .use(router.allowedMethods());
app.listen(3000);
