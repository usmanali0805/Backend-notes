import express from 'express'
import helmet from 'helmet'

const app = express()

app.use(express.json())

// Helmet is use for backend security . its hide content-type , used technology etc
app.use(helmet())

app.get('/', (req , res)=>{
    res.status(200).json({
        status:true,
        message :"this is homepage:)"
    })
})

app.post('/check-inspector' , (req , res)=>{
    res.status(200).json({
        status:true,
        message :"this is inspector page ;)"
    })
})

app.listen('5000', ()=>{
    console.log('Server is running on port no 5000')
})