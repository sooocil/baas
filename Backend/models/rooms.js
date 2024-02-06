const mongoose = require("mongoose");

const RoomsSchema = new mongoose.Schema(
  {
    roomno: { type: Number, required: true, unique: true },
    roomtype: { type: String, required: true },
    capacity: { type: Number, required: true },
    acnonac: { type: String, required: true },
    rent: { type: Number, required: true },
    status: { type: String, required: true },
  },
  { timestamps: true }
);

const Room = mongoose.model("rooms", RoomsSchema);

module.exports = Room;
