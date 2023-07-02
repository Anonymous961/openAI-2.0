require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const {
  generateMeta,
  generateImage,
} = require("./controller/openAIController");

const app = express();

app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.post("/openai/meta", generateMeta);
app.post("/openai/image", generateImage);
// console.log(process.env.OPENAI_API_KEY);

mongoose.connect(process.env.URI).then(() => {
  console.log("connected to DB");
  app.listen(4000, () => {
    console.log("server is running on port 4000");
  });
});
