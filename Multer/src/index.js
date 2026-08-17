import express from "express";
import dotenv from "dotenv"
import multer from "multer";

const app = express()
const upload = multer({ dest: 'uploads/' })

app.use(express.json())

app.get('/user', (req, res) => {
    return res.status(200).json({
        status: true,
        message: "User get"
    })
})

app.post('/profilePicture',upload.single('upload'),(req ,res)=>{
    console.log(req.file)
    if(req.file.mimetype !== 'image/png'){
        return res.status(400).json({
            status :false ,
            message : "Only png images can be uploaded"
        })
    }
    return res.status(200).json("File is uploaded")
})

// app.post('/upload', (req, res) => {
//     return res.status(200).json({
//         status: true,
//         message: "File uploaded success fully"
//     })
// })

app.listen(5000, () => {
    console.log('Server is running on port no ' + 5000)
})