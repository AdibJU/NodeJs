const express = require("express");
const app = express();
const bodyParser = require("body-parser");

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

const port = 3002;
app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});
