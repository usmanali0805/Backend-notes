import express from 'express'
import { WebSocketServer } from 'ws'
import fs from 'fs/promises'
import path, { dirname } from 'path'
import { fileURLToPath } from 'url'

const app = express()
const PORT = 8000

const __dirname = path.dirname(fileURLToPath(import.meta.url))

app.get('/', async (req, res) => {
    try {

        // const index = await fs.readFile(path.resolve('..//index.html' ), 'utf-8');
        const index = await fs.readFile(path.join(__dirname, '../client/index.html'), 'utf-8');
        res.setHeader('Content-Type', 'text/html')
        return res.end(index)
    } catch (error) {
        res.send(error.message)
    }
})

const server = app.listen(PORT, () => {
    console.log('server is running on port no ' + PORT)
})

const wss = new WebSocketServer({ server: server })

wss.on("connection", (ws) => {
    ws.on("message", (data) => {
        console.log(`data from client %s:${data}`);
        ws.send("thanks buddy!")
    })
})