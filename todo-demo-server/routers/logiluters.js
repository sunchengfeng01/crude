//写路由增删该查具体调用
const express = require('express')
const { findAll, createdb, updateMany, deletMany } = require('../db/crude')
    // 创建一个路由对象，相当于把路由代码放进routers里面
const routers = express.Router()
    //查询数据库所有数据操作
routers.get('/findTodos', async(req, res) => {
        const { callback } = req.query
        let alldb = await findAll()
        alldb = JSON.stringify(alldb)
        res.send(`callback(${ alldb })`)

    })
    // 添加数据
routers.post('/addTodo', async(req, res) => {
        const { todoName } = req.body
            // console.log(todoName);
        await createdb({ todoName })
        res.send(await findAll())
        console.log('添加成功')
    })
    // 修改数据
routers.post('/updateTodos', async(req, res) => {
    let { ids, isDone } = req.body
        // 将接送字符串转对选哪个
    ids = JSON.parse(ids)
    await updateMany(ids, isDone)
    res.send(await findAll())
    console.log('修改数据成功');

})
routers.post('/deletTodo', async(req, res) => {
    let { ids } = req.body
        // 将接送字符串转对选哪个
    ids = JSON.parse(ids)
    await deletMany(ids)
    res.send(await findAll())
    console.log('删除数据成功');

})
module.exports = routers