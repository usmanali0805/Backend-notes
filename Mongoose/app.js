const express = require('express');
const mongoose = require('mongoose');
const Users = require('./models/UserSchema');

const app = express();
const PORT = 8000;

mongoose.connect('mongodb+srv://usmanali08052005_db_user:usmanali08052005_db_user@cluster0.wbuwndt.mongodb.net/')
    .then(() => console.log('Connected!'));


app.get('/heath', (req, res) => {
    res.send('Server is running on health');
});

app.post('/addusers', async (req, res) => { 
    const user = {
        name: "Usman",
        email: "Usman@gmail.com"
    }
    try {
        const small = new Users({
        "name": "Usman",
    });
        await small.save();
        res.send({
            status : true,
            msg: "User Connected successfully"
        });
    } catch (error) {
        console.log(error)
    }


});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
