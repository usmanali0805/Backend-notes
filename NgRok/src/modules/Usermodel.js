import mongoose from 'mongoose'

const Userschema = new mongoose.Schema({
    firstname: {
        require: true,
        type: String
    },
    lastname: {
        require: true,
        type: String

    },
    username: {
        require: true,
        unique: true,
        type: String

    },
    email: {
        require: true,
        unique: true,
        type: String

    },
    password :{
        type : String,
         require :true
    },
    age: {
        type: Number,
        require: true
    }

})

const User  = mongoose.model('Users', Userschema )
export default User