const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = mongoose.Types.ObjectId

const barangSchema = new Schema({
    namaBarang: {
        type: String
    },
    harga: {
        type: Number
    },
    stok: {
        type: Number
    },
    idKategori: {
        type: ObjectId
    }
})
module.exports = mongoose.model('barang', barangSchema)