const User = require("../models/usersModels")
const Response = require("./response")

const signupController = async (req , res)=>{
    try {
        const {email , name , password} = req.body
        if(!email || !name || !password ){
            return Response(false , 400 , "Please fill the required fields", req.body, res)
        } 
         await User.create(req.body)
         Response(true , 200 , "User Signup Successfully" ,[], res)
        
    } catch (error) {
        return Response(false , 400 , error.message , [] , res)
    }
}
const loginController = async (req , res)=>{}

module.exports = {signupController , loginController}