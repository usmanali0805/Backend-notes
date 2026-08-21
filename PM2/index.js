import express from 'express';
import cluster from 'cluster';
import os from 'os';

const app = express();

app.get('/route', (req, res) => {
    console.log('route api....'+process.pid)
    res.send(`Route handled by process ${process.pid}`);
});


// app.get('/block',(req , res)=>{
//     console.log('block api......' + process.pid)
//     const start = Date.now()

//     while(Date.now() - start < 10000){}
//     console.log('Finished'+ process.pid)
// })

app.get('/block', (req, res) => {
    console.log('block api......' + process.pid)
    const start = Date.now()

    setTimeout(() => {
        console.log('Finished ' + process.pid + ' in ' + (Date.now() - start) + 'ms')
        res.json({ pid: process.pid, time: Date.now() - start })
    }, 10000)
})

app.get('/timer', (req, res) => {
        console.log('timer api....'+process.pid)
    setTimeout(() => {
        res.send(`Timer completed by process ${process.pid}`);
    }, 9000);
});


app.get("/crash", (req, res) => {
  res.json({
    message: "The application will crash after one second",
  });

  setTimeout(() => {
    throw new Error("Intentional classroom crash");
  }, 1000);
});

app.listen(3000, () => {
    console.log(`Worker ${process.pid} is listening on port 3000`);
});