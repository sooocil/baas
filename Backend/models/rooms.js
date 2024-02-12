const mongoose = require("mongoose");

const RoomsSchema = new mongoose.Schema(
  {
    roomno: {
      type: Number,
      required: true,
      unique: true,
      unavailableDates: { type: [Date] },
    },
    description: { type: String, required: false },
    roomtype: { type: String, required: true },
    capacity: { type: Number, required: true },
    acnonac: { type: String, required: true },
    rent: { type: Number, required: true },
    status: { type: String, required: true },
    image: {
      type: String,
      required: false,
      default: "https://www.thespruce.com/thmb/",
    },
  },
  { timestamps: true }
);

const Room = mongoose.model("rooms", RoomsSchema);

module.exports = Room;
