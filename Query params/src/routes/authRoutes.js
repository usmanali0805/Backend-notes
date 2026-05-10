const express = require('express');
const authroute = express.Router();
const {signupController , loginController} = require('../controllers/authController')

authroute.post('/signup', signupController)
authroute.post('/signup', loginController)

module.exports = authroute