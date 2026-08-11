import express from "express";
import { configDotenv } from "dotenv";
configDotenv()

const app = express ()

app.get('/user', (req, res)=>{
    res.status(200).json({
        status : true,
        message : "users fetch successfully"
    })
})

app.post('/auth/login', (req, res)=>{
    res.status(200).json({
        status : true,
        message : "users Login successfully"
    })
})

app.post('/auth/signup', (req, res)=>{
    res.status(200).json({
        status : true,
        message : "users signup successfully"
    })
})

app.get('/health', (req, res)=>{
    res.status(200).json({
        status : true,
        message : "health api runing successfully"
    })
})

app.listen(process.env.PORT , ()=>{
    console.log(`Server is running on port no ${process.env.PORT}`)
})

