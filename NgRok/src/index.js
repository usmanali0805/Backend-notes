import express from 'express'
import UserRoutes from './routes/UserRoutes.js'
import AuthRoutes from './routes/AuthRoutes.js'
import dotenv from 'dotenv'
dotenv.config()

const app = express()

app.use('/', UserRoutes)
app.use('/auth' , AuthRoutes)

app.get('/health', (req , res)=>{
    res.status(200).json({
        status: true , 
        message : "Application is running on health api"
    })
})

app.listen(process.env.PORT , ()=>{
    console.log(`Server is running on port no : ${process.env.PORT}`)
})