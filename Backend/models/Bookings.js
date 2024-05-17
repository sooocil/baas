const mongoose = require("mongoose");

function generateRandomString(length) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

function generateGuestId() {
  return `guest-${generateRandomString(8)}`; // Generates a guest ID with 8 random characters
}

const guestId = generateGuestId();

const BookingSchema = new mongoose.Schema({
  userID: { type: String, required: true, default: guestId }, // User ID from Auth0
  roomno: { type: String, required: false },
  bookingDate: { type: Date, default: Date.now() },
  startTime: { type: Number, required: false }, // In minutes past midnight
});

const Booking = mongoose.model("addbooking", BookingSchema);
module.exports = Booking;
