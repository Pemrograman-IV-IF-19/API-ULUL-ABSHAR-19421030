const express = require('express')
const app = express()
const port = 8080
const mongoose = require('mongoose')
const dbConfig = require('./config/DbConfig')
const bCrypt = require('bcrypt')


app.use(express.json())
app.use(express.urlencoded({ extended: true }))

mongoose.connect(dbConfig.mongoUrl, {
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(() => {
    console.log("Connect mongodb")
}).catch(() => {
    console.log(err)
})

app.get("/", (req, res) => {
    res.json({
        msg: "selamat Datang Di API"
    })
})

app.use('/users', require('./routes/userRoutes'))
app.use('/kategori', require('./routes/kategoriRoutes'))
app.use('/barang', require('./routes/barangRoutes'))
app.use('/keranjang', require('./routes/KeranjangRoutes'))
app.use("/transaksi", require("./routes/transaksiRoutes"));



app.listen(port, () => {
    console.log("Server Berjalan Di Port " + port)
})