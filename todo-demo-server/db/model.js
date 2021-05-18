const mongoose = require('mongoose')
const { Schema } = mongoose

const userschema = new Schema({
    todoName: {
        type: String,
        unquire: true,
        require: true,
    },
    isDone: {
        type: String,
        default: true,
        default: false
    }
})
module.exports = mongoose.model('scf', userschema)