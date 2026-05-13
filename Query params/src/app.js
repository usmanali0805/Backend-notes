const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes')
const UserRoutes = require('./routes/UserRoutes')
// const {authRoutes}

require('dotenv').config()
const app = express()
app.use(express.json())

async function DBConnection(){
    try {
        await mongoose.connect(process.env.MONGOOSE_URI)
          .then(() => console.log('Connected!'));
 
        
    } catch (error) {
        console.log(error)
    }
} 
DBConnection()

app.use('/api/v1/auth' , authRoutes)
app.use('/api/v1/user' , UserRoutes)

app.get('/health' , (req , res)=>{
    res.send('Server is running on a perfect length')
})

app.listen(process.env.PORT , (req , res)=>{
    console.log(`Server is running on ${process.env.PORT}`)
})