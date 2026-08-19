import express from 'express'
import helmet from 'helmet'
import mongoSanitize from "express-mongo-sanitize";
import { xss } from 'express-xss-sanitizer';

const app = express()

app.use(express.json())

// Helmet is use for backend security . its hide content-type , used technology etc
app.use(helmet())

// Cross-Site Scripting (XSS) is a severe web security vulnerability that allows an attacker to inject malicious client-side scripts (usually JavaScript) into trusted websites. When an unsuspecting user visits the compromised page, their browser executes the script automatically. This happens because the web application accepts user input and displays it on the page without proper validation or encoding.
app.use(xss())

// mongoSanitize is a security tool (middleware) used in Node.js applications to prevent NoSQL Injection attacks by automatically removing forbidden characters from user inputs.
app.use(mongoSanitize())     //e.g = $ in mongo queries

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

app.post("/inspect-input", (req, res) => {
  res.json({
    receivedData: req.body,
  });
});

app.listen('5000', ()=>{
    console.log('Server is running on port no 5000')
})