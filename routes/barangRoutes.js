const router = require('express').Router()
const controlerBarang = require('../controller/barangController')

router.post('/input', (req, res) =>{
    controlerBarang.InputBarang(req.body)
      .then((result) => res.json(result))
      .catch((err) => res.json(err))
})
router.get('/get-data', (req, res) =>{
  controlerBarang.getAllBarang()
    .then((result) => res.json(result))
    .catch((err) => res.json(err))
})
router.get('/get-dataByid/:id', (req, res) => {
  controlerBarang.getBarangById(req.params.id)
  .then((result)=>{
      res.json(result)
  }).catch(err => {
      res.json(err)
  })
})
router.put('/update-data/:id', (req, res) => {
  controlerBarang.updateDataBarang(req.params.id, req.body)
  .then((result)=>{
      res.json(result)
  }).catch(err => {
      res.json(err)
  })
})
router.delete('/delete-data/:id', (req, res) => {
  controlerBarang.deleteData(req.params.id)
  .then((result)=>{
      res.json(result)
  }).catch(err => {
      res.json(err)
  })
})

 

module.exports = router