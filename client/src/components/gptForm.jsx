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
    <div className="gpt mx-5">
      <h1 className="text-5xl font-bold my-10">Chatgpt</h1>
      <form onSubmit={handleClick} className=" flex flex-col ">
        <label>Ask anything</label>
        <input
          type="text"
          value={title}
          className="border-2 border-rose-500 rounded-md px-1 my-2 w-80"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          required
          placeholder="generate a email for friend"
        />
        <input
          type="submit"
          className="border-2 border-black rounded-lg w-80 bg-slate-500"
        />
      </form>
      <div className="content">{data}</div>
    </div>
  );
};

export default GptForm;
