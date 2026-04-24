const express = require('express');
const app = express();
const PORT = 7000;

app.use(express.json());

// Middleware is a function that has access to the request and response objects, and the next function in the application's request-response cycle. It can execute any code, make changes to the request and response objects, end the request-response cycle, or call the next middleware function in the stack.
app.use((req , res , next) => {
   console.log('Middleware is running...')
   req.requiredTime = new Date();
   next();
})

app.get('/users', (req, res) => {
    res.json({
        status: true,
        message: 'Users fetched successfully',
        data: {
            users: {
                name: 'UsmanDev',
                email: 'usman@gmail.com'
            },
            time :req.requiredTime,
        }
});

})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});