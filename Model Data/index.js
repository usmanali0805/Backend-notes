const express = require("express")
const app = express()

const PORT = 8000

app.get('/user', (req, res) => {
  res.status(200).json({
    status : true,
    message : "Users fetch"
  })
})

app.listen(PORT , (req , res)=>{
    console.log(`Server is running on port no ${PORT}`)
})