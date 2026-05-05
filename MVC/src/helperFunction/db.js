const mongoose = require('mongoose')
const ConnectDB = async ()=>{
    try {
        console.log("process.env.MONGO_URI" ,process.env.MONGO_URI )
        const con = await mongoose.connect(process.env.MONGO_URI)
        console.log(`MongoBD connected: ${con.connection.host}`)
    } catch (error) {
        console.log(error)
    }
}

module.exports= ConnectDB