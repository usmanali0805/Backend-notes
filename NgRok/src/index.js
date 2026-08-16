import express from 'express'
import UserRoutes from './routes/UserRoutes.js'
import AuthRoutes from './routes/AuthRoutes.js'
import dotenv from 'dotenv'
import connectDB from './controller/db.js'
import dns from 'dns'
import ngrok from '@ngrok/ngrok'
dns.setServers(['1.1.1.1', '8.8.8.8']);
dotenv.config()

const app = express()

// startTunnel(process.env.PORT)
app.use(express.json())
connectDB()


const Listener = await ngrok.forward({
    addr: 3000,
    authtoken :process.env.NGROK_AUTHTOKEN,
});
console.log(Listener.url())


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