//引入第三方包
(async() => {
    const express = require('express')
    const routers = require('./routers/logiluters')
    const cors = require('cors')
    await require('./db/db')
    console.log('数据库连接成功');
    const app = express()
        //将请求头设置在请求体里面拿到post数据
    app.use(express.urlencoded({ extended: true }))
        //跨域中间件
    app.use(cors())
        //代表所有的路由
    app.use(routers)
    app.listen(5000, (error) => {
        if (error) console.log('开启服务器失败', error);
        else console.log('开启服务器成功');
    });
})()