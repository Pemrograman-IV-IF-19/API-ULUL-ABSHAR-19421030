const { promise, reject } = require('bcrypt/promises')
const { request } = require('express')
const modelKategori = require('../model/kategori')
const mongoose = require('mongoose')
const ObjectId = mongoose.Types.ObjectId

exports.inputKategori = (data) =>
    new Promise(async (resolve, reject) => {
        await modelKategori.create(data)
            .then(() => {
                resolve({
                    status: true,
                    msg: 'Berhasil membuat Kaegori'
                })
            }).catch(err => {
                reject({
                    status: false,
                    msg: 'Terjadi esalahan Pada Server'
                })
            })
    })

exports.getAllkategori = () =>
    new Promise(async (resolve, reject) => {
        modelKategori.find({})
            .then(dataKategori => {
                if (dataKategori.length > 0) {
                    resolve({
                        status: true,
                        msg: 'Berhasil memuat data',
                        data: dataKategori
                    })
                } else {
                    reject({
                        status: false,
                        msg: 'Tidak ada kategori'
                    })
                }
            }).catch(err => {
                reject({
                    status: false,
                    msg: 'Terjadi Kesalahan Pada server'
                })
            })


    })

exports.getAllkategoriByname = (name) =>
    new Promise(async (resolve, reject) => {
        modelKategori.findOne({ namaKategori: name })
            .then(dataKategori => {
                if (dataKategori) {
                    resolve({
                        status: true,
                        msg: 'Berhasil memuat data',
                        data: dataKategori
                    })
                } else {
                    reject({
                        status: false,
                        msg: 'Tidak ada kategori ' + name
                    })
                }
            }).catch(err => {
                reject({
                    status: false,
                    msg: 'Terjadi Kesalahan Pada server'
                })
            })


    })


exports.updateKategori = (id, data) =>
    new Promise(async (resolve, reject) => {
        modelKategori.updateOne({ _id: ObjectId(id) }, data)
            .then(() => {
                resolve({
                    status: true,
                    msg: 'Berhasil merubah data '
                })
            }).catch(err => {
                reject({
                    status: false,
                    msg: 'Terjadi kesalahan pada server '
                })
            })
    })

exports.hapusKategori = (id) =>
    new Promise(async (resolve, reject) => {
        modelKategori.deleteOne({ _id: ObjectId(id) })
            .then(() => {
                resolve({
                    status: true,
                    msg: 'Berhasil menghapus data'
                })
            }).catch(err => {
                reject({
                    status: false,
                    msg: 'server tidak merespon'
                })
            })
    })