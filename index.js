require('dotenv').config()
const express = require('express')
const colors = require('colors');
const app = express()
const connectDB = require('./config/connectDB')
const productrouter = require('./routes/productsRouter')
var bodyParser = require('body-parser')
const port = process.env.PORT || 5000

//app.use(express.json())    // middware tres important pour lire Object > json

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

//connect to DB
connectDB()

// app routes
app.use("/api/products",productrouter)

app.get("/",(req,res)=>{
    res.send('this is res.send')
    //console.log(req.params)
})



// app Listen
app.listen(port, ()=>{ console.log(`Application is UP and Listinnig to : ${port}`)})

