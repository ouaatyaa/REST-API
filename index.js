const express = require('express')
const app = express()

// app routes
app.get("/",(req,res)=>{
    res.send('this is res.send')
})

// app Listen

app.listen('3000', ()=>{
    console.log('Node APP listinnig')
})