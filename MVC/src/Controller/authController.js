const express = require('express')
const authRoute = express.Router()
const User = require('../models/UserSchema')
const { errorresponse, successresponse } = require('../helperFunction/responseHandler')

const SignupController = authRoute.post('/signup', async (req, res) => {
    console.log(req.body)
    const {name , email , password } = req.body
    if(!email || !name || !password){
        errorresponse(400 , false , "All field are required" , res)
    }
    if(password.length<8){
        errorresponse(400 , false , "Password should be 8 character length" , res)
    }
    try {
        await User.create({
             name : name , 
             email : email , 
             password : password
         })
         console.log(email , name , password ,"====> details")
         return successresponse(200, true, "User Signup Successfully", req.body, res)
    } catch (error) {
        errorresponse(400 , false , error.message , res)
    }

})

module.exports = SignupController