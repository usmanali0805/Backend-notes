const express = require('express')
const {successresponse , errorresponse} = require('../helperFunction/responseHandler')
const User = require('../models/UserSchema')
const SignupController = require('../Controller/authController')

const app = express()
const authRoute = express.Router()

// SignUp //AddUser
app.use('/signup' , SignupController)
// Login
authRoute.post('/login', (req, res) => {
    return successresponse(200, true, "User Login Successfully", [], res)

})


module.exports = authRoute