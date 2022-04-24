const express = require("express");
const app = express();
const AWS = require("aws-sdk");
const dynamodb = require("./dynamodb");
const db = new dynamodb();

app.use(express.json())

app.get("/", async (req, res) => {
  const response = await db.get();
  return res.send(response);
});

app.post("/", async (req, res) => {
  const response = await db.set({ createdAt: new Date().toLocaleDateString(), ...req.body});
  return res.send(response);
});

const port = 3000;
app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
