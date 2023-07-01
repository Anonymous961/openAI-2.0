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
    <div className="gpt">
      <h1>Chatgpt</h1>
      <form onSubmit={handleClick}>
        <label>Ask anything</label>
        <input
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          required
          placeholder="generate a email for friend"
        />
        <input type="submit" />
      </form>
      <div className="content">{data}</div>
    </div>
  );
};

export default GptForm;
