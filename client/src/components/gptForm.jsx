import { useState } from "react";
import axios from "axios";

const GptForm = () => {
  const [title, setTitle] = useState("");
  const [data, setData] = useState("");
  const handleClick = async (e) => {
    e.preventDefault();
    const response = await axios.post(
      "http://localhost:4000/openai/meta",
      {
        title,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(response.data.message.content);
    setData(response.data.message.content);
    // const response = await axios.post("http://localhost:4000/openai/meta", {
    //   method: "POST",
    //   headers: { "Content-type": "application/json" },
    //   body: JSON.stringify({ title }),
    // });
    // const json = await response.json();
    // console.log(json.message.content);
    // setData(json.message.content);
  };

  return (
    <div className="gpt grid grid-cols-3 bg-cover px-5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 min-h-screen py-10">
      <div className="content bg-white col-span-2 rounded-md shadow-xl p-10 ">
        <p className="typing-animation">{data}</p>
      </div>
      <div className="mx-5">
        <h1 className="text-5xl font-bold text-indigo-600 my-10">Chatgpt</h1>
        <form onSubmit={handleClick} className=" flex flex-col ">
          <label className="text-xl text-white">Ask anything</label>
          <input
            type="text"
            value={title}
            className="border-1 border-rose-500 rounded-md px-2 my-2 w-80 h-10"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            required
            placeholder="generate a email for friend"
          />
          <input
            type="submit"
            className="shadow-2xl py-2 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 text-white  rounded-lg w-80 bg-sky-500"
          />
        </form>
      </div>
    </div>
  );
};

export default GptForm;
