const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");
const app = express();
const port = 3000;
const squareRouter = require("./Routes/squareRouter");
const router = express.Router();
const bookingRouter = require("./Routes/bookingRouter");
const { auth } = require("express-openid-connect");

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: process.env.SECRET,
  baseURL: "http://localhost:3000",
  clientID: "hYNV7RKo6rLrpKgTT4Q8s5ZpeLABUDTp",
  issuerBaseURL: "https://dev-lcuzg18uwigbmr42.us.auth0.com",
};

const corsOptions = {
  origin: "http://localho.st:5173",
};

router.use("/square", squareRouter);
router.use("/booking", bookingRouter);
app.use(cors({ origin: "http://localhost:5173" }));

app.use(express.json());
app.use(auth(config));
app.use("/api/v1/", router);

app.listen(port, () => {
  console.log("Listening on port " + port);
});

const uri = process.env.URI;
mongoose
  .connect(uri)
  .then(console.log("DB has been connected"))
  .catch((Error) => console.log(Error));
