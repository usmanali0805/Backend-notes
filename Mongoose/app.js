const express = require('express');
const mongoose = require('mongoose');
const Users = require('./models/UserSchema');
const app = express();

app.use(express.json());

const PORT = 8000;

mongoose.connect('mongodb+srv://usmanali08052005_db_user:usmanali08052005_db_user@cluster0.wbuwndt.mongodb.net/')
    .then(() => console.log('Connected!'));


app.get('/heath', (req, res) => {
    res.send('Server is running on health');
});

app.post('/users', async (req, res) => { 
    try {
        const small = new Users(req.body);
        await small.save();
        res.send({
            status : true,
            msg: "User Connected successfully"
        });
    } catch (error) {
        res.send({
            status : false,
            msg: error.message
        })
    }
});

app.get('/users',async (req , res)=>{
    const data = await Users.find();
    res.send({
        status : true,
        message : "Users data fetched successfully",
        data : data
    })  
})

app.get('/users/:name',async (req , res)=>{
    const data = await Users.find({name: req.params.name});
    res.send({
        status : true,
        message : "Users data fetched successfully",
        data : data
    })  
})



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
