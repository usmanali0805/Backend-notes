const express = require('express');
const app = express();

app.use(express.json());

const PORT = '5000';

app.post('/', (req, res) => {
    console.log("Request Body: ", req.body);
    res.send("Data received successfully");
});

app.listen(PORT , ()=>{
    console.log(`Server is running on port ${PORT}`);
})