require("dotenv").config();
const express = require("express");
const {
  generateMeta,
  generateImage,
} = require("./controller/openAIController");

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});
app.post("/openai/meta", generateMeta);
app.post("/openai/image", generateImage);
// console.log(process.env.OPENAI_API_KEY);
app.listen(4000, () => {
  console.log("server is running on port 4000");
});
