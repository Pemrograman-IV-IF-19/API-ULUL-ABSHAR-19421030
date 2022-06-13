const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserModel = new Schema({
    namaLengkap: {
        type: String
    },
    username: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String 
    },
    role: {
        type: String
    }
})
module.exports = mongoose.model('users', UserModel)