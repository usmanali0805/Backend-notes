const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let Users = [];

app.get('/api/v1/users', (req, res) => {
  res.json({
    "status": true,
    "Message": "All Users data",
    "data": Users
  });
});

app.get('/api/v1/users/:username', (req, res) => {
  const { username } = req.params;
  res.json({
    status: true,
    Message: "User data",
    data: Users.filter((user) => user.name == username)
  })
});

app.put('/api/v1/users/:username', (req, res) => {
  const { username } = req.params;
  Users = Users.map((user) => {
    if (user.name == username) {
      return req.body
    }
    return user
  })

  res.json({
    status : true,
    User :"User Updated successfully"
  })

});

app.delete('/api/v1/users/:username', (req, res) => {
  const { username } = req.params

  Users = Users.filter((user) => user.name != username)

  res.json({
    status : true,
    message :"User deleted successfully"
  })
})




app.post('/api/v1/users', (req, res) => {
  const data = req.body;
  Users.push(data);
  res.json({
    "Message": "User created successfully",
    "user": data
  })
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
