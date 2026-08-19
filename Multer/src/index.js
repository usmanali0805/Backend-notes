import express from "express";
import dotenv from "dotenv"
import multer from "multer";
import path from 'path'

const app = express()
// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, "uploads/");
//     },

//     filename: (req, file, cb) => {
//         const date = new Date()
//         const uniqueName =
//             date.getDate() + '-' + date.getMonth() + '-' +
//             Math.round(Math.random() * 1e9) + file.originalname;

//         cb(null, uniqueName);
//     },
// });


const storage = multer.memoryStorage()
const upload = multer({
    storage,
    limits: {
        fileSize: 1 * 1024 * 1024
    }
});

app.use(express.json())


app.get('/user', (req, res) => {
    return res.status(200).json({
        status: true,
        message: "User get"
    })
})

app.post('/profilePicture', upload.single('upload'), (req, res) => {
    const allowedTypes = [
        "image/jpeg",
        "image/png",
        "image/webp",
    ];
    console.log(req.originalname)
    // if(req.files.mimetype !== 'image/png'){
    //     return res.status(400).json({
    //         status :false ,
    //         message : "Only png images can be uploaded"
    //     })
    // }
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