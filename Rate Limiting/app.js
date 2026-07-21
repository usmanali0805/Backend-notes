import express from 'express'
import dotenv from 'dotenv'
import { rateLimit, MINUTE } from 'express-rate-limit'

dotenv.config()

const limiter = function (minuts, limit) {
    return rateLimit({
        windowMs: minuts * 1 * MINUTE,
        limit: 1 * limit,
        // standardHeaders: 'draft-8',
        // legacyHeaders: false,
        // ipv6Subnet: 56,
        // store: ... , // Redis, Memcached, etc. See below.
    })
}

const app = express()

// if we want to use rate limiter on all apis so we use limiter in middleware
// app.use(limiter)

app.get('/user', limiter(1, 3), (req, res) => {
    res.status(200).json({
        "status": 200,
        "message": "User fetch successfully"
    })
})
// or if we want use limiter on specific api so we can use this limiter in api like this
app.get('/auth', limiter(1, 5), (req, res) => {
    res.status(200).json({
        "status": 200,
        "message": "User SignIn Successfully"
    })
})


app.listen(process.env.PORT, () => {
    console.log('server is running on port no ' + process.env.PORT)
})