const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const User = require("./user");

const app = express();
const hostname = "localhost";
const port = 8000;

app.use(cors());

const dbConnection = mongoose
  .connect("mongodb://0.0.0.0:27017/hrms")
  .then(() => console.log("Connected to database."))
  .catch((error) => {
    console.log("Error connecting to database.", error);
  });
console.log("---Database Connection---", dbConnection);

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/user", User);

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
