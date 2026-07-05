
import dns from 'dns'
dns.setServers(['1.1.1.1', '8.8.8.8']);
import express from 'express'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import userRouter from './routes/userRoutes.js'
import authRoutes from './routes/authRoutes.js'
import newuser from './model/UserModel.js'
import mongoose from 'mongoose'
import redisClient from './controller/redis.js';
dotenv.config()
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('✅ MongoDB connected successfully via Mongoose');
    } catch (error) {
        console.error('❌ Database connection error:', error.message);
        process.exit(1); // Stop the application if connection fails
    }
};

connectDB()


    await redisClient.connect();
    console.log("Redis Connected");




const app = express()

app.use(express.json())

app.use('/api/v1/users', userRouter)
app.use('/api/v1/auth', authRoutes)


app.listen(process.env.PORT, ()=>{
    console.log(`Server is runing on port no ${process.env.PORT}`)
})

