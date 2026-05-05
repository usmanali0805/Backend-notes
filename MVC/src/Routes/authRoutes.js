const express = require('express')
const responseHandler = require('../helperFunction/responseHandler')

const authRoute = express.Router()

// SignUp //AddUser
authRoute.post('/signup', (req, res)=>{
    responseHandler(200 , true , "User Signup Successfully" , [] , res)
})

// Login
authRoute.post('/login', (req , res)=>{
    responseHandler(200 , true , "User Login Successfully" , [] , res)

})


module.exports = authRoute