const mongoose = require('mongoose')

const usersSchema = mongoose.Schema({
    email: String,
    password: String,
})

const User = mongoose.model('users', usersSchema);
module.exports = User