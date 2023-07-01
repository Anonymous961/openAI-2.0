import axios from "axios";
import { useState } from "react";

const Dalle = () => {
  const [prompt, setPrompt] = useState("");
  const [url, setUrl] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(prompt);
    const response = await axios.post(
      "http://localhost:4000/openai/image",
      {
        prompt,
      },
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    console.log(response.data);
    setUrl(response.data.url);
  };
  return (
    <div className="dalle">
      <h1>Dall-e</h1>
      <form onSubmit={handleSubmit}>
        <label>Ask for anything</label>
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          required
          placeholder="a cute chick"
        />
        <input type="submit" />
      </form>
      {url && <img src={url} alt="" />}
    </div>
  );
};

export default Dalle;
