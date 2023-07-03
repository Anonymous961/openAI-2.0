const openai = require("../config/openaiConfig");

const generateMeta = async (req, res) => {
  const { title } = req.body;
  // console.log(req.body);
  // console.log(title);
  // res.status(200).json({ message: "helloo message received!" });
  try {
    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: `${title}` }],
    });

    res.status(200).json({ message: response.data.choices[0].message });
  } catch (err) {
    console.log(err);
    res.status(400).json({ error: err.message });
  }
};

const generateImage = async (req, res) => {
  const { prompt } = req.body;
  try {
    const response = await openai.createImage({
      prompt: prompt,
      n: 2,
      size: "1024x1024",
    });

    res.status(200).json({ url: response.data.data[0].url });
  } catch (err) {
    console.log(err);
    res.status(400).json({ error: err.message });
  }
};
module.exports = { generateMeta, generateImage };
