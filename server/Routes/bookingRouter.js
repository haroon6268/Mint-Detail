const express = require("express");
const router = express.Router();
const Booking = require("../Models/booking");

router.get("/", async (req, res, next) => {
  if (req.query.date) {
    console.log(req.query.date);
    let query = await Booking.find({
      deliveryDate: { $regex: req.query.date },
    });
    console.log(query);
    return res.json({ success: true, booking: query });
  }
  let query = await Booking.find();
  return res.status(200).json({ success: true, booking: query });
});

router.post("/", async (req, res, next) => {});

module.exports = router;
