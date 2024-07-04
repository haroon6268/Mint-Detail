const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  deliveryDate: { type: String, required: true },
  package: { type: String, required: true },
  extras: { type: [String], required: false },
});

const Booking = mongoose.model("Booking", bookingSchema);

module.exports = Booking;
