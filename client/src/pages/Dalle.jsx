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
    <div className="dalle mx-5">
      <h1 className="text-5xl font-bold my-10">Dall-e</h1>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <label>Ask for anything</label>
        <input
          type="text"
          value={prompt}
          className="border-2 border-rose-500 rounded-md px-1 my-2 w-80"
          onChange={(e) => setPrompt(e.target.value)}
          required
          placeholder="a cute chick"
        />
        <input
          type="submit"
          className=" border-2 border-black rounded-lg w-80 bg-slate-500"
        />
      </form>
      {url && <img className="float-right" src={url} width="500px" alt="" />}
    </div>
  );
};

export default Dalle;
