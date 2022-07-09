const modelBarang = require('../model/barang')
const mongoose = require('mongoose')
const { promise, reject } = require('bcrypt/promises')
const ObjectId = mongoose.Types.ObjectId


exports.InputBarang = (data) =>
    new Promise(async (resolve, reject) => {
        await modelBarang.create(data)
            .then(() => {
                resolve({
                    status: true,
                    msg: 'Berhasil membuat Barang'
                })
            }).catch(err => {
                reject({
                    status: false,
                    msg: 'Terjadi esalahan Pada Server'
                })
            })
    })

exports.getAllBarang = () =>
    new Promise(async (resolve, reject) => {
        modelBarang.aggregate([
            {
                $lookup:
                {
                    from: "kategoris",
                    localField: "idKategori",
                    foreignField: "_id",
                    as: "KategoriBarang"
                }
            },
            {
                $unwind: "$KategoriBarang"
            }
        ])
            .then(databarang => {
                if (databarang.length > 0) {
                    resolve({
                        status: true,
                        msg: 'Berhasil memuat Data',
                        data: databarang
                    })
                } else {
                    reject({
                        status: false,
                        msg: 'Tidak Ada Data'
                    })
                }
            }).catch(err => {
                reject({
                    status: false,
                    msg: 'Server terjdi masalh'
                })
            })
    })
exports.getBarangById = (id) =>
    new Promise(async (resolve, reject) => {
        modelBarang.aggregate([
            { $match: { _id: ObjectId(id) } },
            {
                $lookup:
                {
                    from: "kategoris",
                    localField: "idKategori",
                    foreignField: "_id",
                    as: "KategoriBarang"
                }
            },
            {
                $unwind: "$KategoriBarang"
            }
        ]).then(dataBarang => {
                if (dataBarang) {
                    resolve({
                        status: true,
                        msg: 'Berhasil memuat data',
                        data: dataBarang
                    })
                } else {
                    reject({
                        status: false,
                        msg: 'Tidak ada data barang'
                    })
                }
            }).catch(err => {
                reject({
                    status: false,
                    msg: 'Terjadi kesalahan pada server'
                })
            })
    })
exports.updateDataBarang = (id, data) =>
    new Promise(async (resolve, reject) => {
        modelBarang.updateOne({ _id: ObjectId(id) }, data)
            .then(() => {
                resolve({
                    status: true,
                    msg: 'Berhasil merubah data'
                })
            }).catch(err => {
                reject({
                    status: false,
                    msg: 'Terjadi kesalahan pada server'
                })
            })
    })

    exports.updateGambar = (id, gambar) =>
    new Promise(async (resolve, reject) => {
        modelBarang.updateOne({ _id: ObjectId(id) }, {$set: {gambar: gambar}})
            .then(() => {
                resolve({
                    status: true,
                    msg: 'Berhasil merubah data'
                })
            }).catch(err => {
                reject({
                    status: false,
                    msg: 'Terjadi kesalahan pada server'
                })
            })
    })

exports.deleteData = (id) =>
    new Promise(async (resolve, reject) => {
        modelBarang.deleteOne({ _id: ObjectId(id) })
            .then(() => {
                resolve({
                    status: true,
                    msg: 'Berhasil Mengpusdata data'
                })
            }).catch(err => {
                reject({
                    status: false,
                    msg: 'Terjadi kesalahan pada server'
                })
            })
    })
