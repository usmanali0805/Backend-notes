const { model } = require("mongoose")

const successresponse = (statusCode , status , message , data , res)=>{
    return res.status(statusCode).json({
        status : status ,
        message : message , 
        data : data
    })
}

const errorresponse = (statusCode , status , message, res)=>{
    return res.status(statusCode).json({
        status : status ,
        message : message 
    })
}

module.exports = {successresponse , errorresponse}