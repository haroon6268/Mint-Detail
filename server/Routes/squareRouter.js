const express = require("express");
const router = express.Router();
const test = require("../Controllers/squareController");

router.post("/", (req, res, next) => {
  test.createOrder(req, res, next);
});

module.exports = router;
