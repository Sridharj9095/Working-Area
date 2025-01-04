const mongoose = require("mongoose");
const EmployeeSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    password: String,
    status: Boolean,
  },
  { versionKey: false }
);
module.exports = mongoose.model("employees", EmployeeSchema);
