const mongoose = require("mongoose");

const HotelSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, required: false },
  rating: { type: Number, required: false, min: 0, max: 5 },
  city: { type: String, required: true },
  photo: { type: [String], required: false },
  rooms: { type: [String] },
  featured: { type: Boolean, default: false },
  location: { type: String, required: true },
  description: { type: String, required: false },
});

const Hotel = mongoose.model("hotel", HotelSchema);
module.exports = Hotel;
