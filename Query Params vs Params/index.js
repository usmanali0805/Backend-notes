const express = require('express');
const app = express()
const PORT = 5000



app.get('/user/:user',(req , res)=>{
    console.log(req.query)
    console.log(req.params.user)
    res.status(200).json({
        status : true,
        message : "user api"
    })
})
app.put('/user',(req , res)=>{
    res.status(200).json({
        status : true,
        message : "user api"
    })
})
app.post('/auth/:state',(req , res)=>{
    res.status(200).json({
        status : true,
        message : req.params.state
    })
})

app.listen(PORT , (req , res)=>{
    console.log('This server is running on port no ' + PORT)
})