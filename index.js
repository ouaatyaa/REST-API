require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const productrouter = require('./routes/productsRouter')

app.use(express.json())    // middware tres important pour lire Object > json

//connect to DB
mongoose.
connect(process.env.MONGODB_URI)
.then(()=>{ 
    console.log('Connected to DB') 
   // app Listen
    app.listen(process.env.PORT, ()=>{ console.log('Node application listinnig')})
 }).catch((err)=>{ console.log(err)})


// app routes
app.use("/api/products",productrouter)



app.get("/",(req,res)=>{
    res.send('this is res.send')
    //console.log(req.params)
})


