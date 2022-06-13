const kategoriController = require('../controller/kategoriController')
const router = require('express').Router()

router.post('/input', (req, res) =>{
    kategoriController.inputKategori(req.body)
    .then((result)=>{
        res.json(result)
    }).catch(err => {
        res.json(err)
    })
}) 

router.get('/get-data', (req, res) =>{
    kategoriController.getAllkategori()
    .then((result)=>{
        res.json(result)
    }).catch(err => {
        res.json(err)
    })
}) 

router.get('/get-data/:namaKategori', (req, res) => {
    kategoriController.getAllkategoriByname(req.params.namaKategori)
    .then((result)=>{
        res.json(result)
    }).catch(err => {
        res.json(err)
    })
}) 

router.put('/get-update/:id', (req, res) => {
    kategoriController.updateKategori(req.params.id, req.body)
    .then((result)=>{
        res.json(result)
    }).catch(err => {
        res.json(err)
    })
})

router.delete('/get-dalete/:id', (req, res) => {
    kategoriController.hapusKategori(req.params.id)
    .then((result)=>{
        res.json(result)
    }).catch(err => {
        res.json(err)
    })
}) 
module.exports = router