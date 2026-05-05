const { model } = require("mongoose")

const responseHandler = (statusCode , status , message , data , res)=>{
    return res.status(statusCode).json({
        status : status ,
        message : message , 
        data : data
    })
}

module.exports = responseHandler