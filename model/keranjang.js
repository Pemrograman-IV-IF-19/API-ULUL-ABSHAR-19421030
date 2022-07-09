const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = mongoose.Types.ObjectId

const keranjangSchema = new Schema({
    idUser: {
        type: ObjectId
    },
    idBarang: {
        type: ObjectId
    },
    jumlahBeli: {
        type: Number
    }
})
module.exports = mongoose.model('keranjang', keranjangSchema)