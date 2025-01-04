const express = require("express");
const Router = express.Router();
const bcrypt = require("bcrypt");
const EmployeeModel = require("./employeeschema");
const saltRounds = 10;

Router.get("/userlist", async (req, res) => {
  let userList = await EmployeeModel.find({});
  res.send({
    status: 1,
    count: userList.length,
    data: userList,
  });
});

Router.post("/adduser", async (req, res) => {
  console.log("------Request Body------", req.body);
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

  const passwordPattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  if (!passwordPattern.test(password)) {
    return res.status(400).send({
      status: 0,
      message:
        "Password must follow a strong pattern (min. 8 chars, 1 uppercase, 1 lowercase, 1 special char, 1 number).",
    });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const existingUser = await EmployeeModel.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .send({ status: 0, message: "Email already exists." });
    }

    const newUser = new EmployeeModel({
      name,
      email,
      password: hashedPassword,
      status: true,
    });

    const result = await newUser.save();
    res
      .status(201)
      .send({ message: "User added successfully", id: result._id });
  } catch (error) {
    console.error("Error adding user:", error);
    res.status(500).send({ status: 0, message: "Internal server error" });
  }
});

Router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res
      .status(400)
      .send({ status: 0, message: "All fields are required." });
  }

  try {
    const user = await EmployeeModel.findOne({ email });
    if (!user) {
      return res
        .status(400)
        .send({ status: 0, message: "Email doesn't exist in DB." });
    }

    const isMatch = bcrypt.compareSync(password, user.password);
    if (!isMatch) {
      return res
        .status(400)
        .send({ status: 0, message: "Incorrect password." });
    }

    res.send({ status: 1, message: "Login successful.", userid: user._id });
  } catch (error) {
    console.error("Error logging in.", error);
    res.status(500).send({ status: 0, message: "Internal server error..." });
  }
});

Router.post("/changestatus", (req, res) => {
  res.send({ status: 1, message: "Status changed successfully" });
});

module.exports = Router;
