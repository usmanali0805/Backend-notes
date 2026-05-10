const express = require('express');
const userroute = express.Router();
const {addUserController , getUserController , UpdateUserController , deleteUserController} = require('../controllers/userController')

userroute.post('/user', addUserController)
userroute.get('/user', getUserController)
userroute.put('/user', UpdateUserController)
userroute.delete('/user', deleteUserController)

module.exports = userroute