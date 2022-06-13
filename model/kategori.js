const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserModel = new Schema({
    namaKategori: {
        type: String
    },
    keterangan:{
        type: String
    }
})
module.exports = mongoose.model('kategori', UserModel)