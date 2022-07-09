const router = require('express').Router()
const controllerkeranjang = require('../controller/keranjangController')


router.post('/input-keranjang',(req, res) => {
  controllerkeranjang.inputkeranjang(req.body)
    .then((result) => res.json(result))
    .catch((err) => res.json(err))
})
router.get('/getAll-keranjang/:idUser',(req, res) => {
    controllerkeranjang.getAllkeranjang(req.params.idUser)
      .then((result) => res.json(result))
      .catch((err) => res.json(err))
  })
  router.get('/getAll-keranjangByid/:id',(req, res) => {
    controllerkeranjang.getAllkeranjangByid(req.params.id)
      .then((result) => res.json(result))
      .catch((err) => res.json(err))
  })
  router.put('/updateKeranjang/:id',(req, res) => {
    controllerkeranjang.updateKeranjang(req.params.id, req.body)
      .then((result) => res.json(result))
      .catch((err) => res.json(err))
  })
  router.delete('/deleteKeranjang/:id',(req, res) => {
    controllerkeranjang.deleteKeranjang(req.params.id)
      .then((result) => res.json(result))
      .catch((err) => res.json(err))
  })
module.exports = router