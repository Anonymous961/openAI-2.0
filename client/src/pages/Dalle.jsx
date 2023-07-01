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
    <div className="dalle grid grid-cols-3 bg-cover px-5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 min-h-screen py-10">
      <div>
        <h1 className="text-5xl font-bold text-pink-500 my-10">Dall-e</h1>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <label className="text-xl text-white">Ask for anything</label>
          <input
            type="text"
            value={prompt}
            className="rounded-md px-2 my-2 w-80 h-10"
            onChange={(e) => setPrompt(e.target.value)}
            required
            placeholder="a cute chick"
          />
          <input
            type="submit"
            className=" shadow-2xl py-2 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-green-500 duration-300 text-white  rounded-lg w-80 bg-sky-500"
          />
        </form>
      </div>
      <div className="bg-white col-span-2 p-10 rounded-md max-h-screen ">
        {url && (
          <img className="float-right max-h-full max-w-full" src={url} alt="" />
        )}
      </div>
    </div>
  );
};

export default Dalle;
