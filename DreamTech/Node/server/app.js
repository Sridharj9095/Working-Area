const express = require("express");
const app = express();
const hostname = "localhost";
const port = 8000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => {
  console.log("------Query------", req.query);
  res.send("Hello World!");
});

app.post("/adduser", (req, res) => {
  console.log("------Body------", req.body);
  const { name, email, password } = req.body;

  if (!name || name.length < 3) {
    return res
      .status(400)
      .send({ status: 0, message: "Name must be at least 3 characters." });
  }

  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!email || !emailPattern.test(email)) {
    return res
      .status(400)
      .send({ status: 0, message: "Invalid email format." });
  }

  const passwordPattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  if (!password || !passwordPattern.test(password)) {
    return res.status(400).send({
      status: 0,
      message: "Password must follow a strong pattern.",
    });
  }

  let newUser = {
    name,
    email,
    message: "User added successfully",
  };

  res.status(201).send(newUser);
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
