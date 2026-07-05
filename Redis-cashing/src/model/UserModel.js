import mongoose from "mongoose";
const UserSchemea = new mongoose.Schema({
    name :{
        require :true, 
        type : String
    },
    email:{
        type : String ,
        require : true , 
        unique :true
    },
    password:{
        type : String ,
        require : true,
        minLength : 6
    },
    age:{
        type: Number
    }
})

const newuser =  mongoose.model('guest' , UserSchemea)
export default newuser;