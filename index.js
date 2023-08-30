require('dotenv').config()
const express = require('express')
require('colors');
const app = express()
const connectDB = require('./config/connectDB')
const productrouter = require('./routes/productsRouter')
var bodyParser = require('body-parser')
const port = process.env.PORT || 5000

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

//connect to DB
connectDB()

// app routes
app.use("/api/products",productrouter)
app.use("/api/users",require('./routes/userRouter'))

// app Listen
app.listen(port, ()=>{ console.log(`Application is UP and Listennig to : ${port}`)})

