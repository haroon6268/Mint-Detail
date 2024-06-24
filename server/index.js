const express = require("express");
require("dotenv").config();
const app = express();
const port = 3000;
const router = require("./Routes/squareRouter");

console.log(process.env.PASSWORD);

app.use(express.json());
app.use("/api/v1/", router);

app.listen(port, () => {
  console.log("Listening on port " + port);
});
