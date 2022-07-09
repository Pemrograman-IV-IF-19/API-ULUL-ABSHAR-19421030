const router = require('express').Router()
const controlerBarang = require('../controller/barangController')
const UtilsApps = require('../utils/utils_apps')
const multer = require('multer')
const uploadFile = multer({
  storage: UtilsApps.uploadFile
}).single("gambar")

router.post('/input', uploadFile, (req, res) => {
  if (req.file === undefined) {
    res.json({
      status: false,
      msg: 'File Tidak Boleh Kosong'
    })
  } else {
    Object.assign(req.body, {
      gambar: req.file.filename
    })
  }
  controlerBarang.InputBarang(req.body)
    .then((result) => res.json(result))
    .catch((err) => res.json(err))
})
router.get('/get-data', (req, res) => {
  controlerBarang.getAllBarang()
    .then((result) => res.json(result))
    .catch((err) => res.json(err))
})
router.get('/get-dataByid/:id', (req, res) => {
  controlerBarang.getBarangById(req.params.id)
    .then((result) => {
      res.json(result)
    }).catch(err => {
      res.json(err)
    })
})
router.put('/update-data/:id', (req, res) => {
  controlerBarang.updateDataBarang(req.params.id, req.body)
    .then((result) => {
      res.json(result)
    }).catch(err => {
      res.json(err)
    })
})

router.put('/update-gambar/:id', uploadFile, (req, res) => {
  if (req.file === undefined) {
    res.json({
      status: false,
      msg: 'File Tidak Boleh Kosong'
    })
  } else {
    req.body.gambar = req.file.filename
  }
  controlerBarang.updateGambar(req.params.id, req.body.gambar)
    .then((result) => {
      res.json(result)
    }).catch(err => {
      res.json(err)
    })
})

router.delete('/delete-data/:id', (req, res) => {
  controlerBarang.deleteData(req.params.id)
    .then((result) => {
      res.json(result)
    }).catch(err => {
      res.json(err)
    })
})



module.exports = router