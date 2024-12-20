const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const env = process.env;
const app = express();
app.get("/test", (req, res) => {
  res.json({
    message: "Server Is sending Hello !",
  });
});
app.listen(env.PORT, () => {
  console.log(`Running On ${env.PORT}`);
});
