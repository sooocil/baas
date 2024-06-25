const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema({
  userID: { type: String, required: true }, // User ID (email)
  roomno: { type: String, required: true },
  bookingDate: { type: Date },
  startTime: { type: Number, required: true }, // In minutes past midnight
  endDate: { type: Date, required: true }, // Added endDate for completion
});

const Booking = mongoose.model("Booking", BookingSchema);
module.exports = Booking;
