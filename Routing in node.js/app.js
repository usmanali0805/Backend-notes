const fs = require('fs');
const server = require('http');
const url = require('url');

// const myServer =  server.createServer((req , res) => {
//   res.end('Hello this is routing class')
// })

const myServer =  server.createServer((req , res) => {
  console.log(req.url ,"====> Req.url")
  if(req.url ==='/'){
    res.end ('Dukaan khuli hoi hy ap ko kya chahiye')
  } else if(req.url ==='/dahibarry'){
    res.end('Ya lo apka dahibarry')
  } else if(req.url ==='/samosa'){
    res.end('Ya lo apka samosa')
  } else if(req.url ==='/chickenroll'){
    res.end('Ya lo apka chickenroll')
  } else{
    res.end('Sorry ya meri shop mein nhi hy :(')
  }

  if(req.url ==='/home'){
    res.end('home page')
  } else if(req.url ==='/about'){
    res.end('about page')
  }
})



myServer.listen(8000 , "127.0.0.1" , () => {
  console.log('Server is running on http://127.0.0.1:8000');
});