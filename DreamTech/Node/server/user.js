const express = require("express");
const Router = express.Router();
const bcrypt = require("bcrypt");
const saltRounds = 10;

let dummyUserList = [
  { id: 1, name: "sridhar", email: "sridhar@gmail.com" },
  { id: 2, name: "sarath", email: "sarath@gmail.com" },
  { id: 3, name: "suresh", email: "suresh@gmail.com" },
  { id: 4, name: "sowndhar", email: "sowndhar@gmail.com" },
  { id: 5, name: "srinath", email: "srinath@gmail.com" },
];

Router.get("/userList", (req, res) => {
  res.send({
    status: 1,
    count: dummyUserList.length,
    data: dummyUserList,
  });
});

Router.post("/addUser", (req, res) => {
  console.log("------Body------", req.body);
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res
      .status(400)
      .send({ status: 0, message: "All fields are required." });
  }

  if (name.length < 3) {
    return res
      .status(400)
      .send({ status: 0, message: "Name must be at least 3 characters." });
  }

  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailPattern.test(email)) {
    return res
      .status(400)
      .send({ status: 0, message: "Invalid email format." });
  }

  const existingUser = dummyUserList.find((user) => user.email === email);
  if (existingUser) {
    return res
      .status(400)
      .send({ status: 0, message: "Email already in use." });
  }

  const passwordPattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  if (!passwordPattern.test(password)) {
    return res.status(400).send({
      status: 0,
      message: "Password must follow a strong pattern.",
    });
  }

  const hashedPassword = bcrypt.hashSync(password, saltRounds);

  const newUser = {
    id: dummyUserList.length + 1,
    name,
    email,
    password: hashedPassword,
  };

  dummyUserList.push(newUser);

  res
    .status(201)
    .send({ status: 1, message: "User added successfully", data: newUser });
});

Router.post("/changeUserStatus", (req, res) => {
  res.send({ status: 1, message: "Status changed successfully" });
});

module.exports = Router;
