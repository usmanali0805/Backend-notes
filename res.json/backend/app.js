const express = require('express');
const app = express();
var cors = require('cors')

const PORT = 5000;
app.use(cors())

app.get('/',(req , res)=>{
    res.json({
        "status": true,
        "title": "chooly",
        "Price":1000
    })
})

app.post('/',(req , res)=>{
    console.log(req)
})

app.listen(PORT, (req , res)=>{
    console.log("Server is running....")
})