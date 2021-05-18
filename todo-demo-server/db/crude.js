const model = require('../db/model')
    //查询数据库具体逻辑
    //数据库查找功能
function findAll() {
    return model.find()
}

//数据库添加操作
function createdb(d) {
    return model.create(d)
}
//修改数据库操作
function updateMany(ids, isDone) {
    // 因为调用了updateMany方法，所以ids，是josns.tringify后的数组["fa","fa"]

    //查询条件，修改的数据
    return model.updateMany({ _id: { $in: ids } }, { $set: { isDone } })
}

function deletMany(ids) {
    //删除数据
    return model.remove({ _id: { $in: ids } })
}
module.exports.findAll = findAll
module.exports.createdb = createdb
module.exports.updateMany = updateMany
module.exports.deletMany = deletMany