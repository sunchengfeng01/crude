const mongoose = require('mongoose')
module.exports = mongoose.connect('mongodb://127.0.0.1/0223', { useNewUrlParser: true, useUnifiedTopology: true })