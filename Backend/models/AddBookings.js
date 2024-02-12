const mongoose = require("mongoose");

const AddBookingsSchema = new mongoose.Schema({
  userID: { type: String, required: true }, // User ID from Auth0
  bookingDate: { type: Date, default: Date.now() },
  startTime: { type: Number, required: true }, // In minutes past midnight
});

const AddBooking = mongoose.model("addbooking", AddBookingsSchema);
module.exports = AddBooking;
