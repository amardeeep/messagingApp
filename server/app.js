const express = require("express");
const dotenv = require("dotenv");
const queries = require("./models/queries");
dotenv.config();
const env = process.env;
const app = express();
app.get("/test", (req, res) => {
  res.json({
    message: "Server Is sending Hello !",
  });
});
app.get("/user/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  const user = await queries.getUser(id);
  res.json(user);
});
app.get("/user/:id/messages", async (req, res) => {
  const id = parseInt(req.params.id);
  const messages = await queries.getMessagesCreatedByUserWithUserId(id);
});
app.listen(env.PORT, () => {
  console.log(`Running On ${env.PORT}`);
});
