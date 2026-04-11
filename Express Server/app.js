const express = require('express');
const app = express();

app.get("/", (req, res) => {
  res.status(200).send(`You arrived ${i} Times`)

}
)

app.listen(5000, (req, res) => {
  console.log("G Hn hameri shop open ho gai hy")
}
)