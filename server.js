require('dotenv').config()
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connectDB = require("./config/db");

connectDB()

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.json({ message: "Welcome to my application" });
});

let users = [];
let lastid = 0;

app.post("/users", (req, res) => {
  const user = req.body;
  user.id = ++lastid;
  users.push(user);
  res.json(user);
});

app.get("/users", (req, res) => {
  res.json(users);
});

app.get("/users/:id", (req, res) => {
  const id = req.params.id;
  const user = users.find((u) => u.id == id);
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ messeage: "users not found." });
  }
  console.log(req);
  res.json(users);
});

app.put("/users/:id", (req, res) => {
  const id = parseInt(req.params.id)
  const userUpdate = req.body
  const userIndex = users.findIndex((u) => u.id == id)

  if (userIndex !== -1) {
    let user = users[userIndex];//users(1) ekhane 2 number element nicchi,1 index
    user = { ...user, ...userUpdate }
    res.json(user)
  } else {
    res.status(404).json({ messeage: "users not found." })
  }
})

app.delete('/users/:id', (req,res) => {
    const id =parseInt(req.params.id)
    const userIndex = users.findIndex((u) => u.id === id)

    if(userIndex !== -1) {
        users.splice(userIndex, 1)
        res.json({message: "useer is deleted"})
    }else {
    const userIndex = users.findIndex((u) => u.id === id)

    }
})

const port = 3002;
app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});
