const User = require("../models/usersModels")
const Response = require("./response")

const signupController = async (req , res)=>{
    const {email , username , password} = req.body
    if(!email || !username || !password ){
        Response(false , 400 , "Please fill the required fields")
    } 
     await User.create(req.body)
    Response(true , 200 , "User Signup Successfully" ,[], res)
}
const loginController = async (req , res)=>{}

module.exports = {signupController , loginController}