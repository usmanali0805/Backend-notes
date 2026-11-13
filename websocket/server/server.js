import express from 'express'
import{WebSocketServer} from 'ws'

const app = express()
const PORT = 8000

const server =  app.listen(PORT , ()=>{
    console.log('server is running on port no ' + PORT)
})

const wss = new WebSocketServer({server})

wss.on("connection",(ws)=>{
    ws.on("message" , (data)=>{
        console.log(`data from client %s:${data}`);
        ws.send("thanks buddy!")
    })
})