const mongoose = require("mongoose");

const UsersSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    spending: { type: Number, required: false, default: 0 },
    isAdmin: { type: Boolean, required: false, default: false },
    bookings: { type: Number, required: false, default: 0 },
  },
  { timestamps: true }
);

const User = mongoose.model("users", UsersSchema);

module.exports = User;
