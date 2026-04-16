const express = require('express');
const app = express();

const PORT = 8000;

app.get('/users', (req , res)=>{
    res.json({
        "status":true,
        "data": {
            "name":"Sufiyan get "
        }
    })
})

// post method is used to create the data. It is used when we want to create a new user. For example, if we want to create a new user with name and age, we can use post method. It will create a new user with the given data.
app.post('/users', (req , res)=>{
    res.json({
        "status":true,
        "data": {
            "name":"Sufiyan post"
        }
    })
})

// put method is used to update the data completely. It is used when we want to update the entire data of the user. For example, if we want to update the name and age of the user, we can use put method. It will update the entire data of the user.

app.put('/users', (req , res)=>{
    res.json({
        "status":true,
        "data": {
            "name":"Sufiyan put"
        }
    })
})

// Patch is used to update the data partially. It is used when we want to update only a part of the data. For example, if we want to update only the name of the user, we can use patch method. It will update only the name of the user and other data will remain unchanged.
app.patch('/users', (req , res)=>{
    res.json({
        "status":true,
        "data": {
            "name":"Sufiyan patch"
        }
    })
})

app.listen(PORT , () =>{
    console.log(`Server is running on port ${PORT}`);
})