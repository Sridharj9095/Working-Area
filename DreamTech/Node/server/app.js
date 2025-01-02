const express = require("express");
const User = require("./user");
const app = express();
const hostname = "localhost";
const port = 8000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/user", User);

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
