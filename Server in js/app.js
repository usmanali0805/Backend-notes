const fs = require('fs');
const http = require('http')
const server = http.createServer((req , res) => {
  res.end('Hello World');
})

server.listen("3000","127.0.0.1",(rea, res) => {
  console.log("listening the port on port 3000")
}
)