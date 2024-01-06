const mongoose = require("mongoose");

const UsersSchema = new mongoose.Schema(
  {
    username: String,
    password: String,
  },
  { timestamps: true }
);

const User = mongoose.model("users", UsersSchema);

module.exports = User;
