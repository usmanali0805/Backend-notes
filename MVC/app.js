const express  = require('express');
const ConnectDB = require('./src/helperFunction/db')
const authenticationRoute = require('./src/Routes/authRoutes')
const userRoute = require('./src/Routes/userRoutes')
require('dotenv').config()
const app = express();

// Middleware
app.use(express.static('public'));
app.use('/api/auth', authenticationRoute)
// app.use('api/auth', userRoute)

console.log(process.env.PORT)
ConnectDB()

app.get('/health', (req, res)=>{
    res.status(200).json({
        status:true,
        message: "server is working fine"
    })
})

app.listen(process.env.PORT , (req , res)=>{
    console.log(`Server is running on ${process.env.PORT} port`)
})
